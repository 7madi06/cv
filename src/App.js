'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Briefcase, GraduationCap, Mail, MapPin, Phone } from 'lucide-react'

const AnimatedSection = ({ children }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <header className="text-center mb-12">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-cyan-400 transition-colors duration-300"
              // whileHover={{ scale: 1.05 }}
            >
              Youssef Saddouki
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl mt-2 transition-colors duration-300"
              // whileHover={{ y: -5 }}
            >
              Senior IT Administrator
            </motion.p>
          </header>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <p className="text-lg sm:text-xl leading-relaxed">
              Passionate IT professional with 8+ years of experience in managing complex IT infrastructures. 
              Skilled in cloud technologies, network security, and system optimization. 
              Committed to delivering robust and efficient IT solutions.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-cyan-400">Key Skills</h2>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {['Network Security', 'Cloud Infrastructure', 'System Administration', 'IT Strategy', 'Troubleshooting', 'Team Leadership'].map((skill) => (
                <motion.div
                  key={skill}
                  className="bg-gray-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-cyan-700 hover:scale-105 hover:shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-cyan-400">Work Experience</h2>
            <div className="relative">
              <div className="absolute left-4 top-6 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600"></div>
              {[
                { title: 'Senior IT Administrator', company: 'Tech Solutions Inc.', period: '2018 - Present' },
                { title: 'IT Systems Specialist', company: 'DataCorp', period: '2015 - 2018' },
                { title: 'Junior IT Admin', company: 'StartUp Innovations', period: '2013 - 2015' },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative pl-12"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="absolute left-0 top-1 w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center"
                    style={{
                      boxShadow: '0 0 0 4px #111827, 0 0 0 6px #22d3ee',
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Briefcase className="text-cyan-400" size={20} />
                  </motion.div>
                  <motion.div
                    className="bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:bg-gray-750"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3 className="font-semibold text-xl sm:text-2xl text-cyan-300">{job.title}</h3>
                    <p className="text-gray-300 text-lg">{job.company}</p>
                    <p className="text-cyan-400 mt-2">{job.period}</p>
                    <motion.ul className="mt-4 text-gray-400 list-disc list-inside"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                      }}
                    >
                      <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                        Led team of 10+ IT professionals in maintaining and optimizing company infrastructure
                      </motion.li>
                      <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                        Implemented cloud-based solutions resulting in 30% cost reduction
                      </motion.li>
                      <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                        Improved system uptime from 99.9% to 99.99% through proactive monitoring and maintenance
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-cyan-400">Education</h2>
            <motion.div
              className="flex items-center bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:bg-gray-750 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mr-6">
                <GraduationCap className="text-cyan-400 transition-colors duration-300 hover:text-cyan-300" size={36} />
              </div>
              <div>
                <h3 className="font-semibold text-xl sm:text-2xl text-cyan-300">BSc in Computer Science</h3>
                <p className="text-gray-300 text-lg">Tech University</p>
                <p className="text-cyan-400 mt-2">2009 - 2013</p>
              </div>
            </motion.div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <footer className="text-center text-gray-400">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
              <motion.div
                className="flex items-center transition-colors duration-300 hover:text-cyan-400"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="mr-2" size={24} />
                youssefsaddouki4@gmail.com
              </motion.div>
              <motion.div
                className="flex items-center transition-colors duration-300 hover:text-cyan-400"
                whileHover={{ scale: 1.1 }}
              >
                <Phone className="mr-2" size={24} />
                +212656897049
              </motion.div>
            </div>
            <motion.div
              className="flex items-center justify-center transition-colors duration-300 hover:text-cyan-400"
              whileHover={{ scale: 1.1 }}
            >
              <MapPin className="mr-2" size={24} />
              Fes, Morocco
            </motion.div>
          </footer>
        </AnimatedSection>
      </div>
    </div>
  )
}