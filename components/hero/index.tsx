import Image from 'next/image';

import CallToAction from './call-to-action';

export default function Hero() {
  return (
    <section className='min-h-full w-full max-lg:min-h-screen'>
      <div className='mx-auto grid size-full max-w-1400 grid-cols-1 justify-between gap-6 overflow-hidden p-5 md:justify-between lg:max-h-750 lg:grid-cols-2 lg:p-10'>
        <div className='flex size-full max-h-full flex-col justify-center lg:max-w-500'>
          <h1 className=' animate-fade-up text-sm uppercase  text-white md:pb-7 md:text-xl'>
            Hi, I am Wirayuda
          </h1>
          <h2 className='z-0 w-fit animate-fade-up pt-5 text-3xl font-bold  text-white sm:text-5xl xl:text-16'>
            Professional{' '}
            <span className='ease relative whitespace-nowrap py-3 transition-all duration-500 after:absolute after:bottom-4 after:left-0 after:z-[-1] after:h-3 after:w-0 after:animate-increasing after:bg-secondary md:after:h-5 lg:after:bottom-7'>
              Web Developer
            </span>{' '}
            based in Bali
            <Image
              priority
              alt='flower'
              src='/assets/images/flower.webp'
              width={50}
              quality={40}
              height={50}
              className='inline-block size-12 animate-fade-right object-contain lg:size-14'
            />
          </h2>
          <p className='animate-fade-up pt-4 text-xs text-white sm:text-sm'>
            Transforming the web one line of code at a time: Crafting cutting-edge
            digital experiences with precision, passion, and a profound commitment
            to excellence
          </p>
          <CallToAction />
        </div>
        <Image
          className='size-full animate-fade-left object-cover object-center md2:max-h-750 lg:max-w-600 xl:object-contain xl:pt-5'
          src='/assets/images/hero.webp'
          alt='illustration image'
          priority
          quality={55}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fetchPriority='high'
          width={823}
          height={523}
        />
      </div>
    </section>
  );
}
