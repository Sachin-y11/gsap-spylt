import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

import Navbar from "./components/Navbar";

import { useGSAP } from "@gsap/react";
import FlavourSection from "./sections/FlavourSection";
import HeroSections from "./sections/hero-sections";
import MessageSection from "./sections/MessageSection";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  }, []);

  return (
    <main>
      <Navbar />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <HeroSections />
          <MessageSection />
          <FlavourSection />
          <NutritionSection />

          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <FooterSection />
        </div>
      </div>
    </main>
  );
}

export default App;
