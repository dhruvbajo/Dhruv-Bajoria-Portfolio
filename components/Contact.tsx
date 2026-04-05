// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault()
//   //   // Handle form submission here
//   //   setSubmitted(true)
//   //   setTimeout(() => {
//   //     setSubmitted(false)
//   //     setFormData({ name: '', email: '', message: '' })
//   //   }, 3000)
//   // }
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
  
//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })
  
//       if (res.ok) {
//         setSubmitted(true)
  
//         setTimeout(() => {
//           setSubmitted(false)
//           setFormData({ name: '', email: '', message: '' })
//         }, 3000)
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }
  

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   return (
//     <section
//       id="contact"
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
//             <span className="gradient-text">Get In Touch</span>
//           </h2>

//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <motion.div
//                 className="space-y-6"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.2 }}
//               >
//                 <div>
//                   <h3 className="text-2xl font-bold mb-4 text-neon-cyan">
//                     Let's Connect
//                   </h3>
//                   <p className="text-gray-300 mb-6">
//                     I'm always open to discussing new projects, creative ideas, or
//                     opportunities to be part of your vision. Feel free to reach out!
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   <motion.a
//                     href="mailto:dhruvbajoria0@gmail.com"
//                     className="flex items-center gap-4 glass rounded-lg p-4 hover:glass-strong transition-all"
//                     whileHover={{ scale: 1.05, x: 10 }}
//                   >
//                     <FaEnvelope className="text-neon-cyan text-2xl" />
//                     <div>
//                       <p className="text-sm text-gray-400">Email</p>
//                       <p className="text-white">dhruvbajoria0@gmail.com</p>
//                     </div>
//                   </motion.a>

//                   <motion.a
//                     href="https://github.com/dhruvbajo"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-4 glass rounded-lg p-4 hover:glass-strong transition-all"
//                     whileHover={{ scale: 1.05, x: 10 }}
//                   >
//                     <FaGithub className="text-neon-purple text-2xl" />
//                     <div>
//                       <p className="text-sm text-gray-400">GitHub</p>
//                       <p className="text-white">github.com/dhruvbajo</p>
//                     </div>
//                   </motion.a>

//                   <motion.a
//                     href="https://wa.me/917768845360?text=Hello%20Dhruv,%20I%20visited%20your%20portfolio!"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-4 glass rounded-lg p-4 hover:glass-strong transition-all"
//                     whileHover={{ scale: 1.05, x: 10 }}
//                   >
//                     <FaWhatsapp className="text-green-400 text-2xl" />
//                     <div>
//                       <p className="text-sm text-gray-400">WhatsApp</p>
//                       <p className="text-white">+91 77688 45360</p>
//                     </div>
//                   </motion.a>

//                   <motion.a
//                     href="https://www.linkedin.com/in/dhruv-bajoria-aa5a9722a/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-4 glass rounded-lg p-4 hover:glass-strong transition-all"
//                     whileHover={{ scale: 1.05, x: 10 }}
//                   >
//                     <FaLinkedin className="text-neon-blue text-2xl" />
//                     <div>
//                       <p className="text-sm text-gray-400">LinkedIn</p>
//                       <p className="text-white">linkedin.com/in/dhruvbajoria</p>
//                     </div>
//                   </motion.a>
//                 </div>
//               </motion.div>

//               <motion.form
//                 onSubmit={handleSubmit}
//                 className="glass rounded-xl p-6 md:p-8"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.4 }}
//               >
//                 <div className="space-y-4">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium text-gray-300 mb-2"
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50 transition-all"
//                       placeholder="Your Name"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-300 mb-2"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50 transition-all"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-medium text-gray-300 mb-2"
//                     >
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50 transition-all resize-none"
//                       placeholder="Your message..."
//                     />
//                   </div>

//                   <motion.button
//                     type="submit"
//                     className="w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg font-semibold text-white shadow-lg shadow-neon-cyan/50 hover:shadow-neon-cyan/80 transition-all"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {submitted ? 'Message Sent!' : 'Send Message'}
//                   </motion.button>
//                 </div>
//               </motion.form>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }




'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaTerminal, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
  
      if (res.ok) {
        setSubmitted(true)
  
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: '', email: '', message: '' })
        }, 3000)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative z-10 font-mono">
      <div className="container mx-auto">
        {submitted && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            role="status"
            aria-live="polite"
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] px-4 md:px-6 py-3 md:py-3.5 glass rounded-sm border border-neon-cyan/30 text-neon-cyan text-xs md:text-sm shadow-[0_0_25px_rgba(0,240,255,0.15)]"
          >
            Message sent successfully. I will connect with you soon.
          </motion.div>
        )}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold inline-block">
              <span className="text-gray-600 font-light mr-2">::</span>
              <span className="gradient-text">Get_In_Touch</span>
              <span className="text-gray-600 font-light ml-2">::</span>
            </h2>
            <p className="text-gray-500 text-[10px] mt-3 tracking-[0.4em] uppercase">
              Establishing secure connection...
            </p>
          </div> */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold inline-block">
              <span className="text-gray-600 font-light">&lt;</span>
              <span className="gradient-text">Lets_connect</span>
              <span className="text-gray-600 font-light ml-2">/&gt;</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Social Endpoints */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-neon-cyan flex items-center gap-3">
                    <FaTerminal className="text-sm" /> Let's Connect
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or
                    opportunities to be part of your vision. Feel free to reach out!
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { href: "mailto:dhruvbajoria0@gmail.com", icon: FaEnvelope, color: "text-neon-cyan", label: "Email", value: "dhruvbajoria0@gmail.com" },
                    { href: "https://github.com/dhruvbajo", icon: FaGithub, color: "text-neon-purple", label: "GitHub", value: "github.com/dhruvbajo" },
                    // { href: "https://wa.me/917768845360?text=Hello%20Dhruv", icon: FaWhatsapp, color: "text-green-400", label: "WhatsApp", value: "+91 77688 45360" },
                    { href: "https://www.linkedin.com/in/dhruv-bajoria-aa5a9722a/", icon: FaLinkedin, color: "text-neon-blue", label: "LinkedIn", value: "dhruvbajoria" }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass border border-white/10 rounded-sm p-4 hover:border-neon-cyan/50 transition-all flex flex-col gap-1"
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <social.icon className={`${social.color} text-xl mb-1`} />
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">{social.label}</p>
                      <p className="text-white text-xs truncate">{social.value}</p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Form Console */}
              <motion.form
                onSubmit={handleSubmit}
                className="glass rounded-sm border border-white/10 p-6 md:p-8 bg-black/20"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="space-y-6">
                  {['name', 'email'].map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-[0.2em]">
                        &gt; input_{field}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all text-sm"
                        placeholder={field === 'name' ? 'Your Name' : 'your.email@example.com'}
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-[0.2em]">
                      &gt; input_message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-sm text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all resize-none text-sm"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-sm font-bold text-black uppercase text-xs tracking-[0.2em] shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-all flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {submitted ? (
                      <>MESSAGE_SENT. WILL CONNECT SOON.</>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" /> execute_send
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}