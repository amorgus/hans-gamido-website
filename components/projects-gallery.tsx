"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github?: string
  demo?: string
}

export default function ProjectsGallery() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // TODO: Replace with actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Explainable AI in Climate Sciences",
      description: "Evaluating XAI methods for global heatmap classifications using Quantus framework",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "Quantus", "Climate Modeling", "XAI"],
      github: "https://github.com/amorgus",
    },
    {
      id: 2,
      title: "Group Equivariant Deep Learning",
      description: "CNN applications to fluid dynamics including ENSO simulations and ocean currents",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "CNN", "Fluid Dynamics", "ENSO"],
      github: "https://github.com/amorgus",
    },
    {
      id: 3,
      title: "NASA 4FGL-DR3 Catalog Analysis",
      description: "Astrophysical data mining for classifying Blazar Candidates of Unknown Type",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "Data Mining", "Astrophysics", "NASA"],
      github: "https://github.com/amorgus",
    },
    {
      id: 4,
      title: "African Baobab Pharmaceutical Research",
      description: "Biochemical characterization using nanoimaging and spectrometry techniques",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Biochemistry", "Nanoimaging", "Spectrometry", "Drug Delivery"],
      github: "https://github.com/amorgus",
    },
    {
      id: 5,
      title: "Climate Variability Signal Localization",
      description: "Using integrated gradients to interpret AI decisions in climate pattern recognition",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "Integrated Gradients", "Climate Science", "AI Interpretation"],
      github: "https://github.com/amorgus",
    },
    {
      id: 6,
      title: "Easy as Py Workshop",
      description: "Programming education initiative teaching Python fundamentals to high school students",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "Education", "Community Outreach", "ACM"],
      github: "https://github.com/amorgus",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-space-navy to-space-navy/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-space-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-soft-magenta">Projects</span> Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Where science meets art, and code becomes poetry</p>
          <div className="w-24 h-1 bg-gradient-to-r from-soft-magenta to-neon-cyan mx-auto mt-4"></div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`project-card relative overflow-hidden rounded-lg border border-neon-cyan/30 transition-all duration-500 ${
                  hoveredCard === project.id ? "transform rotate-2 scale-105" : ""
                }`}
              >
                {/* Front Face */}
                <div
                  className={`transition-opacity duration-500 ${hoveredCard === project.id ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                    {/* LaTeX Watermark */}
                    <div className="absolute top-4 right-4 text-neon-cyan/20 font-mono text-2xl">∑∇π</div>
                  </div>
                  <div className="p-6 bg-space-navy/90">
                    <h3 className="font-space-mono text-xl font-bold text-neon-cyan mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Back Face */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-space-navy via-space-navy/95 to-neon-cyan/10 p-6 flex flex-col justify-center transition-opacity duration-500 ${
                    hoveredCard === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="font-space-mono text-xl font-bold text-neon-cyan mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-soft-magenta/20 text-soft-magenta text-xs rounded-full border border-soft-magenta/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-neon-cyan hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 text-soft-magenta hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
