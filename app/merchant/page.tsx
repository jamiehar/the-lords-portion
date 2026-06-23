"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChapterPageShell } from "@/components/ChapterPageShell";
import { AnswerPanel } from "@/components/AnswerPanel";
import { useProgress } from "@/hooks/useProgress";
import { ANSWERS } from "@/lib/constants";

const HINTS_STAGE1 = [
  "Each gold phrase is a clue pointing somewhere else in scripture. Where does 'fragrant offering' appear in the Old Testament?",
  "'Book' points to Philippi (PHI). 'Household' points to Acts 16:15 (ACT). What does 'fragrant' point to in 1 Kings 6?",
  "The three codes are PHI, KNG, and ACT — written together in verse order: PHIKNGACT.",
];

const HINTS_STAGE2 = [
  "The grid numbers each word of Philippians 4:7 from 1 to 9. Take the letters from PHIKNGACT at positions 1, 4, and 7.",
  "Count along PHIKNGACT: position 1 = P, position 4 = K, position 7 = A.",
  "The answer is PKA.",
];

const GRID_WORDS = [
  "And",
  "the",
  "peace",
  "of",
  "God",
  "which",
  "surpasses",
  "all",
  "understanding",
];

const CARDS = [
  {
    ref: "Philippians 4:3 (ESV)",
    before: "Yes, I ask you also, true companion, help these women, who have labored side by side with me in the gospel together with Clement and the rest of my fellow workers, ",
    gold: "whose names are in the book",
    after: " of life.",
    pointsTo: "Lydia's ledger, kept in her home city of Philippi",
    code: "PHI",
  },
  {
    ref: "Philippians 4:18 (ESV)",
    before: "I have received full payment, and more. I am well supplied, having received from Epaphroditus the gifts you sent, ",
    gold: "a fragrant offering",
    after: ", an acceptable sacrifice, pleasing to God.",
    pointsTo: "the cedar-lined chamber of Solomon's temple, 1 Kings 6:15",
    code: "KNG",
  },
  {
    ref: "Philippians 4:22 (ESV)",
    before: "All the saints greet you, especially those of ",
    gold: "Caesar's household",
    after: ".",
    pointsTo: "Lydia's own house — the first church in Philippi, Acts 16:15",
    code: "ACT",
  },
];

export default function MerchantPage() {
  const { unlocked, unlock, loaded } = useProgress();
  const [stage1Solved, setStage1Solved] = useState(false);

  return (
    <ChapterPageShell
      route="/merchant"
      chapterLabel="DOSSIER · CHAPTER III"
      title="The Merchant and the Deacon"
      unlocked={unlocked}
      isLocked={loaded && !unlocked.merchant}
      loaded={loaded}
      nextRoute="/test"
      onUnlockNext={() => unlock("test")}
    >
      {(turnToNext) => (
        <>
          <p className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-6">
            Lydia never wrote a careless word. Tucked inside Philippians are
            phrases that have always read as slightly unusual — specific,
            almost transactional. These were Lydia&rsquo;s encoded
            references, slipped into Paul&rsquo;s letter with his blessing,
            each concealing a hidden reference. But the fragments alone
            aren&rsquo;t enough. Epaphras held the key — a cipher grid drawn
            from the words of Philippians 4:7 (ESV). You have both. Use the
            grid to decode what Lydia hid.
          </p>

          <p className="font-courier text-[11px] uppercase tracking-[0.25em] text-[#8a5a22] mb-4">
            Stage I &middot; Lydia&rsquo;s Fragments
          </p>

          <div className="space-y-5">
            {CARDS.map((card) => (
              <div
                key={card.code}
                className="relative border border-seal/40 rounded-sm shadow-[0_10px_24px_rgba(40,25,8,0.25)] bg-parchment-light/60 px-5 sm:px-6 py-5"
              >
                <p className="font-courier text-[10px] uppercase tracking-[0.2em] text-[#7c4a16] mb-2">
                  {card.ref}
                </p>
                <p className="font-inter text-[15px] leading-relaxed text-[#4a3414]">
                  &ldquo;{card.before}
                  <span className="italic text-[#9c6f1f] font-medium">
                    {card.gold}
                  </span>
                  {card.after}&rdquo;
                </p>
                <p className="font-inter text-[13px] text-[#6b563a] mt-3">
                  Points to: <span className="italic">{card.pointsTo}</span>
                </p>
                <AnimatePresence>
                  {stage1Solved && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="font-courier text-xs uppercase tracking-[0.2em] text-[#9a8158] mt-2 overflow-hidden"
                    >
                      Code: {card.code}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <p className="font-inter italic text-[15px] leading-relaxed text-[#6b563a] text-center mt-6">
            &ldquo;Write the three codes in order, as a single string. Bring
            it to Epaphras.&rdquo;
          </p>

          {!stage1Solved && (
            <AnswerPanel
              mode="single"
              length={9}
              onCheck={(value) => value === ANSWERS.merchant_stage1}
              onCorrect={() => setStage1Solved(true)}
              hints={HINTS_STAGE1}
              submitLabel="Confirm Fragment"
              centered
            />
          )}

          <AnimatePresence>
            {stage1Solved && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="h-0.5 w-full bg-gradient-to-r from-gold/65 to-gold/10 my-7" />

                <p className="font-courier text-[11px] uppercase tracking-[0.25em] text-[#8a5a22] mb-4">
                  Stage II &middot; Epaphras&rsquo;s Key
                </p>

                <div className="relative border border-seal/40 rounded-sm shadow-[0_12px_30px_rgba(40,25,8,0.3)] ledger-grain">
                  <div className="relative px-6 sm:px-7 py-7">
                    <p className="font-courier text-[10.5px] uppercase tracking-[0.2em] text-[#7c4a16] mb-4">
                      Philippians 4:7 (ESV)
                    </p>
                    <p className="font-inter text-[14px] italic text-[#4a3414] mb-5">
                      &ldquo;And the peace of God, which surpasses all
                      understanding, will guard your hearts and your minds
                      in Christ Jesus.&rdquo;
                    </p>
                    <div className="grid grid-cols-9 gap-1 text-center">
                      {GRID_WORDS.map((_, i) => (
                        <div
                          key={`n-${i}`}
                          className="font-courier text-[10px] text-[#7c4a16] pb-1"
                        >
                          {i + 1}
                        </div>
                      ))}
                      {GRID_WORDS.map((w, i) => (
                        <div
                          key={`w-${i}`}
                          className="font-inter text-[11px] sm:text-[12px] text-[#4a3414] bg-[#40260d]/[0.06] border border-seal/25 rounded-sm py-1.5 px-0.5 break-words"
                        >
                          {w}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="font-inter italic text-[15px] leading-relaxed text-[#6b563a] text-center mt-6">
                  &ldquo;From the string PHIKNGACT, take the letters at
                  positions 1, 4, and 7. These are the three letters
                  Epaphras preserved.&rdquo;
                </p>

                <AnswerPanel
                  mode="boxes"
                  length={3}
                  onCheck={(value) => value.toUpperCase() === ANSWERS.merchant_stage2}
                  onCorrect={turnToNext}
                  hints={HINTS_STAGE2}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </ChapterPageShell>
  );
}
