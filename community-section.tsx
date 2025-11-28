"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, Users, TrendingUp, Rocket } from "lucide-react"

export default function CommunitySection() {
  return (
    <section className="relative w-full bg-dark overflow-hidden py-32 md:py-40 px-4">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-dark via-dark-medium/30 to-transparent pointer-events-none z-20"></div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-medium to-dark opacity-90"></div>

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
              Comunidade
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-[1.1] tracking-tight lg:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-light via-gold to-gold font-bold">
              {"A Comunidade Disruption: O Seu Ecossistema de Crescimento."}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-light/70 leading-relaxed mt-8 max-w-4xl mx-auto mb-16">
            {
              "Esse movimento é para quem já entendeu que o crescimento real acontece em comunidade. O Disruption é o palco onde a elite empresarial do Espírito Santo se reúne."
            }
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 text-left"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gold mb-3">Insights Estratégicos</h3>
              <p className="text-light/70 leading-relaxed">Trocas de alto valor, sem formalidade.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 text-left"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <Target className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gold mb-3">Confronto de Dores</h3>
              <p className="text-light/70 leading-relaxed">Validação de planos de ação com a elite do mercado.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 text-left"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gold mb-3">Conexão com grandes</h3>
              <p className="text-light/70 leading-relaxed">
                Aqui você senta em mesas junto com quem comanda o mercado capixaba.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 text-left"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gold mb-3">Estratégia de Alto Nível</h3>
              <p className="text-light/70 leading-relaxed">
                Conteúdo focado em Visibilidade, Aquisição e Liderança de Alta Performance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 text-left md:col-span-2"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gold mb-3">Aceleração para 2026</h3>
              <p className="text-light/70 leading-relaxed">
                O ponto de virada estratégico para planejar e impulsionar o seu negócio para o próximo nível no novo
                ano.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-dark-medium/30 to-dark pointer-events-none z-20"></div>
    </section>
  )
}
