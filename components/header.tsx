import Link from "next/link";
import React from "react";
import NavItem from "./navItem";

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
  return (
    <header className="flex justify-between py-5 px-7">
      <Link href="/">
        <div className="bg-[#4da5f5] px-2.5 py-1 rounded-sm text-white text-sm">
          E
        </div>
      </Link>
      <ul className="hidden md:flex gap-10">
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
