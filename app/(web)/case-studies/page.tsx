import CallToAction from "@/components/cta";
import { getCaseStudies } from "@/sanity/action";

export const metadata = { title: "Case Studies" };

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies("all");
  return (
    <main className="mx-auto size-full">
      <section className="mx-auto max-w-700 p-0.5 sm:p-0">
        <h1 className="ease animate-fade-up px-4 text-center text-3xl font-bold leading-normal transition-all duration-500 text-white md:px-0 lg:text-16">
          Recent{" "}
          <span className="relative z-[1] inline-block w-max  before:absolute before:bottom-1 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary lg:before:bottom-5 lg:before:h-4">
            Case Studies
          </span>
        </h1>
        <p className="ease mx-auto max-w-650 animate-fade-up px-3 py-5 text-center text-sm transition-all duration-500 text-white-100 lg:text-base">
          Dive into my recent success stories and discover how I&apos;ve helped
          clients overcome challenges, innovate, and achieve their goals
        </p>
      </section>
      <section className="px-5 py-10 pt-20 w-full bg-black-200">
        <div className="mx-auto flex max-w-1400 flex-wrap justify-center gap-9 ">
          {caseStudies.map((project) => (
            <div className="max-w-sm w-full group/card" key={project.title}>
              <div
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
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    {project.descriptions.slice(0, 40)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
