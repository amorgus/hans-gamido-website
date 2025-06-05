"use client"

import { Calendar, Clock, Tag } from "lucide-react"

interface NotebookEntry {
  id: number
  title: string
  date: string
  readTime: string
  tags: string[]
  excerpt: string
  lineCount: number
}

export default function LabNotebook() {
  // TODO: Replace with actual blog entries
  const entries: NotebookEntry[] = [
    {
      id: 1,
      title: "Integrated Gradients for Climate Pattern Recognition",
      date: "2024-07-15",
      readTime: "12 min",
      tags: ["XAI", "Climate Science", "Deep Learning"],
      excerpt:
        "Exploring how integrated gradients can help us understand AI decision-making in global climate heatmap classifications...",
      lineCount: 203,
    },
    {
      id: 2,
      title: "Group Equivariance in Fluid Dynamics Modeling",
      date: "2024-06-20",
      readTime: "15 min",
      tags: ["CNN", "Fluid Dynamics", "ENSO"],
      excerpt:
        "Leveraging symmetries in neural networks to improve forecasting of ocean currents and climate phenomena...",
      lineCount: 267,
    },
    {
      id: 3,
      title: "Astrophysical Data Mining: Hunting Blazars",
      date: "2024-01-10",
      readTime: "10 min",
      tags: ["Astrophysics", "Data Mining", "NASA"],
      excerpt: "Diving deep into NASA's 4FGL-DR3 catalog to classify mysterious Blazar Candidates of Unknown Type...",
      lineCount: 156,
    },
    {
      id: 4,
      title: "From Physics to Sustainability Engineering",
      date: "2023-12-05",
      readTime: "8 min",
      tags: ["Career", "Sustainability", "Erasmus"],
      excerpt: "Reflecting on the transition from Applied Physics to Sustainable Systems Engineering in Barcelona...",
      lineCount: 134,
    },
  ]

  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-space-mono text-4xl md:text-5xl font-bold mb-4">
            Lab <span className="text-neon-cyan">Notebook</span>
          </h2>
          <p className="text-xl text-gray-300">Experiments, thoughts, and discoveries from the digital lab</p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-soft-magenta mx-auto mt-4"></div>
        </div>

        <div className="space-y-6">
          {entries.map((entry, index) => (
            <article
              key={entry.id}
              className="code-editor-card bg-space-navy/50 border border-neon-cyan/30 rounded-lg overflow-hidden hover:border-neon-cyan/60 transition-all duration-300"
            >
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-space-navy/80 border-b border-neon-cyan/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">entry_{entry.id.toString().padStart(3, "0")}.md</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Line Numbers */}
                  <div className="text-xs text-gray-500 font-mono leading-relaxed select-none">
                    {Array.from({ length: Math.ceil(entry.lineCount / 10) }, (_, i) => (
                      <div key={i}>{((i + 1) * 10).toString().padStart(3, " ")}</div>
                    ))}
                  </div>

                  {/* Article Content */}
                  <div className="flex-1">
                    <h3 className="font-space-mono text-xl font-bold text-neon-cyan mb-3 hover:text-white transition-colors cursor-pointer">
                      {entry.title}
                    </h3>

                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(entry.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{entry.readTime}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">{entry.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Tag size={14} className="text-soft-magenta" />
                        <div className="flex flex-wrap gap-2">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-soft-magenta/20 text-soft-magenta text-xs rounded border border-soft-magenta/30"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="text-neon-cyan hover:text-white transition-colors text-sm font-mono">
                        READ_MORE()
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-soft-magenta text-soft-magenta hover:bg-soft-magenta hover:text-space-navy transition-all duration-300 font-space-mono">
            VIEW_ALL_ENTRIES()
          </button>
        </div>
      </div>
    </section>
  )
}
