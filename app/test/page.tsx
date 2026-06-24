"use client";

import { useState } from "react";
import { ChapterPageShell } from "@/components/ChapterPageShell";
import { AnswerPanel } from "@/components/AnswerPanel";
import { DropCap } from "@/components/DropCap";
import { useProgress } from "@/hooks/useProgress";
import { ANSWERS } from "@/lib/constants";

const HINTS = [
  "Demas is a forger, not an inventor. He didn't make up a verse — he changed one. Read each verse carefully and ask: is this exactly what the Bible says?",
  "In one of the most quoted verses in scripture, does the word 'welfare' ring any bells?",
  "Jeremiah 29:11 says 'plans for welfare,' not 'prosperity.' Card C has been tampered with.",
];

const CARDS = [
  {
    letter: "A",
    quote: "The blessing of the Lord makes rich, and he adds no sorrow with it.",
    ref: "Proverbs 10:22 (ESV)",
  },
  {
    letter: "B",
    quote:
      "Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need.",
    ref: "Malachi 3:10 (ESV)",
  },
  {
    letter: "C",
    quote:
      "For I know the plans I have for you, declares the Lord, plans for prosperity and not for evil, to give you a future and a hope.",
    ref: "Jeremiah 29:11 (ESV)",
  },
  {
    letter: "D",
    quote: "Whoever is generous to the poor lends to the Lord, and he will repay him for his deed.",
    ref: "Proverbs 19:17 (ESV)",
  },
];

export default function TestPage() {
  const { unlocked, unlock, loaded } = useProgress();
  const [selected, setSelected] = useState("");

  return (
    <ChapterPageShell
      route="/test"
      chapterLabel="DOSSIER · CHAPTER IV"
      title="The Prosperity Test"
      unlocked={unlocked}
      isLocked={loaded && !unlocked.test}
      loaded={loaded}
      nextRoute="/escape"
      onUnlockNext={() => unlock("escape")}
      answerPanel={(turnToNext) => (
        <AnswerPanel
          mode="single"
          length={1}
          forcedValue={selected}
          inputDisabled
          onCheck={(value) => value === ANSWERS.test}
          onCorrect={turnToNext}
          hints={HINTS}
          wrongMessage="The vault holds firm. Demas is counting on your haste."
          centered
        />
      )}
    >
      {() => (
        <>
          <DropCap
            letter="D"
            className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-3"
          >
            emas has left a trap. Somewhere along the trail he planted a forgery — scripture altered just enough to change everything. It is the oldest trick in the enemy&rsquo;s playbook: take something true, twist it and redirect where it points. The text will look and sound right. But it is not what was written.
          </DropCap>
          <p className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-6">
            Four passages are before you. Three are faithful to the word as it was given. One has been tampered with. Find it.
          </p>

          <div className="space-y-4">
            {CARDS.map((card) => {
              const isSelected = selected === card.letter;
              return (
                <button
                  key={card.letter}
                  onClick={() => setSelected(card.letter)}
                  className={`w-full text-left border rounded-sm px-5 sm:px-6 py-5 transition ${
                    isSelected
                      ? "border-gold shadow-[0_0_0_2px_rgba(201,168,76,0.3)] bg-parchment-light/70"
                      : "border-seal/35 bg-parchment-light/40 hover:border-seal/55"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-cinzel font-bold text-base text-[#a8761f]">
                      {card.letter}
                    </span>
                    <p className="font-courier text-[10px] uppercase tracking-[0.2em] text-[#7c4a16]">
                      {card.ref}
                    </p>
                  </div>
                  <p className="font-inter text-[15px] leading-relaxed text-[#4a3414]">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </button>
              );
            })}
          </div>
        </>
      )}
    </ChapterPageShell>
  );
}
