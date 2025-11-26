import React from "react";
import Hero from "../components/Hero";
import ClientsSection from "../components/Clients";
import StatsSection from "../components/StatsSection";
import MarketingSection from "../components/DigitalMarketing";
import WhyChooseUs from "../components/WhyChoose";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import KPISection from "../components/KpiSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsSection />
      <StatsSection />
      <MarketingSection />
      <KPISection/>
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </>
  );
}
