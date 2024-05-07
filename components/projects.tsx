import React from "react";
import PageSection from "./pageSection";
import { projectData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { Tag } from "./tag";
import indicator from "@/public/svg/section-indicator1.svg";

type ItemProps = (typeof projectData)[number];

export default function Projects() {
  return (
    <PageSection
      id="projects"
      title="Projects & case studies"
      indicator={indicator}
    >
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

function ProjectItem({
  id,
  title,
  company,
  timeline,
  tags,
  imageUrl,
}: ItemProps) {
  return (
    <section className="flex gap-5 flex-col md:flex-row items-center w-[345px] sm:w-[500px] md:w-auto m-auto md:m-0">
      <div className="md:w-1/2 overflow-hidden h-fit max-h-[15rem] bg-slate-50 rounded-xl">
        <Link href={`/projects/${id}`}>
          <div className="w-11/12 m-auto py-3 ">
            <Image
              src={imageUrl}
              alt={title}
              height={2000}
              className="w-[345px] sm:w-[500px] md:w-[400px]"
            />
          </div>
        </Link>
      </div>
      <div className="md:w-1/2 flex flex-col gap-2">
        <h6 className="text-sm text-slate-700">
          {company.name} &middot; {timeline}
        </h6>
        <Link href={`/projects/${id}`}>
          <h3 className="text-2xl">{title}</h3>
        </Link>
        <div className="flex gap-3 py-2 flex-wrap">
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
