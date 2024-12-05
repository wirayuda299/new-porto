import Link from "next/link";
import Image from "next/image";

import NavContainer from "./container";

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 mx-auto flex h-20 max-w-1400 items-center backdrop-blur-sm md:bg-opacity-50'>
      <div className='relative flex w-full items-center justify-between gap-x-5 p-5 md:p-6 lg:px-11'>

        <Link href='/'>
          <Image
            className='aspect-auto object-contain invert'
            alt='wirayuda logo'
            src={'/logo.png'}
            priority
            quality={40}
            width={60}
            height={60}
          />
        </Link>

        <NavContainer />
      </div>
    </nav>
  );
}
