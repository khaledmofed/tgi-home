import { productOverview } from "../../data/productsContent";
import { goldModels } from "../../data/goldModels";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { GoldModelCard } from "../ui/GoldModelCard";
import cardStyles from "../ui/Card.module.css";

export function ProductComparisonSection() {
  return (
    <section className="section-pad" id="products">
      <div className="container">
        <SectionEyebrow
          eyebrow={productOverview.eyebrow}
          title={productOverview.title}
          desc={productOverview.desc}
          level={2}
        />
        <div className={cardStyles.grid3}>
          {goldModels.map((model, i) => (
            <GoldModelCard model={model} variant="detailed" key={model.id} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}