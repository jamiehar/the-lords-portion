"use client";

import { useEffect, useState } from "react";
import { ANSWERS } from "@/lib/constants";

const GM_SESSION_KEY = "gm_authenticated";

function Accordion({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-red-900/40 rounded-sm">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left font-courier text-xs uppercase tracking-[0.15em] text-red-300 hover:text-red-200"
      >
        {label}
        <span className="text-red-500">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 font-inter text-sm leading-relaxed text-neutral-300">
          {children}
        </div>
      )}
    </div>
  );
}

function PuzzleSection({
  number,
  title,
  answer,
  unlocks,
  logic,
  hints,
}: {
  number: string;
  title: string;
  answer: string;
  unlocks: string;
  logic: string;
  hints: { label: string; text: string }[];
}) {
  return (
    <section className="border border-red-900/30 rounded-sm bg-neutral-950/60 p-6 mb-6">
      <p className="font-courier text-xs uppercase tracking-[0.2em] text-red-500 mb-1">
        Puzzle {number}
      </p>
      <h2 className="font-cinzel text-xl font-bold text-neutral-100 mb-4">{title}</h2>

      <p className="font-courier text-[11px] uppercase tracking-[0.15em] text-neutral-500 mb-1">
        Answer
      </p>
      <p className="font-cinzel text-3xl font-bold text-red-400 mb-4">{answer}</p>

      <p className="font-inter text-sm text-neutral-300 mb-4">{unlocks}</p>

      <p className="font-courier text-[11px] uppercase tracking-[0.15em] text-neutral-500 mb-1">
        Logic
      </p>
      <p className="font-inter text-sm leading-relaxed text-neutral-300 mb-5">{logic}</p>

      {hints.length > 0 && (
        <div className="space-y-2">
          {hints.map((h, i) => (
            <Accordion key={i} label={h.label}>
              {h.text}
            </Accordion>
          ))}
        </div>
      )}
    </section>
  );
}

