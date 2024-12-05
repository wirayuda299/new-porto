'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckIcon, Copy } from 'lucide-react';

export default function CallToAction() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function copyText() {
    setIsChecked(true);
    navigator.clipboard.writeText('wirayuda233@gmail.com');

    setTimeout(() => setIsChecked(false), 2000);
  };

  return (
    <div className='flex flex-col gap-5 pt-8 md:flex-row'>
      <Link
        aria-label='case-studies'
        href={'/case-studies'}
        className='flex h-12 w-full min-w-200 animate-fade-right items-center justify-center rounded-full text-center text-sm text-white  bg-primary-dark'
      >
        My Work
      </Link>
      <div className='flex h-12 w-full min-w-250 animate-fade-right items-center justify-center gap-3 truncate rounded-full py-5 text-center  bg-white text-white max-lg:min-w-250 lg:px-2'>
        <a
          href='mailto:wirayuda233@gmail.com'
          target='_blank'
          className='inline-block text-xs font-medium text-black'
        >
          wirayuda233@gmail.com
        </a>
        <button
          title='copy'
          aria-label='copy'
          name='copy'
          disabled={isChecked}
          aria-disabled={isChecked}
          onClick={copyText}
        >
          {isChecked ? (
            <CheckIcon color='#FFBE62' className='size-5' />
          ) : (
            <Copy size={16} stroke='#ffbe62' />
          )}
        </button>
      </div>
    </div>
  );
}
