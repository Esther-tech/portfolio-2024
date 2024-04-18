import React from "react";
import Link from "next/link";

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

export default function Navbar() {
  return (
    <>
      {navItems.map((item, i) => {
        const { title, href } = item;
        return (
          <li key={i} className="font-bold">
            <Link href={href}>{title}</Link>
          </li>
        );
      })}
    </>
  );
}
