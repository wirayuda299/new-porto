import CallToAction from "@/components/cta";
import Experience from "@/components/experience/experience";
import FeaturedProjects from "@/components/featured-projects/feature-projects";
import Hero from "@/components/hero";
import Services from "@/components/services/services";
import Skills from "@/components/skills/skills";


export const metadata = {
  title: 'Home'
}

export default async function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Experience />
      <FeaturedProjects />
      <CallToAction />
    </>
  );
}
