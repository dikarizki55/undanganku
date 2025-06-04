import React from "react";
import CopyButton from "./libaa/CopyButton";

const Frame10rekening = () => {
  return (
    <div className="w-full h-[400px] px-7 bg-stone-200 inline-flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="w-80 justify-start text-stone-700 text-base font-normal font-['Spectral']">
        Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda
        kasih untuk kami, dapat melalui:
      </div>
      <div className="w-80 inline-flex justify-between items-center">
        <div className="w-24 h-20 relative bg-white rounded-[19px] overflow-hidden">
          <div className="bg-[url('/images/page10rekening/bcalogo.png')] bg-contain bg-center bg-no-repeat w-full h-full"></div>
        </div>
        <div className="w-48 inline-flex flex-col justify-start items-start gap-[3px]">
          <CopyButton text="7690304729" />
          <div className="self-stretch justify-start text-stone-700 text-base font-normal font-['Spectral']">
            Dika Rizki Arlian Putra
          </div>
        </div>
      </div>
      <div className="w-80 inline-flex justify-between items-center">
        <div className="w-24 h-20 relative bg-white rounded-[19px] overflow-hidden">
          <div className="bg-[url('/images/page10rekening/bcalogo.png')] bg-contain bg-center bg-no-repeat w-full h-full"></div>
        </div>
        <div className="w-48 inline-flex flex-col justify-start items-start gap-[3px]">
          <CopyButton text="7690304729" />
          <div className="self-stretch justify-start text-stone-700 text-base font-normal font-['Spectral']">
            Diska Ayu Zunaida
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame10rekening;
