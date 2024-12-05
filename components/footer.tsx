import Image from 'next/image';

import { SOCIAL_LINKS } from '@/constants/index';

export default function Footer() {
  return (
    <footer className='w-full border-t  border-t-black-300 bg-black-200 '>
      <div className='mx-auto w-full max-w-1400'>
        <div className='flex h-full flex-col items-center gap-4 px-3 py-4 sm:h-20  sm:flex-row sm:justify-between sm:px-8'>
          <div className='text-center text-xs  text-white sm:text-sm md:text-lg'>
            <p className='whitespace-nowrap'>
              © 2023 Wirayuda. <span>All rights reserved.</span>
            </p>
          </div>
          <div className='inline-flex gap-6'>
            {SOCIAL_LINKS.map((item) => (
              <a
                className=' invert-0'
                href={item.link}
                key={item.label}
                target='_blank'
                title={item.label}
              >
                <Image loading='lazy' fetchPriority='low' src={item.icon} width={20} height={20} alt={item.label} className='size-5 aspect-auto ' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

