import { aboutIntro } from "../../data/aboutContent";
import { ScrollReveal } from "../ui/ScrollReveal";
import styles from "./AboutIntroSection.module.css";

/** About's top section is a static image+text panel — confirmed via the
 *  live-site audit to NOT use the video hero that Home/Products/How share. */
export function AboutIntroSection() {
  return (
    <section className="section-pad" style={{ paddingTop: "var(--space-10)" }}>
      <div className="container">
        <ScrollReveal className={styles.panel}>
          <div className={styles.imageWrap}>
            <img src={aboutIntro.image} alt="TGI International globe emblem" loading="eager" />
          </div>
          <div>
            <span className="eyebrow">{aboutIntro.eyebrow}</span>
            <h1 className="section-title" style={{ textAlign: "left" }}>
              {aboutIntro.title}
            </h1>
            <p className={styles.desc}>{aboutIntro.desc}</p>

            <div className={styles.rows}>
              {aboutIntro.rows.map((row) => (
                <div className={styles.row} key={row.index}>
                  <span className={styles.rowIndex}>{row.index}</span>
                  <div>
                    <h2 className={styles.rowTitle} style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-body)" }}>
                      {row.title}
                    </h2>
                    <p className="card-desc">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}