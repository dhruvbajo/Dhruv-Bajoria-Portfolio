'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiFlask,
  SiFastapi,
  SiGo,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiPython,
  SiDocker,
  SiGit,
  SiPytorch,
  SiTensorflow,
  SiOpenai,
} from 'react-icons/si'

interface FloatingTechLogosProps {
  mousePosition: { x: number; y: number }
}

const techLogos = [
  { Icon: SiReact, name: 'React', color: '#61DAFB' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { Icon: SiFlask, name: 'Flask', color: '#FFFFFF' },
  { Icon: SiFastapi, name: 'FastAPI', color: '#009688' },
  { Icon: SiGo, name: 'Golang', color: '#00ADD8' },
  { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { Icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { Icon: SiPython, name: 'Python', color: '#3776AB' },
  { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { Icon: SiGit, name: 'Git', color: '#F05032' },
  { Icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
  { Icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
  { Icon: SiOpenai, name: 'AI/ML', color: '#8b5cf6' },
]

const MIN_DISTANCE = 120 // ⭐ spacing between logos

export default function FloatingTechLogos({ mousePosition }: FloatingTechLogosProps) {
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  // ⭐ Utility to check overlap
  const isTooClose = (x: number, y: number, positions: any[]) => {
    return positions.some((pos) => {
      const dx = pos.x - x
      const dy = pos.y - y
      return Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE
    })
  }

  // ⭐ Generate safe random positions
  const randomPositions = useMemo(() => {
    const positions: any[] = []

    techLogos.forEach(() => {
      let x, y
      let attempts = 0

      do {
        x = Math.random() * windowSize.width
        y = Math.random() * windowSize.height
        attempts++
      } while (isTooClose(x, y, positions) && attempts < 50)

      positions.push({
        x,
        y,
        floatX: (Math.random() - 0.5) * 200,
        floatY: (Math.random() - 0.5) * 200,
        duration: 15 + Math.random() * 10,
      })
    })

    return positions
  }, [windowSize])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {techLogos.map((tech, index) => {
        const pos = randomPositions[index]

        const mouseInfluence = {
          x: (mousePosition.x - windowSize.width / 2) * 0.02,
          y: (mousePosition.y - windowSize.height / 2) * 0.02,
        }

        return (
          <motion.div
            key={tech.name}
            className="absolute"
            initial={{
              x: pos.x,
              y: pos.y,
              opacity: 0.12,
            }}
            animate={{
              x: [pos.x, pos.x + pos.floatX + mouseInfluence.x, pos.x],
              y: [pos.y, pos.y + pos.floatY + mouseInfluence.y, pos.y],
              rotate: [0, 360],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ filter: 'blur(1px)' }}
          >
            <tech.Icon
              size={40}
              style={{
                color: tech.color,
                filter: `drop-shadow(0 0 12px ${tech.color})`,
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
