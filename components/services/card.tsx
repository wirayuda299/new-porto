'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useIntersectionObserver from '@/hooks/intersection';

type ServiceCardProps = {
  title: string;
  icon: string;
  text: string;
};

export default function ServiceCard({
  title,
  icon,
  text,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIntersectionObserver(ref, 'animate-fade-up');

  return (
    <div
      ref={ref}
      className='group opacity-0 transition-all duration-500 ease-in-out'>
      <div className='ease group mx-auto aspect-square w-80 rounded-lg  px-5 py-7 shadow-md transition-all duration-500 hover:translate-y-10  bg-black-200 shadow-light-blue hover:bg-primary-dark hover:shadow-lg hover:shadow-primary-dark sm:w-72'>
        <div className='flex size-14 items-center justify-center rounded-lg group-hover:brightness-0 group-hover:invert'>
          <Image className='size-8 object-contain aspect-auto' src={icon} width={30} height={30} alt={title} />
        </div>
        <h3 className='pt-9 text-2xl font-semibold group-hover:text-white text-white-800'>
          {title}
        </h3>
        <p className='pt-4 text-sm group-hover:text-white text-white'>
          {text}
        </p>
      </div>
    </div>
  );
}
