import { chooseModelSection } from "../../data/homeContent";
import { goldModels } from "../../data/goldModels";
import { GoldModelCard } from "../ui/GoldModelCard";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import cardStyles from "../ui/Card.module.css";

export function GoldModelsSection() {
  return (
    <section className="section-pad" id="products">
      <div className="container">
        <SectionEyebrow eyebrow={chooseModelSection.eyebrow} title={chooseModelSection.title} level={2} />
        <div className={cardStyles.grid3}>
          {goldModels.map((model, i) => (
            <GoldModelCard model={model} key={model.id} delay={i * 0.08} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-8)" }}>
          <Button to="/products#products" variant="primary">
            Explore Gold Models
          </Button>
        </div>
      </div>
    </section>
  );
}