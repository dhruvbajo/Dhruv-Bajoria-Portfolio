'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUserSecret, FaDatabase, FaBrain } from 'react-icons/fa'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 relative z-10 font-mono"
    >
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header with Tags */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold inline-block">
              <span className="text-gray-600 font-light">&lt;</span>
              <span className="gradient-text">About_Me</span>
              <span className="text-gray-600 font-light ml-2">/&gt;</span>
            </h2>
            {/* <div className="h-1 w-20 bg-neon-cyan mx-auto mt-2 blur-[1px]"></div> */}
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Terminal Window Wrapper */}
            <div className="glass rounded-sm border border-white/10 overflow-hidden shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest ml-4">
                  user_profile.json
                </span>
              </div>

              <div className="p-8 md:p-12 space-y-8">
                {/* Intro Block */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="relative pl-6 border-l-2 border-neon-cyan/30"
                >
                  <FaUserSecret className="absolute -left-[11px] top-0 bg-[#0a0a0a] text-neon-cyan text-sm" />
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Hi, I’m <span className="text-white font-semibold">Dhruv Bajoria</span> — a B.Tech graduate in
                    <span className="text-neon-cyan"> Artificial Intelligence & Data Science</span> from Thadomal Shahani Engineering College(TSEC), Mumbai (CGPA 8.24).
                    I like systems that are clean, fast, and predictable — and yes, I refactor
                    for fun because future‑me deserves better.
                  </p>
                </motion.div>

                {/* Experience Block */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="relative pl-6 border-l-2 border-neon-purple/30"
                >
                  <FaDatabase className="absolute -left-[11px] top-0 bg-[#0a0a0a] text-neon-purple text-sm" />
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    I’m currently a <span className="text-white font-semibold">Full‑Stack Developer</span> at
                    <span className="text-neon-purple"> Grant Thornton Bharat LLP</span>, shipping production features
                    with <span className="text-neon-cyan">React + TypeScript</span>, and making databases behave using
                    <span className="text-neon-purple"> Prisma</span> and <span className="text-neon-purple">PostgreSQL</span>.
                    Highlights: faster APIs (~40% gains), fewer page‑load hiccups, and access control that actually
                    controls access.
                  </p>
                </motion.div>

                {/* AI Block */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="relative pl-6 border-l-2 border-neon-pink/30"
                >
                  <FaBrain className="absolute -left-[11px] top-0 bg-[#0a0a0a] text-neon-pink text-sm" />
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    On the AI side, I build <span className="text-neon-pink">RAG</span> systems with
                    OpenAI LLMs and Pinecone.
                    I’m obsessed with reducing latency (took one bot from 12s to ~2–3s) while keeping answers
                    context‑aware and useful. If it’s slow, it’s a bug.
                  </p>
                </motion.div>

                {/* Values Block */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="relative pl-6 border-l-2 border-neon-cyan/30"
                >
                  <FaUserSecret className="absolute -left-[11px] top-0 bg-[#0a0a0a] text-neon-cyan text-sm" />
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    I enjoy designing scalable UIs, sane APIs, and data models that don’t cry in prod.
                    If your problem needs clean engineering, a bit of AI, and a calm attitude under deadlines —
                    I’m your dev.
                  </p>
                </motion.div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-neon-cyan/5 px-4 py-2 border-t border-white/5 text-[10px] text-gray-500 flex justify-between">
                <span>UTF-8</span>
                <span>Role: Full_Stack_AI_Dev</span>
                <span>Ln 1, Col 1</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}