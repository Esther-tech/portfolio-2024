import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div>
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
          <h1 className="text-xl font-bold">Hi, I'm Esther</h1>
          <p>Mid-level frontend developer</p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl">
          A Frontend enthusiast with an eye for detail
        </h2>
        <p>Short intro/about section</p>
      </div>
      <div>
        <button>View resume</button>
        <button>My projects</button>
      </div>
    </div>
  );
}
