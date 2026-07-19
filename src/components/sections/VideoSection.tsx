import { goldMarketVideoSection } from "../../data/homeContent";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { ScrollReveal } from "../ui/ScrollReveal";
import styles from "./VideoSection.module.css";

/** The "Entering a New Era" explainer video — click-to-play with native
 *  controls, not autoplaying (distinct from the hero background video). */
export function VideoSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionEyebrow eyebrow={goldMarketVideoSection.eyebrow} title={goldMarketVideoSection.title} level={2} />
        <ScrollReveal className={styles.frame}>
          <video
            className={styles.video}
            src="/videos/explainer-en.mp4"
            poster="/images/explainer-poster.webp"
            controls
            preload="none"
            playsInline
          >
            Your browser does not support HTML5 video.
          </video>
        </ScrollReveal>
      </div>
    </section>
  );
}