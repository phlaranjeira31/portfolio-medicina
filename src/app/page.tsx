import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Objective from "@/app/components/Objective";
import Education from "@/app/components/Education";
import Interests from "@/app/components/Interests";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Objective />
        <Education />
        <Interests />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-rose-200/60 bg-white py-10">
        <div className="mx-auto max-w-5xl px-5 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} • Portfólio Acadêmico • Todos os direitos
          reservados.
        </div>
      </footer>
    </>
  );
}


