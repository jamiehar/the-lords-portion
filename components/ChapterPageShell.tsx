"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ParchmentPanel } from "./ParchmentPanel";
import { EyesOnlyStamp } from "./EyesOnlyStamp";
import { ChapterNav } from "./ChapterNav";
import { DossierFooter } from "./DossierFooter";
import { LockedNotice } from "./LockedNotice";
import type { UnlockedState } from "@/hooks/useProgress";

interface ChapterPageShellProps {
  route: string;
  chapterLabel: string;
  title: string;
  unlocked: UnlockedState;
  isLocked: boolean;
  loaded: boolean;
  showStamp?: boolean;
  hideDots?: boolean;
  nextRoute?: string;
  onUnlockNext?: () => void;
  children: (turnToNext: () => void) => ReactNode;
  /** Rendered as a true fixed footer outside the page-turn transform, like the top nav. */
  answerPanel?: (turnToNext: () => void) => ReactNode;
}

export function ChapterPageShell({
  route,
  chapterLabel,
  title,
  unlocked,
  isLocked,
  loaded,
  showStamp = true,
  hideDots = false,
  nextRoute,
  onUnlockNext,
  children,
  answerPanel,
}: ChapterPageShellProps) {
  const router = useRouter();
  const [turning, setTurning] = useState(false);

  const turnToNext = () => {
    if (onUnlockNext) onUnlockNext();
    setTurning(true);
  };

  if (!loaded) {
    return <div className="dossier-backdrop" />;
  }

  return (
    <div className="dossier-backdrop">
      <ChapterNav current={route} unlocked={unlocked} hideDots={hideDots} />
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 pt-20 pb-64">
        <div className="relative" style={{ perspective: 2000 }}>
          {turning && (
            <div
              className="absolute inset-0 rounded-[5px] border border-seal/45"
              style={{ backgroundColor: "#dcc89c" }}
              aria-hidden
            />
          )}
          <motion.div
            className="relative"
            style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
            animate={turning ? { rotateY: -168 } : { rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onAnimationComplete={() => {
              if (turning && nextRoute) router.push(nextRoute);
            }}
          >
            <ParchmentPanel>
              {isLocked ? (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-courier text-[11px] uppercase tracking-[0.25em] text-[#8a5a22]">
                      {chapterLabel}
                    </span>
                  </div>
                  <LockedNotice title={title} />
                  <DossierFooter />
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <span className="font-courier text-[11px] uppercase tracking-[0.25em] text-[#8a5a22]">
                      {chapterLabel}
                    </span>
                    {showStamp && <EyesOnlyStamp />}
                  </div>
                  <h1 className="font-cinzel font-bold text-[30px] sm:text-[34px] leading-[1.1] text-[#241a0e] mt-3 mb-4">
                    {title}
                  </h1>
                  <div className="h-0.5 w-full bg-gradient-to-r from-gold/65 to-gold/10" />
                  <div className="mt-6">{children(turnToNext)}</div>
                  <DossierFooter />
                </>
              )}
            </ParchmentPanel>
            {turning && (
              <div
                className="absolute inset-0 rounded-[5px] pointer-events-none bg-gradient-to-r from-black/30 to-transparent"
                aria-hidden
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Rendered outside the perspective/transform tree above so it stays truly
          viewport-fixed (a `transform` or `perspective` ancestor would otherwise
          turn position:fixed into "fixed to that ancestor" instead). */}
      {!isLocked && answerPanel?.(turnToNext)}
    </div>
  );
}
