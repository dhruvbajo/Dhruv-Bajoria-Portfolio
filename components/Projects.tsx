// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// const projects = [
//   {
//     title: 'RAG-Powered AI Chatbot',
//     problem: 'Traditional chatbots lack context awareness and struggle with domain-specific knowledge, leading to poor user experiences with high latency (12s+) and limited accuracy.',
//     solution: 'Built an intelligent chatbot using Retrieval-Augmented Generation (RAG) architecture integrated with OpenAI LLMs and Pinecone vector database. Migrated from Amazon OpenSearch to Pinecone for faster semantic retrieval, enabling context-aware responses with real-time knowledge retrieval from custom datasets.',
//     techStack: ['RAG Architecture', 'OpenAI LLMs', 'Pinecone', 'Python', 'SQLAlchemy', 'NLP'],
//     outcome: 'Reduced response latency from 12s to 2-3s (83% improvement) while enhancing answer accuracy by ~40%. Cut context fetch time to sub-2s and boosted chatbot knowledge relevance by ~30%.',
//     github: '#',
//     demo: '#',
//   },
//   {
//     title: 'Budget Buddy',
//     problem: 'Individuals struggle to track expenses and maintain budgets, leading to financial mismanagement and lack of spending insights in a user-friendly interface.',
//     solution: 'Built a budget management single-page application (SPA) with React.js and React Router, delivering a mobile-friendly UI for creating, managing, and tracking personal budgets. Implemented budget/expense CRUD functionality with local storage for persistent data, enabling seamless real-time updates.',
//     techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'React Router', 'React-Toastify'],
//     outcome: 'Created a fully functional budget management app with component-based architecture following frontend development best practices, improving scalability, maintainability, and UI/UX consistency.',
//     github: '#',
//     demo: '#',
//   },
//   {
//     title: 'Interactive Multimedia Quiz App',
//     problem: 'Traditional quiz applications lack engagement and require manual syncing of multimedia content, leading to poor learner experience and high maintenance effort.',
//     solution: 'Built an interactive multimedia quiz application with Manim + Pydub featuring animated questions and synced audio. Designed dynamic animations and real-time audio synchronization to enhance learner engagement.',
//     techStack: ['Python', 'Manim', 'Pydub', 'Multimedia Processing'],
//     outcome: 'Increased learner engagement by ~35% and reduced manual syncing effort by ~70%, creating an immersive learning experience with seamless multimedia integration.',
//     github: '#',
//     demo: '#',
//   },
//   {
//     title: 'Ping-Pong Game',
//     problem: 'Creating an engaging arcade-style game that demonstrates real-time event handling, collision detection, and interactive UI design principles.',
//     solution: 'Developed a two-player arcade-style Ping Pong game in Python using Turtle graphics and Object-Oriented Programming (OOP) principles. Integrated scoreboard functionality to track player scores in real-time with dynamic ball movement mechanics and responsive paddle controls.',
//     techStack: ['Python', 'Turtle Graphics', 'Object-Oriented Programming (OOP)', 'Game Development'],
//     outcome: 'Successfully created an interactive game showcasing real-time event handling and collision detection algorithms, enhancing gameplay realism and user engagement with accurate score tracking.',
//     github: '#',
//     demo: '#',
//   },
// ]

// export default function Projects() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   return (
//     <section
//       id="projects"
//       className="py-20 px-4 md:px-8 relative z-10"
//     >
//       <div className="container mx-auto">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
//             <span className="gradient-text">Featured Projects</span>
//           </h2>

//           <div className="space-y-12">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 className="glass rounded-2xl p-8 md:p-12 hover:glass-strong transition-all"
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: index * 0.2, duration: 0.8 }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="flex flex-col md:flex-row justify-between items-start mb-6">
//                   <h3 className="text-3xl font-bold text-neon-cyan mb-4 md:mb-0">
//                     {project.title}
//                   </h3>
//                   <div className="flex gap-4">
//                     <motion.a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 glass rounded-lg hover:glass-strong transition-all"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <FaGithub size={20} />
//                     </motion.a>
//                     <motion.a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 glass rounded-lg hover:glass-strong transition-all"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <FaExternalLinkAlt size={20} />
//                     </motion.a>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div>
//                     <h4 className="text-xl font-semibold text-neon-purple mb-2">
//                       Problem Statement
//                     </h4>
//                     <p className="text-gray-300 leading-relaxed">{project.problem}</p>
//                   </div>

//                   <div>
//                     <h4 className="text-xl font-semibold text-neon-cyan mb-2">
//                       Technical Solution
//                     </h4>
//                     <p className="text-gray-300 leading-relaxed">{project.solution}</p>
//                   </div>

