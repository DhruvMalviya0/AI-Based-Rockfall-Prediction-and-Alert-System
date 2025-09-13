import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Architecture = () => {
  const sectionRef = useRef(null)
  const svgRef = useRef(null)
  const pathRefs = useRef([])

  useEffect(() => {
    const svg = svgRef.current
    const paths = pathRefs.current

    if (!svg || paths.length === 0) return

    // Set initial state for paths
    gsap.set(paths, {
      strokeDasharray: "1000 1000",
      strokeDashoffset: "1000"
    })

    // Animate paths on scroll
    gsap.to(paths, {
      strokeDashoffset: "0",
      duration: 2,
      stagger: 0.3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    })

    // Add pulsing animation to data flow circles
    const circles = svg.querySelectorAll('.data-flow-circle')
    gsap.to(circles, {
      scale: 1.2,
      opacity: 0.8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "power2.inOut"
    })

  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-slate-900 to-dark-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-cyan to-accent-teal bg-clip-text text-transparent">
            System Architecture
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI-powered pipeline processes real-time data from multiple sources 
            to deliver accurate rockfall predictions and safety alerts.
          </p>
        </div>

        <div className="relative">
          {/* SVG Architecture Diagram */}
          <svg
            ref={svgRef}
            viewBox="0 0 1200 600"
            className="w-full h-auto max-w-5xl mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <rect width="1200" height="600" fill="transparent" />
            
            {/* Data Sources */}
            <g id="data-sources">
              <rect x="50" y="100" width="150" height="80" rx="10" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
              <text x="125" y="130" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Weather</text>
              <text x="125" y="150" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Sensors</text>
              
              <rect x="50" y="220" width="150" height="80" rx="10" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
              <text x="125" y="250" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Geological</text>
              <text x="125" y="270" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Data</text>
              
              <rect x="50" y="340" width="150" height="80" rx="10" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
              <text x="125" y="370" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Historical</text>
              <text x="125" y="390" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Patterns</text>
            </g>

            {/* Data Flow Paths */}
            <path
              ref={el => pathRefs.current[0] = el}
              d="M 200 140 Q 300 140 400 200"
              stroke="#06b6d4"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              ref={el => pathRefs.current[1] = el}
              d="M 200 260 Q 300 260 400 200"
              stroke="#06b6d4"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              ref={el => pathRefs.current[2] = el}
              d="M 200 380 Q 300 380 400 200"
              stroke="#06b6d4"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* Data Processing Hub */}
            <rect x="400" y="150" width="200" height="100" rx="15" fill="#0f172a" stroke="#06b6d4" strokeWidth="3" />
            <text x="500" y="180" textAnchor="middle" fill="#06b6d4" fontSize="16" fontWeight="bold">AI Processing</text>
            <text x="500" y="200" textAnchor="middle" fill="#06b6d4" fontSize="16" fontWeight="bold">Engine</text>
            <text x="500" y="220" textAnchor="middle" fill="#06b6d4" fontSize="14">Machine Learning</text>
            <text x="500" y="235" textAnchor="middle" fill="#06b6d4" fontSize="14">Algorithms</text>

            {/* Data Flow Circles */}
            <circle className="data-flow-circle" cx="300" cy="140" r="4" fill="#06b6d4" />
            <circle className="data-flow-circle" cx="300" cy="260" r="4" fill="#06b6d4" />
            <circle className="data-flow-circle" cx="300" cy="380" r="4" fill="#06b6d4" />

            {/* Output Paths */}
            <path
              ref={el => pathRefs.current[3] = el}
              d="M 600 200 Q 700 200 800 150"
              stroke="#14b8a6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              ref={el => pathRefs.current[4] = el}
              d="M 600 200 Q 700 200 800 250"
              stroke="#14b8a6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              ref={el => pathRefs.current[5] = el}
              d="M 600 200 Q 700 200 800 350"
              stroke="#14b8a6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* Output Components */}
            <rect x="800" y="100" width="150" height="80" rx="10" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
            <text x="875" y="130" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Risk Map</text>
            <text x="875" y="150" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Visualization</text>
            
            <rect x="800" y="200" width="150" height="80" rx="10" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
            <text x="875" y="230" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Alert</text>
            <text x="875" y="250" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">System</text>
            
            <rect x="800" y="300" width="150" height="80" rx="10" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
            <text x="875" y="330" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Safety</text>
            <text x="875" y="350" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="bold">Recommendations</text>

            {/* Output Flow Circles */}
            <circle className="data-flow-circle" cx="700" cy="200" r="4" fill="#14b8a6" />
            <circle className="data-flow-circle" cx="700" cy="200" r="4" fill="#14b8a6" />
            <circle className="data-flow-circle" cx="700" cy="200" r="4" fill="#14b8a6" />

            {/* Central Processing Indicator */}
            <circle cx="500" cy="200" r="8" fill="#06b6d4" opacity="0.8">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Architecture Description */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-teal to-teal-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold mb-2 text-accent-teal">Data Collection</h3>
              <p className="text-slate-300">
                Real-time data from weather sensors, geological monitoring stations, 
                and historical databases.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-cyan to-cyan-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🧠
              </div>
              <h3 className="text-xl font-bold mb-2 text-accent-cyan">AI Processing</h3>
              <p className="text-slate-300">
                Advanced machine learning algorithms analyze patterns and predict 
                potential rockfall events with high accuracy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🚨
              </div>
              <h3 className="text-xl font-bold mb-2 text-emerald-400">Alert System</h3>
              <p className="text-slate-300">
                Instant notifications, risk visualizations, and safety recommendations 
                for emergency response teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Architecture
