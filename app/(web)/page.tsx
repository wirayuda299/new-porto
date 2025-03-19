import Image from "next/image";

import CallToAction from "@/components/cta";
import Experience from "@/components/experience/experience";
import FeaturedProjects from "@/components/featured-projects/feature-projects";
import { HeroParallax } from "@/components/hero/hero";
import Skills from "@/components/skills/skills";
import Title from "@/components/title";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SERVICES } from "@/constants";
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
      <section className="size-full min-h-500 py-20">
        <div className="mx-auto max-w-1400">
          <Title text="Services" />
          <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-14 px-5 md:px-0">
            {SERVICES.map((service) => (
              <CardSpotlight
                key={service.title}
                className="bg-black/30 shadow border-none"
              >
                <div
                  key={service.title}
                  className=" sm:w-72 max-w-80 aspect-square rounded-md p-3"
                >
                  <div className="flex size-14 items-center justify-center rounded-lg group-hover:brightness-0 group-hover:invert">
                    <Image
                      className="size-8 object-contain aspect-auto"
                      src={service.icon}
                      width={30}
                      height={30}
                      alt={service.title}
                    />
                  </div>
                  <h3 className="pt-9 text-2xl font-semibold group-hover:text-white text-white-800">
                    {service.title}
                  </h3>
                  <p className="pt-4 text-sm group-hover:text-white text-white">
                    {service.text}
                  </p>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>

      <Experience />
      <FeaturedProjects />
      <CallToAction />
    </>
  );
}
