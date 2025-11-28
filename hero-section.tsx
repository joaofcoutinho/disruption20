"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        })
      }
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate opacity based on scroll position (decreases as user scrolls down)
  const getOpacityFromScroll = (baseOpacity: number) => {
    return Math.max(0, baseOpacity - scrollPosition / 500)
  }

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-dark text-light flex items-center justify-center py-32 md:py-40"
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity: isLoaded ? getOpacityFromScroll(1) : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-gold/10 via-gold-medium/5 to-transparent blur-[140px]"></div>
          <div className="absolute bottom-[15%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tl from-dark-medium/80 via-dark-medium/40 to-transparent blur-[120px]"></div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 bg-grid-white/[0.02] bg-[length:70px_70px]"
        style={{
          opacity: getOpacityFromScroll(1),
        }}
      ></div>

      <div className="absolute inset-0 overflow-hidden">
        {/* Gold accent lines */}
        <div
          className="absolute top-1/2 left-0 w-full h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(140, 116, 76, 0.3), transparent)",
            opacity: isLoaded ? getOpacityFromScroll(0.5) : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        ></div>

        <div
          className="absolute top-0 left-1/2 w-px h-full"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(140, 116, 76, 0.3), transparent)",
            opacity: isLoaded ? getOpacityFromScroll(0.5) : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        ></div>

        {/* Enhanced decorative circles with gold */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-gold/20 rounded-full"
          style={{
            opacity: isLoaded ? getOpacityFromScroll(0.6) : 0,
            transform: `translate(-50%, -50%) scale(${isLoaded ? 1 : 0.9})`,
            transition: "opacity 1.5s ease-in-out, transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        ></div>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[650px] md:h-[650px] border border-gold/10 rounded-full"
          style={{
            opacity: isLoaded ? getOpacityFromScroll(0.4) : 0,
            transform: `translate(-50%, -50%) scale(${isLoaded ? 1 : 0.9})`,
            transition: "opacity 1.8s ease-in-out, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        ></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[15%] right-[10%] w-16 h-16 md:w-20 md:h-20"
          style={{
            opacity: isLoaded ? getOpacityFromScroll(0.4) : 0,
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            transition: "opacity 1.5s ease-in-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="w-full h-full border-2 border-gold/30 rounded-full shadow-lg shadow-gold/20"></div>
        </div>

        <div
          className="absolute bottom-[20%] left-[15%] w-20 h-20 md:w-28 md:h-28"
          style={{
            opacity: isLoaded ? getOpacityFromScroll(0.3) : 0,
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            transition: "opacity 1.8s ease-in-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="w-full h-full border-2 border-gold/20 rounded-md rotate-45 shadow-lg shadow-gold/10"></div>
        </div>

        {/* Additional gold accent elements */}
        <div
          className="absolute top-[30%] left-[5%] w-2 h-2 md:w-3 md:h-3 bg-gold/40 rounded-full blur-sm"
          style={{
            opacity: isLoaded ? getOpacityFromScroll(0.6) : 0,
            animation: "pulse 3s ease-in-out infinite",
          }}
        ></div>

        <div
          className="absolute bottom-[35%] right-[8%] w-2 h-2 md:w-3 md:h-3 bg-gold/40 rounded-full blur-sm"
          style={{
            opacity: isLoaded ? getOpacityFromScroll(0.6) : 0,
            animation: "pulse 4s ease-in-out infinite",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <div
          className="w-full max-w-2xl md:max-w-5xl text-center"
          style={{
            opacity: isLoaded ? getOpacityFromScroll(1) : 0,
            transform: `translateY(${isLoaded ? 0 : 20}px)`,
            transition: "opacity 1s ease-in-out, transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div
            className="mb-6 inline-block"
            style={{
              opacity: getOpacityFromScroll(1),
            }}
          >
            <span className="relative text-xs md:text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-gold via-gold-medium to-gold bg-clip-text text-transparent px-6 py-2 border-2 border-gold/40 rounded-full backdrop-blur-sm shadow-lg shadow-gold/20">
              DISRUPTION SUMMER SUMMIT
              <span className="absolute inset-0 rounded-full bg-gold/5 blur-xl"></span>
            </span>
          </div>

          <div className="mb-4">
            <p className="text-sm md:text-lg font-bold tracking-wider text-gold uppercase drop-shadow-lg">
              20º EDIÇÃO DO DISRUPTION
            </p>
          </div>

          <div className="mt-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-light via-gold to-gold-medium tracking-tight leading-tight"
                style={{
                  opacity: getOpacityFromScroll(1),
                }}
              >
                A ENERGIA DO VERÃO O PALCO DA TRANSFORMAÇÃO, ONDE LÍDERES SE REÚNEM PARA CRIAR O PRÓXIMO NÍVEL
              </span>
            </h1>

            <p
              className="max-w-xl md:max-w-4xl mx-auto text-light/90 mb-10 leading-relaxed font-normal text-base md:text-xl"
              style={{
                opacity: getOpacityFromScroll(1),
                textShadow: "0 2px 20px rgba(0,0,0,0.8)",
              }}
            >
              A estagnação é a sentença de morte para qualquer negócio que almeja o topo. O Disruption é um movimento
              contínuo de líderes que recusam a mediocridade, e na vigésima edição, a força do nosso movimento se une à
              Energia do Verão para criar o DISRUPTION SUMMER SUMMIT.
            </p>

            <div className="mb-10 py-8 px-6 border-y-2 border-gold/30 bg-gradient-to-r from-transparent via-gold/5 to-transparent backdrop-blur-sm rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-bold text-gold mb-1">14h</span>
                  <span className="text-xs md:text-sm text-light/70 font-medium">de Imersão</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-bold text-gold mb-1">300</span>
                  <span className="text-xs md:text-sm text-light/70 font-medium">Líderes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-bold text-gold mb-1">2</span>
                  <span className="text-xs md:text-sm text-light/70 font-medium">Grandes Nomes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-bold text-gold mb-1">+</span>
                  <span className="text-xs md:text-sm text-light/70 font-medium">Network + Banda</span>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-light/80 text-sm md:text-lg font-semibold tracking-wide flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                  21 de Janeiro de 2026
                </span>
                <span className="hidden md:inline text-gold/50">|</span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                  8h às 22h
                </span>
                <span className="hidden md:inline text-gold/50">|</span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                  Casa Villani - Vitória/ES
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10">
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
            </div>

            <div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] rounded-full bg-gradient-to-t from-gold/30 via-gold-medium/20 to-transparent blur-[180px] pointer-events-none"
              style={{
                opacity: isLoaded ? getOpacityFromScroll(0.8) : 0,
                transform: `translate(-50%, 0) translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
                transition: "opacity 1s ease-in-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-dark/50 to-dark pointer-events-none z-20"></div>
    </div>
  )
}
