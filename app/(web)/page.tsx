import Image from "next/image";

import CallToAction from "@/components/cta";
import Experience from "@/components/experience/experience";
import FeaturedProjects from "@/components/featured-projects";
import { HeroParallax } from "@/components/hero/hero";
import Skills from "@/components/skills/skills";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SERVICES } from "@/constants";
import { getCaseStudies } from "@/sanity/action";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const projects = await getCaseStudies("all");
  return (
    <main className="size-full">
      <HeroParallax projects={projects} />
      <Skills />
      <section className="size-full min-h-500 py-20">
        <div className="mx-auto max-w-1400">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white relative">
              Services
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full"></span>
            </h2>
          </div>
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
    </main>
  );
}
