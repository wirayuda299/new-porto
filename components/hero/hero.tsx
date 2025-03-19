"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

import ProjectCard from "./ProjectCard";
import { Projects } from "@/types";
import CallToAction from "./cta";

export const HeroParallax = ({ projects }: { projects: Projects[] }) => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 50]),
    springConfig,
  );
  return (
    <section
      ref={ref}
      className=" max-w-1400 mx-auto overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="flex gap-5 min-h-[650px] flex-col justify-center px-4 md:px-10">
        <h1 className="text-3xl font-bold text-white md:text-7xl">
          Professional Web
          <br /> Developer Based in Bali.
        </h1>
        <p className=" max-w-2xl text-base text-neutral-200 md:text-xl">
          Crafting cutting-edge digital experiences with precision, passion, and
          a profound commitment to excellence
        </p>
        <CallToAction />
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
