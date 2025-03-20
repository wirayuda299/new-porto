"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import Link from "next/link";

import { useOutsideClick } from "@/hooks/use-outside-click";
import { Projects } from "@/types";

export default function ExpandedProjectCard({
  projects,
}: {
  projects: Projects[];
}) {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <X />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="size-full min-md:min-w-[768px] min-md:max-w-[900px] h-full min-h-[300px] md:h-fit md:max-h-[90%] grid grid-cols-1 md:grid-cols-2 bg-black-200 sm:rounded-3xl overflow-y-auto min-md:overflow-hidden gap-3.5"
            >
              {active && (
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    width={200}
                    height={200}
                    quality={100}
                    src={active?.mockup}
                    alt={active.title}
                    className="size-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                  />
                </motion.div>
              )}

              <article className="flex flex-col">
                <div className="flex flex-col justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className=" text-white font-semibold py-3 text-lg"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.descriptions}-${id}`}
                      className="text-white text-sm pb-3"
                    >
                      {active.descriptions.length > 300
                        ? active.descriptions.slice(0, 300) + "..."
                        : active.descriptions}
                    </motion.p>
                  </div>

                  <Link
                    scroll={true}
                    href={`/case-studies/${active._id}`}
                    className="px-4 py-3 text-sm rounded-full font-bold bg-primary-dark text-white"
                  >
                    More detail
                  </Link>
                </div>
              </article>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" w-full flex flex-wrap items-center justify-center gap-4">
        {projects.map((project) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={project.title}
            onClick={() => setActive(project)}
            className="p-4 flex flex-col hover:shadow-md max-w-[350px] min-w-[350px] aspect-square rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${project.title}-${id}`}>
                <Image
                  width={200}
                  quality={100}
                  height={200}
                  src={project.mockup}
                  alt={project.title}
                  sizes="300px"
                  className="size-80 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="font-semibold text-white  text-center md:text-left text-base"
                >
                  {project.title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
