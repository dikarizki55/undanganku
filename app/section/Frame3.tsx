import Image from "next/image";

import React from "react";

function Frame3() {
  return (
    <div className="w-full h-[1600px] px-7 bg-stone-100 inline-flex justify-center items-center gap-2.5 overflow-hidden">
      <div className="w-96 inline-flex flex-col justify-start items-center gap-20">
        <div className="self-stretch flex flex-col justify-start items-center gap-12">
          <div className="self-stretch text-center justify-start text-stone-700 text-xs font-normal font-spectral leading-none">
            KAMI MEMOHON KEHADIRAN BAPAK/IBU/SAUDARA/I PADA ACARA PERNIKAHAN
            KAMI:
          </div>
          <div className="w-72 flex flex-col justify-start items-center gap-3.5">
            <div className="self-stretch text-center justify-start text-stone-700 text-2xl font-normal font-aroma leading-loose">
              DISKA AYU ZUNAIDA
            </div>
            <div className="self-stretch text-center justify-start text-stone-700 text-3xl font-normal font-gustato">
              dengan
            </div>
            <div className="self-stretch text-center justify-start text-stone-700 text-2xl font-normal font-aroma leading-loose">
              DIKA RIZKI ARLIAN PUTRA
            </div>
            <div className="self-stretch text-center justify-start text-stone-700 text-sm font-bold font-spectral leading-none">
              22.06.2025
            </div>
          </div>
        </div>
        <div className="w-56 flex flex-col justify-start items-center gap-4">
          <div className="self-stretch inline-flex justify-between items-center flex-wrap content-center">
            <div className="text-center justify-start text-stone-700 text-xl font-normal font-spectral leading-tight">
              The
            </div>
            <div className="w-24 h-0 outline-1 outline-offset-[-0.50px] outline-stone-700"></div>
            <div className="text-center justify-start text-stone-700 text-xl font-normal font-spectral leading-tight">
              Bride
            </div>
          </div>
          <div className="px-2.5 pt-2.5 pb-14 bg-stone-700 inline-flex justify-start items-center">
            <Image
              className="w-44 h-60 relative object-cover"
              width={176}
              height={240}
              src="/images/page3/cewe.jpg"
              alt="cewe"
            />
          </div>
          <div className="w-44 flex flex-col justify-start items-center gap-3">
            <div className="self-stretch flex flex-col justify-start items-center gap-2">
              <div className="self-stretch text-center justify-start text-stone-700 text-7xl font-normal font-gustato leading-[61.68px]">
                Diska
              </div>
              <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-stone-700"></div>
              <div className="self-stretch text-center justify-start text-stone-700 text-xl font-normal font-aroma leading-normal">
                DISKA AYU ZUNAIDA
              </div>
            </div>
            <div className="self-stretch text-center justify-start text-stone-700 text-xs font-normal font-spectral leading-none"></div>
          </div>
        </div>
        <div className="w-56 flex flex-col justify-start items-center gap-4">
          <div className="self-stretch inline-flex justify-between items-center flex-wrap content-center">
            <div className="text-center justify-start text-stone-700 text-xl font-normal font-spectral leading-tight">
              The
            </div>
            <div className="w-24 h-0 outline-1 outline-offset-[-0.50px] outline-stone-700"></div>
            <div className="text-center justify-start text-stone-700 text-xl font-normal font-spectral leading-tight">
              Groom
            </div>
          </div>
          <div className="px-2.5 pt-2.5 pb-14 bg-stone-700 inline-flex justify-start items-center">
            <Image
              className="w-44 h-60 relative object-cover"
              src="/images/page3/cowo.jpg"
              alt="cowo"
              width={176}
              height={240}
            />
          </div>
          <div className="w-44 flex flex-col justify-start items-center gap-3">
            <div className="self-stretch flex flex-col justify-start items-center gap-2">
              <div className="self-stretch text-center justify-start text-stone-700 text-7xl font-normal font-gustato leading-[61.68px]">
                Dika
              </div>
              <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-stone-700"></div>
              <div className="text-center justify-start text-stone-700 text-xl font-normal font-aroma leading-normal">
                DIKA RIZKI ARLIAN PUTRA
              </div>
            </div>
            <div className="self-stretch text-center justify-start text-stone-700 text-xs font-normal font-spectral leading-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame3;
