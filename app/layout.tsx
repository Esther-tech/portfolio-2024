import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

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
      <body className={`${inter.className} bg-white text-slate-950`}>
        <Container>
          <Header />
          <div>{children}</div>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
