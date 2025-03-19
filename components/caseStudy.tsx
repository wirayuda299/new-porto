import Link from "next/link";

import { getSimilarCaseStudies } from "@/sanity/action";

export default async function CaseStudies({ id }: { id: string }) {
  const similarCaseStudies = await getSimilarCaseStudies(id);

  return (
    <section className="bg-black-300">
      <div className="mx-auto mt-7 flex max-w-[880px] flex-col gap-5 px-3 py-10">
        <p className="text-left text-sm font-semibold text-white">Projects</p>
        <h2 className="text-2xl font-semibold text-white">
          Other Case Studies
        </h2>
        <div className="flex h-fit snap-x snap-mandatory gap-6 overflow-x-scroll">
          {similarCaseStudies?.map((project) => (
            <div
              className="max-w-sm min-w-[300px] group/card"
              key={project.title}
            >
              <Link
                scroll
                href={`/case-studies/${project._id}`}
                className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                style={{
                  backgroundImage: `url(${project.mockup})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h1 className="font-bold text-xl md:text-2xl invert relative z-10">
                    {project.title}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4 truncate">
                    {project.descriptions}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
