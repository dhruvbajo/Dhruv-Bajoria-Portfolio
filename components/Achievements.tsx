

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaCertificate, FaCode, FaMedal, FaTerminal } from 'react-icons/fa'

const achievements = [
  {
    category: 'Certifications',
    items: [
      {
        title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
        description: 'Oracle - Certified in Generative AI and Cloud Infrastructure',
        icon: FaCertificate,
        color: 'text-orange-400',
      },
      {
        title: 'The Complete Web Development Bootcamp 2024',
        description: 'Udemy - Comprehensive web development course covering modern technologies',
        icon: FaCertificate,
        color: 'text-blue-400',
      },
      {
        title: '100 Days of Python',
        description: 'Udemy - Intensive Python programming course with hands-on projects',
        icon: FaCertificate,
        color: 'text-green-400',
      },
      {
        title: 'SQL and Relational Databases 101',
        description: 'IBM - Database fundamentals and SQL query optimization',
        icon: FaCertificate,
        color: 'text-purple-400',
      },
    ],
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="achievements" className="py-20 px-4 md:px-8 relative z-10 font-mono">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold inline-block">
              <span className="text-gray-600 font-light mr-2">&lt;</span>
              <span className="gradient-text">Achievements & Certifications</span>
              <span className="text-gray-600 font-light ml-2">/&gt;</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 place-items-center">
            {achievements.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="glass rounded-sm border border-white/10 flex flex-col overflow-hidden bg-black/20 w-full md:max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2 }}
                whileHover={{ borderColor: 'rgba(0, 240, 255, 0.4)', scale: 1.02 }}
              >
                {/* Module Header Bar */}
                <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaTerminal className="text-neon-cyan text-[10px]" />
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">
                      {category.category.replace(/\s+/g, '_')}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_5px_#00f0ff]" />
                </div>

                {/* Items List */}
                <div className="p-6 space-y-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.2 + itemIndex * 0.1 }}
                    >
                      <div className="relative mt-1">
                        <item.icon className={`${item.color} text-2xl flex-shrink-0 transition-transform group-hover:scale-110`} />
                        <div className={`absolute inset-0 blur-xl opacity-20 ${item.color} bg-current`} />
                      </div>
                      
                      <div className="flex flex-col min-w-0">
                        <h4 className="font-bold text-white text-sm md:text-base leading-tight mb-1 break-words">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-400 font-sans italic leading-relaxed break-words">
                          // {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Card Footer Decoration */}
                <div className="mt-auto h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}