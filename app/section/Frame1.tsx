import { useEffect, useState } from "react";

type Frame1Props = {
  id: string;
};

export default function Frame1({ id }: Frame1Props) {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    // Hilangkan #hash di awal load
    if (window.location.hash) {
      // Hapus hash dari URL
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );

      // Scroll ke atas (frame awal)
      window.scrollTo(0, 0);
    }

    if (scrollEnabled) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [scrollEnabled]);

  const handleClick = () => {
    setScrollEnabled(true);

    // Delay sedikit sebelum redirect ke #frame2
    setTimeout(() => {
      window.location.hash = "frame2";
    }, 100);
  };

  return (
    <div className="bg-[url('/images/page1/bg1.jpg')] bg-cover bg-center w-full h-screen inline-flex justify-center items-center gap-2.5 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 w-full h-screen"></div>
      <div className="flex-1 self-stretch pt-14 pb-44 inline-flex flex-col justify-between items-center z-10">
        <div className="w-64 flex flex-col justify-start items-center gap-3">
          <div className="self-stretch text-center justify-start text-white text-xs font-normal font-aroma tracking-wide">
            WEDDING INVITATION
          </div>
          <div className="self-stretch text-center justify-start text-white text-4xl font-normal font-aroma">
            DIKA & DISKA
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-3.5">
          <div className="self-stretch flex flex-col justify-start items-center gap-3">
            <div className="self-stretch text-center justify-start text-white text-xs font-normal font-['Plus_Jakarta_Sans']">
              Kepada Yth.Bapak/Ibu/Saudara/i:
            </div>
            <div className="text-center justify-start text-white text-2xl font-normal font-['Aleo']">
              {!id ? "Tamu Undangan" : id}
            </div>
            <div className="self-stretch text-center justify-start text-white text-xs font-normal font-['NanumGothic']">
              Mohon maaf jika ada kesalahan penulisan nama dan gelar
            </div>
          </div>
          {/* <a href="#frame2"> */}
          <button onClick={handleClick}>
            <div className="px-2.5 py-2 bg-stone-700 rounded inline-flex justify-center items-center gap-2.5">
              <div className="justify-start text-white text-xs font-normal font-aroma tracking-wider">
                OPEN INVITATION
              </div>
            </div>
          </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}
