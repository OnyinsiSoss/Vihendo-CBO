import Hero from "@/components/hero/page";
import Purpose from "@/components/purpose/page";
import Goals from "@/components/goals/page";
import WhyUs from "@/components/whyUs/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 m-20">
        <Purpose />
        <Goals />
      </div>
      <WhyUs />
    </div>
  );
}
