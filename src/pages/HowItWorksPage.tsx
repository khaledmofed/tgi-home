import { PageHero } from "../components/sections/PageHero";
import { ProcessTimelineSection } from "../components/sections/ProcessTimelineSection";
import { AfterPurchaseSection } from "../components/sections/AfterPurchaseSection";
import { ReferralProgramSection } from "../components/sections/ReferralProgramSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { howHero } from "../data/howContent";
import { finalCta } from "../data/homeContent";

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow={howHero.eyebrow} title={howHero.title} subtitle={howHero.subtitle} />
      <ProcessTimelineSection />
      <AfterPurchaseSection />
      <ReferralProgramSection />
      <FinalCtaSection eyebrow={finalCta.eyebrow} title={finalCta.title} />
    </>
  );
}