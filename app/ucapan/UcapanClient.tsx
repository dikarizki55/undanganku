"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

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

export default function UcapanPage() {
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
  }, []);

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

      alert("Ucapan berhasil diupdate.");
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

      //   alert("Ucapan berhasil dikirim.");
    }

    // Reset
    setMessage("");
    setEditingWishId(null);
    window.location.reload();
  };

  const handleDelete = async (id: string, is_locked: boolean) => {
    if (is_locked && !isAdmin) {
      return alert("Ucapan terkunci.");
    }

    await supabase.from("wishes").delete().eq("id", id);
    window.location.reload();
  };

  const toggleLock = async (id: string, current: boolean) => {
    if (!isAdmin) return;

    await supabase.from("wishes").update({ is_locked: !current }).eq("id", id);
    window.location.reload();
  };

  const startEdit = (wish: Wish) => {
    setEditingWishId(wish.id);
    setMessage(wish.message);
  };

  const cancelEdit = () => {
    setEditingWishId(null);
    setMessage("");
  };

  const isOwnWish = (wish: Wish) => wish.user_id === userId;

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Kirim Ucapan</h1>

      {/* Form input hanya untuk user yang belum kirim atau sedang edit */}
      {(!allWishes.find((w) => w.user_id === userId) || editingWishId) && (
        <div className="space-y-2">
          <p className="font-medium">
            Dari: <span className="text-blue-700">{userId}</span>
          </p>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            placeholder="Tulis ucapan di sini..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              {editingWishId ? "Update" : "Kirim"}
            </button>
            {editingWishId && (
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={cancelEdit}
              >
                Batal
              </button>
            )}
          </div>
        </div>
      )}

      <hr />

      <h2 className="text-xl font-semibold">Ucapan yang masuk</h2>
      <div className="space-y-4">
        {allWishes.map((wish) => (
          <div key={wish.id} className="border p-3 rounded bg-white shadow">
            <p className="text-sm text-gray-600 mb-1">
              Dari: <span className="font-semibold">{wish.user_id}</span>
            </p>
            <p className="whitespace-pre-line">{wish.message}</p>
            <div className="mt-2 flex gap-3 text-sm text-gray-600">
              {(isOwnWish(wish) || isAdmin) && (
                <>
                  <button
                    onClick={() => startEdit(wish)}
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
  );
}
