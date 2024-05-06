import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

const inter = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esther | Personal portfolio",
  description:
    "Esther Siebert is a frontend developer, specialized in React.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
