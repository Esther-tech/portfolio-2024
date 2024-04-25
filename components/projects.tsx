import React from "react";
import PageSection from "./pageSection";
import { projectData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { ArrowUpIcon } from "@heroicons/react/20/solid";

type ItemProps = (typeof projectData)[number];

export default function Projects() {
  return (
    <PageSection id="projects" title="Projects & case studies">
      <div className="flex flex-col gap-8">
        {projectData?.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <ProjectItem {...item} />
            </React.Fragment>
          );
        })}
      </div>
    </PageSection>
  );
}

function ProjectItem({ id, title, company, year, tags, imageUrl }: ItemProps) {
  return (
    <section className="flex gap-5 flex-col md:flex-row items-center w-[345px] sm:w-[500px] md:w-auto m-auto md:m-0">
      <div className="md:w-1/2 overflow-hidden h-fit max-h-[15rem]">
        <Image
          src={imageUrl}
          alt={title}
          height={200}
          className="w-[345px] sm:w-[500px] md:w-[400px]"
        />
      </div>
      <div className="md:w-1/2 flex flex-col gap-2 items-center md:items-start">
        <h6 className="text-sm text-slate-700">
          {company} &middot; {year}
        </h6>
        <h3 className="text-2xl text-center md:text-left">{title}</h3>
        <div className="flex gap-3 py-2 flex-wrap justify-center">
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>
        <Link href={`/projects/${id}`} className="text-sm flex gap-2 py-2">
          View case <ArrowUpRightIcon width="14" height="14" className="mt-1" />
        </Link>
      </div>
    </section>
  );
}

function Tag({ tag }: { tag: string }) {
  return (
    <span className="text-xs inline-flex px-3 bg-slate-200 rounded-full leading-7 text-slate-700 tracking-wide">
      {tag}
    </span>
  );
}
