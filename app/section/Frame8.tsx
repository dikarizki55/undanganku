import { useState } from "react";

const Frame8 = () => {
  const [ucapan, setUcapan] = useState("");

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     console.log("Submitted:", { ucapan });
  //     // Tambahkan logic submit ke backend/API di sini
  //   };

  return (
    <div className="bg-[url('/images/page8/bg1.png')] bg-cover bg-center w-full h-[988px] px-7 bg-white/60 inline-flex justify-center items-center gap-2.5 overflow-hidden relative">
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="w-80 h-[830.49px] inline-flex flex-col justify-start items-center gap-4 z-10">
        <div className="w-52 flex-1 px-2.5 inline-flex justify-center items-center gap-1.5">
          <div className="text-center justify-start text-stone-700 text-3xl font-normal font-aroma leading-[90%] tracking-[9%]">
            PRAYERS
            <br />
            &WISHES
          </div>
        </div>
        <div className="self-stretch flex-1 text-center justify-start text-stone-700 text-sm font-normal font-spectral leading-none">
          Kepada Bapak/Ibu/Saudara/I yang ingin memberikan ucapan kepada kami
          dapat dituliskan di bawah ini:
        </div>
        <div className="self-stretch px-4 py-3.5 bg-white/20 rounded-3xl backdrop-blur-2xl flex flex-col justify-start items-start gap-4">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-stone-700 text-sm font-normal font-spectral leading-none">
              Nama Tamu:
            </div>
            <div className="self-stretch h-9 relative rounded-lg border border-stone-700" />
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
                value={ucapan}
                onChange={(e) => setUcapan(e.target.value)}
                className="w-full h-full p-2 text-base font-spectral text-stone-700"
              />
            </div>
          </div>
          <div className="px-2.5 py-2 bg-stone-700 rounded inline-flex justify-center items-center gap-1.5">
            <div className="w-3 h-2.5 bg-[url('/images/page8/message.svg')] bg-contain bg-no-repeat" />
            <div className="justify-start text-stone-100 text-xs font-normal font-spectral">
              Beri Ucapan
            </div>
          </div>
        </div>
        <div className="w-full h-96 px-4 py-3.5 bg-white/20 rounded-3xl backdrop-blur-2xl overflow-y-auto space-y-4">
          <div className="w-full h-24 rounded-lg border border-stone-700 shrink-0" />
          <div className="w-full h-24 rounded-lg border border-stone-700 shrink-0" />
          <div className="w-full h-24 rounded-lg border border-stone-700 shrink-0" />
          <div className="w-full h-24 rounded-lg border border-stone-700 shrink-0" />
          <div className="w-full h-24 rounded-lg border border-stone-700 shrink-0" />
          <div className="w-full h-24 rounded-lg border border-stone-700 shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default Frame8;
