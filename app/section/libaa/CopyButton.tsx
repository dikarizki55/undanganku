"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;
  className?: string;
};

export default function CopyButton({ text, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button onClick={handleCopy} className={`${className}`} title="Salin">
      <div className="h-8 w-30 px-2.5 py-2 bg-stone-700 rounded inline-flex justify-center items-center gap-1.5">
        {copied ? (
          "✅"
        ) : (
          <div className=" w-full h-full inline-flex justify-center items-center gap-1.5">
            <div className="justify-start text-white text-base font-normal font-['Spectral']">
              {text}
            </div>
            <div className="bg-[url('/images/page6/notes.svg')] bg-center bg-contain w-2.5 h-3.5" />
          </div>
        )}
      </div>
    </button>
  );
}
