"use client";

import { useState, useCallback, memo, ReactNode, HTMLAttributes } from "react";
import { LazyMotion, domAnimation, m, useMotionValue, useMotionTemplate } from "framer-motion";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

interface CardSpotlightProps extends HTMLAttributes<HTMLDivElement> {
  radius?: number;
  color?: string;
  children: ReactNode;
}

const springConfig = { stiffness: 300, damping: 30 };

const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: CardSpotlightProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [hover, setHover] = useState(false);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }, [mouseX, mouseY]);

  const onEnter = useCallback(() => setHover(true), []);
  const onLeave = useCallback(() => setHover(false), []);

  const mask = useMotionTemplate`
    radial-gradient(
      ${radius}px circle at ${mouseX}px ${mouseY}px,
      white 0%, transparent 80%
    )
  `;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn(
          "group/spotlight relative rounded-md border border-neutral-800 bg-black overflow-hidden",
          className
        )}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        {...props}
      >
        <m.div
          className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
          style={{
            backgroundColor: color,
            maskImage: mask,
            WebkitMaskImage: mask,
            transition: "opacity 0.3s ease",
          }}
          transition={springConfig}
        >
          <CanvasRevealEffect
            animationSpeed={hover ? 5 : 0}
            containerClassName="absolute inset-0 pointer-events-none bg-transparent"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        </m.div>

        {children}
      </div>
    </LazyMotion>
  );
};

export default memo(CardSpotlight);

