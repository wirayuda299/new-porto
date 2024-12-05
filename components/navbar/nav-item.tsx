import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type NavItemProps = {
  path: string;
  title: string;
};



export default function NavItem({
  path,
  title,
}: NavItemProps) {
  const pathname = usePathname();

  return (
    <>
      {title !== 'Resume' ? (
        <Link
          aria-label={title}
          href={path}
          className={cn('text-lg font-normal uppercase md:text-sm md:capitalize', pathname === path ? 'font-semibold' : ''
          )}
        >
          <span>{title}</span>
        </Link>
      ) : (
        <div className='inline-flex items-center gap-2'>
          <Image
            className='invert aspect-auto size-5'
            src='/assets/icons/download.svg'
            width={20}
            height={20}
            priority
            alt='download'
            loading='eager' />

          <a
            download
            href='/assets/resume/cv.pdf'
            className='text-lg font-normal uppercase md:text-sm md:capitalize'
          >
            Resume
          </a>
        </div>
      )}
    </>
  );
}
