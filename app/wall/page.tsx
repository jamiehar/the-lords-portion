"use client";

import { ChapterPageShell } from "@/components/ChapterPageShell";
import { AnswerPanel } from "@/components/AnswerPanel";
import { DropCap } from "@/components/DropCap";
import { useProgress } from "@/hooks/useProgress";
import { ANSWERS } from "@/lib/constants";

const HINTS = [
  "Your key from Puzzle 1 is TJE. Each letter sounds within one of the three highlighted names. Say each name aloud — where do you hear the letter?",
  "Count every builder or group as one entry. Two names working side by side count as one. Count carefully through the list to find what position each highlighted name holds.",
  "Melatiah is entry 10, Jedaiah is entry 14, and Ezer is entry 25. Written in the order they appear in the passage is the code.",
];

function Gold({ children }: { children: React.ReactNode }) {
  return <span className="text-[#9c6f1f] font-semibold">{children}</span>;
}

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
      answerPanel={(turnToNext) => (
        <AnswerPanel
          mode="single"
          length={6}
          numeric
          onCheck={(value) => value === ANSWERS.wall}
          onCorrect={turnToNext}
          hints={HINTS}
          centered
        />
      )}
    >
      {() => (
        <>
          <DropCap
            letter="N"
            className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-6"
          >
            ehemiah 3 reads like a dry ledger — names, sections, gates. Most
            people skip it. But this is a passage you must listen to
            carefully. Hananiah hid three names inside that list: the men
            entrusted with pieces of the original cipher. They are not
            marked with any special title. They are simply there, working
            alongside everyone else, waiting to be found. Your key from the
            previous chamber tells you what to look for. Each name carries
            one of your three letters within it. Find them. Count
            carefully. Every builder or group who took up a section counts
            as one — two names working together count as one hand.
          </DropCap>

          {/* Flowing prose fragment */}
          <div className="relative my-6 rotate-[0.4deg] border border-seal/40 rounded-sm shadow-[0_12px_30px_rgba(40,25,8,0.3)] ledger-grain">
            <div className="relative px-6 sm:px-7 py-7">
              <p className="font-courier text-[10.5px] uppercase tracking-[0.2em] text-[#7c4a16] mb-5">
                Nehemiah 3:1&ndash;25 (ESV) &mdash; The Builders of the Wall
              </p>
              <div className="space-y-3.5 font-inter text-[14.5px] leading-relaxed text-[#4a3414]">
                <p>
                  Then <Gold>Eliashib</Gold> the high priest rose up with his brothers
                  the priests, and they built the Sheep Gate. They
                  consecrated it and set its doors. They consecrated it as
                  far as the Tower of the Hundred, as far as the Tower of
                  Hananel. And next to him the men of Jericho built. And
                  next to them <Gold>Zaccur</Gold> the son of Imri built.
                </p>
                <p>
                  The sons of <Gold>Hassenaah</Gold> built the Fish Gate. They laid its
                  beams and set its doors, its bolts, and its bars. And
                  next to them <Gold>Meremoth</Gold> the son of Uriah, son of Hakkoz
                  repaired. And next to them <Gold>Meshullam</Gold> the son of
                  Berechiah, son of Meshezabel repaired. And next to them{" "}
                  <Gold>Zadok</Gold> the son of Baana repaired. And next to them the{" "}
                  <Gold>Tekoites</Gold> repaired, but their nobles would not stoop to
                  serve their Lord.
                </p>
                <p>
                  <Gold>Joiada</Gold> the son of Paseah and <Gold>Meshullam</Gold> the son of
                  Besodeiah repaired the Gate of Yeshanah. They laid its
                  beams and set its doors, its bolts, and its bars. And
                  next to them repaired <Gold>Melatiah</Gold> the Gibeonite{" "}
                  and <Gold>Jadon</Gold> the Meronothite, the men of Gibeon and of
                  Mizpah, the seat of the governor of the province Beyond
                  the River. Next to them <Gold>Uzziel</Gold> the son of Harhaiah,
                  goldsmiths, repaired. Next to him <Gold>Hananiah</Gold>, one of the
                  perfumers, repaired, and they restored Jerusalem as far
                  as the Broad Wall. Next to them <Gold>Rephaiah</Gold> the son of Hur,
                  ruler of half the district of Jerusalem, repaired. Next
                  to them <Gold>Jedaiah</Gold> the son of Harumaph repaired
                  opposite his house. And next to him <Gold>Hattush</Gold> the son of
                  Hashabneiah repaired. <Gold>Malkijah</Gold> the son of Harim and{" "}
                  <Gold>Hasshub</Gold> the son of Pahath-moab repaired another section
                  and the Tower of the Ovens. Next to him <Gold>Shallum</Gold> the son
                  of Hallohesh, ruler of half the district of Jerusalem,
                  repaired, he and his daughters.
                </p>
                <p>
                  <Gold>Hanun</Gold> and the inhabitants of Zanoah repaired the Valley
                  Gate. They rebuilt it and set its doors, its bolts, and
                  its bars, and repaired a thousand cubits of the wall, as
                  far as the Dung Gate.
                </p>
                <p>
                  <Gold>Malchijah</Gold> the son of Rechab, ruler of the district of
                  Beth-haccherem, repaired the Dung Gate. He rebuilt it and
                  set its doors, its bolts, and its bars.
                </p>
                <p>
                  And <Gold>Shallum</Gold> the son of Col-hozeh, ruler of the district
                  of Mizpah, repaired the Fountain Gate. He rebuilt it and
                  covered it and set its doors, its bolts, and its bars.
                  And he built the wall of the Pool of Shelah of the
                  king&rsquo;s garden, as far as the stairs that go down
                  from the city of David. After him <Gold>Nehemiah</Gold> the son of
                  Azbuk, ruler of half the district of Beth-zur, repaired
                  to a point opposite the tombs of David, as far as the
                  artificial pool, and as far as the house of the mighty
                  men. After him the Levites repaired: <Gold>Rehum</Gold> the son of
                  Bani. Next to him <Gold>Hashabiah</Gold>, ruler of half the district
                  of Keilah, repaired for his district. After him their
                  brothers repaired: <Gold>Bavvai</Gold> the son of Henadad, ruler of
                  half the district of Keilah. Next to him{" "}
                  <Gold>Ezer</Gold> the son of Jeshua, ruler of Mizpah,
                  repaired another section opposite the ascent to the
                  armory at the buttress.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </ChapterPageShell>
  );
}
