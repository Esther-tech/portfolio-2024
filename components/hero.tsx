import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageSection from "./pageSection";

export default function Hero() {
  return (
    <PageSection id="home">
      <>
        <div className="flex gap-5 items-center">
          <div className="h-20 w-20 rounded-full overflow-hidden">
            <Image
              src="/images/portfolio-img.jpg"
              width={400}
              height={400}
              quality={100}
              priority
              alt="Esther"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">Hi, I&apos;m Esther</h1>
            <p>Mid-level frontend developer</p>
          </div>
        </div>
        <div className="py-8 flex gap-8 flex-col">
          <h2 className="text-5xl">
            A Frontend enthusiast with an eye for detail
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-5">
            <a
              href="/CV.pdf"
              className="py-3 px-6 bg-slate-950 text-white rounded-xl hover:scale-105 focus:scale-105 transition"
              download
            >
              Download CV
            </a>
            <Link
              href="#projects"
              className="py-3 px-6 text-slate-950 rounded-xl hover:scale-105 focus:scale-105 transition"
            >
              My projects
            </Link>
          </div>
        </div>
      </>
    </PageSection>
  );
}
