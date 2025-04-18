"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

import { NAV_ITEMS } from "@/constants/index";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavContainer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname=usePathname()

  const closeNav = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <ul
        className={cn(
          "ease fixed top-0 z-50 flex h-screen w-full flex-col items-center justify-evenly overflow-hidden pr-3 backdrop-blur-sm transition-all duration-500 border-r-white-500 md:static md:h-auto md:flex-row  md:justify-end  md:gap-x-9 md:!bg-transparent md:!bg-none md:!backdrop-blur-none md:opacity-100",
          isOpen
            ? "opacity-100 left-0 bg-black-200"
            : "opacity-0 -left-full !bg-none",
        )}
      >
        {NAV_ITEMS.map((item, i) => (
          <li
            style={{ animationDelay: `${i * 100}ms` }}
            onClick={closeNav}
            className={cn(
              "before:ease ease relative z-1 flex items-center opacity-0 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-1 before:w-full before:scale-x-0 before:rounded-full  before:transition-all before:duration-300 hover:before:scale-x-100 text-white before:bg-primary-dark md:opacity-100",
              isOpen ? "animate-fade-up" : "",
            )}
            key={item.title}
          >
 <Link
          aria-label={item.title}
          href={item.path}
          className={cn(
            "text-lg font-normal uppercase md:text-sm md:capitalize",
            pathname === item.path ? "font-semibold" : "",
          )}
        >
          <span>{item.title}</span>
        </Link>

          </li>
        ))}

        <button
          type="button"
          title="close"
          className="absolute right-5 top-5 text-white md:hidden"
          onClick={closeNav}
        >
          <Image
            src={"/assets/icons/cross.png"}
            width={40}
            height={40}
            loading="lazy"
            fetchPriority="low"
            alt="menu"
            className="aspect-auto size-6 object-contain"
          />
        </button>
      </ul>
      <button
        title="menu"
        aria-label="menu"
        name="menu"
        aria-expanded={isOpen}
        className="md:hidden"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          className="invert-0"
          src="/assets/icons/menu.svg"
          width={20}
          height={20}
          alt="menu"
        />
      </button>
    </>
  );
}
