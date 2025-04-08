import React from "react";

function Frame4() {
  return (
    <div className=" w-full h-screen px-7 py-10 bg-stone-700 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
      <div className="w-100 flex flex-col justify-start items-center gap-11">
        <div className="self-stretch px-5 inline-flex justify-start items-center">
          <div className="justify-start text-stone-100 text-4xl font-normal font-['Gustatory_Delight'] leading-8">
            I will marry
            <br />
            with the love of my life
          </div>
        </div>
        <div className="w-72 flex flex-col justify-start items-center gap-6">
          <img
            className="w-72 h-72 relative object-cover"
            src="/images/page4/berdua.jpg"
          />
          <div className="self-stretch justify-start text-stone-100 text-xs font-normal font-['Spectral'] leading-tight">
            2024 Kami bertemu ketika bermain bersama. Meski singkat, tetapi kami
            merasa saling tertarik satu sama lain dan saling ingin mengenal
            lebih lanjut. Sejak itu, kami mulai semakin dekat.
            <br />
            <br />
            2025 Kami memutuskan untuk mengikat janji suci dalam pernikahan.
            Dalam momen yang penuh cinta dan haru ini, kami melangkah ke jenjang
            hidup baru, siap untuk menghadapi masa depan bersama dengan saling
            cinta dan dukungan satu sama lain
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame4;
