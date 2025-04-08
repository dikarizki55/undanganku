"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// "2025-06-22T07:00:00"

function Frame6({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    const timeLeft: TimeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div className="bg-[url('/images/page6/bg1.png')] bg-cover bg-center w-full h-72 px-7 inline-flex justify-center items-center gap-2.5 overflow-hidden relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="w-60 inline-flex flex-col justify-start items-center gap-9 z-10">
        <div className="self-stretch text-center justify-start text-white text-6xl font-normal font-['Gustatory_Delight'] leading-[55.07px]">
          Counting Days
        </div>
        <div className="w-56 flex flex-col justify-start items-center gap-6">
          <div className="self-stretch inline-flex justify-start items-center gap-6">
            <div className="w-10 inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch text-center justify-start text-white text-base font-normal font-['Spectral'] leading-none">
                {timeLeft.days}
              </div>
              <div className="self-stretch text-center justify-start text-white text-xs font-normal font-['Spectral'] leading-3">
                Hari
              </div>
            </div>
            <div className="w-10 inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch text-center justify-start text-white text-base font-normal font-['Spectral'] leading-none">
                {timeLeft.hours}
              </div>
              <div className="self-stretch text-center justify-start text-white text-xs font-normal font-['Spectral'] leading-3">
                Jam
              </div>
            </div>
            <div className="w-10 inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch text-center justify-start text-white text-base font-normal font-['Spectral'] leading-none">
                {timeLeft.minutes}
              </div>
              <div className="self-stretch text-center justify-start text-white text-xs font-normal font-['Spectral'] leading-3">
                Menit
              </div>
            </div>
            <div className="w-10 inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch text-center justify-start text-white text-base font-normal font-['Spectral'] leading-none">
                <span>{timeLeft.seconds}</span>
              </div>
              <div className="self-stretch text-center justify-start text-white text-xs font-normal font-['Spectral'] leading-3">
                Detik
              </div>
            </div>
          </div>
          <div className="px-2.5 py-2 bg-stone-700 rounded inline-flex justify-center items-center gap-1.5">
            <div className="w-2.5 h-3.5">
              <img
                src="/images/page6/notes.svg"
                alt="icon"
                className="w-2.5 h-3.5"
              />
            </div>
            <div className="justify-start text-stone-100 text-xs font-normal font-['Spectral']">
              Ingatkan Acara
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame6;
