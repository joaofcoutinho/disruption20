"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FinalCtaSection() {
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
      id="final-cta"
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
      <div className="relative z-10 container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-medium tracking-widest uppercase bg-gradient-to-r from-gold to-gold bg-clip-text text-transparent px-4 py-1.5 border border-light/10 rounded-full">
              DISRUPTION
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-light via-gold to-gold font-bold">
              Garanta Sua Vaga
            </span>
            <span className="text-light font-light"> Agora.</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-lg md:text-xl text-light/80 leading-relaxed text-balance">
              O verão é a estação da aceleração. O DISRUPTION SUMMER SUMMIT é o seu convite para criar o próximo nível
              do seu negócio.
            </p>
            <p className="text-lg md:text-xl text-light/80 leading-relaxed">A escolha é sua.</p>
          </div>
        </motion.div>

        {/* Final CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            href="https://sceql.share.hsforms.com/2F885wDntQHGxClhkblH_UA"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-[#8C744C] to-[#A08858] hover:from-[#A08858] hover:to-[#8C744C] text-light font-bold px-10 py-6 text-base md:text-lg rounded-xl transition-all duration-500 shadow-2xl shadow-gold/30 hover:shadow-gold/50 hover:scale-105 border-2 border-gold/30 w-full sm:w-auto"
            >
              <span className="relative z-10">SOU MEMBRO</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/20 to-gold-medium/20 blur-xl group-hover:blur-2xl transition-all duration-500"></span>
            </Button>
          </Link>

          <Link
            href="https://sceql.share.hsforms.com/2CpxaE4fpQle75wkFiytkBw"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="relative bg-dark-medium hover:bg-dark-medium/80 text-light font-bold px-10 py-6 text-base md:text-lg rounded-xl transition-all duration-500 shadow-2xl shadow-gold/20 hover:shadow-gold/40 hover:scale-105 border-2 border-gold/40 w-full sm:w-auto"
            >
              <span className="relative z-10">SOU CONVIDADO</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/10 to-gold-medium/10 blur-xl group-hover:blur-2xl transition-all duration-500"></span>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] right-[5%] w-24 h-24 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(79, 209, 197, 0.2) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-[20%] left-[10%] w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(128, 90, 213, 0.2) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        ></div>
      </div>
    </motion.section>
  )
}
