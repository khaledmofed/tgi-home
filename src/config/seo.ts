export interface RouteSeo {
  title: string;
  description: string;
}

/** Page titles mirror the exact <title> tags captured from the live site. */
export const seoByRoute: Record<string, RouteSeo> = {
  "/": {
    title: "TGI International | unique worldwide",
    description:
      "Access physical gold discounts from anywhere in the world. Get started today with monthly discounts as high as 5%.",
  },
  "/products": {
    title: "Products | TGI International",
    description:
      "Choose between structured gold models and access physical gold at a discount, secure storage and digital backoffice management.",
  },
  "/how": {
    title: "How It Works | TGI International",
    description:
      "From registration to gold purchase, the whole process is managed through your digital backoffice.",
  },
  "/about": {
    title: "About | TGI International",
    description:
      "TGI International combines the heritage of physical gold with a modern international structure for global access, transparency and growth.",
  },
  "/contact": {
    title: "Contact | TGI International",
    description: "Get in touch with TGI International.",
  },
  "/privacy-policy": {
    title: "Privacy Policy - TGI International | unique worldwide",
    description: "Privacy Policy for TGI International's website.",
  },
  "/legal-notice": {
    title: "Imprint | TGI International",
    description: "Legal notice and imprint for TGI International L.L.C-FZ.",
  },
};

export const defaultSeo: RouteSeo = {
  title: "TGI International | unique worldwide",
  description: "Access physical gold discounts from anywhere in the world.",
};