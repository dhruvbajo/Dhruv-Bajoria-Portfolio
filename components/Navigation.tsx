// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { HiMenu, HiX } from 'react-icons/hi'

// const navItems = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Experience', href: '#experience' },
//   { name: 'Contact', href: '#contact' },
// ]

// export default function Navigation() {
//   const [scrolled, setScrolled] = useState(false)
//   const [activeSection, setActiveSection] = useState('home')
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
      
//       const sections = navItems.map(item => item.href.substring(1))
//       const current = sections.find(section => {
//         const element = document.getElementById(section)
//         if (element) {
//           const rect = element.getBoundingClientRect()
//           return rect.top <= 100 && rect.bottom >= 100
//         }
//         return false
//       })
//       if (current) setActiveSection(current)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const handleNavClick = (href: string) => {
//     setMobileMenuOpen(false)
//     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="flex items-center justify-between">
//           <motion.a
//             href="#home"
//             className="text-xl font-bold gradient-text"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => handleNavClick('#home')}
//           >
//             DB
//           </motion.a>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 onClick={(e) => {
//                   e.preventDefault()
//                   handleNavClick(item.href)
//                 }}
//                 className={`text-sm font-medium transition-colors ${
//                   activeSection === item.href.substring(1)
//                     ? 'text-neon-cyan'
//                     : 'text-gray-300 hover:text-white'
//                 }`}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {item.name}
//               </motion.a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white p-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden glass-strong overflow-hidden"
//           >
//             <div className="container mx-auto px-4 py-4 space-y-4">
//               {navItems.map((item) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   onClick={(e) => {
//                     e.preventDefault()
//                     handleNavClick(item.href)
//                   }}
//                   className={`block text-base font-medium transition-colors ${
//                     activeSection === item.href.substring(1)
//                       ? 'text-neon-cyan'
//                       : 'text-gray-300 hover:text-white'
//                   }`}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.name}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaTerminal } from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Offset for mobile nav height
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    
    const targetElement = document.querySelector(href)
    if (targetElement) {
      const offset = 80 // Height of your navbar
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 font-mono ${
        scrolled || mobileMenuOpen ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-xl font-bold flex items-center gap-2 group"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <FaTerminal className="text-neon-cyan text-sm group-hover:animate-pulse" />
            <span className="gradient-text tracking-tighter">DB_PORTFOLIO</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs uppercase tracking-widest transition-all ${
                  activeSection === item.href.substring(1)
                    ? 'text-neon-cyan'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="opacity-50 mr-1 font-light">./</span>
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon-cyan p-2 border border-white/5 bg-white/5 rounded-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 overflow-hidden z-[99]"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xl uppercase tracking-[0.3em] ${
                    activeSection === item.href.substring(1)
                      ? 'text-neon-cyan'
                      : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

