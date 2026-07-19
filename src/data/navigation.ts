export interface NavItem {
  label: string;
  to: string;
}

/** Header nav — mirrors the exact 4 items on the live site (Home/Products/How/About). */
export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "How", to: "/how" },
  { label: "About", to: "/about" },
];