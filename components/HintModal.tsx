"use client";

import { useState } from "react";

export function HintModal({
  hints,
  onClose,
}: {
  hints: string[];
  onClose: () => void;
}) {
  const [revealed, setRevealed] = useState(1);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-5"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-sm border border-seal/60 bg-parchment-light p-7 shadow-2xl parchment-grain"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close hints"
          className="absolute top-3 right-4 text-[#6b563a] hover:text-[#241a0e] text-xl leading-none"
        >
          &times;
        </button>
        <h3 className="relative font-cinzel text-lg font-bold text-[#241a0e] mb-4">
          Hints
        </h3>
        <div className="relative space-y-3">
          {hints.slice(0, revealed).map((h, i) => (
            <p
              key={i}
              className="font-inter text-sm leading-relaxed text-[#3a2c19] border-l-2 border-gold bg-gold/10 px-3 py-2"
            >
              <span className="font-courier text-[10px] uppercase tracking-wider text-[#7c4a16] block mb-1">
                Hint {i + 1}
              </span>
              {h}
            </p>
          ))}
        </div>
        {revealed < hints.length && (
          <button
            onClick={() => setRevealed((r) => r + 1)}
            className="relative mt-4 w-full font-courier text-xs uppercase tracking-[0.15em] text-[#241a0e] bg-gradient-to-b from-gold-light to-gold rounded-sm py-2.5 hover:brightness-105"
          >
            Reveal next hint
          </button>
        )}
      </div>
    </div>
  );
}
