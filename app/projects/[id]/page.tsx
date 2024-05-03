import React from "react";
import { projectData } from "@/lib/data";
import PageSection from "@/components/pageSection";
import Image from "next/image";
import NotFound from "./notFound";
import horizontalDivider from "@/public/svg/horizontal-divider.svg";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectData.find(
    (project) => project.id === parseInt(params.id)
  );

  if (!project) {
    return <NotFound />;
  }

  const { id, title, imageUrl, tags, company, timeline, caseStudy } = project;

  return (
    <PageSection>
      <div className="py-10 flex flex-col gap-7">
        <div className="flex items-center gap-2">
          <ArrowLeftIcon className="h-4 w-4" />
          <Link href="/#projects">Back to projects</Link>
        </div>

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
          </div>
        </div>

        <Image src={horizontalDivider} alt="divider" />

        <div className="overflow-hidden max-h-96 w-4/5 m-auto">
          <Image src={imageUrl} alt={title} width={800} height={800} />
        </div>

        <div>
          <h3 className="text-lg font-bold capitalize mb-4">Company info</h3>
          {company.info.map((section, i) => (
            <p key={i} className="mb-4">
              {section}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-2xl capitalize mb-4">The project</h2>
          <div className="mb-4">
            <h3 className="mb-4 capitalize">Introduction</h3>
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
        </div>
      </div>
    </PageSection>
  );
}
