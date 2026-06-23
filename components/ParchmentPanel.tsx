import { ReactNode } from "react";

export function ParchmentPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[5px] w-full border border-seal/45 shadow-[0_26px_60px_rgba(0,0,0,0.55)] ${className}`}
      style={{
        backgroundColor: "#e7d6ad",
        backgroundImage:
          "radial-gradient(circle at 10% 12%, rgba(120,80,30,.10), transparent 42%), radial-gradient(circle at 90% 90%, rgba(80,50,18,.14), transparent 46%), linear-gradient(150deg,#f1e6c8,#dcc89c)",
      }}
    >
      <div className="parchment-grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-3 border border-seal/20 rounded-[3px] pointer-events-none" />
      <div className="relative px-7 sm:px-10 py-9 sm:py-12">{children}</div>
    </div>
  );
}
