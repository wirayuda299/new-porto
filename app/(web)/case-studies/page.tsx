
import dynamic from 'next/dynamic';

const CallToAction=dynamic(() => import("@/components/cta"))
const ProjectCard = dynamic(() => import("@/components/project-card"));
import { getCaseStudies } from "@/sanity/action";

export const metadata = {
  title: "Case Studies",
  description: "Explore our comprehensive case studies showcasing all our projects. Discover in-depth analyses, innovative solutions, and real-world success stories that highlight our expertise in delivering impactful, industry-leading projects. Perfect for professionals looking for inspiration and proven strategies in project execution." };

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies("all");
  return (
    <main className="mx-auto size-full">
      <section className="mx-auto max-w-700 p-0.5 sm:p-0">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-up duration-500 tracking-tighter text-white relative">
            Case Studies
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full"></span>
          </h2>
          <p className="ease mx-auto max-w-650 animate-fade-up px-3 py-5 text-center text-sm transition-all duration-500 text-white-100 lg:text-base">
            Dive into my recent success stories and discover how I&apos;ve
            helped clients overcome challenges, innovate, and achieve their
            goals
          </p>
        </div>
      </section>
      <section className="px-5 py-10 pt-20 w-full bg-black-200">
        <ProjectCard projects={caseStudies} />
      </section>
      <CallToAction />
    </main>
  );
}
