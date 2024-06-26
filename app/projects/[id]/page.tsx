import React from "react";
import { projectData } from "@/lib/data";
import PageSection from "@/components/pageSection";
import Image from "next/image";
import NotFound from "./notFound";
import HorizontalDivider from "@/public/svg/horizontal-divider.svg";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Tag } from "@/components/tag";
import { LinkIcon } from "@heroicons/react/16/solid";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectData.find(
    (project) => project.id === parseInt(params.id)
  );

  if (!project) {
    return <NotFound />;
  }

  const {
    title,
    imageUrl,
    tags,
    company,
    timeline,
    duration,
    caseStudy,
    demoUrl,
    codeUrl,
  } = project;

  return (
    <PageSection tracker="Projects">
      <div className="py-5 md:py-10 flex flex-col gap-7">
        <Link href="/#projects" className="flex items-center gap-2">
          <ArrowLeftIcon className="h-4 w-4" /> Back to projects
        </Link>

        <div className="flex flex-col gap-7">
          <h1 className="text-4xl">{title}</h1>
          <div className="flex justify-between gap-5 pr-5 sm:pr-24">
            <div>
              <h3 className="text-lg font-bold flex">Company</h3>
              {company.name}
            </div>
            <div>
              <h3 className="text-lg font-bold flex">Timeline</h3>
              {timeline}
            </div>
            <div>
              <h3 className="text-lg font-bold flex">Duration</h3>
              {duration}
            </div>
          </div>
        </div>

        <Image src={HorizontalDivider} alt="divider" className="-ml-[7px]" />

        <div className="bg-slate-50 dark:bg-slate-500 rounded-md border border-slate-200 dark:border-slate-300">
          <div className="overflow-hidden w-5/6 pt-10 m-auto">
            <Image
              src={imageUrl[0]}
              alt={title}
              width={5000}
              height={5000}
              className="rounded-t-md dark:opacity-80"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <h3 className="text-lg font-bold capitalize">Company info</h3>
            {company.website && (
              <Link
                href={company.website}
                passHref
                target="_blank"
                className="flex gap-1 items-center text-xs py-1 px-2 rounded-xl hover:scale-105 focus:scale-105 hover:bg-slate-200 transition"
              >
                <LinkIcon className="w-3 h-3" />
              </Link>
            )}
          </div>
          {company.info.map((section, i) => (
            <p className="text-lg" key={i}>
              {section}
            </p>
          ))}
        </div>

        <Image src={HorizontalDivider} alt="divider" className="-ml-[7px]" />

        <div className="flex flex-col gap-3">
          <div className="flex">
            <h2 className="text-2xl capitalize">The project</h2>
            <div className="flex ml-auto gap-3">
              {demoUrl && (
                <Link
                  href={demoUrl}
                  passHref
                  target="_blank"
                  className="py-2 px-4 bg-slate-950 text-white text-sm rounded-xl hover:scale-105 focus:scale-105 transition"
                >
                  Demo
                </Link>
              )}
              {codeUrl && (
                <Link
                  href={codeUrl}
                  passHref
                  target="_blank"
                  className="py-2 px-4 text-slate-950 bg-slate-100 rounded-xl hover:scale-105 focus:scale-105 transition text-sm dark:text-slate-100 dark:bg-transparent"
                >
                  Source code
                </Link>
              )}
            </div>
          </div>
          <div className="flex gap-4 my-3 flex-wrap">
            {tags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
          <div>
            <h3 className="capitalize mb-3">Introduction</h3>
            {caseStudy.intro.map((section, i) => (
              <p key={i} className="mb-4 text-lg">
                {section}
              </p>
            ))}
          </div>
          {imageUrl[1] && (
            <div className="overflow-hidden w-5/6 p-10 rounded-lg bg-slate-100 dark:bg-slate-500 mb-10">
              <Image
                src={imageUrl[1]}
                alt={title}
                width={5000}
                height={5000}
                className="rounded-md dark:opacity-80"
              />
            </div>
          )}
          <div>
            <h3 className="mb-4 capitalize">Case study</h3>
            {caseStudy.body.map((section, i) => (
              <p key={i} className="mb-4 text-lg">
                {section}
              </p>
            ))}
          </div>
          <div>
            <h3 className="mb-4 capitalize">Conclusion</h3>
            {caseStudy.conclusion.map((section, i) => (
              <p key={i} className="mb-4 text-lg">
                {section}
              </p>
            ))}
          </div>
          {imageUrl[2] && (
            <div className="overflow-hidden p-10 m-auto rounded-lg bg-slate-100 dark:bg-slate-500 mb-10">
              <Image
                src={imageUrl[2]}
                alt={title}
                width={5000}
                height={5000}
                className="rounded-md dark:opacity-80"
              />
            </div>
          )}
        </div>
      </div>
    </PageSection>
  );
}
