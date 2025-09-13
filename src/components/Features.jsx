import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current

    // Set initial state for cards
    gsap.set(cards, {
      opacity: 0,
      y: 100,
      scale: 0.8
    })

    // Create staggered animation for cards
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    // Add hover animations for each card
    cards.forEach((card, index) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          })
        })
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }
    })

    return () => {
      cards.forEach(card => {
        if (card) {
          card.removeEventListener('mouseenter', () => {})
          card.removeEventListener('mouseleave', () => {})
        }
      })
    }
  }, [])

  const features = [
    {
      title: "Real-time Prediction",
      description: "Advanced AI algorithms analyze geological data, weather conditions, and historical patterns to predict rockfall events with high accuracy in real-time.",
      icon: "🔮",
      color: "from-accent-teal to-teal-600"
    },
    {
      title: "Interactive Risk Map",
      description: "Visualize potential risk zones with an interactive map that updates in real-time, showing danger levels and affected areas with color-coded indicators.",
      icon: "🗺️",
      color: "from-accent-cyan to-cyan-600"
    },
    {
      title: "Gemini Safety Tips",
      description: "AI-powered safety recommendations and evacuation routes based on current risk assessments, providing actionable guidance for emergency situations.",
      icon: "🛡️",
      color: "from-emerald-500 to-emerald-600"
    }
  ]

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-dark-bg to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-cyan bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our comprehensive system combines cutting-edge AI technology with 
            real-time monitoring to provide accurate predictions and safety alerts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="card group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-teal transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
