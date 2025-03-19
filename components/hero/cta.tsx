"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { CheckIcon, Copy } from "lucide-react";
import Link from "next/link";
import { MY_EMAIL } from "@/constants";

function copyText(setIsChecked: Dispatch<SetStateAction<boolean>>) {
  setIsChecked(true);
  navigator.clipboard.writeText(MY_EMAIL);

  setTimeout(() => setIsChecked(false), 2000);
}

export default function CallToAction() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-5 z-50 pt-8 md:flex-row max-w-80">
      <Link
        href={"/case-studies"}
        aria-label="case-studies"
        className="flex h-12 w-full min-w-200 animate-fade-right items-center justify-center rounded-full text-center text-sm text-white  bg-primary-dark"
      >
        My Work
      </Link>
      <div className="flex h-12 w-full min-w-250 animate-fade-right items-center justify-center gap-3 truncate rounded-full bg-primary-dark py-5 text-center text-white-500 max-lg:min-w-250 lg:px-2">
        <a
          href={`mailto:${MY_EMAIL}`}
          target="_blank"
          className="inline-block text-xs font-medium text-white"
        >
          wirayuda233@gmail.com
        </a>
        <button
          title="copy"
          aria-label="copy"
          name="copy"
          className="cursor-pointer"
          onClick={() => copyText(setIsChecked)}
        >
          {isChecked ? (
            <CheckIcon color="#FFBE62" className="size-5" />
          ) : (
            <Copy size={16} stroke="#ffbe62" />
          )}
        </button>
      </div>
    </div>
  );
}
