import React from "react";
import Link from "next/link";
import { navItems } from "@/lib/data";

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
