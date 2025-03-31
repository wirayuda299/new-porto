import Image from "next/image";

import ContactForm from "@/components/contact-form";
import { SOCIAL_LINKS } from "@/constants";

export const metadata = { 
  title: "Contact", 
  description: "Reach out to discuss your web projects, inquiries, and collaboration opportunities. Send an email directly to start a conversation about innovative digital solutions and creative web development."

};

export default function Contact() {
  return (
    <main className="w-full">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold animate-fade-up duration-500 tracking-tighter text-white relative">
          Contact
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#4F46E5] to-[#10B981] rounded-full"></span>
        </h2>
        <p className="ease mx-auto max-w-650 animate-fade-up px-3 py-5 text-center text-sm transition-all duration-500 text-white-100 lg:text-base">
          Let&apos;s collaborate for next project{" "}
        </p>
      </div>
      <section className="flex flex-col items-center gap-10  p-8 bg-black-200 md:flex-row-reverse md:items-start md:justify-center md:gap-14 md:p-12">
        <ContactForm />
        <section className="flex w-full max-w-xl animate-fade-right flex-col justify-self-start opacity-0 sm1:pl-10 md:w-auto md:pl-0">
          <div>
            <h2 className="text-sm font-light text-white">My Socials</h2>
            <div className="inline-flex gap-6 pt-3">
              {SOCIAL_LINKS.map((item) => (
                <a
                  href={item.link}
                  key={item.label}
                  target="_blank"
                  title={item.label}
                >
                  <Image
                    src={item.icon}
                    width={20}
                    height={20}
                    alt={item.label}
                    className="size-5 aspect-auto object-contain"
                  />
                </a>
              ))}
            </div>
            <div className="pt-9">
              <h2 className="text-sm font-light  text-white">Email Address</h2>
              <a
                href="mailto:wirayuda233@gmail.com"
                target="_blank"
                className="text-base font-semibold text-white"
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
