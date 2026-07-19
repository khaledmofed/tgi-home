import { AboutIntroSection } from "../components/sections/AboutIntroSection";
import { StatisticsBar } from "../components/sections/StatisticsBar";
import { ValuesGridSection } from "../components/sections/ValuesGridSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { Button } from "../components/ui/Button";
import { finalCta } from "../data/homeContent";

export default function AboutPage() {
  return (
    <>
      <AboutIntroSection />
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <StatisticsBar />
          <div style={{ marginTop: "var(--space-8)" }}>
            <Button to="/products#products" variant="primary">
              Explore Gold Models
            </Button>
          </div>
        </div>
      </section>
      <ValuesGridSection />
      <FinalCtaSection eyebrow={finalCta.eyebrow} title={finalCta.title} />
    </>
  );
}