import React from "react";
import PageSection from "./pageSection";
import { experienceData } from "@/lib/data";

export default function Experience() {
  return (
    <div className="bg-[url('/images/experience-background.png')] bg-slate-100 bg-no-repeat bg-cover">
      <PageSection id="experience" title="Experience">
        <div>
          {experienceData.map((experience, i) => {
            return (
              <div
                key={i}
                className={`flex ${
                  !(i % 2) && "flex-row-reverse"
                } justify-between`}
              >
                <div className="w-1/3">exp</div>
                <div className="w-1/7">dot</div>
                <div className="w-1/3">date</div>
              </div>
            );
          })}
        </div>
      </PageSection>
    </div>
  );
}
