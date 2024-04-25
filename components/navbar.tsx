import React from "react";
import Link from "next/link";
import { navItems } from "@/lib/data";

export default function Navbar({ onClose }: { onClose?: () => void }) {
  return (
    <>
      {navItems.map((item) => {
        const { title, path } = item;
        return (
          <li
            key={path}
            className="font-bold hover:text-slate-600 transition m-auto"
            onClick={onClose && onClose}
          >
            <Link href={path}>{title}</Link>
          </li>
        );
      })}
    </>
  );
}
