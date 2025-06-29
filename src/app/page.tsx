import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

  export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact />
    </>
  );

}

