import React, { Dispatch, SetStateAction } from "react";

export default function Navbar({
  activePage,
  setActivePage,
}: {
  activePage: "home" | "about" | "contact" | "projects";
  setActivePage: Dispatch<
    SetStateAction<"home" | "about" | "contact" | "projects">
  >;
}) {
  return (
    <div className="w-full flex justify-end gap-10 px-8 py-5 ">
      <button onClick={() => setActivePage("home")}>Home</button>
      <button onClick={() => setActivePage("about")}>About</button>
      <button onClick={() => setActivePage("projects")}>Projects</button>
      <button onClick={() => setActivePage("contact")}>Contact</button>
    </div>
  );
}
