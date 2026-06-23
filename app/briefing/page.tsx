"use client";

import { ChapterPageShell } from "@/components/ChapterPageShell";
import { AnswerPanel } from "@/components/AnswerPanel";
import { DropCap } from "@/components/DropCap";
import { useProgress } from "@/hooks/useProgress";
import { ANSWERS } from "@/lib/constants";

const HINTS = [
  "The instruction says 'a true cipher wastes nothing.' What does that tell you about the repeated numbers?",
  "There are only three unique numbers among the six highlighted. Find them in the order they first appear.",
  "Using A=1, B=2… and the three unique numbers, what letter does each one give you?",
];

function Gold({ children }: { children: React.ReactNode }) {
  return <span className="text-[#9c6f1f] font-semibold">{children}</span>;
}

export default function BriefingPage() {
  const { unlocked, unlock, loaded } = useProgress();

  return (
    <ChapterPageShell
      route="/briefing"
      chapterLabel="DOSSIER · CHAPTER I"
      title="The Architect's Cipher"
      unlocked={unlocked}
      isLocked={false}
      loaded={loaded}
      nextRoute="/wall"
      onUnlockNext={() => unlock("wall")}
      answerPanel={(turnToNext) => (
        <AnswerPanel
          mode="boxes"
          length={3}
          onCheck={(value) => value.toUpperCase() === ANSWERS.briefing}
          onCorrect={turnToNext}
          hints={HINTS}
        />
      )}
    >
      {() => (
        <>
          <DropCap
            letter="H"
            className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-6"
          >
            ananiah hid the first clue inside the one document everyone would
            read and no one would question: the architectural record of
            Solomon&rsquo;s temple. The cubit dimensions in 1 Kings 6 — the
            height of the cherubim, the width of the inner sanctuary, the
            depth of the entrance — aren&rsquo;t just measurements.
            They&rsquo;re a cipher. He believed only someone trained to see
            structure in numbers would ever notice.
          </DropCap>

          {/* Recovered fragment */}
          <div className="relative my-6 -rotate-[0.6deg] border border-seal/40 rounded-sm shadow-[0_12px_30px_rgba(40,25,8,0.3)] ledger-grain">
            <div
              className="absolute -top-2 left-7 w-[74px] h-[22px] bg-[#e2d8ba]/60 shadow-sm -rotate-[5deg]"
              aria-hidden
            />
            <div className="relative px-6 sm:px-7 py-7">
              <p className="font-courier text-[10.5px] uppercase tracking-[0.2em] text-[#7c4a16] mb-5">
                A Fragment of Hananiah&rsquo;s Record &middot; 1 Kings 6 (ESV), selected verses
              </p>
              <div className="space-y-3.5 font-inter text-[15px] leading-relaxed text-[#4a3414]">
                <p>
                  <span className="font-courier text-xs text-[#7c4a16]">v.2</span>{" "}
                  &middot; &ldquo;The house that King Solomon built for the
                  Lord was sixty cubits long, <Gold>twenty</Gold> cubits
                  wide, and thirty cubits high.&rdquo;
                </p>
                <p>
                  <span className="font-courier text-xs text-[#7c4a16]">v.3</span>{" "}
                  &middot; &ldquo;The vestibule in front of the nave of the
                  house was twenty cubits long, equal to the width of the
                  house, and <Gold>ten</Gold> cubits deep in front of the
                  house.&rdquo;
                </p>
                <p>
                  <span className="font-courier text-xs text-[#7c4a16]">v.6</span>{" "}
                  &middot; &ldquo;The lowest story was <Gold>five</Gold>{" "}
                  cubits broad, the middle one was six cubits broad, and the
                  third was seven cubits broad.&rdquo;
                </p>
                <p>
                  <span className="font-courier text-xs text-[#7c4a16]">v.10</span>{" "}
                  &middot; &ldquo;He built the structure against the whole
                  house, <Gold>five</Gold> cubits high, and it was joined to
                  the house with timbers of cedar.&rdquo;
                </p>
                <p>
                  <span className="font-courier text-xs text-[#7c4a16]">v.23</span>{" "}
                  &middot; &ldquo;In the inner sanctuary he made two cherubim
                  of olivewood, each <Gold>ten</Gold> cubits high.&rdquo;
                </p>
                <p>
                  <span className="font-courier text-xs text-[#7c4a16]">v.20</span>{" "}
                  &middot; &ldquo;The inner sanctuary was <Gold>twenty</Gold>{" "}
                  cubits long, twenty cubits wide, and twenty cubits high,
                  and he overlaid it with pure gold.&rdquo;
                </p>
              </div>
              <p className="font-courier text-[10.5px] uppercase tracking-[0.15em] text-[#7c4a16] mt-5">
                Cipher Key &middot; A=1 &middot; B=2 &middot; &hellip; &middot; Z=26
              </p>
            </div>
          </div>
        </>
      )}
    </ChapterPageShell>
  );
}
