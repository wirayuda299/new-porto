import CallToAction from "@/components/cta";
import Experience from "@/components/experience/experience";
import FeaturedProjects from "@/components/featured-projects/feature-projects";
import { HeroParallax } from "@/components/hero/hero";
import Services from "@/components/services/services";
import Skills from "@/components/skills/skills";
import { getCaseStudies } from "@/sanity/action";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const projects = await getCaseStudies("all");
  return (
    <>
      <HeroParallax projects={projects} />
      <Skills />
      <Services />
      <Experience />
      <FeaturedProjects />
      <CallToAction />
    </>
  );
}
