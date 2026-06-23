"use client";

import { useRouter } from "next/navigation";
import { ParchmentPanel } from "@/components/ParchmentPanel";
import { OrnamentalDivider } from "@/components/OrnamentalDivider";
import { DossierFooter } from "@/components/DossierFooter";
import { DropCap } from "@/components/DropCap";

export default function Home() {
  const router = useRouter();

  return (
    <div className="dossier-backdrop flex justify-center px-4 sm:px-6 py-9 sm:py-12">
      <div className="w-full max-w-[680px]">
        <ParchmentPanel>
          <div className="text-center">
            <div
              className="w-[84px] h-[84px] rounded-full mx-auto mb-7 flex items-center justify-center border border-black/35 animate-sealfloat"
              style={{
                background:
                  "radial-gradient(circle at 36% 30%, #9c4332, #6b2018 68%, #501007)",
                boxShadow:
                  "inset 0 2px 6px rgba(255,180,150,.35), inset 0 -5px 11px rgba(0,0,0,.5), 0 8px 22px rgba(0,0,0,.4)",
              }}
              aria-hidden
            >
              <span className="font-cinzel font-bold text-2xl text-[#eccca0] tracking-wide [text-shadow:0_1px_2px_rgba(0,0,0,.55)]">
                LP
              </span>
            </div>

            <p className="font-courier text-[11px] tracking-[0.3em] uppercase text-[#8a5a22] mb-4">
              Father&rsquo;s Day &middot; Field Dossier
            </p>

            <h1 className="font-cinzel font-bold text-[40px] sm:text-[56px] leading-[1.05] text-[#241a0e]">
              The Lord&rsquo;s Portion
            </h1>
          </div>

          <OrnamentalDivider />

          <div>
            <p className="font-courier text-[11px] tracking-[0.25em] uppercase text-[#8a5a22] text-center mb-4">
              Dossier &middot; 01 &middot; The Briefing
            </p>
            <DropCap letter="I" className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19] mb-4">
              n the fourth year of Solomon&rsquo;s reign, his chief treasurer Hananiah set aside a consecrated reserve — silver, gold, and sacred vessels — beyond the official temple treasury, encoding its location in the cubit measurements of 1 Kings 6 and passing the secret to a trusted line of Levites. When Babylon sacked Jerusalem, the reserve didn&rsquo;t disappear — it moved west, carried by exiled believers, partially recovered under Nehemiah, and finally entrusted to a merchant woman in Philippi named Lydia. She hid it again, encoding its location across fragments woven into her correspondence with Paul. She called it <i>The Lord&rsquo;s Portion</i> — a stewardship, not a secret, waiting for the right person in the right hour.
            </DropCap>
            <p className="font-inter text-[16.5px] leading-[1.75] text-[#3a2c19]">
              That hour is now. Three fragments have surfaced, and a man named Demas — a scholar tied to a ministry more interested in wealth than worship — has been tracking them. He is one move behind you. You are a man who has spent a lifetime building things that last. Hananiah believed someone like you would come. Find the treasure. Steward it well.
            </p>
          </div>

          <OrnamentalDivider />

          <div>
            <p className="font-courier text-[11px] tracking-[0.25em] uppercase text-[#8a5a22] text-center mb-5">
              Dossier &middot; 02 &middot; Field Protocol
            </p>
            <div className="flex flex-col gap-3.5">
              <div className="flex gap-4 items-start">
                <span className="flex-none font-cinzel font-bold text-lg text-[#a8761f] leading-tight">01</span>
                <span className="font-inter text-base leading-relaxed text-[#3a2c19]">
                  Read each passage carefully, aloud, with the family.
                </span>
              </div>
              <div className="h-px bg-seal/20" />
              <div className="flex gap-4 items-start">
                <span className="flex-none font-cinzel font-bold text-lg text-[#a8761f] leading-tight">02</span>
                <span className="font-inter text-base leading-relaxed text-[#3a2c19]">
                  Decode the clue it conceals.
                </span>
              </div>
              <div className="h-px bg-seal/20" />
              <div className="flex gap-4 items-start">
                <span className="flex-none font-cinzel font-bold text-lg text-[#a8761f] leading-tight">03</span>
                <span className="font-inter text-base leading-relaxed text-[#3a2c19]">
                  Enter the cipher to break the seal and turn the page.
                </span>
              </div>
            </div>
          </div>

          <OrnamentalDivider />

          <div className="text-center">
            <button
              onClick={() => router.push("/briefing")}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-sm font-courier font-bold text-sm uppercase tracking-[0.25em] text-[#241a0e] bg-gradient-to-b from-gold-light to-gold shadow-[0_8px_22px_rgba(156,127,48,0.35)] hover:brightness-105 active:translate-y-px transition"
            >
              Open the Dossier <span className="font-cinzel text-lg">&rsaquo;</span>
            </button>
          </div>

          <DossierFooter />
        </ParchmentPanel>
      </div>
    </div>
  );
}
