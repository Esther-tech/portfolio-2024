import React from "react";
import Link from "next/link";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  { title: "About", path: "/about" },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  return (
    <>
      {navItems.map((item, i) => {
        const { title, path } = item;
        return (
          <li key={i} className="font-bold">
            <Link href={path}>{title}</Link>
          </li>
        );
      })}
    </>
  );
}
