import type { LegalSection } from "../../data/legalContent";
import styles from "./LegalArticle.module.css";

interface LegalArticleProps {
  pageTitle: string;
  sections: LegalSection[];
}

/** Plain legal-article layout — no hero, no final CTA, matching /privacy-policy/ and /legal-notice/. */
export function LegalArticle({ pageTitle, sections }: LegalArticleProps) {
  return (
    <section className="section-pad">
      <div className="container">
        <div className={styles.article}>
          <h1 className={styles.pageTitle}>{pageTitle}</h1>
          {sections.map((section) => {
            const Heading = section.level === 2 ? "h2" : "h3";
            const headingClass = section.level === 2 ? styles.h2 : styles.h3;
            return (
              <div className={styles.section} key={section.heading}>
                <Heading className={headingClass}>{section.heading}</Heading>
                {section.paragraphs.map((paragraph, i) => (
                  <p className={styles.paragraph} key={i}>
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className={styles.list}>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}