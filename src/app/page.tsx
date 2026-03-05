import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import SpaceBackground from "@/components/SpaceBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d24] relative">
      <SpaceBackground />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
    </main>
  );
}
