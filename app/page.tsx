import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 container max-w-3xl">
      <Intro />
      <Skills />
      <About />
      <Projects />
    </main>
  );
}
