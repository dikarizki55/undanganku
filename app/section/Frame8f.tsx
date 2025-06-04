"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { timeAgo } from "./libaa/timeAgo";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ADMIN_ID = process.env.NEXT_PUBLIC_ADMIN_ID;

type Wish = {
  id: string;
  user_id: string;
  message: string;
  is_locked: boolean;
  created_at: string;
};

export default function Frame8f() {
  const router = useRouter();
  const [refreshToken, setRefreshToken] = useState(0);

  //   const handleRefresh = () => {
  //     router.refresh();
  //     setRefreshToken((prev) => prev + 1); // Trigger useEffect
  //   };

  const handleRefresh = useCallback(() => {
    router.refresh();
    setRefreshToken((prev) => prev + 1);
  }, [router]);

  const searchParams = useSearchParams();
  const userId = searchParams.get("id") || "";
  const isAdmin = userId === ADMIN_ID;

  const [message, setMessage] = useState("");
  const [allWishes, setAllWishes] = useState<Wish[]>([]);
  const [editingWishId, setEditingWishId] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setAllWishes(data);
      });
  }, [refreshToken]);

  const handleSubmit = async () => {
    if (!message) return;

    if (editingWishId) {
      // Mode edit ucapan (admin atau user)
      const { error } = await supabase
        .from("wishes")
        .update({ message })
        .eq("id", editingWishId);

      if (error) {
        console.error("Update gagal:", error);
        return alert("Gagal update ucapan.");
      }

      //   alert("Ucapan berhasil diupdate.");
      //   handleRefresh();
    } else {
      // Mode kirim ucapan baru
      const existingWish = allWishes.find((w) => w.user_id === userId);
      if (existingWish) {
        return alert("Ucapan sudah ada.");
      }

      const { error } = await supabase.from("wishes").insert({
        user_id: userId,
        message,
        is_locked: false,
      });

      if (error) {
        console.error("Insert gagal:", error);
        return alert("Gagal kirim ucapan.");
      }

      //   handleRefresh();
      //   alert("Ucapan berhasil dikirim.");
    }

    // Reset
    setMessage("");
    setEditingWishId(null);
    // window.location.reload();
    handleRefresh();
  };

  const handleDelete = async (id: string, is_locked: boolean) => {
    if (is_locked && !isAdmin) {
      return alert("Ucapan terkunci.");
    }

    await supabase.from("wishes").delete().eq("id", id);
    // window.location.reload();
    handleRefresh();
  };

  const toggleLock = async (id: string, current: boolean) => {
    if (!isAdmin) return;

    await supabase.from("wishes").update({ is_locked: !current }).eq("id", id);
    // window.location.reload();
    handleRefresh();
  };

  const startEdit = (wish: Wish, is_locked: boolean) => {
    if (is_locked && !isAdmin) {
      return alert("Ucapan terkunci.");
    }
    setEditingWishId(wish.id);
    setMessage(wish.message);
  };

  const cancelEdit = () => {
    setEditingWishId(null);
    setMessage("");
  };

  const isOwnWish = (wish: Wish) => wish.user_id === userId;

  return (
    <div>
      <div className="bg-[url('/images/page8/bg1.jpg')] bg-cover bg-center w-full h-[988px] px-7 bg-white/60 inline-flex justify-center items-center gap-2.5 overflow-hidden relative">
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="w-80 h-[830.49px] inline-flex flex-col justify-start items-center gap-4 z-10">
          <div className="w-52 flex-1 px-2.5 inline-flex justify-center items-center gap-1.5">
            <div className="text-center justify-start text-stone-700 text-3xl font-normal font-aroma leading-[90%] tracking-[9%]">
              PRAYERS
              <br />
              &WISHES
            </div>
          </div>

          {/* Form input hanya untuk user yang belum kirim atau sedang edit */}
          {(!allWishes.find((w) => w.user_id === userId) || editingWishId) && (
            <div className="inline-flex flex-col justify-start items-center gap-4">
              <div className="self-stretch flex-1 text-center justify-start text-stone-700 text-sm font-normal font-spectral leading-none">
                Kepada Bapak/Ibu/Saudara/I yang ingin memberikan ucapan kepada
                kami dapat dituliskan di bawah ini:
              </div>
              <div className="self-stretch px-4 py-3.5 bg-white/20 rounded-3xl backdrop-blur-2xl flex flex-col justify-start items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-stone-700 text-sm font-normal font-spectral leading-none">
                    Nama Tamu:
                  </div>
                  <div className="self-stretch h-9 relative rounded-lg border border-stone-700 text-stone-700 p-1 ps-2">
                    {userId}
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-stone-700 text-sm font-normal font-spectral leading-none">
                    Ucapan & Doa:
                  </div>
                  <div className="self-stretch h-24 relative rounded-lg border border-stone-700">
                    <textarea
                      id="ucapan"
                      name="ucapan"
                      rows={6}
                      placeholder="Tulis ucapan di sini..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full h-full p-2 text-base font-spectral text-stone-700"
                    />
                  </div>
                </div>
                <div className=" inline-flex gap-2">
                  <button onClick={handleSubmit}>
                    <div className="px-2.5 py-2 bg-stone-700 rounded inline-flex justify-center items-center gap-1.5">
                      <div className="w-3 h-2.5 bg-[url('/images/page8/message.svg')] bg-contain bg-no-repeat" />
                      <div className="justify-start text-stone-100 text-xs font-normal font-spectral">
                        {editingWishId ? "Update" : "Beri Ucapan"}
                      </div>
                    </div>
                  </button>
                  {editingWishId && (
                    <button onClick={cancelEdit}>
                      <div className="px-2.5 py-2 bg-red-800 rounded inline-flex justify-center items-center gap-1.5">
                        <div className="justify-start text-stone-100 text-xs font-normal font-spectral">
                          Cancel
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* end dari form */}
          <div className="w-full h-min-96 h-[700px] px-4 py-3.5 bg-white/20 rounded-3xl backdrop-blur-2xl overflow-y-auto space-y-4">
            {allWishes.map((wish) => (
              <div
                key={wish.id}
                className="w-full h-24 rounded-lg border border-stone-700 shrink-0 p-2 text-stone-700 overflow-y-auto"
              >
                <div className=" w-full flex justify-between items-center">
                  <span className="font-spectral-bold text-lg">
                    {wish.user_id}
                  </span>
                  <span className="font-spectral text-sm">
                    {timeAgo(wish.created_at)}
                  </span>
                </div>
                {/* <p className="text-sm">
                  <span className="font-spectral-bold text-lg">
                    {wish.user_id}
                    {wish.created_at}
                  </span>
                </p> */}
                <p className="font-spectral text-base leading-5">
                  {wish.message}
                </p>
                <div className="mt-2 flex gap-3 text-sm text-gray-600">
                  {(isOwnWish(wish) || isAdmin) && (
                    <>
                      <button
                        onClick={() => startEdit(wish, wish.is_locked)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(wish.id, wish.is_locked)}
                        className="text-red-500 hover:underline"
                      >
                        Hapus
                      </button>
                    </>
                  )}

                  {isAdmin && (
                    <button
                      onClick={() => toggleLock(wish.id, wish.is_locked)}
                      className="text-gray-800 hover:underline"
                    >
                      {wish.is_locked ? "Buka Kunci" : "Kunci"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
