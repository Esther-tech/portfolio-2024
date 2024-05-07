import React from "react";
import { projectData } from "@/lib/data";
import PageSection from "@/components/pageSection";
import Image from "next/image";
import NotFound from "./notFound";
import horizontalDivider from "@/public/svg/horizontal-divider.svg";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Tag } from "@/components/tag";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectData.find(
    (project) => project.id === parseInt(params.id)
  );

  if (!project) {
    return <NotFound />;
  }

  const { title, imageUrl, tags, company, timeline, duration, caseStudy } =
    project;

  return (
    <PageSection>
      <div className="py-10 flex flex-col gap-7">
        <Link href="/#projects" className="flex items-center gap-2">
          <ArrowLeftIcon className="h-4 w-4" /> Back to projects
        </Link>

        <div className="flex flex-col gap-7">
          <h1 className="text-4xl">{title}</h1>
          <div className="flex gap-20">
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

        <Image src={horizontalDivider} alt="divider" className="-ml-[7px]" />

        <div className="bg-slate-50 rounded-xl border border-slate-200">
          <div className="overflow-hidden w-5/6 pt-10 m-auto">
            <Image src={imageUrl} alt={title} width={5000} height={5000} />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold capitalize">Company info</h3>
          {company.info.map((section, i) => (
            <p key={i}>{section}</p>
          ))}
        </div>

        <Image src={horizontalDivider} alt="divider" className="-ml-[7px]" />

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl capitalize">The project</h2>
          <div className="flex gap-4 my-3">
            {tags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
          <div>
            <h3 className="capitalize mb-3">Introduction</h3>
            {caseStudy.intro.map((section, i) => (
              <p key={i} className="mb-4">
                {section}
              </p>
            ))}
          </div>
          <div>
            <h3 className="mb-4 capitalize">Case study</h3>
            {caseStudy.body.map((section, i) => (
              <p key={i} className="mb-4">
                {section}
              </p>
            ))}
          </div>
          <div>
            <h3 className="mb-4 capitalize">Conclusion</h3>
            {caseStudy.conclusion.map((section, i) => (
              <p key={i} className="mb-4">
                {section}
              </p>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
