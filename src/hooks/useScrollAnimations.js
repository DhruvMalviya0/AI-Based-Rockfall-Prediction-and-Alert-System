import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Custom hook for GSAP scroll animations with proper state management
const useScrollAnimations = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Set up smooth scrolling
    gsap.config({
      nullTargetWarn: false,
    })

    // Animation tracking to prevent re-triggering
    const animationState = {
      hero: false,
      objectives: false,
      features: false,
      cta: false,
      sections: new Set(),
      initialized: false
    }

    // Initialize only once
    if (animationState.initialized) return

    animationState.initialized = true

    // Hero section animations (run once)
    const heroTimeline = gsap.timeline({ delay: 0.5 })
    
    if (!animationState.hero) {
      heroTimeline
        .fromTo('.gsap-fade-in', {
          opacity: 0,
          y: 60,
          duration: 1,
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          onComplete: () => {
            animationState.hero = true
          }
        })
    }

    // Section reveal animations with "played" flag
    gsap.utils.toArray('section:not(#hero)').forEach((section, index) => {
      const sectionId = section.id || `section-${index}`
      
      // Skip if already animated
      if (animationState.sections.has(sectionId)) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none', // Only play once, no reverse
          markers: false,
          once: true, // Critical: only trigger once
          onEnter: () => {
            // Mark this section as animated
            animationState.sections.add(sectionId)
          }
        }
      })

      // Animate section headings
      const heading = section.querySelector('h2')
      if (heading) {
        tl.fromTo(heading, {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          onComplete: () => {
            // Mark heading as animated
            heading.classList.add('gsap-animated')
          }
        })
      }

      // Animate cards and content
      const cards = section.querySelectorAll('.gsap-slide-up, .gsap-fade-in:not(.gsap-animated)')
      if (cards.length > 0) {
        tl.fromTo(cards, {
          opacity: 0,
          y: 40,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          onComplete: () => {
            // Mark cards as animated
            cards.forEach(card => card.classList.add('gsap-animated'))
          }
        }, '-=0.4')
      }

      // Animate slide-left elements
      const slideLeftElements = section.querySelectorAll('.gsap-slide-left:not(.gsap-animated)')
      if (slideLeftElements.length > 0) {
        tl.fromTo(slideLeftElements, {
          opacity: 0,
          x: -60,
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          onComplete: () => {
            slideLeftElements.forEach(el => el.classList.add('gsap-animated'))
          }
        }, '-=0.6')
      }

      // Animate slide-right elements
      const slideRightElements = section.querySelectorAll('.gsap-slide-right:not(.gsap-animated)')
      if (slideRightElements.length > 0) {
        tl.fromTo(slideRightElements, {
          opacity: 0,
          x: 60,
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          onComplete: () => {
            slideRightElements.forEach(el => el.classList.add('gsap-animated'))
          }
        }, '-=0.6')
      }
    })

    // Parallax effect for hero content with throttling
    let parallaxTicking = false
    const parallaxUpdate = () => {
      gsap.to('.hero-parallax', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1, // Smooth scrubbing with 1 second lag
          onUpdate: () => {
            if (!parallaxTicking) {
              requestAnimationFrame(() => {
                parallaxTicking = false
              })
              parallaxTicking = true
            }
          }
        }
      })
    }
    parallaxUpdate()

    // Technology stack hover animations (improved performance)
    gsap.utils.toArray('#tech-stack .feature-card').forEach((tech) => {
      const tl = gsap.timeline({ paused: true })
      let isHovered = false
      
      tl.to(tech, {
        y: -8,
        duration: 0.3,
        ease: 'power2.out'
      })

      // Debounced hover handlers
      const handleMouseEnter = () => {
        if (!isHovered) {
          isHovered = true
          tl.play()
        }
      }
      
      const handleMouseLeave = () => {
        if (isHovered) {
          isHovered = false
          tl.reverse()
        }
      }

      tech.addEventListener('mouseenter', handleMouseEnter)
      tech.addEventListener('mouseleave', handleMouseLeave)
    })

    // Objectives cards with single-trigger animation
    ScrollTrigger.create({
      trigger: '#objectives .grid',
      start: 'top 80%',
      once: true, // Critical: prevent re-triggering
      onEnter: () => {
        if (!animationState.objectives) {
          animationState.objectives = true
          
          const objectiveCards = document.querySelectorAll('#objectives .gsap-slide-up:not(.gsap-animated)')
          
          gsap.fromTo(objectiveCards, {
            opacity: 0,
            y: 60,
            scale: 0.9,
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            onComplete: () => {
              objectiveCards.forEach(card => card.classList.add('gsap-animated'))
            }
          })
        }
      }
    })

    // Features section with enhanced stagger (single-trigger)
    ScrollTrigger.create({
      trigger: '#features .grid',
      start: 'top 85%',
      once: true, // Prevent re-triggering
      onEnter: () => {
        if (!animationState.features) {
          animationState.features = true
          
          const featureCards = document.querySelectorAll('#features .gsap-slide-up:not(.gsap-animated)')
          
          gsap.fromTo(featureCards, {
            opacity: 0,
            y: 40,
            rotationY: 15,
          }, {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            stagger: {
              amount: 0.8,
              from: 'start',
              ease: 'power2.out'
            },
            ease: 'power3.out',
            onComplete: () => {
              featureCards.forEach(card => card.classList.add('gsap-animated'))
            }
          })
        }
      }
    })

    // CTA section with single entrance
    ScrollTrigger.create({
      trigger: '#cta',
      start: 'top 70%',
      once: true, // Prevent re-triggering
      onEnter: () => {
        if (!animationState.cta) {
          animationState.cta = true
          
          const tl = gsap.timeline()
          
          tl.fromTo('#cta h2', {
            opacity: 0,
            scale: 0.8,
          }, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)'
          })
          .fromTo('#cta p', {
            opacity: 0,
            y: 30,
          }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
          }, '-=0.4')
          .fromTo('#cta .gsap-fade-in:last-child', {
            opacity: 0,
            y: 20,
          }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
          }, '-=0.3')
        }
      }
    })

    // Debounce utility for scroll events
    const debounce = (func, wait) => {
      let timeout
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout)
          func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    }

    // Throttle utility for high-frequency events
    const throttle = (func, limit) => {
      let inThrottle
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args)
          inThrottle = true
          setTimeout(() => inThrottle = false, limit)
        }
      }
    }

    // Custom scroll behavior for buttons with debouncing
    document.querySelectorAll('[data-scroll-to]').forEach(button => {
      const debouncedScrollTo = debounce((e) => {
        e.preventDefault()
        const target = button.getAttribute('data-scroll-to')
        const element = document.querySelector(target)
        
        if (element) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: {
              y: element,
              offsetY: 0
            },
            ease: 'power3.inOut'
          })
        }
      }, 150)

      button.addEventListener('click', debouncedScrollTo)
    })

    // Enhanced cleanup function with proper state reset
    return () => {
      // Clear all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      
      // Kill all GSAP tweens
      gsap.killTweensOf('*')
      
      // Reset animation state
      Object.keys(animationState).forEach(key => {
        if (key === 'sections') {
          animationState[key].clear()
        } else {
          animationState[key] = false
        }
      })
      
      // Clear any remaining timeouts/intervals
      gsap.globalTimeline.clear()
    }
  }, [])
}

export default useScrollAnimations