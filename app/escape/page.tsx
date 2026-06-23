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

const VAULT_SIZE = 280;

function VaultDoor({ open }: { open: boolean }) {
  return (
    <div
      className="relative mx-auto"
      style={{ width: VAULT_SIZE, height: VAULT_SIZE, perspective: 1000 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(230,205,132,0.9), rgba(230,205,132,0.18) 55%, transparent 75%)",
        }}
        initial={false}
        animate={open ? { opacity: 1, scale: 1.35 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div
        className="absolute inset-0 rounded-full border-[6px] border-gold/70"
        style={{
          boxShadow: "0 20px 50px rgba(0,0,0,0.55), inset 0 0 30px rgba(0,0,0,0.4)",
        }}
      />

      <motion.div
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{ clipPath: "inset(0 50% 0 0)", transformOrigin: "right center" }}
        initial={false}
        animate={open ? { rotateY: -118 } : { rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #d8b86a, #a8761f 60%, #6b4d14 100%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{ clipPath: "inset(0 0 0 50%)", transformOrigin: "left center" }}
        initial={false}
        animate={open ? { rotateY: 118 } : { rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 70% 30%, #d8b86a, #a8761f 60%, #6b4d14 100%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={false}
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg width={VAULT_SIZE * 0.5} height={VAULT_SIZE * 0.5} viewBox="0 0 100 100" aria-hidden>
          <rect x="44" y="14" width="12" height="72" fill="#241a0e" opacity="0.85" rx="2" />
          <rect x="14" y="44" width="72" height="12" fill="#241a0e" opacity="0.85" rx="2" />
          <circle cx="50" cy="78" r="6" fill="#15130d" />
          <rect x="47" y="78" width="6" height="12" fill="#15130d" />
        </svg>
      </motion.div>
    </div>
  );
}

function fireConfetti() {
  const colors = ["#c9a84c", "#e6cd84", "#f1e6c8", "#fff8e1"];
  confetti({ particleCount: 160, spread: 80, origin: { y: 0.6 }, colors });
  confetti({ particleCount: 80, angle: 60, spread: 60, origin: { x: 0 }, colors });
  confetti({ particleCount: 80, angle: 120, spread: 60, origin: { x: 1 }, colors });
}

export default function EscapePage() {
  const { unlocked, loaded } = useProgress();
  const [vaultOpen, setVaultOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleCorrect = () => {
    setVaultOpen(true);
    setTimeout(() => setShowCard(true), 1200);
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
      hideDots
      answerPanel={() =>
        !showCard && (
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
          <h1 className="font-cinzel font-bold text-[30px] sm:text-[34px] leading-[1.1] text-[#241a0e] text-center mb-2 -mt-2">
            The Steward&rsquo;s Oath
          </h1>

          <OrnamentalDivider />

          <DropCap
            letter="Y"
            className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] text-center max-w-md mx-auto mb-10"
          >
            ou have the cipher. You have the fragments. You have traced the
            trail from Solomon&rsquo;s temple to Nehemiah&rsquo;s wall to
            Lydia&rsquo;s letters. You have exposed Demas&rsquo;s forgery.
            The vault is before you.
          </DropCap>

          <VaultDoor open={vaultOpen} />

          <p className="font-cinzel text-[13px] text-center text-[#5c4a2a] mt-7 max-w-xs mx-auto leading-relaxed">
            &ldquo;Whoever can be trusted with very little can also be
            trusted with much.&rdquo;
            <br />
            <span className="font-courier text-[11px] tracking-[0.1em] text-[#8a5a22]">
              — Luke 16:10 (ESV)
            </span>
          </p>

          <p className="font-inter text-[15px] leading-relaxed text-[#6b563a] text-center mt-9 max-w-md mx-auto">
            The vault does not open with a number. Hananiah inscribed one
            question above the lock three thousand years ago:
          </p>

          <p className="font-cinzel font-bold text-[24px] sm:text-[28px] leading-snug text-gold text-center mt-5 max-w-md mx-auto">
            &ldquo;What is the name of the steward who has already proven
            faithful?&rdquo;
          </p>

          <AnimatePresence>
            {showCard && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mt-12 mx-auto max-w-md border-2 border-gold rounded-sm bg-parchment-light/85 px-7 sm:px-9 py-9 text-center"
              >
                <p className="font-courier text-[11px] uppercase tracking-[0.3em] text-[#8a5a22] mb-5">
                  The Lord&rsquo;s Portion &middot; Unlocked
                </p>
                <p className="font-inter text-[16px] leading-relaxed text-[#3a2c19] mb-4">
                  The treasure was never only silver and gold. It was a life
                  given to building things that last — a family, a church, a
                  legacy of integrity. You found it because you have always
                  been it.
                </p>
                <p className="font-inter text-[16px] leading-relaxed text-[#3a2c19] mb-2">
                  Happy Father&rsquo;s Day, Dad. We love you.
                </p>
                <p className="font-cinzel text-[15px] text-[#241a0e]">
                  — {SONS.join(", ")}
                </p>
                <button
                  onClick={fireConfetti}
                  className="mt-7 inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-courier font-bold text-xs uppercase tracking-[0.2em] text-[#241a0e] bg-gradient-to-b from-gold-light to-gold shadow-[0_8px_22px_rgba(156,127,48,0.35)] hover:brightness-105 active:translate-y-px transition"
                >
                  The Vault Is Open
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </ChapterPageShell>
  );
}
