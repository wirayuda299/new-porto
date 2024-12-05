import { SKILLS } from '@/constants';
import TechIcon from './icon';
import Title from '@/components/title';

export default function Skills() {
  return (
    <section className='w-full  bg-black-200  min-h-[400px]'>
      <div className='mx-auto w-full max-w-1400 py-20'>
        <Title text='Skills' />
        <div className='mt-10 flex flex-wrap justify-center gap-4 md:gap-8'>
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