export default function GmPage() {
  const [authed, setAuthed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(GM_SESSION_KEY) === "1");
    setChecked(true);
  }, []);

  const handleAccess = () => {
    if (password.toUpperCase() === ANSWERS.gm_password) {
      sessionStorage.setItem(GM_SESSION_KEY, "1");
      setAuthed(true);
      setDenied(false);
    } else {
      setDenied(true);
      setTimeout(() => setDenied(false), 1500);
    }
  };

  if (!checked) return <div className="min-h-screen bg-neutral-950" />;

  if (!authed) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
        <div className="w-full max-w-xs text-center">
          <p className="font-courier text-xs uppercase tracking-[0.25em] text-red-600 mb-6">
            Restricted Access
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAccess()}
            autoComplete="off"
            placeholder="Password"
            className={`w-full h-12 px-4 mb-3 bg-neutral-900 border rounded-sm text-center font-courier text-neutral-100 outline-none tracking-widest ${
              denied ? "animate-shake border-red-600" : "border-red-900/50 focus:border-red-600"
            }`}
          />
          {denied && (
            <p className="font-courier text-xs uppercase tracking-[0.15em] text-red-500 mb-3">
              Access denied.
            </p>
          )}
          <button
            onClick={handleAccess}
            className="w-full h-12 rounded-sm font-courier font-bold text-xs uppercase tracking-[0.2em] text-neutral-100 bg-red-800 hover:bg-red-700 transition"
          >
            Access
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-red-400 mb-10 text-center tracking-wide">
          Game Master &middot; The Lord&rsquo;s Portion
        </h1>

        <PuzzleSection
          number="1"
          title="The Architect's Cipher"
          answer="TJE"
          unlocks="🍽 Unlocks: Dad gets seated for dinner"
          logic="Six highlighted numbers in 1 Kings 6 — 20 (v.2), 10 (v.3), 5 (v.6), 5 (v.10), 10 (v.23), 20 (v.20). Unique values in order of first appearance: 20, 10, 5. A=1 cipher: 20=T, 10=J, 5=E. Answer: TJE."
          hints={[
            { label: "Hint 1", text: "The instruction says 'a true cipher wastes nothing.' What does that tell you about the repeated numbers?" },
            { label: "Hint 2", text: "There are only three unique numbers among the six highlighted. Find them in the order they first appear." },
            { label: "Hint 3", text: "Using A=1, B=2… and the three unique numbers, what letter does each one give you?" },
          ]}
        />

        <PuzzleSection
          number="2"
          title="The Wall and the Names"
          answer="101425"
          unlocks="🍽 Unlocks: The salad is served"
          logic="Three names are hidden in the flowing ESV text of Nehemiah 3, each carrying one letter of TJE from chapter I: Melatiah the Gibeonite (carries T, 'Mela-T-iah'), Jedaiah the son of Harumaph (carries J), and Ezer the son of Jeshua (carries E). Counting every distinct builder or group as one entry, in order of appearance, Melatiah is entry 10, Jedaiah is entry 14, and Ezer is entry 25. Written in order: 101425."
          hints={[
            { label: "Hint 1", text: "Your key from Puzzle 1 is TJE. Each letter sounds within one of the three highlighted names. Say each name aloud — where do you hear the letter?" },
            { label: "Hint 2", text: "Count every builder or group as one entry. Two names working side by side count as one. Count carefully through the list to find what position each highlighted name holds." },
            { label: "Hint 3", text: "Melatiah is entry 10, Jedaiah is entry 14, and Ezer is entry 25. Written in the order they appear in the passage: 101425." },
          ]}
        />

        <PuzzleSection
          number="3"
          title="The Merchant and the Deacon"
          answer="PHIACTKNG"
          unlocks="🍽 Unlocks: Steak and pasta are served"
          logic="Three gold phrases in Philippians match three entries in Lydia's Codex. 'Who are at Philippi' → PHI (Lydia's city, named directly). 'In the beginning of the gospel' → ACT (Acts 16, when Paul first came to Philippi and Lydia was baptized). 'A fragrant offering' → KNG (temple language from 1 Kings 6:15, the cedar-lined sanctuary). Written in verse order: PHIACTKNG."
          hints={[
            { label: "Hint 1", text: "Each gold phrase is pointing somewhere else in scripture. Try reading each one aloud — what does it remind you of? Where in the Bible do you hear that language?" },
            { label: "Hint 2", text: "'Who are at Philippi' names the city directly. 'A fragrant offering' is temple language from 1 Kings. 'In the beginning of the gospel' points to when the gospel first arrived in Philippi — which book records that?" },
            { label: "Hint 3", text: "PHI = Philippi (Phil. 1:1), ACT = Acts (the founding of the church, Acts 16), KNG = Kings (the temple cedar chambers). Written in verse order: PHIACTKNG." },
          ]}
        />

        <PuzzleSection
          number="4"
          title="The Prosperity Test"
          answer="C"
          unlocks="🍽 Unlocks: Dessert is served"
          logic="Jeremiah 29:11 is a corporate word to exiled Israel, not a personal prosperity promise. Demas's annotation twists it into financial advice. The other three verses are presented faithfully."
          hints={[
            { label: "Hint 1", text: "One of these four statements has an annotation from Demas himself. Look for where his voice intrudes on the scripture." },
            { label: "Hint 2", text: "Jeremiah 29:11 was written to the entire nation of Israel in exile — not to an individual. How is Demas presenting it?" },
            { label: "Hint 3", text: "The forgery is C. Demas twists a corporate promise of national restoration into personal financial advice." },
          ]}
        />

        <PuzzleSection
          number="5"
          title="The Steward's Oath"
          answer="JOHN"
          unlocks="🍽 Unlocks: The escape — card and celebration"
          logic="The answer is Dad's own first name. The vault opens when he realizes the faithful steward described throughout the whole story is him."
          hints={[]}
        />

        <p className="text-center font-courier text-[11px] uppercase tracking-[0.15em] text-neutral-600 mt-10">
          File No. LP&middot;0615 &middot; Game Master Only
        </p>
      </div>
    </div>
  );
}
