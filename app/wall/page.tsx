"use client";

import { ChapterPageShell } from "@/components/ChapterPageShell";
import { AnswerPanel } from "@/components/AnswerPanel";
import { useProgress } from "@/hooks/useProgress";
import { ANSWERS } from "@/lib/constants";

const HINTS = [
  "Each highlighted name has a number beside it in the ledger. Those numbers are their positions in the sequence of the wall.",
  "The instruction says arrange the positions from lowest to highest. What are the three position numbers?",
  "The three positions are 3, 8, and 15. Written together lowest to highest, that is your answer.",
];

const ENTRIES: { text: string; marked: boolean }[] = [
  { text: "Eliashib the high priest · Sheep Gate (v.1)", marked: false },
  { text: "The men of Jericho · adjacent section (v.2)", marked: false },
  { text: "Zaccur son of Imri · next section (v.2)", marked: true },
  { text: "The sons of Hassenaah · Fish Gate (v.3)", marked: false },
  { text: "Meremoth son of Uriah · next section (v.4)", marked: false },
  { text: "Meshullam son of Berechiah · next section (v.4)", marked: false },
  { text: "Zadok son of Baana · next section (v.4)", marked: false },
  { text: "Jedaiah son of Harumaph · repaired opposite his house (v.10)", marked: true },
  { text: "Hattush son of Hashabneiah · next section (v.10)", marked: false },
  { text: "Malkijah son of Harim and Hasshub son of Pahath-Moab · Tower of the Ovens (v.11)", marked: false },
  { text: "Shallum son of Hallohesh · ruler of half the district (v.12)", marked: false },
  { text: "Hanun and residents of Zanoah · Valley Gate (v.13)", marked: false },
  { text: "Malkijah son of Rechab · Dung Gate (v.14)", marked: false },
  { text: "Shallun son of Col-Hozeh · Fountain Gate (v.15)", marked: false },
  { text: "Nehemiah son of Azbuk · half the district of Beth-zur (v.16)", marked: true },
];

export default function WallPage() {
  const { unlocked, unlock, loaded } = useProgress();

  return (
    <ChapterPageShell
      route="/wall"
      chapterLabel="DOSSIER · CHAPTER II"
      title="The Wall and the Names"
      unlocked={unlocked}
      isLocked={loaded && !unlocked.wall}
      loaded={loaded}
      nextRoute="/merchant"
      onUnlockNext={() => unlock("merchant")}
    >
      {(turnToNext) => (
        <>
          <p className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-3">
            Nehemiah 3 reads like a dry ledger — family names, gate
            assignments, sections of wall. Most people skip it. But hidden
            inside that list are three names: the Levites Hananiah entrusted
            with pieces of the original cipher. Their gate assignments are
            not incidental. They are coordinates.
          </p>
          <p className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-6">
            Three names have been highlighted. Each holds a position in the
            sequence of the wall&rsquo;s reconstruction. Arrange their
            position numbers from lowest to highest. That sequence is the
            next fragment.
          </p>

          {/* Numbered ledger scroll */}
          <div className="relative my-6 rotate-[0.4deg] border border-seal/40 rounded-sm shadow-[0_12px_30px_rgba(40,25,8,0.3)] ledger-grain">
            <div className="relative px-6 sm:px-7 py-7">
              <p className="font-courier text-[10.5px] uppercase tracking-[0.2em] text-[#7c4a16] mb-5">
                Nehemiah 3 (ESV) &mdash; The Builders of the Wall
              </p>
              <ol className="space-y-2.5 font-inter text-[14.5px] leading-relaxed text-[#4a3414]">
                {ENTRIES.map((entry, i) => (
                  <li
                    key={i}
                    className={
                      entry.marked
                        ? "pl-3 border-l-2 border-gold text-[#5c3f12] font-medium"
                        : "pl-3"
                    }
                  >
                    <span className="font-courier text-xs text-[#7c4a16] mr-1">
                      {i + 1}.
                    </span>
                    {entry.marked && <span className="text-gold mr-1">&#10022;</span>}
                    {entry.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <p className="font-inter italic text-[15px] leading-relaxed text-[#6b563a] text-center mt-6">
            &ldquo;Three names are marked. Each holds a position in the
            sequence of the wall. Arrange their position numbers from lowest
            to highest. Enter them together as a single code.&rdquo;
          </p>

          <AnswerPanel
            mode="single"
            length={4}
            numeric
            onCheck={(value) => value === ANSWERS.wall}
            onCorrect={turnToNext}
            hints={HINTS}
            centered
          />
        </>
      )}
    </ChapterPageShell>
  );
}
