import { LegalArticle } from "../components/sections/LegalArticle";
import { legalNoticeSections } from "../data/legalContent";

export default function LegalNoticePage() {
  return <LegalArticle pageTitle="Legal Notice" sections={legalNoticeSections} />;
}