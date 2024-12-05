'use client';

import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import useIntersectionObserver from '@/hooks/intersection';
import { ArrowRight } from 'lucide-react';
import { Projects } from '@/types/index';

type TechStacks = Pick<Projects, 'techStacks'>['techStacks'];

type FeaturedProjectTechStacksProps = {
  techStacks: TechStacks;
  _id: string;
};

export default function FeaturedProjectTechStacks({
  techStacks,
  _id,
}: FeaturedProjectTechStacksProps) {
  const ref = useRef(null);

  useIntersectionObserver(ref, 'animate-fade-up');

  return (
    <div className='flex flex-col lg:px-4'>
      <div ref={ref} className='mt-6 inline-flex flex-wrap gap-4 opacity-0'>
        {techStacks?.map((tech) => (
          <Button
            name={tech.name}
            title={tech.name}
            className='truncate bg-light-gray text-10 uppercase text-white hover:bg-white hover:text-black'
            key={tech.name}
          >
            <span>{tech.name}</span>
          </Button>
        ))}
      </div>
      <Link
        href={`/case-studies/${_id}`}
        className='inline-flex items-center gap-3 pt-5 text-sm font-medium text-white'
      >
        See Case Study
        <ArrowRight color='#fff' />
      </Link>
    </div>
  );
}
