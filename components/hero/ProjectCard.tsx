"use client";

import { motion, MotionValue } from "motion/react";
import Image from "next/image";
import { memo, useMemo } from "react";

import { Projects } from "@/types";
import { loader } from "@/lib/utils";

interface Props {
  project: Projects;
  translate: MotionValue<number>;
}

const HeroProjectCard = ({ translate, project }: Props) => {
  const style = useMemo(() => ({ x: translate }), [translate]);

  return (
    <motion.div
      style={style}
      whileHover={{ y: -20, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group/project relative h-96 w-[30rem] shrink-0"
    >
      <Image
        src={project.mockup}
        fill
        priority
        placeholder={loader(400, 300)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        quality={55}
        fetchPriority="high"
        className="object-cover object-center"
        alt={project.title}
      />

      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover/project:opacity-80 pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover/project:opacity-100 text-white">
        {project.title}
      </h2>
    </motion.div>
  );
};

export default memo(HeroProjectCard);

