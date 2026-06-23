export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 my-7 ${className}`}
      aria-hidden
    >
      <span className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent to-gold/70" />
      <span className="text-gold text-[9px]">&#9670;</span>
      <span className="text-gold text-base">&#10070;</span>
      <span className="text-gold text-[9px]">&#9670;</span>
      <span className="h-px w-16 sm:w-20 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}
