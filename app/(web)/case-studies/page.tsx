import Image from 'next/image';
import Link from 'next/link';

import CallToAction from '@/components/cta';
import { getCaseStudies } from '@/sanity/action';

export const metadata = { title: 'Case Studies' };

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies('all');
  return (
    <main className='mx-auto size-full'>
      <section className='mx-auto max-w-700 p-0.5 sm:p-0'>
        <h1 className='ease animate-fade-up px-4 text-center text-3xl font-bold leading-normal transition-all duration-500 text-white md:px-0 lg:text-16'>
          Recent{' '}
          <span className='relative z-[1] inline-block w-max  before:absolute before:bottom-1 before:left-0 before:z-[-1] before:h-3 before:w-full before:bg-secondary lg:before:bottom-5 lg:before:h-4'>
            Case Studies
          </span>
        </h1>
        <p className='ease mx-auto max-w-650 animate-fade-up px-3 py-5 text-center text-sm transition-all duration-500 text-white-100 lg:text-base'>
          Dive into my recent success stories and discover how I&apos;ve helped
          clients overcome challenges, innovate, and achieve their goals
        </p>
      </section>
      <section className='px-5 py-10 pt-20 w-full bg-black-200'>
        <div className='mx-auto flex max-w-1400 flex-wrap justify-center gap-9 '>
          {caseStudies.map((project, i) => (
            <Link
              style={{
                animationDelay: `${i * 100}ms`,
              }}
              key={project._id}
              className='size-full max-w-400 animate-fade-in opacity-0'
              href={`/case-studies/${project._id}`}
            >
              <Image
                style={{
                  backgroundColor: project.backgroundColor,
                }}
                src={project.mockup}
                width={500}
                height={500}
                alt={project.title}
                priority
                quality={50}
                fetchPriority='high'
                className='mx-auto rounded-xl object-cover object-center'
              />
              <h2 className='pt-5 text-xl font-semibold text-white'>
                {project.title}
              </h2>
              <p className='text-sm text-white'>{project.subTitle}</p>
            </Link>
          ))}
        </div>
      </section>
      <CallToAction />
    </main>
  );
}

