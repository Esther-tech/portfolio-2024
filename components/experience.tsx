"use client";

import React from "react";
import PageSection from "./pageSection";
import { experienceData } from "@/lib/data";
import Image from "next/image";
import arrow from "@/public/svg/arrow.svg";
import divider from "@/public/svg/experience-vertical-divider.svg";

export default function Experience() {
  return (
    <div className="bg-[url('/images/experience-background.png')] bg-slate-100 bg-no-repeat bg-cover">
      <PageSection id="experience">
        <div className="relative">
          {experienceData.map((experience, i) => {
            const { title, company, year, tags } = experience;
            const reverse = !(i % 2);
            return (
              <div
                key={i}
                className={`flex my-12 justify-between ${
                  reverse && "flex-row-reverse"
                }`}
              >
                <div className="w-2/5">
                  <h3 className="text-xl capitalize mb-2">{title}</h3>
                  <div>{company}</div>
                </div>
                <div className="mt-2">dot</div>
                <div className={`w-2/5 ${reverse && "text-right"}`}>
                  <div className="inline-block py-2 px-3 mb-2 text-sm bg-slate-50 rounded-md relative">
                    <div>
                      <Image
                        src={arrow}
                        width="8"
                        height="8"
                        alt="arrow"
                        className={`absolute top-[30%] ${
                          reverse ? "right-[-7px] rotate-180" : "left-[-7px]"
                        }`}
                      />
                    </div>
                    <div>{year}</div>
                  </div>
                  <Image
                    src="/images/experience-date.png"
                    width="600"
                    height="20"
                    alt="divider"
                  />
                </div>
              </div>
            );
          })}
          <Image
            src={divider}
            height="400"
            width="1"
            alt="vertical divider"
            className="absolute top-[-2.5rem] left-1/2 h-[120%]"
          />
        </div>
      </PageSection>
    </div>
  );
}
