import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="py-10">
      <div className="flex gap-5 items-center">
        <div className="h-20 w-20 rounded-full overflow-hidden">
          <Image
            src="/images/portfolio-img.jpg"
            width={400}
            height={400}
            quality={100}
            alt="Esther"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold">Hi, I&apos;m Esther</h1>
          <p>Mid-level frontend developer</p>
        </div>
      </div>
      <div className="py-8 flex gap-8 flex-col">
        <h2 className="text-5xl">
          A Frontend enthusiast with an eye for detail
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex gap-5">
          <button className="py-3 px-6 bg-slate-950 text-slate-50 rounded-xl">
            View resume
          </button>
          <button className="py-3 px-6 text-slate-950 rounded-xl">
            My projects
          </button>
        </div>
      </div>
    </section>
  );
}
