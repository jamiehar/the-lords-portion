export function LockedNotice({ title }: { title: string }) {
  return (
    <div className="text-center py-14">
      <div className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center bg-[#c4b388] border border-seal/40 text-2xl">
        &#128274;
      </div>
      <h1 className="font-cinzel text-3xl font-bold text-[#241a0e]/30 mb-3">
        {title}
      </h1>
      <p className="font-inter italic text-[#6b563a]">
        This chamber is not yet open.
      </p>
    </div>
  );
}
