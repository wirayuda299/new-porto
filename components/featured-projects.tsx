import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { getCaseStudies } from "@/sanity/action";

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

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_0_25px_rgba(79,70,229,0.15)]"
            >
              <div
                className=" p-6 md:p-8 rounded-xl"
                style={{ backgroundColor: project.backgroundColor }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 overflow-hidden rounded-lg">
                    <Image
                      src={project.mockup}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform min-h-[300px] object-center duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl capitalize font-bold text-white mb-3">
                        {project.title} - {project.subTitle}
                      </h3>
                      <p className="text-[#CBD5E1] first-letter:capitalize mb-6 text-sm">
                        {project.descriptions.length > 200 ?project.descriptions.slice(0,200)+"...": project.descriptions}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStacks.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 capitalize text-xs font-medium rounded-md bg-primary  text-white"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/case-studies/${project._id}`}
                        className="inline-flex items-center text-white font-medium group/link"
                      >
                        See Case Study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
