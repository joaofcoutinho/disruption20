"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function LeadersSection() {
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

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-0 w-full h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        ></div>
        <div
          className="absolute top-0 left-1/2 w-px h-full"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        ></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-medium tracking-widest uppercase bg-gradient-to-r from-gold to-gold bg-clip-text text-transparent px-4 py-1.5 border border-light/10 rounded-full">
              Líderes
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-[1.1] tracking-tight lg:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-light via-gold to-gold font-bold">
              {"Os Pilares da Transformação: Visão Estratégica e Liderança de Alto Nível."}
            </span>
          </h2>
          {/* </CHANGE> */}

          <p className="text-lg md:text-xl text-light/70 leading-relaxed mt-12 max-w-4xl mx-auto">
            {
              "Na 20º edição do DISRUPTION, você será provocado por mentes que não apenas entendem a disrupção, mas a vivem e a constroem."
            }
          </p>

          {/* Leaders List */}
          <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
            {/* Marcelo Toledo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gold/20 to-gold/10 backdrop-blur-sm border-2 border-gold/40 rounded-3xl p-8 hover:border-gold/60 transition-all duration-300 relative overflow-hidden h-full">
                <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-gradient-to-br from-gold/40 to-gold/30 blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full bg-gradient-to-br from-gold/30 to-gold/20 blur-lg"></div>

                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-gold/30 to-gold/10 border-2 border-gold/40">
                    <img src="/images/marcelo-toledo.png" alt="Marcelo Toledo" className="w-full h-full object-cover" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-light mb-4">Marcelo Toledo</h3>
                    <p className="text-base md:text-lg text-light/80 leading-relaxed mb-4">
                      Empresário, autor e palestrante, founder da @ruptoh, host do @excepcionaispodcast
                    </p>
                    <p className="text-base text-light/70 leading-relaxed">
                      Marcelo Toledo esteve na linha de frente da criação e do crescimento de gigantes como Nubank, Oi e
                      Payleven e hoje, ele conta com mais de 26 anos de experiência.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Paula Barcellos */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gold/20 to-gold/10 backdrop-blur-sm border-2 border-gold/40 rounded-3xl p-8 hover:border-gold/60 transition-all duration-300 relative overflow-hidden h-full">
                <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-gradient-to-br from-gold/40 to-gold/30 blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full bg-gradient-to-br from-gold/30 to-gold/20 blur-lg"></div>

                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-gold/30 to-gold/10 border-2 border-gold/40">
                    <img
                      src="/images/paula-barcellos.png"
                      alt="Paula Barcellos"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-light mb-4">Paula Barcellos</h3>
                    <p className="text-base md:text-lg text-light/80 leading-relaxed mb-4"> CEO da Viação Águia Branca</p>
                    <p className="text-base text-light/70 leading-relaxed">
                      Paula Barcellos está há 23 anos no Grupo Águia Branca. Por 10 anos liderou a Diretoria Comercial e
                      de Marketing e, há 6 anos, é CEO da Viação Águia Branca, uma das maiores empresas do transporte
                      rodoviário de passageiros do país.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-dark-medium/30 to-dark pointer-events-none z-20"></div>
    </motion.section>
  )
}
