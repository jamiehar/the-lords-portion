"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { ChapterPageShell } from "@/components/ChapterPageShell";
import { AnswerPanel } from "@/components/AnswerPanel";
import { OrnamentalDivider } from "@/components/OrnamentalDivider";
import { DropCap } from "@/components/DropCap";
import { useProgress } from "@/hooks/useProgress";
import { ANSWERS, SONS } from "@/lib/constants";

type Phase = "closed" | "unlocking" | "doors" | "growing" | "open";

const SMALL_SIZE = 170;
const LARGE_WIDTH = 420;
const LARGE_HEIGHT = 400;

function fireConfetti() {
  const colors = ["#c9a84c", "#e6cd84", "#f1e6c8", "#fff8e1"];
  confetti({ particleCount: 160, spread: 80, origin: { y: 0.6 }, colors });
  confetti({ particleCount: 80, angle: 60, spread: 60, origin: { x: 0 }, colors });
  confetti({ particleCount: 80, angle: 120, spread: 60, origin: { x: 1 }, colors });
}

function Vault({ phase }: { phase: Phase }) {
  const showFace = phase === "closed" || phase === "unlocking";
  const doorsOpen = phase === "doors" || phase === "growing" || phase === "open";
  const isExpanded = phase === "growing" || phase === "open";

  return (
    <motion.div
      className="relative mx-auto overflow-hidden border-[6px] border-gold/70"
      style={{
        perspective: 1000,
        boxShadow: "0 20px 50px rgba(0,0,0,0.55), inset 0 0 30px rgba(0,0,0,0.4)",
      }}
      initial={false}
      animate={{
        width: isExpanded ? LARGE_WIDTH : SMALL_SIZE,
        height: isExpanded ? LARGE_HEIGHT : SMALL_SIZE,
        borderRadius: isExpanded ? 16 : SMALL_SIZE,
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(230,205,132,0.9), rgba(230,205,132,0.18) 55%, transparent 75%)",
        }}
        initial={false}
        animate={{ opacity: doorsOpen ? 1 : 0, scale: doorsOpen ? 1.15 : 0.6 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      {/* gold door halves */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: "inset(0 50% 0 0)", transformOrigin: "right center" }}
        initial={false}
        animate={{ rotateY: doorsOpen ? -118 : 0, opacity: isExpanded ? 0 : 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 30%, #d8b86a, #a8761f 60%, #6b4d14 100%)",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: "inset(0 0 0 50%)", transformOrigin: "left center" }}
        initial={false}
        animate={{ rotateY: doorsOpen ? 118 : 0, opacity: isExpanded ? 0 : 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 70% 30%, #d8b86a, #a8761f 60%, #6b4d14 100%)",
          }}
        />
      </motion.div>

      {/* cross + keyhole face */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={false}
        animate={{ opacity: showFace ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <svg width={SMALL_SIZE * 0.5} height={SMALL_SIZE * 0.5} viewBox="0 0 100 100" aria-hidden>
          <rect x="44" y="14" width="12" height="72" fill="#241a0e" opacity="0.85" rx="2" />
          <rect x="14" y="44" width="72" height="12" fill="#241a0e" opacity="0.85" rx="2" />
          <circle cx="50" cy="78" r="6" fill="#15130d" />
          <rect x="47" y="78" width="6" height="12" fill="#15130d" />
        </svg>
      </motion.div>

      {/* turning key */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
        style={{ paddingBottom: SMALL_SIZE * 0.16 }}
        initial={false}
        animate={
          phase === "unlocking"
            ? { opacity: 1, rotate: [0, -30, 30, 0] }
            : { opacity: 0, rotate: 0 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <svg width={26} height={26} viewBox="0 0 24 24" aria-hidden>
          <circle cx="8" cy="8" r="5" fill="none" stroke="#e6cd84" strokeWidth="2.5" />
          <rect x="11" y="11" width="3" height="11" fill="#e6cd84" />
          <rect x="11" y="16" width="6" height="2.4" fill="#e6cd84" />
          <rect x="11" y="20" width="6" height="2.4" fill="#e6cd84" />
        </svg>
      </motion.div>

      {/* unlocked message, revealed inside the vault itself */}
      <AnimatePresence>
        {phase === "open" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-7 py-6 bg-parchment-light"
          >
            <p className="font-courier text-[10px] uppercase tracking-[0.3em] text-[#8a5a22] mb-4">
              The Lord&rsquo;s Portion &middot; Unlocked
            </p>
            <p className="font-inter text-[14px] leading-relaxed text-[#3a2c19] mb-3">
              The treasure was never only silver and gold. It was a life
              given to building things that last — a family, a church, a
              legacy of integrity. You found it because you have always
              been it.
            </p>
            <p className="font-inter text-[14px] leading-relaxed text-[#3a2c19] mb-2">
              Happy Father&rsquo;s Day, Dad. We love you.
            </p>
            <p className="font-cinzel text-[14px] text-[#241a0e] mb-5">
              — {SONS.join(", ")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function EscapePage() {
  const { unlocked, loaded } = useProgress();
  const [phase, setPhase] = useState<Phase>("closed");

  const handleCorrect = () => {
    setPhase("unlocking");
    setTimeout(() => setPhase("doors"), 500);
    setTimeout(() => setPhase("growing"), 500 + 900);
    setTimeout(() => setPhase("open"), 500 + 900 + 700);
  };

  return (
    <ChapterPageShell
      route="/escape"
      chapterLabel="DOSSIER · CHAPTER V · FINAL SEAL"
      title="The Steward's Oath"
      unlocked={unlocked}
      isLocked={loaded && !unlocked.escape}
      loaded={loaded}
      showStamp={false}
      answerPanel={() =>
        phase !== "open" && (
          <AnswerPanel
            mode="single"
            length={24}
            placeholder="Speak the name"
            onCheck={(value) => value.toUpperCase() === ANSWERS.escape}
            onCorrect={handleCorrect}
            showHint={false}
            submitLabel="Speak the Name"
            centered
          />
        )
      }
    >
      {() => (
        <>
          <OrnamentalDivider />

          <DropCap
            letter="Y"
            className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-4"
          >
            ou got the cipher. You have the fragments. You traced the
            trail from Solomon&rsquo;s temple to Nehemiah&rsquo;s wall to
            Lydia&rsquo;s letters. And, you exposed Demas&rsquo;s forgery.
          </DropCap>

          <p className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-6">
            Now, the vault is before you. Hananiah inscribed a question above
            the lock three thousand years ago. Who is the faithful steward?
          </p>

          <p className="font-cinzel text-[19px] sm:text-[21px] text-center text-[#5c4a2a] mb-10 max-w-xs mx-auto leading-relaxed">
            &ldquo;Whoever can be trusted with very little can also be
            trusted with much.&rdquo;
            <br />
            <span className="font-courier text-[12px] tracking-[0.1em] text-[#8a5a22]">
              — Luke 16:10 (ESV)
            </span>
          </p>

          <Vault phase={phase} />
        </>
      )}
    </ChapterPageShell>
  );
}
