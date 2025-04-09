import { Suspense } from "react";
import Frame8f from "./Frame8f";

export default function Frame8fs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Frame8f />
    </Suspense>
  );
}
