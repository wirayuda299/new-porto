import dynamic from "next/dynamic";
import Image from "next/image";
import { SERVICES } from "@/constants";
import { getCaseStudies } from "@/sanity/action";

const HeroParallax = dynamic(() => import("@/components/hero/hero"));
const Skills = dynamic(() => import("@/components/skills/skills"));
const FeaturedProjects = dynamic(() => import("@/components/featured-projects"));
const CardSpotlight = dynamic(() => import("@/components/ui/card-spotlight"));
const CallToAction = dynamic(() => import("@/components/cta"));

export const metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio website, where creativity meets innovative web development. Discover case studies, and design solutions that transform ideas into engaging digital experiences. Explore my work and let's create something extraordinary together.",
};

export default async function Home() {
  const projects = await getCaseStudies("all");

  return (
    <main className="w-full">
      <HeroParallax projects={projects} />

      <Skills />

      <section className="w-full min-h-[500px] py-20">
        <div className="mx-auto max-w-[1400px] text-center mb-12 space-y-4">
          <h2 className="relative text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Services
            <span className="absolute -bottom-2 left-1/2 w-40 h-1 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-green-500 rounded-full" />
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-5 px-5">
          {SERVICES.map((svc) => (
            <CardSpotlight
              key={svc.title}
              className="bg-black/30 border-none shadow-none"
            >
              <div className="flex flex-col items-center p-3 sm:w-72 max-w-[20rem] aspect-square rounded-md transition group-hover/project:brightness-0 group-hover/project:invert">
                <Image
                  src={svc.icon}
                  alt={svc.title}
                  width={30}
                  height={30}
                  className="mb-4"
                />

                <h3 className="text-2xl font-semibold text-white transition group-hover/project:text-white">
                  {svc.title}
                </h3>
                <p className="text-sm text-white pt-2 transition group-hover/project:text-white">
                  {svc.text}
                </p>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </section>

      <FeaturedProjects />

      <CallToAction />
    </main>
  );
}

