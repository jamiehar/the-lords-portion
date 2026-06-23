import { ReactNode } from "react";

export function StickyAnswerBar({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 pt-20 pb-5 px-4 sm:px-6 pointer-events-none bg-gradient-to-t from-ink via-ink/90 to-transparent">
      <div className="max-w-[680px] mx-auto pointer-events-auto">{children}</div>
    </div>
  );
}
