import { useRef, useEffect } from 'react'
import * as THREE from 'three'

const HeroScene = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    let scene, camera, renderer, animationFrameId
    const rocks = []
    const particles = []

    // Initialize the scene
    const initScene = () => {
      try {
        // Scene setup
        scene = new THREE.Scene()
        scene.fog = new THREE.Fog(0x1a1a2e, 30, 200)

        // Camera setup
        camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        )
        camera.position.set(0, 10, 30)

        // Renderer setup with WebGL fallback handling
        renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true,
          canvas: document.createElement('canvas')
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x0f0f23, 0)
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap

        // Clear any existing canvas and append new one
        if (mountRef.current) {
          mountRef.current.innerHTML = ''
          mountRef.current.appendChild(renderer.domElement)
        }

        // Create lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0x1E90FF, 0.8)
        directionalLight.position.set(10, 20, 5)
        directionalLight.castShadow = true
        directionalLight.shadow.mapSize.width = 2048
        directionalLight.shadow.mapSize.height = 2048
        scene.add(directionalLight)

        // Create rock terrain
        createRockTerrain()
        createParticles()

        // Start animation
        animate()

        // Handle window resize
        const handleResize = () => {
          if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
          }
        }

        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
        }
      } catch (error) {
        console.warn('WebGL not supported, falling back to CSS background:', error)
        // Fallback to CSS gradient background
        if (mountRef.current) {
          mountRef.current.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
        }
      }
    }

    const createRockTerrain = () => {
      const rockGeometry = new THREE.DodecahedronGeometry(1, 1)
      const rockMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x666666,
        transparent: true,
        opacity: 0.8
      })

      for (let i = 0; i < 50; i++) {
        const rock = new THREE.Mesh(rockGeometry, rockMaterial.clone())
        
        rock.position.set(
          (Math.random() - 0.5) * 100,
          Math.random() * 20 - 10,
          (Math.random() - 0.5) * 100
        )
        
        rock.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        )
        
        const scale = 0.5 + Math.random() * 2
        rock.scale.setScalar(scale)
        
        rock.castShadow = true
        rock.receiveShadow = true
        
        rocks.push(rock)
        scene.add(rock)
      }
    }

    const createParticles = () => {
      const particleGeometry = new THREE.BufferGeometry()
      const particleCount = 100
      const positions = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 200
        positions[i + 1] = Math.random() * 100
        positions[i + 2] = (Math.random() - 0.5) * 200
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

      const particleMaterial = new THREE.PointsMaterial({
        color: 0x1E90FF,
        size: 2,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      })

      const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
      particles.push(particleSystem)
      scene.add(particleSystem)
    }

    const animate = () => {
      if (!scene || !camera || !renderer) return

      animationFrameId = requestAnimationFrame(animate)

      // Animate rocks
      rocks.forEach((rock, index) => {
        rock.rotation.x += 0.01
        rock.rotation.y += 0.005
        rock.position.y += Math.sin(Date.now() * 0.001 + index) * 0.02
      })

      // Animate particles
      particles.forEach(particle => {
        particle.rotation.y += 0.01
      })

      // Scroll-based camera movement
      const scrollY = window.scrollY || 0
      const scrollProgress = Math.min(scrollY / window.innerHeight, 1)
      
      if (camera) {
        camera.position.z = 30 - scrollProgress * 10
        camera.position.y = 10 + scrollProgress * 5
        camera.lookAt(0, 0, 0)
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera)
      }
    }

    // Initialize scene
    initScene()

    // Cleanup function
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      if (renderer) {
        renderer.dispose()
      }

      if (scene) {
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose()
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })
      }

      if (mountRef.current) {
        mountRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        minHeight: '100vh'
      }}
    />
  )
}

export default HeroScene