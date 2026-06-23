"use client";

import { useRouter } from "next/navigation";
import { STORAGE_KEYS } from "@/lib/constants";

export function DossierFooter() {
  const router = useRouter();

  const handleReset = () => {
    Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
    router.push("/");
  };

  return (
    <div className="mt-9 pt-5 border-t border-seal/20 flex items-center justify-between gap-4">
      <p className="font-courier text-[10px] tracking-[0.2em] text-[#8a7350] uppercase">
        File No. LP&middot;0615 &middot; Classified &middot; Eyes Only
      </p>
      <button
        onClick={handleReset}
        aria-label="Reset progress"
        className="font-courier text-[8px] tracking-[0.1em] text-[#8a7350]/35 uppercase hover:text-[#8a7350]/70 flex-none"
      >
        reset
      </button>
    </div>
  );
}
