import React from "react";
import Link from "next/link";
import { navItems } from "@/lib/data";

export default function Navbar() {
  return (
    <>
      {navItems.map((item) => {
        const { title, path } = item;
        return (
          <li
            key={path}
            className="font-bold hover:text-slate-600 transition m-auto"
          >
            <Link href={path}>{title}</Link>
          </li>
        );
      })}
    </>
  );
}
