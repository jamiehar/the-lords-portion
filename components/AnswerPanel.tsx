"use client";

import { useEffect, useState } from "react";
import { CipherInput } from "./CipherInput";
import { StickyAnswerBar } from "./StickyAnswerBar";
import { HintModal } from "./HintModal";

interface AnswerPanelProps {
  mode: "boxes" | "single";
  length: number;
  numeric?: boolean;
  placeholder?: string;
  onCheck: (value: string) => boolean;
  onCorrect: () => void;
  hints?: string[];
  submitLabel?: string;
  wrongMessage?: string;
  showHint?: boolean;
  /** External control, used when the value is set by something other than typing (e.g. a card tap). */
  forcedValue?: string;
  inputDisabled?: boolean;
  centered?: boolean;
}

export function AnswerPanel({
  mode,
  length,
  numeric,
  placeholder,
  onCheck,
  onCorrect,
  hints = [],
  submitLabel = "Break Seal",
  wrongMessage = "The vault holds firm.",
  showHint = true,
  forcedValue,
  inputDisabled,
  centered,
}: AnswerPanelProps) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);

  useEffect(() => {
    if (forcedValue !== undefined) {
      setValue(forcedValue);
      setError(false);
    }
  }, [forcedValue]);

  const handleSubmit = () => {
    if (success) return;
    if (onCheck(value)) {
      setSuccess(true);
      setError(false);
      setTimeout(() => onCorrect(), 600);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 450);
    }
  };

  return (
    <>
      <StickyAnswerBar>
        {error && (
          <p className="mb-2 text-center font-courier text-[11px] uppercase tracking-[0.2em] text-red-400">
            {wrongMessage}
          </p>
        )}
        <div className="flex gap-3 items-stretch">
          <CipherInput
            mode={mode}
            length={length}
            value={value}
            onChange={(v) => {
              setValue(v);
              setError(false);
            }}
            onEnter={handleSubmit}
            shake={shake}
            success={success}
            numeric={numeric}
            placeholder={placeholder}
            disabled={success || inputDisabled}
            centered={centered}
          />
          <button
            onClick={handleSubmit}
            disabled={success}
            className="flex-none h-14 px-6 sm:px-7 rounded-sm font-courier font-bold text-xs uppercase tracking-[0.2em] text-[#241a0e] bg-gradient-to-b from-gold-light to-gold shadow-[0_6px_18px_rgba(156,127,48,0.35)] hover:brightness-105 active:translate-y-px disabled:opacity-70 transition"
          >
            {success ? "Sealed" : submitLabel}
          </button>
        </div>
        {showHint && hints.length > 0 && (
          <div className="mt-3 text-center">
            <button
              onClick={() => setHintOpen(true)}
              className="font-courier text-[11px] uppercase tracking-[0.15em] text-[#9a8f76] underline underline-offset-4 hover:text-gold"
            >
              Need a hint?
            </button>
          </div>
        )}
      </StickyAnswerBar>
      {hintOpen && <HintModal hints={hints} onClose={() => setHintOpen(false)} />}
    </>
  );
}
