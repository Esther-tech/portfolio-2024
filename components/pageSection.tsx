"use client";

import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect } from "react";
import sectionDivider from "@/public/svg/section-divider.svg";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { navItems } from "@/lib/data";

export default function PageSection({
  id,
  title,
  indicator,
  tracker,
  children,
}: {
  id?: string;
  title?: string;
  indicator?: StaticImageData;
  tracker: (typeof navItems)[number]["title"];
  children: ReactNode;
}) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView && tracker) {
      setActiveSection(tracker);
    }
  }, [inView, tracker, setActiveSection]);

  return (
    <section
      ref={ref}
      id={id}
      className="py-10 px-3 sm:px-5 max-w-screen-md m-auto scroll-mt-10"
    >
      {title && (
        <div className="mb-8 flex gap-4  relative">
          {indicator && (
            <Image
              src={indicator}
              alt="section indicator"
              height={20}
              width={20}
            />
          )}
          <h2 className="capitalize text-lg font-bold bg-white z-10 pr-10">
            {title}
          </h2>
          <Image
            src={sectionDivider}
            alt="divider"
            className="absolute right-0 top-1/2 hidden md:block"
          />
        </div>
      )}
      {children}
    </section>
  );
}
