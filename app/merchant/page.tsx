"use client";

import { ChapterPageShell } from "@/components/ChapterPageShell";
import { AnswerPanel } from "@/components/AnswerPanel";
import { DropCap } from "@/components/DropCap";
import { useProgress } from "@/hooks/useProgress";
import { ANSWERS } from "@/lib/constants";

const HINTS = [
  "Each gold phrase is pointing somewhere else in scripture. Try reading each one aloud — what does it remind you of? Where in the Bible do you hear that language?",
  "'Who are at Philippi' names the city directly. 'A fragrant offering' is temple language from 1 Kings. 'In the beginning of the gospel' points to when the gospel first arrived in Philippi — which book records that?",
  "PHI = Philippi (Phil. 1:1), ACT = Acts (the founding of the church, Acts 16), KNG = Kings (the temple cedar chambers). Written in verse order: PHIACTKNG.",
];

const CARDS = [
  {
    ref: "Philippians 1:1 (ESV)",
    before: "Paul and Timothy, servants of Christ Jesus, to all the saints in Christ Jesus ",
    gold: "who are at Philippi",
    after: ", with the overseers and deacons.",
  },
  {
    ref: "Philippians 4:15 (ESV)",
    before: "And you Philippians yourselves know that ",
    gold: "in the beginning of the gospel",
    after: ", when I left Macedonia, no church entered into partnership with me in giving and receiving, except you only.",
  },
  {
    ref: "Philippians 4:18 (ESV)",
    before: "I have received full payment, and more. I am well supplied, having received from Epaphroditus the gifts you sent, ",
    gold: "a fragrant offering",
    after: ", an acceptable sacrifice, pleasing to God.",
  },
];

const CODEX_ENTRIES = [
  { text: "The cedar-lined chambers of the Lord’s house", code: "KNG" },
  { text: "The letter written to the church in the great city", code: "ROM" },
  { text: "The record of the early church and its first converts", code: "ACT" },
  { text: "The city where Lydia made her home", code: "PHI" },
  { text: "The letter written to the divided church", code: "COR" },
];

export default function MerchantPage() {
  const { unlocked, unlock, loaded } = useProgress();

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
      answerPanel={(turnToNext) => (
        <AnswerPanel
          mode="single"
          length={9}
          onCheck={(value) => value === ANSWERS.merchant}
          onCorrect={turnToNext}
          hints={HINTS}
          centered
        />
      )}
    >
      {() => (
        <>
          <DropCap
            letter="L"
            className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-4"
          >
            ydia was a merchant before she was a believer — trained to 
            encode value in ordinary language, to say one thing on the 
            surface and mean another beneath it. When she corresponded with Paul, 
            she trusted that the right reader would know how to look.
          </DropCap>
          <p className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-6">
            Three phrases are marked. Each one hides a reference — a book, a
            place, a moment. Match each marked phrase to what it truly
            points to. Write the three codes in the order the verses
            appear.
          </p>

          <div className="space-y-5">
            {CARDS.map((card) => (
              <div
                key={card.ref}
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
              </div>
            ))}
          </div>

          {/* Lydia's Codex — cross-reference document */}
          <div className="relative my-6 rotate-[0.4deg] border border-seal/40 rounded-sm shadow-[0_12px_30px_rgba(40,25,8,0.3)] ledger-grain">
            <div className="relative px-6 sm:px-7 py-7">
              <p className="font-courier text-[10.5px] uppercase tracking-[0.2em] text-[#7c4a16] mb-5">
                Lydia&rsquo;s Codex &mdash; Cross-Reference
              </p>
              <ul className="space-y-2.5 font-inter text-[14.5px] leading-relaxed text-[#4a3414]">
                {CODEX_ENTRIES.map((entry) => (
                  <li key={entry.code} className="flex justify-between gap-4">
                    <span>{entry.text}</span>
                    <span className="flex-none font-courier text-xs text-[#9c6f1f] font-semibold">
                      {entry.code}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </ChapterPageShell>
  );
}
