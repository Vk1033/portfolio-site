import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 container max-w-3xl">
      <Intro />
      <About />
      <Projects />
    </main>
  );
}
