import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Objectives from "@/components/Objectives";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-900 gap-5">
      <Banner/>
      <Objectives/>
      <Projects/>
      <Contact/>
    </main>
  );
}
