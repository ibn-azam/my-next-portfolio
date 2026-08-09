
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";
import MySkills from "@/components/MySkills";
import MyEducation from "@/components/MyEducation";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-[#060d1a]">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><AboutMe /></section>
      <section id="skills"><MySkills /></section>
      <section id="education"><MyEducation /></section>
      <section id="projects"><Projects /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}