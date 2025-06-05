import type React from "react"
import type { Metadata } from "next"
import { Space_Mono, Inter } from "next/font/google"
import "./globals.css"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Hans Emmanuel Gamido - Applied Physicist • AI Researcher • Climate Scientist",
  description:
    "Personal portfolio of Hans Emmanuel Gamido - Applied Physicist specializing in AI applications for climate science and astrophysics. Science, music, and journalism for advocacy and sustainability.",
  keywords: [
    "applied physics",
    "machine learning",
    "climate science",
    "astrophysics",
    "explainable AI",
    "sustainability",
  ],
  authors: [{ name: "Hans Emmanuel Gamido" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceMono.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
