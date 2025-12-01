"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function EnvironmentSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative w-full bg-dark overflow-hidden py-16 md:py-20 px-4"
    >
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-dark via-dark-medium/30 to-transparent pointer-events-none z-20"></div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark opacity-80"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="absolute top-[5%] left-[15%] w-[45vw] h-[45vw] rounded-full bg-dark-medium blur-[130px]"></div>
          <div className="absolute bottom-[15%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-gold-medium blur-[150px]"></div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:70px_70px]"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-medium tracking-widest uppercase bg-gradient-to-r from-gold to-gold bg-clip-text text-transparent px-4 py-1.5 border border-light/10 rounded-full">
              Experiência
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-[1.1] tracking-tight lg:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-light via-gold to-gold font-bold">
              {"O Ambiente que Fomenta a Disrupção."}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-light/70 leading-relaxed mt-8 max-w-4xl mx-auto mb-12">
            {
              "Durante todo o evento, os 300 líderes e empresários viverão experiências que remetem ao verão, projetadas para manter a mente ativa e o foco estratégico:"
            }
          </p>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl border border-light/10 hover:border-light/20 transition-all duration-300 h-[480px]"
            >
              <div className="absolute inset-0">
                <img
                  src="/images/gastronomia-tropical.jpg"
                  alt="Gastronomia Tropical Autoral"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-xl font-bold text-light mb-3">Gastronomia Tropical Autoral</h3>
                <p className="text-light/80 leading-relaxed">Almoço assinado pelo chef Vitor Villani.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl border border-light/10 hover:border-light/20 transition-all duration-300 h-[480px]"
            >
              <div className="absolute inset-0">
                <img
                  src="/images/pausas-inteligentes.jpg"
                  alt="Pausas Inteligentes"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-xl font-bold text-light mb-3">Pausas Inteligentes</h3>
                <p className="text-light/80 leading-relaxed">
                  Massagem rápida (quick massage), experiência aromática guiada e espaços de descanso/lounges.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl border border-light/10 hover:border-light/20 transition-all duration-300 h-[480px]"
            >
              <div className="absolute inset-0">
                <img
                  src="/images/network-experience.jpg"
                  alt="Network Experience"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-xl font-bold text-light mb-3">Network Experience</h3>
                <p className="text-light/80 leading-relaxed">
                  Encerramento memorável com banda/live music (tema verão), drinks refrescantes e conexões guiadas para
                  gerar negócios reais.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-dark-medium/30 to-dark pointer-events-none z-20"></div>
    </motion.section>
  )
}
