export interface LegalSection {
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  list?: string[];
}

/** Verbatim text captured via `document.body.innerText` from
 *  https://www.tgi.gold/privacy-policy/ during the live-site audit. */
export const privacyPolicySections: LegalSection[] = [
  {
    heading: "I. Introduction",
    level: 2,
    paragraphs: [
      "We process personal data only to the extent necessary to provide a functional, secure, and user-friendly website, including its content and services. This Privacy Policy explains which personal data we process, for what purposes, on which legal basis, and which rights users and data subjects have.",
    ],
  },
  {
    heading: "II. Controller",
    level: 2,
    paragraphs: [
      "The controller responsible for this website is:",
      "TGI international L.L.C-FZ\nMeydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE\nRegistration Number: 2647712\nIncorporation Date: 16 April 2026\nBusiness Nature: Online Marketing & Consulting\nRegulated by Meydan Freezone Regulation",
      "Contact: Email: office@tgi.gold",
    ],
  },
  {
    heading: "III. Rights of Users and Data Subjects",
    level: 2,
    paragraphs: ["Where the GDPR applies, users and data subjects have the following rights:"],
    list: [
      "Right of access pursuant to Art. 15 GDPR",
      "Right to rectification pursuant to Art. 16 GDPR",
      "Right to erasure pursuant to Art. 17 GDPR",
      "Right to restriction of processing pursuant to Art. 18 GDPR",
      "Right to data portability pursuant to Art. 20 GDPR",
      "Right to object pursuant to Art. 21 GDPR",
      "Right to withdraw consent at any time pursuant to Art. 7(3) GDPR",
      "Right to lodge a complaint with a competent data protection supervisory authority pursuant to Art. 77 GDPR",
    ],
  },
  {
    heading: "IV. General Data Processing on This Website",
    level: 2,
    paragraphs: [
      "We delete or restrict the processing of personal data as soon as the purpose of storage no longer applies, unless legal retention obligations or legitimate interests require longer storage.",
    ],
  },
  {
    heading: "1. Server Log Files",
    level: 3,
    paragraphs: [
      "When you access this website, technical data is automatically transmitted by your browser to our hosting provider. This may include the browser type and version, operating system, referrer URL, accessed pages, date and time of access, IP address, and similar technical information.",
      "The processing is necessary to ensure the stability, functionality, and security of the website. The legal basis is Art. 6(1)(f) GDPR. Server log files are generally stored only for as long as technically necessary, unless longer retention is required for security or evidentiary purposes.",
    ],
  },
  {
    heading: "2. Cookies",
    level: 3,
    paragraphs: [
      "Our website uses cookies and similar technologies. Some cookies are technically necessary for the operation of the website. Other cookies, such as analytics or marketing cookies, are only used if you have given your consent.",
      "The legal basis for technically necessary cookies is Art. 6(1)(f) GDPR. The legal basis for non-essential cookies is your consent pursuant to Art. 6(1)(a) GDPR.",
      "You can prevent or restrict the use of cookies through your browser settings. However, this may limit the functionality of the website.",
    ],
  },
  {
    heading: "3. Cookiebot Consent Management",
    level: 3,
    paragraphs: [
      "We use Cookiebot CMP to manage cookie consent on this website. Cookiebot is provided by Usercentrics A/S, Havnegade 39, 1058 Copenhagen, Denmark.",
      "Cookiebot stores information about your consent choices, including an anonymized IP address, date and time of consent, browser information, the website URL, and an anonymous encrypted consent key.",
      "The legal basis is Art. 6(1)(c) GDPR where consent documentation is legally required, and Art. 6(1)(f) GDPR based on our legitimate interest in legally compliant consent management.",
    ],
  },
  {
    heading: "4. Contact Form",
    level: 3,
    paragraphs: [
      "If you contact us using the contact form on this website, we process the personal data you provide in order to receive, route, and respond to your request. Depending on the fields completed, this may include your salutation, title, first and last name, email address, phone number (including dialing code), country, preferred method of contact, the reason for your inquiry, and the content of your message. For security and abuse-prevention purposes, technical metadata such as your IP address, browser information, the referring URL, and the time of submission may also be processed.",
      "The legal basis is Art. 6(1)(b) GDPR where your request relates to pre-contractual or contractual matters, Art. 6(1)(a) GDPR where you have given your consent via the consent checkbox in the form, and Art. 6(1)(f) GDPR based on our legitimate interest in responding to inquiries and operating a functional contact form.",
      "To receive, process, and deliver contact requests, we use the following service providers acting as processors on our behalf:\n– Formspree (Formspree, Inc., USA) – receives and stores the form submissions;\n– Zapier (Zapier, Inc., USA) – automates the routing of submissions\n– SendLayer (SendLayer, Awesome Motive, Inc., USA) – delivers the resulting notification emails.",
      "In addition, a copy of each request is stored in the database of this website for backup and processing purposes. As these service providers are located in the United States, your data may be transferred outside the EU/EEA; such transfers are subject to appropriate safeguards as described in Section IV.9 (International Data Transfers).",
      "We retain contact requests for as long as necessary to process your inquiry and to comply with any applicable legal retention obligations, after which they are deleted or restricted.",
    ],
  },
  {
    heading: "5. Wordfence Security",
    level: 3,
    paragraphs: [
      "We use the Wordfence security plugin to protect this website against unauthorized access, malware, brute-force attacks, and other security threats. Wordfence is provided by Defiant, Inc., 800 5th Ave Ste 4100, Seattle, WA 98104, USA.",
      "For security purposes, Wordfence may process IP addresses, access times, attempted logins, browser information, and other technical security data.",
      "The legal basis is Art. 6(1)(f) GDPR. Our legitimate interest lies in protecting the website, preventing misuse, and ensuring the security of our systems.",
    ],
  },
  {
    heading: "6. Analytics Services",
    level: 3,
    paragraphs: [
      "If analytics tools such as Google Analytics are activated on this website, we use them only with your consent. Analytics services help us understand how visitors use our website and improve its content, structure, and performance.",
      "The legal basis is Art. 6(1)(a) GDPR. You can withdraw your consent at any time through the cookie settings on this website.",
    ],
  },
  {
    heading: "7. Embedded Videos and Media",
    level: 3,
    paragraphs: [
      "This website may display video or media content. Where media files are loaded from external or separate hosting infrastructure, technical data such as your IP address, browser information, and access time may be transmitted to the respective server in order to deliver the media content.",
      "The legal basis is Art. 6(1)(f) GDPR. Our legitimate interest lies in providing an informative and functional website experience.",
    ],
  },
  {
    heading: "8. Social Media Links",
    level: 3,
    paragraphs: [
      "Our website may contain links to external social media profiles, such as Instagram, YouTube, or similar platforms. These are simple links. Data is only transmitted to the respective provider when you click the link and leave our website.",
      "After clicking such links, the data processing is governed by the privacy policy of the respective platform provider.",
    ],
  },
  {
    heading: "9. International Data Transfers",
    level: 3,
    paragraphs: [
      "As the controller is located in the United Arab Emirates, personal data may be processed outside the European Union or European Economic Area. Where required, appropriate safeguards are used to protect personal data in accordance with applicable data protection laws.",
      "Where service providers process personal data outside the EU or EEA, we rely on appropriate safeguards such as adequacy decisions, standard contractual clauses, or other legally recognized transfer mechanisms where applicable.",
    ],
  },
  {
    heading: "V. Cookie Declaration",
    level: 2,
    paragraphs: [
      "This website uses Cookiebot to display and manage the current cookie declaration. You can change or withdraw your consent at any time through the cookie settings on this website.",
      "Your consent applies to the following domain:",
      "www.tgi.gold",
    ],
  },
  {
    heading: "VI. Updates to This Privacy Policy",
    level: 2,
    paragraphs: [
      "We may update this Privacy Policy from time to time if legal requirements, technical changes, or changes to our services make this necessary.",
      "Last updated: May 2026",
    ],
  },
];

