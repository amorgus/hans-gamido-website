import Hero from "@/components/hero"
import About from "@/components/about"
import ProjectsGallery from "@/components/projects-gallery"
import LabNotebook from "@/components/lab-notebook"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="bg-space-navy min-h-screen text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <ProjectsGallery />
      <LabNotebook />
      <Contact />
    </main>
  )
}
