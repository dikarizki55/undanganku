const Frame7 = () => {
  return (
    <div className="w-full h-[1730px] px-7 bg-stone-100 inline-flex justify-center items-center gap-2.5 overflow-hidden">
      <div className="w-96 inline-flex flex-col justify-start items-center gap-5">
        <div className="self-stretch px-4 inline-flex justify-center items-center gap-2.5">
          <div className="flex-1 justify-start text-stone-700 text-6xl font-normal font-aroma leading-[51.52px] tracking-[5.21px]">
            OUR
            <br />
            GALLERY
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-center flex-wrap content-center">
          <div className="text-center justify-start text-stone-700 text-base font-normal font-spectral leading-none">
            DISKA
          </div>
          <div className="w-52 h-0 outline-1 outline-offset-[-0.50px] outline-stone-700"></div>
          <div className="text-center justify-start text-stone-700 text-base font-normal font-spectral leading-none">
            DIKA
          </div>
        </div>
        <div className="bg-[url('/images/page7/p1.jpg')] bg-cover bg-center self-stretch h-52 relative object-cover" />
        <div className="inline-flex justify-start items-start gap-2.5">
          <div className="w-44 inline-flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch h-28 relative bg-[url('/images/page7/p2.jpg')] bg-cover bg-center" />
            <div className="self-stretch h-28 bg-[url('/images/page7/p3.jpg')] bg-cover bg-center" />
            <div className="self-stretch h-28 bg-[url('/images/page7/p4.jpg')] bg-cover bg-center" />
            <div className="self-stretch h-60 bg-[url('/images/page7/p5.jpg')] bg-cover bg-center" />
            <div className="self-stretch h-64 bg-[url('/images/page7/p6.jpg')] bg-cover bg-center" />
            <div className="self-stretch h-64 bg-[url('/images/page7/p7.jpg')] bg-cover bg-center" />
          </div>
          <div className="w-44 inline-flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch h-28 bg-[url('/images/page7/p8.jpg')] bg-cover bg-center" />
            <div className="self-stretch h-64 bg-[url('/images/page7/p9.jpg')] bg-cover bg-center" />
            <div className="self-stretch h-60 bg-[url('/images/page7/p10.jpg')] bg-cover bg-center" />
            <div className="self-stretch h-64 bg-[url('/images/page7/p11.jpg')] bg-cover bg-center" />
            <div className="self-stretch h-64 bg-[url('/images/page7/p12.jpg')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame7;
