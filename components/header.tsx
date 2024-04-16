import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between py-5 px-7">
      <div>
        <Link href="/">
          <div className="bg-[#4da5f5] px-2.5 py-1 rounded-sm text-white text-sm">
            E
          </div>
        </Link>
      </div>
      <div className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  );
}
