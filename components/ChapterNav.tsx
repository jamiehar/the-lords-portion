"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { UnlockedState } from "@/hooks/useProgress";

const CHAPTERS: { roman: string; route: string; key: keyof UnlockedState | null }[] = [
  { roman: "I", route: "/briefing", key: null },
  { roman: "II", route: "/wall", key: "wall" },
  { roman: "III", route: "/merchant", key: "merchant" },
  { roman: "IV", route: "/test", key: "test" },
  { roman: "V", route: "/escape", key: "escape" },
];

export function ChapterNav({
  current,
  unlocked,
  hideDots = false,
}: {
  current: string;
  unlocked: UnlockedState;
  hideDots?: boolean;
}) {
  const router = useRouter();

  const isUnlocked = (key: keyof UnlockedState | null) => key === null || unlocked[key];

  return (
    <div className="fixed top-0 inset-x-0 z-50 h-[58px] bg-gradient-to-b from-ink to-ink/85 border-b border-gold/15">
      <div className="max-w-[680px] h-full mx-auto px-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-courier text-[11px] uppercase tracking-[0.15em] text-[#9a8f76] hover:text-gold flex items-center gap-1.5"
        >
          <span className="text-base leading-none">&lsaquo;</span> Dossier
        </Link>

        {!hideDots && (
          <div className="flex items-center gap-2">
            {CHAPTERS.map((c) => {
              const unlockedHere = isUnlocked(c.key);
              const isCurrent = c.route === current;

              if (isCurrent) {
                return (
                  <div
                    key={c.roman}
                    className="w-[26px] h-[26px] rounded-full flex items-center justify-center bg-[#15130d] text-gold-light font-cinzel font-bold text-xs border-[1.5px] border-gold shadow-[0_0_0_3px_rgba(201,168,76,0.12)]"
                  >
                    {c.roman}
                  </div>
                );
              }

              if (unlockedHere) {
                return (
                  <button
                    key={c.roman}
                    onClick={() => router.push(c.route)}
                    title="Go to this seal"
                    className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer bg-gradient-to-br from-gold-light to-gold text-[#241a0e] font-cinzel font-bold text-[11px] border border-gold/60 hover:brightness-105"
                  >
                    {c.roman}
                  </button>
                );
              }

              return (
                <div
                  key={c.roman}
                  className="w-6 h-6 rounded-full flex items-center justify-center bg-[#141310] text-[#5d5747] font-cinzel font-bold text-[11px] border border-gold/15"
                >
                  {c.roman}
                </div>
              );
            })}
          </div>
        )}

        <div className="font-courier text-[10.5px] uppercase tracking-[0.12em] text-[#857c66]">
          LP&middot;0615
        </div>
      </div>
    </div>
  );
}
