"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "./navbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <header className="fixed left-0 right-0 top-0 bg-white bg-opacity-70 dark:bg-opacity-60 backdrop-blur-[0.4rem] z-50 dark:bg-slate-800 dark:text-slate-300">
      <div className="max-w-screen-md m-auto pt-3 pb-5 px-5">
        <div className="flex justify-between ">
          <Link href="/">
            <div className="bg-[#4da5f5] px-2.5 py-1 rounded-sm text-white text-sm">
              E
            </div>
          </Link>
          <div className="mobile-nav flex md:hidden flex-col items-end pt-1 gap-2 w-full">
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
          <ul className="desktop-nav hidden md:flex gap-10 text-sm">
            <Navbar />
          </ul>
        </div>
        {navOpen && (
          <ul className="mobile-nav flex md:hidden flex-col gap-2 w-full mt-4 mb-4">
            <Navbar onClose={() => setNavOpen(false)} />
          </ul>
        )}
      </div>
    </header>
  );
}
