"use client";
import { useState } from "react";
import Navbar from "./components/navbar";

const Component = {
  home: <div>home</div>,
  about: <div>about</div>,
  contact: <div>contact</div>,
  projects: <div>projects</div>,
};

export default function Home() {
  const [activePage, setActivePage] = useState<
    "home" | "about" | "contact" | "projects"
  >("home");
  const ActiveComponent = () => Component[activePage];
  return (
    <main className="flex min-h-screen flex-col bg-white w-9/12 mx-auto">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <ActiveComponent />
    </main>
  );
}
