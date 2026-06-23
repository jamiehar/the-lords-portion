"use client";

import { useRef } from "react";

interface CipherInputProps {
  mode: "boxes" | "single";
  length: number;
  value: string;
  onChange: (v: string) => void;
  onEnter: () => void;
  shake: boolean;
  success: boolean;
  numeric?: boolean;
  placeholder?: string;
  disabled?: boolean;
  centered?: boolean;
}

export function CipherInput({
  mode,
  length,
  value,
  onChange,
  onEnter,
  shake,
  success,
  numeric,
  placeholder,
  disabled,
  centered,
}: CipherInputProps) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const filterChars = (s: string) =>
    (numeric ? s.replace(/[^0-9]/g, "") : s.replace(/[^a-zA-Z]/g, "")).toUpperCase();

  const stateClass = shake
    ? "animate-shake !border-red-700"
    : success
      ? "animate-gold-pulse !border-gold"
      : "border-gold/40 focus:border-gold focus:shadow-[0_0_0_2px_rgba(201,168,76,0.25)]";

  if (mode === "single") {
    return (
      <input
        type="text"
        inputMode={numeric ? "numeric" : "text"}
        maxLength={length}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(filterChars(e.target.value).slice(0, length))}
        onKeyDown={(e) => {
          if (e.key === "Enter") onEnter();
        }}
        autoComplete="off"
        autoCapitalize="characters"
        className={`w-full h-14 bg-[#15130d] border rounded-sm outline-none transition-shadow text-gold-light caret-gold font-courier text-lg font-bold tracking-widest px-4 placeholder:text-[#6f6857] placeholder:tracking-normal placeholder:font-inter placeholder:text-sm placeholder:font-normal disabled:opacity-70 ${centered ? "text-center" : ""} ${stateClass}`}
      />
    );
  }

  const cells = Array.from({ length }, (_, i) => value[i] || "");

  const handleInput = (i: number, raw: string) => {
    const ch = filterChars(raw).slice(-1);
    const next = [...cells];
    next[i] = ch;
    onChange(next.join(""));
    if (ch && i < length - 1) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onEnter();
    else if (e.key === "Backspace" && !cells[i] && i > 0) refs.current[i - 1]?.focus();
  };

  return (
    <div className={`flex gap-2 ${centered ? "justify-center" : "flex-1"}`}>
      {cells.map((c, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          type="text"
          inputMode={numeric ? "numeric" : "text"}
          maxLength={1}
          value={c}
          disabled={disabled}
          onChange={(e) => handleInput(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          autoComplete="off"
          autoCapitalize="characters"
          className={`w-12 h-14 text-center bg-[#15130d] border rounded-sm outline-none transition-shadow text-gold-light caret-gold font-courier text-2xl font-bold disabled:opacity-70 ${stateClass}`}
        />
      ))}
    </div>
  );
}
