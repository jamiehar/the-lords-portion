import { ReactNode } from "react";

export function DropCap({
  letter,
  children,
  className = "",
}: {
  letter: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={className}>
      <span className="illuminated-cap" aria-hidden>
        {letter}
      </span>
      {children}
    </p>
  );
}
