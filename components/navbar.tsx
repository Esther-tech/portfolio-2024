import React from "react";
import Link from "next/link";
import { navItems } from "@/lib/data";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/activeSectionContext";

export default function Navbar({ onClose }: { onClose?: () => void }) {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <>
      {navItems.map((item) => {
        const { title, path } = item;
        const currentActive = activeSection === title;
        return (
          <li
            key={path}
            className={`relative font-bold hover:text-slate-600 dark:hover:text-slate-100 transition duration-300 m-auto ${
              currentActive && "text-slate-600 dark:text-slate-50"
            }`}
            onClick={onClose}
          >
            <Link
              href={path}
              className="py-3"
              onClick={() => setActiveSection(title)}
            >
              {title}
            </Link>
            {currentActive && (
              <motion.span
                className="absolute h-[1px] bg-slate-600 dark:bg-slate-50 -bottom-[0.15rem] -left-[5%] w-[110%] rounded-xl hidden md:block"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 50,
                }}
              ></motion.span>
            )}
          </li>
        );
      })}
    </>
  );
}
