import Hero from "@/components/hero/page";
import WhyUs from "@/components/whyUs/page";
import WhatWeDo from "@/components/WhatWeDo/page";
import Causes from "@/components/causes/page";
import About from "@/components/about/page";
import ServicesSection from "@/components/ServiceSection/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ServicesSection />
      <About />
      <Causes />
      <WhatWeDo />
      <WhyUs />
    </div>
  );
}
