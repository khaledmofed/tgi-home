export interface GoldModel {
  id: "1y" | "2y" | "3y";
  index: string;
  years: number;
  title: string;
  discountLabel: string;
  image: string;
  spec: {
    deliveryAfter: string;
    discounts: string;
    storage: string;
    delivery: string;
    cancellable: string;
  };
}

/** Exact figures captured from https://www.tgi.gold/products/ — not invented. */
export const goldModels: GoldModel[] = [
  {
    id: "1y",
    index: "01",
    years: 1,
    title: "1 year",
    discountLabel: "3% discount/month",
    image: "/images/gold-bar-1y.webp",
    spec: {
      deliveryAfter: "1 year",
      discounts: "3%/month",
      storage: "Physically Stored",
      delivery: "Worldwide Delivery",
      cancellable: "No",
    },
  },
  {
    id: "2y",
    index: "02",
    years: 2,
    title: "2 years",
    discountLabel: "4% discount/month",
    image: "/images/gold-bar-2y.webp",
    spec: {
      deliveryAfter: "2 years",
      discounts: "4%/month",
      storage: "Physically Stored",
      delivery: "Worldwide Delivery",
      cancellable: "No",
    },
  },
];
// {
//   id: "3y",
//   index: "03",
//   years: 3,
//   title: "3 years",
//   discountLabel: "5% discount/month",
//   image: "/images/gold-bar-3y.webp",
//   spec: {
//     deliveryAfter: "3 years",
//     discounts: "5%/month",
//     storage: "Physically Stored",
//     delivery: "Worldwide Delivery",
//     cancellable: "No",
//   },
// },
export interface StatItem {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  /** Skip thousands-separator grouping — for values like a year that aren't a count. */
  noSeparator?: boolean;
}

/** Exact figures from the "Track Record" stats bar (Home + About pages). */
export const trackRecordCaption =
  "Track Record of the Gold with Discount Model (figures refer to the Gold with Discount model in Europe)";

export const trackRecordStats: StatItem[] = [
  { prefix: "+ ", value: 50000, label: "happy customers" },
  { prefix: "+ $ ", value: 100, suffix: "M", label: "discounts paid out" },
  { prefix: "since ", value: 2021, label: "on the market", noSeparator: true },
];