//                   <div>
//                     <h4 className="text-xl font-semibold text-neon-pink mb-2">
//                       Tech Stack
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.techStack.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-4 py-2 glass rounded-full text-sm text-gray-300"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="text-xl font-semibold text-green-400 mb-2">
//                       Outcome / Impact
//                     </h4>
//                     <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }





'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaTerminal, FaCodeBranch } from 'react-icons/fa'

type Project = {
  title: string
  problem: string
  solution: string
  techStack: string[]
  outcome: string
  demo?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'GHUMMO.AI–AI_Powered Trip Planner',
    problem: 'Plan complete trips quickly with personalized day‑by‑day itineraries.',
    solution: 'Built a full‑stack planner that generates smart travel plans using inputs like budget, days, and interests.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Convex', 'Clerk', 'Google Places'],
    outcome: 'Deployed production app with smooth performance and secure auth.',
    demo: 'https://ai-trip-planner-9jqk.vercel.app/',
  },
  {
    title: 'Budget Buddy–Expense & Budget Tracker',
    problem: 'Simple budgeting with persistent data and clean UI.',
    solution: 'Single‑page app with category‑wise tracking, toast feedback, and local storage persistence.',
    techStack: ['React', 'JavaScript', 'React Router', 'React‑Toastify', 'Tailwind', 'HTML', 'CSS'],
    outcome: 'Fast, responsive experience with real‑time updates and clear UX.',
    demo: 'https://budget-buddy-lime-ten.vercel.app/',
  },
  {
    title: 'AI Chatbot (RAG)',
    problem: 'Domain queries answered slowly and inconsistently.',
    solution: 'RAG pipeline with OpenAI LLMs and Pinecone vector DB for context‑aware answers.',
    techStack: ['RAG', 'OpenAI', 'Pinecone', 'Python', 'NLP'],
    outcome: 'Latency cut from ~12s to ~2–3s; accuracy improved by ~40%.',
  },
  {
    title: 'Video Generation Pipeline',
    problem: 'Manual video creation is slow and repetitive.',
    solution: 'Automated video generation workflow with templating and programmatic rendering.',
    techStack: ['Python', 'FFmpeg', 'Automation','Manim'],
    outcome: 'Repeatable, faster video production with consistent output.',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative z-10 font-mono">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          {/* <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold inline-block">
              <span className="text-gray-600 font-light mr-2">~/</span>
              <span className="gradient-text tracking-tighter">Deployed_Projects</span>
            </h2>   
          </div> */}

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold inline-block">
              <span className="text-gray-600 font-light">&lt;</span>
              <span className="gradient-text">Projects</span>
              <span className="text-gray-600 font-light ml-2">/&gt;</span>
            </h2>
            {/* <div className="h-1 w-20 bg-neon-cyan mx-auto mt-2 blur-[1px]"></div> */}
          </div>

          <div className="max-w-5xl mx-auto space-y-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass rounded-sm border border-white/10 overflow-hidden hover:border-neon-cyan/50 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Header Bar */}
                <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <FaCodeBranch className="text-neon-cyan text-sm" />
                    <span className="text-white font-bold tracking-tight uppercase">
                      {project.title.replace(/\s+/g, '_')}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        className="text-xs flex items-center gap-1 text-gray-400 hover:text-neon-cyan transition-colors"
                        whileHover={{ x: -2 }}
                      >
                        <FaGithub /> SOURCE
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        className="text-xs flex items-center gap-1 text-gray-400 hover:text-neon-purple transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <FaExternalLinkAlt /> LIVE_DEMO
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content Grid */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left Column: Problem & Solution */}
                  <div className="md:col-span-8 space-y-4">
                    <div>
                      <span className="text-[10px] text-neon-purple font-bold block mb-1 uppercase tracking-widest">
                        [01_Problem_Statement]
                      </span>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] text-neon-cyan font-bold block mb-1 uppercase tracking-widest">
                        [02_Technical_Solution]
                      </span>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed border-l-2 border-neon-cyan/20 pl-4 italic">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Stack & Impact */}
                  <div className="md:col-span-4 space-y-6 bg-white/5 p-4 rounded-sm border border-white/5">
                    <div>
                      <span className="text-[10px] text-gray-500 font-bold block mb-3 uppercase tracking-widest">
                        &gt; build_stack
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-[10px] bg-black/40 text-neon-cyan border border-neon-cyan/30 px-2 py-0.5 rounded-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] text-green-400 font-bold block mb-2 uppercase tracking-widest">
                        &gt; execution_outcome
                      </span>
                      <p className="text-xs text-green-400/80 font-bold">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}