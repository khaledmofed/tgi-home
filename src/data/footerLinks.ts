export interface FooterLink {
  label: string;
  to: string;
}

export const footerLinks: FooterLink[] = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Legal Notice", to: "/legal-notice" },
];

/** Verbatim jurisdiction-restriction disclaimer from the site footer — do not paraphrase. */
export const footerDisclaimer =
  "Note: The content of this website is not intended for individuals or entities located in " +
  "Austria, Germany, Switzerland, Liechtenstein, any country of the European Economic Area (EEA), " +
  "as well as AFG, BLR, CAF, CAN, CHN, COD, CUB, ETH, HKG, IRN, IRQ, LBN, LBY, MLI, MMR, NIC, PRK, " +
  "RUS, SDN, SOM, SSD, SYR, UAE, UKR, USA, VEN and YEM. TGI International L.L.C-FZ does not operate " +
  "in these countries and does not sell products or services there.";