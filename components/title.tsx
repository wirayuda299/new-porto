'use client';

import { useRef } from 'react';

import useIntersectionObserver from '@/hooks/intersection';

export default function Title({ text }: { text: string }) {
  const ref = useRef(null);

  useIntersectionObserver(ref, 'before:animate-increasing');

  return (
    <div className='w-full text-center'>
      <h2 className='inline-flex w-full flex-wrap justify-center gap-2 text-4xl font-bold text-white md:text-5xl'>
        <span
          ref={ref}
          className='relative z-1 inline-block w-max before:absolute before:bottom-2 before:left-0 before:z-[-1] before:h-3 before:w-0 before:bg-secondary'
        >

          {text}
        </span>
      </h2>
    </div>
  );
}
