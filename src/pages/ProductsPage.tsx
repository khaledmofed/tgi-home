import { PageHero } from "../components/sections/PageHero";
import { ProductComparisonSection } from "../components/sections/ProductComparisonSection";
import { WhatYouReceiveSection } from "../components/sections/WhatYouReceiveSection";
import { PaymentMethodsSection } from "../components/sections/PaymentMethodsSection";
import { SellOrDeliverSection } from "../components/sections/SellOrDeliverSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { productsHero } from "../data/productsContent";
import { finalCta } from "../data/homeContent";

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow={productsHero.eyebrow} title={productsHero.title} subtitle={productsHero.subtitle} />
      <ProductComparisonSection />
      <WhatYouReceiveSection />
      <PaymentMethodsSection />
      <SellOrDeliverSection />
      <FinalCtaSection eyebrow={finalCta.eyebrow} title={finalCta.title} />
    </>
  );
}