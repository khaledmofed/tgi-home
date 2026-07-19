import { HeroSection } from "../components/sections/HeroSection";
import { GoldFeaturesSection } from "../components/sections/GoldFeaturesSection";
import { VideoSection } from "../components/sections/VideoSection";
import { GoldModelsSection } from "../components/sections/GoldModelsSection";
import { HowItWorksPreview } from "../components/sections/HowItWorksPreview";
import { BackofficeSection } from "../components/sections/BackofficeSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { finalCta } from "../data/homeContent";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GoldFeaturesSection />
      <VideoSection />
      <GoldModelsSection />
      <HowItWorksPreview />
      <BackofficeSection />
      <FinalCtaSection eyebrow={finalCta.eyebrow} title={finalCta.title} contactLabel="Contact us" />
    </>
  );
}