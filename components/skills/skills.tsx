import { SKILLS } from "@/constants";
import TechIcon from "./icon";

export default function Skills() {
  return (
    <section className="w-full  bg-black-200  min-h-[400px]">
      <div className="mx-auto w-full max-w-1400 py-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white relative">
            Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full"></span>
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8">
          {SKILLS.map((skill, i) => (
            <TechIcon
              label={skill.label}
              icon={skill.icon}
              key={skill.label}
              delay={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
