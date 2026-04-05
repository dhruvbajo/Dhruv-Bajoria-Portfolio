'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope, FaTerminal, FaCogs } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 md:px-8 pt-20"
    >
      <div className="container mx-auto text-center z-10 font-mono">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-gray-600 font-light mr-2">&lt;</span>
            <span className="gradient-text">Dhruv Bajoria</span>
            <span className="text-gray-600 font-light ml-2">/&gt;</span>
          </motion.h1>
          
          {/* <motion.p
            className="text-lg md:text-xl text-neon-blue/80 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            $ locate --major "B.Tech AI & Data Science"
          </motion.p> */}
          
          <motion.p
            className="text-2xl md:text-4xl font-bold mb-8 text-white flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FaTerminal className="text-neon-cyan text-xl md:text-2xl" />
            Full-Stack & AI Developer
          </motion.p>

          {/* Syntax Highlighted Bio */}
          <motion.div
            className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 bg-black/40 p-6 rounded-lg border border-white/5 backdrop-blur-sm text-left shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex gap-2 mb-2 border-b border-white/10 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <p>
              <span className="text-neon-purple italic">const</span> <span className="text-neon-cyan">Objective</span> = {'{'}
            </p>
            <p className="ml-6">
              core: <span className="text-yellow-200">"Scalable_Software"</span>,
            </p>
            <p className="ml-6">
              intelligence: <span className="text-yellow-200">"AI_Solutions"</span>,
            </p>
            <p className="ml-6">
              status: <span className="text-green-400">"Problem_Solving"</span>
            </p>
            <p>{'}'};</p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-sm font-bold text-black uppercase text-sm tracking-wider shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/50 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View_Projects
              <FaCogs className="animate-spin-slow" />
            </motion.button>

            <motion.a
              href="/DhruvBajoria_Resume.pdf"
              download
              className="px-8 py-4 glass rounded-sm border border-white/10 font-bold text-white uppercase text-sm tracking-wider hover:bg-white/10 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-neon-cyan" /> Download_resume
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 glass rounded-sm border border-white/10 font-bold text-white uppercase text-sm tracking-wider hover:bg-white/10 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-neon-purple" /> MESSAGE_ME
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
        </motion.div>
      </div>
    </section>
  )
}