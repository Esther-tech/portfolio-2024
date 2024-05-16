"use client";

import React from "react";
import PageSection from "./pageSection";
import { experienceData } from "@/lib/data";
import Image from "next/image";
import arrow from "@/public/svg/arrow.svg";
import divider from "@/public/svg/experience-vertical-divider.svg";
import indicator from "@/public/svg/experience-indicator.svg";
import { Tag } from "./tag";

export default function Experience() {
  return (
    <div className="bg-[url('/images/experience-background.png')] bg-slate-50 dark:bg-slate-900 bg-no-repeat bg-cover">
      <PageSection id="experience" tracker="Experience">
        <div className="relative">
          {experienceData.map((experience, i) => {
            const { title, company, companyIcon, year, tags } = experience;
            const reverse = !(i % 2);
            return (
              <div
                key={i}
                className={`flex my-12 justify-between flex-row-reverse sm:flex-row ${
                  reverse && "sm:flex-row-reverse"
                }`}
              >
                <div className="w-8/12 sm:w-2/5">
                  <h3 className="text-xl capitalize mb-2">{title}</h3>
                  <div className="flex gap-2 flex-wrap">
                    <Image
                      src={companyIcon}
                      width="200"
                      height="200"
                      alt="company icon"
                      quality={95}
                      className="inline-flex rounded-md w-6 h-6"
                    />
                    {company}
                    {tags.map((tag, i) => {
                      return <Tag key={i} tag={tag} />;
                    })}
                  </div>
                </div>
                <Image
                  src={indicator}
                  width="18"
                  height="18"
                  alt="indicator"
                  className="z-10 ml-[1px] relative self-start mt-2 "
                />
                <div
                  className={`w-2/12 sm:w-2/5 ${reverse && "sm:text-right"}`}
                >
                  <div className="inline-block py-2 px-3 mb-2 text-xs sm:text-sm bg-white dark:bg-slate-900 rounded-md relative">
                    <Image
                      src={arrow}
                      width="8"
                      height="8"
                      alt="arrow"
                      className={`absolute top-[30%] -right-[7px] rotate-180 dark:invert dark:opacity-80 ${
                        !reverse && "sm:-left-[7px] sm:rotate-0"
                      }`}
                    />
                    <div>{year}</div>
                  </div>
                  <Image
                    src="/images/experience-date.png"
                    width="600"
                    height="20"
                    alt="divider"
                    className="dark:invert"
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
            className="absolute -top-[2.5rem] left-1/4 sm:left-1/2 h-[110%]"
          />
        </div>
      </PageSection>
    </div>
  );
}
