import { whatYouReceive } from "../../data/productsContent";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { ScrollReveal } from "../ui/ScrollReveal";
import cardStyles from "../ui/Card.module.css";

export function WhatYouReceiveSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionEyebrow eyebrow={whatYouReceive.eyebrow} title={whatYouReceive.title} align="left" level={2} />
        <div className={cardStyles.grid2}>
          {whatYouReceive.cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.08} className={[cardStyles.card, cardStyles.padded].join(" ")}>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}