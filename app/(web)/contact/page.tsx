import Image from "next/image";

import ContactForm from "@/components/contact-form";
import { SOCIAL_LINKS } from '@/constants';

export const metadata = {
  title: 'Contact'
}
export default function Contact() {
  return (
    <main className='w-full'>
      <div className='w-full py-6 text-center'>
        <h1 className='mx-auto w-max animate-fade-up text-4xl font-bold md:text-5xl'>
          <span className='relative z-[1] w-full before:absolute before:bottom-1 before:left-0 before:z-[-1] before:h-3 before:w-0 before:animate-increasing before:bg-secondary text-white '>
            Get in Touch
          </span>
        </h1>
        <p className='animate-fade-up pt-5 text-center text-xs text-white'>
          Let&apos;s Collaborate on Your Next Project
        </p>
      </div>
      <section className='flex flex-col items-center gap-10  p-8 bg-black-200 md:flex-row-reverse md:items-start md:justify-center md:gap-14 md:p-12'>
        <ContactForm />
        <section className='flex w-full max-w-xl animate-fade-right flex-col justify-self-start opacity-0 sm1:pl-10 md:w-auto md:pl-0'>
          <div>
            <h2 className='text-sm font-light text-white'>
              My Socials
            </h2>
            <div className='inline-flex gap-6 pt-3'>
              {SOCIAL_LINKS.map((item) => (
                <a
                  href={item.link}
                  key={item.label}
                  target='_blank'
                  title={item.label}
                >
                  <Image
                    src={item.icon}
                    width={20}
                    height={20}
                    alt={item.label}
                    className='size-5 aspect-auto object-contain' />
                </a>
              ))}
            </div>
            <div className='pt-9'>
              <h2 className='text-sm font-light  text-white'>
                Email Address
              </h2>
              <a
                href='mailto:wirayuda233@gmail.com'
                target='_blank'
                className='text-base font-semibold text-white'
              >
                wirayuda233@gmail.com
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
