import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import dynamic from "next/dynamic";
import Spinner from "@/components/ui/spinner";
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <Spinner />,
});

// now Dynamically reImport all the other components that are used in this file

const FloatingNav = dynamic(() => import("@/components/ui/FloatingNav"), {
  loading: () => <Spinner />,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  loading: () => <Spinner />,
});
const Clients = dynamic(() => import("@/components/Clients"), {
  loading: () => <Spinner />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <Spinner />,
});
const Approach = dynamic(() => import("@/components/Approach"), {
  loading: () => <Spinner />,
});

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#about" },
            { name: "projects", link: "#projects" },
            {
              name: "testimonials",

              link: "#testimonials",
            },
            { name: "contact", link: "#contact" },
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
