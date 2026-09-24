import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/experience";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { WhatIBuildWith } from "@/components/sections/what-i-build-with";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIBuildWith />
      <FeaturedWork />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
