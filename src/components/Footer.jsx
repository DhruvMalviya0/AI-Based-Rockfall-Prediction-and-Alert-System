import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current
    const content = contentRef.current

    if (!footer || !content) return

    // Set initial state
    gsap.set(content, {
      opacity: 0,
      y: 50
    })

    // Animate footer content on scroll
    gsap.to(content, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

  }, [])

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: 'email',
      url: 'mailto:contact@rockfall-ai.com',
      color: 'hover:text-accent-teal'
    }
  ]

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      case 'email':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.231 3.961-2.12L12 7.68l8.039-4.343C21.69 2.226 24 3.434 24 5.457z"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-t from-slate-900 to-dark-bg border-t border-slate-800"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent-teal to-accent-cyan bg-clip-text text-transparent">
              AI-Based Rockfall Prediction & Alert System
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              SIH25071 - A comprehensive solution for predicting and alerting about 
              potential rockfall hazards using advanced AI technology and real-time monitoring.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-400 transition-colors duration-300 ${link.color} hover:scale-110 transform`}
                  aria-label={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-slate-300 hover:text-accent-teal transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-slate-300 hover:text-accent-teal transition-colors duration-300">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-accent-teal transition-colors duration-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-accent-teal transition-colors duration-300">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-slate-300">
              <p>Smart India Hackathon 2025</p>
              <p>Team: SIH25071</p>
              <p>Email: contact@rockfall-ai.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 AI-Based Rockfall Prediction & Alert System. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-2 md:mt-0">
              Built with React, Vite, Tailwind CSS & GSAP
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
