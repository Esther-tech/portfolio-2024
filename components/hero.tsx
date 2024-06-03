import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageSection from "./pageSection";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import GithubIcon from "@/public/svg/github-icon.svg";
import LinkedInIcon from "@/public/svg/linkedin-icon.svg";

export default function Hero() {
  return (
    <PageSection id="home" tracker="Home">
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
          <div className="flex gap-2 ml-auto">
            <Link
              href="https://github.com/Esther-tech"
              passHref
              target="_blank"
              className="p-3 rounded-xl hover:scale-105 focus:scale-105 transition dark:bg-slate-300"
            >
              <Image src={GithubIcon} alt="divider" className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/esther-siebert-563597b5/"
              passHref
              target="_blank"
              className="p-3 rounded-xl hover:scale-105 focus:scale-105 transition dark:bg-slate-300"
            >
              <Image src={LinkedInIcon} alt="divider" className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="py-8 flex gap-8 flex-col">
          <h2 className="text-5xl">
            A Frontend enthusiast with an eye for detail
          </h2>
          <p>
            I’m a self-taught frontend developer who loves React, TypeScript,
            and CSS. I’m all about teamwork and learning new things and I enjoy
            working together to create awesome user interfaces for the best user
            experience. Always up for a challenge, I’m constantly exploring and
            growing in the ever-evolving world of frontend development.
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
              className="py-3 px-6 text-slate-950 rounded-xl hover:scale-105 focus:scale-105 transition  dark:text-slate-100"
            >
              My projects
            </Link>
          </div>
        </div>
      </>
    </PageSection>
  );
}
