"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "./navbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <header className=" max-w-screen-lg m-auto fixed left-0 right-0 top-0 flex justify-between py-4 px-7 bg-white bg-opacity-70">
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
        {navOpen && (
          <ul className="flex flex-col gap-2 mr-2">
            <Navbar />
          </ul>
        )}
      </div>
      <ul className="desktop-nav hidden md:flex gap-10">
        <Navbar />
      </ul>
    </header>
  );
}
