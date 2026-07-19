import { ContactWizard } from "../components/sections/contact/ContactWizard";

/** No page hero here — confirmed via the live-site audit, the Contact page
 *  goes straight from the header into the wizard card, then the footer. */
export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container">
        <ContactWizard />
      </div>
    </section>
  );
}