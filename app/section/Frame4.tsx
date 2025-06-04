import Image from "next/image";

function Frame4() {
  return (
    <div className=" w-full h-screen px-7 py-10 bg-stone-700 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
      <div className="w-100 flex flex-col justify-start items-center gap-11">
        <div className="self-stretch px-5 inline-flex justify-start items-center">
          <div className="justify-start text-stone-100 text-4xl font-normal font-gustato leading-8">
            I will marry
            <br />
            with the love of my life
          </div>
        </div>
        <div className="w-72 flex flex-col justify-start items-center gap-6">
          <Image
            className="w-72 h-72 relative object-cover"
            src="/images/page4/berdua.jpg"
            alt="img"
            width={288}
            height={288}
          />
          <div className="self-stretch justify-start text-stone-100 text-xs font-normal font-spectral leading-tight">
            2024 Pertemuan yang tidak pernah kami duga akhirnya datang. Pada
            tahun ini kami mulai mengenal satu sama lain lebih dalam. Meskipun
            singkat, semua terasa menyenangkan dan menenangkan.
            <br />
            <br />
            2025 Pada tahun ini kami mengucap janji suci dihadapan Tuhan,
            keluarga, serta seluruh kerabat kami. Terlepas dari naik turunnya
            hidup kami nanti, kami bertekad serta memutuskan untuk bersama-sama
            menaiki satu persatu anak tangga kehidupan sampai kita bisa berada
            dititik yang kami impikan bersama. Berdua. Selamanya.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame4;
