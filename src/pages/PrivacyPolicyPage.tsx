import { LegalArticle } from "../components/sections/LegalArticle";
import { privacyPolicySections } from "../data/legalContent";

export default function PrivacyPolicyPage() {
  return <LegalArticle pageTitle="Privacy Policy" sections={privacyPolicySections} />;
}