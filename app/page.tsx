import { BenefitsBar } from "@/components/benefits-bar";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TemplateCatalog } from "@/components/template-catalog";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <BenefitsBar />
      <TemplateCatalog />
      <HowItWorks />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
