"use client"

import { Download } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-space-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-cyan">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-soft-magenta mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait with Halftone Effect */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* TODO: Replace with actual portrait */}
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Hans Gamido Portrait"
                width={320}
                height={320}
                className="rounded-lg halftone-effect"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-neon-cyan"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-soft-magenta"></div>
            </div>
          </div>

          {/* Bio Card */}
          <div className="glassmorphism-card p-8 rounded-lg">
            <div className="mb-6">
              <div className="text-sm text-neon-cyan font-mono mb-2">{">"} cat about_hans.txt</div>
              <div className="border-l-2 border-neon-cyan/50 pl-4">
                <p className="text-lg leading-relaxed mb-4">
                  I'm an Applied Physicist pursuing a European Master's in Sustainable Systems Engineering, passionate
                  about the intersection of AI, climate science, and astrophysics. Currently based in Barcelona, I work
                  on machine learning applications for climate modeling and astrophysical data analysis.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  My research focuses on explainable AI methods in climate sciences and group-equivariant deep learning
                  for computational fluid dynamics. When I'm not training neural networks or analyzing NASA catalogs,
                  you'll find me advocating for science communication and sustainability.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "Machine Learning", "Climate Science", "Astrophysics", "XAI", "Computer Vision"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-sm rounded-full border border-neon-cyan/30"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-soft-magenta text-space-navy font-space-mono font-bold rounded hover:scale-105 transition-transform duration-300">
              <Download size={20} />
              <span>DOWNLOAD_CV.pdf</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
