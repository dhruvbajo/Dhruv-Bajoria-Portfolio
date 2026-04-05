'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiReact, SiTypescript, SiNodedotjs, SiMongodb, SiPostgresql,
  SiPython, SiGit, SiOpenai, SiHtml5, SiCss3, SiCplusplus,
  SiPrisma, SiJavascript, SiAmazons3,
  SiMysql, SiLangchainIcon,
  SiNotepadplusplus
} from 'react-icons/si'
import { VscTerminal, VscPackage, VscServerProcess } from 'react-icons/vsc'

const skillCategories = [
  {
    title: 'Languages', 
    icon: <VscTerminal />,
    skills: [
      { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'JS', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TS', Icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    title: 'Web_Dev',
    icon: <VscPackage />,
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    title: 'Data_Store',
    icon: <SiPostgresql />,
    skills: [
      { name: 'Postgres', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Pinecone', Icon: SiAmazons3, color: '#00f0ff' },
      {name: 'MySQL', Icon: SiMysql, color: '#4169E1' },
    ],
  },
  {
    title: 'AI_ML',
    icon: <VscServerProcess />,
    skills: [
      { name: 'RAG', Icon: SiPython, color: '#ec4899' },
      { name: 'LLMs', Icon: SiOpenai, color: '#8b5cf6' }
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Trigger earlier on mobile for smoother scrolling
  })

  return (
    <section id="skills" className="py-12 md:py-20 px-4 md:px-8 relative z-10 font-mono">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold inline-block">
              <span className="text-gray-600 font-light">&lt;</span>
              <span className="gradient-text">Skills</span>
              <span className="text-gray-600 font-light ml-2">/&gt;</span>
            </h2>
            {/* <div className="h-1 w-20 bg-neon-cyan mx-auto mt-2 blur-[1px]"></div> */}
          </div>

          

          {/* Responsive Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="glass rounded-sm border border-white/10 overflow-hidden flex flex-col bg-black/20"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1 }}
                whileHover={{ borderColor: 'rgba(0, 240, 255, 0.4)' }}
              >
                {/* Module Header */}
                <div className="bg-white/5 px-3 py-2 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-neon-cyan shrink-0">{category.icon}</span>
                    <span className="text-[9px] md:text-[10px] text-gray-300 uppercase tracking-widest truncate">
                      {category.title}
                    </span>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60 animate-pulse" />
                  </div>
                </div>

                {/* Skills Grid - Larger icons on mobile for easier viewing */}
                <div className="p-5 md:p-6 grid grid-cols-2 gap-y-8 gap-x-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 group cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="relative">
                        <skill.Icon
                          className="text-3xl md:text-4xl transition-all duration-300 group-hover:scale-110"
                          style={{
                            color: skill.color,
                            filter: `drop-shadow(0 0 8px ${skill.color}40)`,
                          }}
                        />
                        <div 
                          className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                      <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-tighter text-center group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Bar Detail */}
                <div className="mt-auto h-[2px] w-full bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}