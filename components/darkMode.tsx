import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";

export default function DarkMode() {
  return (
    <button className="fixed bottom-10 right-20 bg-slate-100 border border-slate-300 p-2 rounded-lg">
      <SunIcon height={16} width={16} className="fill-slate-400" />
    </button>
  );
}
