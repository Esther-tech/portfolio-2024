"use client";
import React, { useState, useEffect, useCallback } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const changeMode = (newMode: "dark" | "light") => {
    if (newMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleChange = () => {
    const newMode = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    window.localStorage.setItem("mode", newMode);
    changeMode(newMode);
  };

  useEffect(() => {
    const localMode = window.localStorage.getItem("mode");
    const darkPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const presetDarkMode =
      localMode === "dark" || (!localMode && darkPreference);
    setDarkMode(presetDarkMode || false);
    changeMode(presetDarkMode ? "dark" : "light");
  }, []);

  return (
    <button
      className="fixed bottom-10 right-5 md:right-20 bg-white border border-slate-100 p-2 shadow-md rounded-lg dark:bg-slate-950 dark:border-slate-600"
      onClick={handleChange}
    >
      {darkMode ? (
        <SunIcon height={16} width={16} className="fill-slate-400" />
      ) : (
        <MoonIcon height={16} width={16} className="fill-slate-300" />
      )}
    </button>
  );
}
