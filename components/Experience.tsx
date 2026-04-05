'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTerminal, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Grant Thornton Bharat LLP (Client: HDFC Bank)',
    location: 'Mumbai',
    period: 'April 2026 - Present',
    responsibilities: [
      // 'Engineered production-grade frontend screens for HDFC Bank\'s compliance platform via React.js + TypeScript.',
      // 'Optimized database schemas using Prisma + PostgreSQL, reducing API response times by nearly 40%.',
      // 'Applied secure, role-based permissions, reducing unauthorized access reports to zero.',
    ],
    technologies: ['React.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'RBAC'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Grant Thornton Bharat LLP (Client: HDFC Bank)',
    location: 'Mumbai',
    period: 'Oct 2025 - April 2026',
    responsibilities: [
      'Engineered production-grade frontend screens for HDFC Bank\'s compliance platform via React.js + TypeScript.',
      'Optimized database schemas using Prisma + PostgreSQL, reducing API response times by nearly 40%.',
      'Applied secure, role-based permissions, reducing unauthorized access reports to zero.',
    ],
    technologies: ['React.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'RBAC'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Cicada Green Consultants Pvt. Ltd.',
    location: 'Remote',
    period: 'Dec 2024 - Mar 2025',
    responsibilities: [
      'Integrated RAG with OpenAI LLMs, reducing latency from 12s to 2s (83% improvement).',
      'Migrated from OpenSearch to Pinecone, cutting context fetch time to sub-2s.',
      'Optimized DB interactions via SQLAlchemy, boosting scalability and query execution.',
      'Built animated multimedia quiz app with Manim + Pydub, increasing engagement by 35%.',
    ],
    technologies: ['RAG', 'OpenAI', 'Pinecone', 'Python', 'Manim', 'Pydub'],
  },
  {
    title: 'Web Developer Intern',
    company: 'Unified Mentor',
    location: 'Remote',
    period: 'Oct 2024 - Nov 2024',
    responsibilities: [
      'Built a calculator website using HTML, CSS, and JavaScript.',
      'Built a todo list website.',
    ],
    technologies: ['HTML','CSS','Javascript'],
  },
]

const education = [
  {
    degree: 'B.Tech in AI and Data Science',
    field: 'Engineering',
    institution: 'Thadomal Shahani Engineering College',
    location: 'Mumbai, India',
    period: '2021 - 2025',
    cgpa: '8.24',
    achievements: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'AI'],
  },
  {
    degree: 'HSC Boards(12th)',
    field: 'Science',
    institution: 'Shri Dawale Junior College',
    location: 'Akola, India',
    period: '2019 - 2021',
    cgpa: '95%',
    achievements: ['Score: 95%'],
  },
  {
    degree: 'SSC Boards(10th)',
    field: 'Science',
    institution: 'Mount Carmel High School',
    location: 'Akola, India',
    period: '2019',
    cgpa: '89.60%',
    achievements: ['Score: 89.60%'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-20 px-4 md:px-8 relative z-10 font-mono">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold inline-block">
              <span className="text-gray-600 font-light mr-2">&lt;</span>
              <span className="gradient-text tracking-tighter">Experience</span>
              <span className="text-gray-600 font-light ml-2">/&gt;</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <FaBriefcase className="text-neon-cyan" />
                <h3 className="text-xl font-bold text-white uppercase tracking-widest border-b border-neon-cyan/30">
                  Experience.log
                </h3>
              </div>
              
              <div className="space-y-6 border-l-2 border-white/5 ml-2 pl-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    className="glass rounded-sm border border-white/10 p-6 relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-[33px] top-8 w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_10px_#00f0ff]" />
                    
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-neon-cyan">{exp.title}</h4>
                        <p className="text-white text-sm">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 text-xs mt-1">{exp.period}</span>
                    </div>

                    <div className="space-y-2 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <p key={i} className="text-xs md:text-sm text-gray-400 leading-relaxed flex gap-2">
                          <span className="text-neon-cyan/50">&gt;</span> {resp}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <FaGraduationCap className="text-neon-purple" />
                <h3 className="text-xl font-bold text-white uppercase tracking-widest border-b border-neon-purple/30">
                  Education.log
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    className="glass rounded-sm border border-white/10 p-6 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <FaTerminal className="text-neon-purple text-xs" />
                        <span className="text-neon-cyan text-xs font-bold">CGPA: {edu.cgpa}</span>
                      </div>
                      <h4 className="text-md font-bold text-white mb-1 uppercase tracking-tighter">{edu.degree}</h4>
                      <p className="text-xs text-gray-500 mb-4 italic">{edu.institution}</p>
                    </div>

                    <div className="bg-black/20 p-3 rounded border border-white/5">
                      <span className="text-[9px] text-gray-500 uppercase block mb-1">Module_Focus:</span>
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {edu.achievements.map((ach, i) => (
                          <span key={i} className="text-[10px] text-neon-purple/80 font-semibold">{ach}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}