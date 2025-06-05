"use client"

import { useState } from "react"
import { Copy, Mail, Github, Linkedin, Twitter, Check } from "lucide-react"

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText("hansgamido@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/amorgus", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-t from-space-navy/80 to-transparent">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-16">
          <h2 className="font-space-mono text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-soft-magenta">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on something amazing? Drop me a line!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-soft-magenta to-neon-cyan mx-auto mt-4"></div>
        </div>

        {/* QR Code Placeholder */}
        <div className="mb-12">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-cyan/20 to-soft-magenta/20 rounded-lg border border-neon-cyan/30 flex items-center justify-center mb-4">
            {/* TODO: Replace with actual QR code */}
            <div className="text-neon-cyan font-mono text-xs">QR_CODE</div>
          </div>
          <p className="text-sm text-gray-400">Scan for quick contact</p>
        </div>

        {/* Email */}
        <div className="mb-12">
          <button
            onClick={copyEmail}
            className="group flex items-center space-x-3 mx-auto px-6 py-3 bg-gradient-to-r from-neon-cyan/10 to-soft-magenta/10 border border-neon-cyan/30 rounded-lg hover:border-neon-cyan/60 transition-all duration-300"
          >
            <Mail className="text-neon-cyan" size={20} />
            <span className="font-space-mono text-lg">hansgamido@gmail.com</span>
            {emailCopied ? (
              <Check className="text-green-400" size={16} />
            ) : (
              <Copy className="text-gray-400 group-hover:text-neon-cyan transition-colors" size={16} />
            )}
          </button>
          {emailCopied && <p className="text-green-400 text-sm mt-2 animate-fade-in">Email copied to clipboard!</p>}
        </div>

        {/* Social Links with Orbiting Animation */}
        <div className="relative w-64 h-64 mx-auto mb-16">
          <div className="absolute inset-0 rounded-full border border-dashed border-neon-cyan/30 animate-spin-slow"></div>
          {socialLinks.map((social, index) => {
            const angle = index * 120 * (Math.PI / 180)
            const radius = 80
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <a
                key={social.label}
                href={social.href}
                className="absolute w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-soft-magenta/20 rounded-full border border-neon-cyan/30 flex items-center justify-center hover:scale-110 hover:border-neon-cyan/60 transition-all duration-300 group"
                style={{
                  left: `calc(50% + ${x}px - 24px)`,
                  top: `calc(50% + ${y}px - 24px)`,
                }}
                aria-label={social.label}
              >
                <social.icon className="text-neon-cyan group-hover:text-white transition-colors" size={20} />
              </a>
            )
          })}

          {/* Center Element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-soft-magenta/30 to-neon-cyan/30 rounded-full border border-soft-magenta/50 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-soft-magenta to-neon-cyan rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neon-cyan/20 pt-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Hans Emmanuel Gamido. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm font-mono">
              Built with <span className="text-soft-magenta">♥</span> & caffeine
            </p>
          </div>

          {/* ASCII Art Footer */}
          <div className="mt-8 text-xs text-neon-cyan/30 font-mono">
            <pre>{`
    ╔══════════════════════════════════════╗
    ║  Science, music, and journalism for  ║
    ║  advocacy and sustainability.        ║
    ║  Thank you for visiting my lab.      ║
    ╚══════════════════════════════════════╝
            `}</pre>
          </div>
        </div>
      </footer>
    </section>
  )
}
