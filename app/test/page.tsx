"use client";

import { useState } from "react";
import { ChapterPageShell } from "@/components/ChapterPageShell";
import { AnswerPanel } from "@/components/AnswerPanel";
import { useProgress } from "@/hooks/useProgress";
import { ANSWERS } from "@/lib/constants";

const HINTS = [
  "One of these four statements has an annotation from Demas himself. Look for where his voice intrudes on the scripture.",
  "Jeremiah 29:11 was written to the entire nation of Israel in exile — not to an individual. How is Demas presenting it?",
  "The forgery is C. Demas twists a corporate promise of national restoration into personal financial advice.",
];

const CARDS = [
  {
    letter: "A",
    quote: "The blessing of the Lord makes rich, and he adds no sorrow with it.",
    ref: "Proverbs 10:22 (ESV)",
    annotation:
      "A statement about divine providence — true blessing comes from God alone, not human striving, and carries no grief in its wake.",
    forged: false,
  },
  {
    letter: "B",
    quote:
      "Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need.",
    ref: "Malachi 3:10 (ESV)",
    annotation:
      "God's covenant call to communal faithfulness in giving, addressed to Israel as a people.",
    forged: false,
  },
  {
    letter: "C",
    quote:
      "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    ref: "Jeremiah 29:11 (ESV)",
    annotation:
      "Demas's notation reads: “A personal promise that those who follow God will be prosperous and financially secure — claim this verse for your portfolio.”",
    forged: true,
  },
  {
    letter: "D",
    quote: "Whoever is generous to the poor lends to the Lord, and he will repay him for his deed.",
    ref: "Proverbs 19:17 (ESV)",
    annotation: "A call to radical generosity — giving to the poor is giving to God himself.",
    forged: false,
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
    >
      {(turnToNext) => (
        <>
          <p className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-3">
            Demas has left a trap. Somewhere along the trail he planted a
            forged fragment — a real verse, badly twisted — designed to lead
            a faithful steward astray. It is the oldest trick in the
            enemy&rsquo;s playbook: take something true, reframe it as a
            transaction, reduce God&rsquo;s faithfulness to a wealth formula.
            It looks convincing. It is not.
          </p>
          <p className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-6">
            You will be presented with four statements about wealth and
            stewardship, each citing scripture. Three are faithful to what
            the text actually says. One is Demas&rsquo;s forgery. Identify
            the counterfeit.
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
                  <p className="font-inter text-[15px] leading-relaxed text-[#4a3414] mb-3">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                  <p
                    className={`font-inter text-[13px] leading-relaxed ${
                      card.forged
                        ? "text-[#7c352a] border border-[#7c352a]/35 bg-[#7c352a]/[0.06] rounded-sm px-3 py-2"
                        : "text-[#6b563a]"
                    }`}
                  >
                    {card.annotation}
                  </p>
                </button>
              );
            })}
          </div>

          <p className="font-inter italic text-[15px] leading-relaxed text-[#6b563a] text-center mt-6">
            &ldquo;Three are faithful. One is Demas&rsquo;s forgery. Select
            the counterfeit and name it.&rdquo;
          </p>

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
        </>
      )}
    </ChapterPageShell>
  );
}
