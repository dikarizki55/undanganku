import Image from "next/image";

const Frame7 = () => {
  return (
    <div className="w-full h-[1730px] px-7 bg-stone-100 inline-flex justify-center items-center gap-2.5 overflow-hidden">
      <div className="w-96 inline-flex flex-col justify-start items-center gap-5">
        <div className="self-stretch px-4 inline-flex justify-center items-center gap-2.5">
          <div className="flex-1 justify-start text-stone-700 text-6xl font-normal font-['Aroma_Beauty'] leading-[51.52px] tracking-[5.21px]">
            OUR
            <br />
            GALLERY
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-center flex-wrap content-center">
          <div className="text-center justify-start text-stone-700 text-base font-normal font-['Spectral'] leading-none">
            DISKA
          </div>
          <div className="w-52 h-0 outline-1 outline-offset-[-0.50px] outline-stone-700"></div>
          <div className="text-center justify-start text-stone-700 text-base font-normal font-['Spectral'] leading-none">
            DIKA
          </div>
        </div>
        <Image
          className="self-stretch h-52 relative object-cover"
          src="/images/page7/p1.jpg"
          alt="img"
        />
        <div className="inline-flex justify-start items-start gap-2.5">
          <div className="w-44 inline-flex flex-col justify-start items-start gap-2.5">
            <Image
              className="self-stretch h-28 relative object-cover"
              src="/images/page7/p2.jpg"
              alt="img"
            />
            <Image
              className="self-stretch h-28 object-cover"
              src="/images/page7/p3.jpg"
              alt="img"
            />
            <Image
              className="self-stretch h-28 object-cover"
              src="/images/page7/p4.jpg"
              alt="img"
            />
            <Image
              className="self-stretch h-60 object-cover"
              src="/images/page7/p5.jpg"
              alt="img"
            />
            <Image
              className="self-stretch h-64 object-cover"
              src="/images/page7/p6.jpg"
              alt="img"
            />
            <Image
              className="self-stretch h-64 object-cover"
              src="/images/page7/p7.jpg"
              alt="img"
            />
          </div>
          <div className="w-44 inline-flex flex-col justify-start items-start gap-2.5">
            <Image
              className="self-stretch h-28 object-cover"
              src="/images/page7/p8.jpg"
              alt="img"
            />
            <Image
              className="self-stretch h-64 object-cover"
              src="/images/page7/p9.jpg"
              alt="img"
            />
            <Image
              className="self-stretch h-60 object-cover"
              src="/images/page7/p10.jpg"
              alt="img"
            />
            <Image
              className="self-stretch h-64 object-cover"
              src="/images/page7/p11.jpg"
              alt="img"
            />
            <Image
              className="self-stretch h-64 object-cover"
              src="/images/page7/p12.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame7;
