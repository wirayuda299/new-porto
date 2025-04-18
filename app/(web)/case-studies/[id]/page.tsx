import { ArrowRight, GlobeIcon } from "lucide-react";
import Image from "next/image";
import type { Metadata  } from "next";
import dynamic from 'next/dynamic';

import { getSimilarCaseStudies, getSingleCaseStudy } from "@/sanity/action";
const CaseStudies= dynamic(() => import("@/components/caseStudy"))
const ChallengesLearning= dynamic(() => import("@/components/challenges"))

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params

  const caseStudy= await getSingleCaseStudy(id)

  return {
    title: caseStudy?.title + " - " + caseStudy?.subTitle,
    description:caseStudy?.descriptions,
    openGraph: {
      images: [caseStudy?.mockup ||""],
    },
  }
}
export default async function CaseStudyDetail({ params }: Props) {
  const { id } = await params;

  const [caseStudy, simillarCaseStudies] = await Promise.all([
    getSingleCaseStudy(id),
    getSimilarCaseStudies(id),
  ]);

  return (
    <main className="size-full overflow-y-auto min-h-screen">
      <p className="text-center text-sm font-semibold uppercase text-white">
        web dev project
      </p>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold animate-fade-up duration-500 tracking-tighter text-white relative capitalize">
          {caseStudy?.title} - {caseStudy?.subTitle}
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full"></span>
        </h2>
      </div>

      <section className="pt-7 max-w-[500px] mx-auto relative min-h-[300px]">
        <Image
          className="w-full h-full object-cover object-center rounded-md aspect-auto"
          src={caseStudy?.mockup || ""}
          priority
          fill
          sizes="500px"
          fetchPriority="high"
          alt={caseStudy?.title || ""}
        />
      </section>
      <div className="flex justify-center gap-5 pt-6">
        <a
          href={caseStudy?.demoSite}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white lg:text-lg"
        >
          <GlobeIcon color="#fff" />
          <span>Demo Site</span>
          <ArrowRight color="#0252cd" />
        </a>
        <a
          href={caseStudy?.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white lg:text-lg"
        >
          <Image
            src="/assets/icons/github.svg"
            width={20}
            height={20}
            alt="github"
          />
          <span>Source Code</span>
          <ArrowRight color="#0252cd" />
        </a>
      </div>

      <section className="mx-auto mt-7 flex max-w-[880px] flex-col gap-5 px-4 py-10">
        <p className="text-left text-sm first-letter:capitalize text-white lg:text-lg">
          {caseStudy?.descriptions}
        </p>
      </section>
      {caseStudy?.techStacks && (
        <section className="mx-auto mt-7 flex max-w-[880px] flex-col gap-5 px-4 py-10">
          <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
          <div className="flex items-center gap-3">
            {caseStudy?.techStacks.map((tech) => (
              <Image
                className="size-12 object-contain"
                key={tech.name}
                src={tech.icon}
                sizes="40px"
                width={40}
                loading="lazy"
                height={40}
                alt={tech.name || "tech icon"}
              />
            ))}
          </div>
        </section>
      )}
      <ChallengesLearning
        challenges={caseStudy?.challenges || []}
        learnings={caseStudy?.learnings || []}
      />
      {caseStudy?._id && (
        <CaseStudies similarCaseStudies={simillarCaseStudies} />
      )}
    </main>
  );
}
