"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  { title: "About", href: "/about" },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <header className="flex justify-between py-5 px-7">
      <Link href="/">
        <div className="bg-[#4da5f5] px-2.5 py-1 rounded-sm text-white text-sm">
          E
        </div>
      </Link>
      <div className="mobile-nav md:hidden">
        <button onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      <ul className="desktop-nav hidden md:flex gap-10">
        {navItems.map((item, i) => {
          const { title, href } = item;
          return (
            <li key={i}>
              <NavItem title={title} href={href} />
            </li>
          );
        })}
      </ul>
    </header>
  );
}
