"use client";

import { useEffect, useState } from "react";

import Frame1 from "./section/Frame1";
import Frame2 from "./section/Frame2";
import Frame3 from "./section/Frame3";
import Frame4 from "./section/Frame4";
import Frame5 from "./section/Frame5";

export default function Home() {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setId(params.get("id"));
    }
  }, []);

  return (
    <div>
      <Frame1 id={id ?? ""} />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}
