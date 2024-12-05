import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section className='mt-10 flex size-full min-h-500 items-center justify-center p-3 bg-black-200 sm:p-6'>
      <div className='relative mx-auto flex size-full h-full max-w-1400  items-center justify-center '>
        <Image
          width={300}
          height={300}
          className='size-full object-cover min-h-[300px] rounded-xl  aspect-auto'
          src={'/assets/images/cta.png'}
          alt='cta'
          loading='lazy'
          fetchPriority='low'
        />
        <div className='absolute flex w-full max-w-5xl flex-col items-center justify-between p-2 md:flex-row'>
          <div className='max-w-xl'>
            <h2 className='p-5 text-center text-3xl font-bold md:text-left md:text-[30px] lg:text-5xl'>
              Have a project in mind that requires technical expertise?
            </h2>
          </div>
          <Link
            href={'/contact'}
            className=' max-w-350 pt-4 min-[350px]:w-auto sm:pt-7 '
          >
            <Button className='flex w-full items-center gap-3 truncate rounded-full text-sm font-semibold hover:bg-blue-600 bg-primary-dark text-white sm:text-xs lg:px-7'>
              Get in Touch with Me
              <ArrowRight color='#fff' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

