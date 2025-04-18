// HeroParallax.tsx
"use client";

import { LazyMotion, domAnimation, m, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo } from "react";

import { Projects } from "@/types";
import CallToAction from "./cta";
import HeroProjectCard from "./ProjectCard";

const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

export default function HeroParallax ({ projects }: { projects: Projects[] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [firstRow, secondRow, thirdRow] = useMemo(
    () => [
      projects.slice(0, 5),
      projects.slice(5, 10),
      projects.slice(10, 15),
    ],
    [projects]
  );

  const xRange = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const xSpring = useSpring(xRange, springConfig);
  const xReverse = useTransform(xSpring, [0, 1000], [0, -1000]);

  const fadeRange = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
  const fadeSpring = useSpring(fadeRange, springConfig);
  const rotateX = useTransform(fadeSpring, [0.2, 1], [15, 0]);
  const rotateZ = useTransform(fadeSpring, [0.2, 1], [20, 0]);
  const translateY = useTransform(fadeSpring, [0.2, 1], [-500, 50]);
  const opacity = fadeSpring;

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        ref={ref}
        className="max-w-1400 mx-auto overflow-hidden antialiased relative flex flex-col perspective-[1000px] [transform-style:preserve-3d]"
      >
        <div className="flex gap-5 min-h-[650px] flex-col justify-center px-4 md:px-10">
          <h1 className="text-3xl font-bold text-white md:text-7xl animate-fade-right transition-all duration-500">
            Professional Web<br />Developer Based in Bali.
          </h1>
          <p className="max-w-2xl text-base text-neutral-200 md:text-xl animate-fade-right transition-all duration-500">
            Crafting cutting-edge digital experiences with precision, passion, and a profound commitment to excellence
          </p>
          <CallToAction />
        </div>

        <m.div style={{ rotateX, rotateZ, translateY, opacity }}>
          <m.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((p) => (
              <HeroProjectCard key={p.title} project={p} translate={xSpring} />
            ))}
          </m.div>
          <m.div className="flex flex-row mb-20 space-x-20">
            {secondRow.map((p) => (
              <HeroProjectCard key={p.title} project={p} translate={xReverse} />
            ))}
          </m.div>
          <m.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((p) => (
              <HeroProjectCard key={p.title} project={p} translate={xSpring} />
            ))}
          </m.div>
        </m.div>
      </m.section>
    </LazyMotion>
  );
};


