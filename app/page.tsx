"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome, FaQuoteLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={[
            { name: "Home", icon: <FaHome />, link: "#about" },
            { name: "projects", icon: <AiOutlineProject />, link: "#projects" },
            {
              name: "testimonials",
              icon: <FaQuoteLeft />,
              link: "#testimonials",
            },
            { name: "contact", icon: <MdEmail />, link: "#contact" },
          ]}
        />

        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
