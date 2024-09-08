import Contact from "@/components/Contact";
import Objectives from "@/components/Objectives";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 bg-zinc-900 gap-5">
      <Objectives/>
      <Projects/>
      <Contact/>
    </main>
  );
}
