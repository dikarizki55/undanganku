import Image from "next/image";

import React from "react";

function Frame5() {
  return (
    <div className="w-full py-20 px-7 bg-stone-100 inline-flex justify-center items-center gap-2.5 overflow-hidden">
      <div className="flex-1 inline-flex flex-col justify-start items-center gap-14">
        <div className="self-stretch inline-flex justify-between items-center flex-wrap content-center">
          <div className="text-center justify-start text-stone-700 text-xl font-normal font-spectral leading-tight">
            Wedding
          </div>
          <div className="w-36 h-0 outline-1 outline-offset-[-0.50px] outline-stone-700"></div>
          <div className="text-center justify-start text-stone-700 text-xl font-normal font-spectral leading-tight">
            Event
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-7">
          <div className="self-stretch text-center justify-start text-stone-700 text-5xl font-normal font-gustato leading-10">
            Akad Nikah
          </div>
          <div className="self-stretch text-center justify-start text-stone-700 text-xs font-normal font-spectral leading-none">
            AKAD NIKAH AKAN DILAKSANAKAN PADA:
          </div>
          <div className="text-center justify-start text-stone-700 text-xl font-normal font-spectral leading-normal">
            MINGGU, 22 JUNI 2025
          </div>
          <div className="w-80 h-10 flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch flex-1 text-center justify-start text-stone-700 text-base font-normal font-spectral leading-none">
              07.00 WIB - Selesai
            </div>
            <div className="self-stretch flex-1 text-center justify-start text-stone-700 text-base font-normal font-spectral leading-none">
              Kediaman mempelai Wanita
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-7">
          <div className="self-stretch text-center justify-start text-stone-700 text-5xl font-normal font-gustato leading-10">
            Wedding Reception
          </div>
          <div className="self-stretch text-center justify-start text-stone-700 text-xs font-normal font-spectral leading-tight">
            KAMI MOHON KEHADIRAN BAPAK/IBU/SAUDARA/I PADA
            <br />
            ACARA RESEPSI PERNIKAHAN YANG AKAN
            <br />
            DISELENGGARAKAN PADA:
          </div>
          <div className="text-center justify-start text-stone-700 text-xl font-normal font-spectral leading-normal">
            MINGGU, 22 JUNI 2025
          </div>
          <div className="w-80 h-10 flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch flex-1 text-center justify-start text-stone-700 text-base font-normal font-spectral leading-none">
              13.00 WIB - Selesai
            </div>
            <div className="self-stretch flex-1 text-center justify-start text-stone-700 text-base font-normal font-spectral leading-none">
              Kediaman mempelai Wanita
            </div>
          </div>
          <a href="https://maps.app.goo.gl/NH8K34WKcpNU8QDm6">
            <div className="px-2.5 py-2 bg-stone-700 rounded inline-flex justify-center items-center gap-1.5">
              <div className="w-3.5 h-3.5">
                <Image
                  src="/images/page5/maps.svg"
                  alt="icon"
                  className="w-3.5 h-3.5"
                  width={14}
                  height={14}
                />
              </div>
              <div className="justify-start text-stone-100 text-xs font-normal font-spectral">
                Lihat Peta
              </div>
            </div>
          </a>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-7">
          <div className="self-stretch text-center justify-start text-stone-700 text-5xl font-normal font-gustato leading-10">
            Unduh Mantu
          </div>
          <div className="self-stretch text-center justify-start text-stone-700 text-xs font-normal font-spectral leading-tight">
            KAMI MOHON KEHADIRAN BAPAK/IBU/SAUDARA/I PADA
            <br />
            ACARA RESEPSI PERNIKAHAN YANG AKAN
            <br />
            DISELENGGARAKAN PADA:
          </div>
          <div className="text-center justify-start text-stone-700 text-xl font-normal font-spectral leading-normal">
            SENIN, 23 JUNI2025
          </div>
          <div className="w-80 h-10 flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch flex-1 text-center justify-start text-stone-700 text-base font-normal font-spectral leading-none">
              Jam Bebas
            </div>
            <div className="self-stretch flex-1 text-center justify-start text-stone-700 text-base font-normal font-spectral leading-none">
              Kediaman mempelai Pria
            </div>
          </div>
          <a href="https://maps.app.goo.gl/LcULenGVcZugAWRA9">
            <div className="px-2.5 py-2 bg-stone-700 rounded inline-flex justify-center items-center gap-1.5">
              <div className="w-3.5 h-3.5">
                <Image
                  src="/images/page5/maps.svg"
                  alt="icon"
                  className="w-3.5 h-3.5"
                  width={14}
                  height={14}
                />
              </div>
              <div className="justify-start text-stone-100 text-xs font-normal font-spectral">
                Lihat Peta
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Frame5;
