import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Custom hook for GSAP scroll animations
const useScrollAnimations = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Set up smooth scrolling
    gsap.config({
      nullTargetWarn: false,
    })

    // Hero section animations
    const heroTimeline = gsap.timeline({ delay: 0.5 })
    
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
        ease: 'power3.out'
      })

    // Section reveal animations
    gsap.utils.toArray('section:not(#hero)').forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false,
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
          ease: 'power3.out'
        })
      }

      // Animate cards and content
      const cards = section.querySelectorAll('.gsap-slide-up, .gsap-fade-in')
      if (cards.length > 0) {
        tl.fromTo(cards, {
          opacity: 0,
          y: 40,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.4')
      }

      // Animate slide-left elements
      const slideLeftElements = section.querySelectorAll('.gsap-slide-left')
      if (slideLeftElements.length > 0) {
        tl.fromTo(slideLeftElements, {
          opacity: 0,
          x: -60,
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.6')
      }

      // Animate slide-right elements
      const slideRightElements = section.querySelectorAll('.gsap-slide-right')
      if (slideRightElements.length > 0) {
        tl.fromTo(slideRightElements, {
          opacity: 0,
          x: 60,
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.6')
      }
    })

    // Parallax effect for hero content
    gsap.to('.hero-parallax', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    // Technology stack hover animations
    gsap.utils.toArray('#tech-stack .gsap-slide-up').forEach((tech) => {
      const tl = gsap.timeline({ paused: true })
      
      tl.to(tech, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      })

      tech.addEventListener('mouseenter', () => tl.play())
      tech.addEventListener('mouseleave', () => tl.reverse())
    })

    // Objectives cards stagger animation
    ScrollTrigger.create({
      trigger: '#objectives .grid',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('#objectives .gsap-slide-up', {
          opacity: 0,
          y: 60,
          scale: 0.9,
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)'
        })
      }
    })

    // Features section with enhanced stagger
    ScrollTrigger.create({
      trigger: '#features .grid',
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo('#features .gsap-slide-up', {
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
          ease: 'power3.out'
        })
      }
    })

    // CTA section dramatic entrance
    ScrollTrigger.create({
      trigger: '#cta',
      start: 'top 70%',
      onEnter: () => {
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
    })

    // Smooth scroll behavior enhancement
    const lenis = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
    }

    // Custom scroll behavior for buttons
    document.querySelectorAll('[data-scroll-to]').forEach(button => {
      button.addEventListener('click', (e) => {
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
      })
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gsap.killTweensOf('*')
    }
  }, [])
}

export default useScrollAnimations