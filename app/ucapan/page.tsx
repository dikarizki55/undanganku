import { Suspense } from "react";
import UcapanPage from "./UcapanClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UcapanPage />
    </Suspense>
  );
}
