import { MotionValue, motion } from "motion/react";
import Image from "next/image";

import { Projects } from "@/types";
import { loader } from "@/lib/utils";

export default function HeroProjectCard({
  translate,
  project,
}: {
  project: Projects;

  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="group/project h-96 w-[30rem] relative shrink-0"
    >
      <div
        className="block group-hover/project:shadow-2xl "
      >
        <Image
          src={project?.mockup}
          fill
          priority
          placeholder={loader(400,300)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          quality={55}
          fetchPriority="high"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={project.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {project.title}
      </h2>
    </motion.div>
  );
}
