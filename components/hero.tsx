"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"

function WireframeDodecahedron() {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005
        meshRef.current.rotation.y += 0.01
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[2, 0]} />
      <meshBasicMaterial color="#00FFD1" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

function StarField() {
  const pointsRef = useRef<THREE.Points>(null)

  useEffect(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices = []

    for (let i = 0; i < 5000; i++) {
      vertices.push((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000)
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))

    if (pointsRef.current) {
      pointsRef.current.geometry = geometry
    }
  }, [])

  return (
    <points ref={pointsRef}>
      <pointsMaterial color="#00FFD1" size={1} transparent opacity={0.6} />
    </points>
  )
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Applied Physicist", "AI Researcher", "Climate Scientist"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
          <StarField />
          <WireframeDodecahedron />
        </Canvas>
      </div>

      {/* ASCII Art Border */}
      <div className="absolute inset-4 border border-dashed border-neon-cyan/30 pointer-events-none">
        <div className="absolute top-0 left-4 bg-space-navy px-2 text-xs text-neon-cyan font-mono">
          {">"} INITIALIZING_PORTFOLIO.EXE
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <h1 className="font-space-mono text-6xl md:text-8xl font-bold mb-4 glitch-text">
            Hello, I'm <span className="text-neon-cyan">Hans Emmanuel Gamido</span>
          </h1>
          <div className="text-xl md:text-2xl text-soft-magenta font-inter">
            <span className="typewriter">{roles[currentRole]}</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-12">
          <button className="px-8 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-space-navy transition-all duration-300 font-space-mono glow-neon">
            EXPLORE_WORK()
          </button>
          <button className="px-8 py-3 bg-soft-magenta text-space-navy hover:bg-soft-magenta/80 transition-all duration-300 font-space-mono">
            CONTACT_ME()
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
