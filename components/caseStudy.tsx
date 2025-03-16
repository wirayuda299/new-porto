import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
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
          {similarCaseStudies?.map((p) => (
            <div
              className="h-min min-w-[300px] max-w-[450px] snap-start rounded-lg p-3 shadow-md bg-black-300 shadow-light-shadow"
              key={p._id}
            >
              <Image
                className="w-96 rounded-lg object-contain"
                src={p.mockup}
                width={500}
                height={500}
                alt={p.title}
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="line-clamp-3 py-3 text-sm text-white first-letter:capitalize ">
                  {p.descriptions?.slice(0, 50)}
                </p>
                <Link href={`/case-studies/${p._id}`}>
                  <Button className="w-full rounded-full hover:bg-primary-dark/50 bg-primary-dark text-white">
                    See Case Study
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