/** Verbatim text captured via `document.body.innerText` from
 *  https://www.tgi.gold/legal-notice/ during the live-site audit. */
export const legalNoticeSections: LegalSection[] = [
  {
    heading: "TGI international L.L.C-FZ",
    level: 2,
    paragraphs: [
      "Registration Number 2647712\nIncorpation Date: 16 April 2026\nBusiness Nature: Online Marketing & Consulting\nRegulated by Meydan Freezone Regulation",
      "Address:\nArenco Tower, Office 003, Floor O, Media City, Dubai, UAE",
    ],
  },
  {
    heading: "Liability for the content of this website",
    level: 3,
    paragraphs: [
      "We are constantly developing the content of this website and endeavor to provide correct and up-to-date information. Unfortunately, we cannot accept any liability for the accuracy of all content on this website, especially that provided by third parties. As a service provider, we are not obliged to monitor the information transmitted or stored by you or to investigate circumstances that indicate illegal activity.",
      "Our obligations to remove information or to block the use of information in accordance with the general laws due to judicial or official orders remain unaffected, even in the case of our non-responsibility.",
      "If you notice any problematic or illegal content, please contact us immediately so that we can remove the illegal content. You will find the contact details in the legal notice.",
    ],
  },
  {
    heading: "Liability for links on this website",
    level: 3,
    paragraphs: [
      "Our website contains links to other websites for whose content we are not responsible. We are not liable for linked websites, as we had and have no knowledge of illegal activities, we have not noticed any such illegal activities and we would remove links immediately if we became aware of any illegal activities.",
      "If you notice any illegal links on our website, please contact us. You will find the contact details in the legal notice.",
    ],
  },
  {
    heading: "Copyright notice",
    level: 3,
    paragraphs: [
      "All contents of this website (images, photos, texts, videos) are subject to copyright. Please ask us before you distribute, reproduce or exploit the content of this website, for example by republishing it on other websites. If necessary, we will prosecute the unauthorized use of parts of the contents of our site.",
    ],
  },
  {
    heading: "Media credits",
    level: 3,
    paragraphs: [
      "The images, photos and graphics on this website are protected by copyright.",
      "The image rights are owned by:",
      "TGI international L.L.C-FZ",
      "All texts are protected by copyright.",
    ],
  },
];