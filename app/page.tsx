import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="py-5 md:py-10">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
