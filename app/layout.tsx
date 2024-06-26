import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import DarkMode from "@/components/darkMode";

const inter = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esther | Personal portfolio",
  description:
    "Esther Siebert is a frontend developer, specialized in React.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-white text-slate-950 dark:bg-slate-800 dark:text-slate-300`}
      >
        <ActiveSectionContextProvider>
          <Container>
            <Header />
            <div>{children}</div>
          </Container>
        </ActiveSectionContextProvider>
        <DarkMode />
      </body>
    </html>
  );
}
