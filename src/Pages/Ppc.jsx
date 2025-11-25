import React from "react";
import TopPPCSection from "../components/PPC/herossection";
import ExpertiseInAds from "../components/PPC/AdsExpertise";
import ServicesAdsCampaign from "../components/PPC/ServiceAdsCampaigns";
import Footer from "../components/Footer";
import FAQSection from "../components/Faq";
import WhyChooseUs from "../components/WhyChoose";
import PPCSection from "../components/PPC/PpcSection";
import Testimonials from "../components/Testimonials";
import PpcSection from "../components/PPC/Ppcsec";


export default function Ppc() {
  return (
    <>
      <TopPPCSection/>
      <ExpertiseInAds/>
      <ServicesAdsCampaign/>
      <PpcSection/>
      <PPCSection/>
      <Testimonials/>
      <WhyChooseUs/>
      {/* <Testimonials/> */}
      <FAQSection/>
      <Footer/>
    </>
  );
}