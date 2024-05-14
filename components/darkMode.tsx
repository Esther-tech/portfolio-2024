"use client";
import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";

export default function DarkMode() {
  const localMode = window.localStorage.getItem("mode");
  const darkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useState<boolean>(
    () => localMode === "dark" || (!localMode && darkPreference) || false
  );

  return (
    <button
      className="fixed bottom-10 right-5 md:right-20 bg-white border border-slate-100 p-2 shadow-md rounded-lg"
      onClick={() => {
        const newMode = darkMode ? "light" : "dark";
        setDarkMode(!darkMode);
        window.localStorage.setItem("mode", newMode);
        if (newMode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }}
    >
      {darkMode ? (
        <MoonIcon height={16} width={16} className="fill-slate-400" />
      ) : (
        <SunIcon height={16} width={16} className="fill-slate-400" />
      )}
    </button>
  );
}
