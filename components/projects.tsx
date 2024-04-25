import React from "react";
import PageSection from "./pageSection";
import { projectData } from "@/lib/data";
import Image from "next/image";

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
    <section className="flex gap-5 flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 overflow-hidden h-fit max-h-[15rem]">
        <Image src={imageUrl} alt={title} width={400} height={200} />
      </div>
      <div className="md:w-1/2 flex flex-col gap-4 items-center md:items-start">
        <h3>{title}</h3>
        <div className="flex gap-3 flex-wrap justify-center">
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>
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
