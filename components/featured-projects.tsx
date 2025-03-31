
import { getCaseStudies } from "@/sanity/action";
import ExpandedProjectCard from "./project-card";

export default async function FeaturedProjects() {
  const projects = await getCaseStudies("featured");
  return (
    <section className="w-full py-12 bg-[#111827]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white relative">
            Featured Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full"></span>
          </h2>
        </div>

        <ExpandedProjectCard projects={projects}/>
             </div>
    </section>
  );
}
