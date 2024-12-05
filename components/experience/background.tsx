import Image from 'next/image';
import { useMemo } from 'react';

import { JOB_LIST } from '@/constants/index';

const importantKeywords = [
  'git for version control',
  'asana',
  'full-stack',
  'team meetings',
  'mentors',
  'frontend',
  'high-quality',
  'skill enhancement',
  'challenges',
  'goals',
];

const importantKeywordsSet = new Set(importantKeywords);

const highlightRegex = () => new RegExp(`\\b(${importantKeywords.join('|')})\\b`, 'gi');

const highlightKeywords = (text: string) => {
  const regex = highlightRegex();
  return text.split(regex).map((part, index) => {
    const isInclude = importantKeywordsSet.has(part.toLowerCase());
    return isInclude ? (
      <span key={`${part}-${index}`} className="text-secondary">
        {part}
      </span>
    ) : (
      part
    );
  });
};

export default function Background() {
  const memoizedJobLists = useMemo(() => {
    return JOB_LIST.map((job) => (
      <li key={job} className="text-xs text-slate-200 md:text-base">
        {highlightKeywords(job)}
      </li>
    ));
  }, []);

  return (
    <div className="flex flex-1 flex-col items-start">
      <div className="ease group flex w-full cursor-pointer flex-row items-center justify-start gap-3">
        <Image
          className="ease block object-contain filter transition-colors duration-500 group-hover:filter-none brightness-0 grayscale-0 invert"
          src={'/assets/jsm.png'}
          width={50}
          height={50}
          alt={'Javascript Mastery'}
          loading="lazy"
        />
        <h3 className="text-base font-semibold text-white lg:text-2xl">
          Javascript Mastery
        </h3>
        <p className="text-xs font-medium uppercase text-white">1 July 2023 - Now</p>
      </div>
      <ul className="mt-5 flex list-disc flex-col items-start gap-8 pl-5 text-white">
        {memoizedJobLists}
      </ul>
    </div>
  );
}

