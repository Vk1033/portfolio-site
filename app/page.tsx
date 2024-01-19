import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col px-4 container max-w-3xl bg-slate-50 dark:bg-background">
      <Intro />
      <Skills />
      <About />
      <Projects />
    </main>
  );
}
