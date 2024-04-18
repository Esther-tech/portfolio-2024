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
      <ul className="flex gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
