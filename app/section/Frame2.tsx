function Frame2() {
  return (
    <div
      className="bg-[url('/images/page2/bg2.jpg')] bg-cover bg-center w-full h-screen px-7 py-8 inline-flex justify-center items-center gap-2.5 overflow-hidden relative"
      id="frame2"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="flex-1 self-stretch inline-flex flex-col justify-end items-center gap-2.5 z-10">
        <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
          <div className="self-stretch text-center justify-start text-white text-3xl font-normal font-['Gustatory_Delight']">
            the wedding of
          </div>
          <div className="self-stretch h-11 inline-flex justify-between items-center">
            <div className="flex-1 self-stretch pt-2 flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-white text-3xl font-normal font-['Aroma_Beauty']">
                DISKA
              </div>
            </div>
            <div className="flex-1 self-stretch flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-white text-sm font-normal font-['Plus_Jakarta_Sans']">
                Save The Date{" "}
              </div>
            </div>
            <div className="flex-1 self-stretch pt-2 flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-white text-3xl font-normal font-['Aroma_Beauty']">
                DIKA
              </div>
            </div>
          </div>
          <div className="self-stretch h-0 outline outline-2 outline-offset-[-1px] outline-white"></div>
          <div className="self-stretch text-center justify-start text-white text-xs font-normal font-['Spectral'] leading-none">
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berpikir.”  (QS. Ar-Rum: 21)
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame2;
