import { useEffect, useRef } from 'react'
import HeroScene from './HeroScene'
import useScrollAnimations from '../hooks/useScrollAnimations'

const LandingPage = () => {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  
  // Initialize GSAP scroll animations
  useScrollAnimations()
  
  // Smooth scroll function
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50"
        id="hero"
        role="banner"
      >
        {/* Three.js Background */}
        <HeroScene />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="heading-1 text-gray-900 mb-6 gsap-fade-in">
            AI-Driven IoT Rockfall{' '}
            <span className="text-primary-blue">Prediction & Alert</span>{' '}
            System
          </h1>
          
          <p className="text-large mb-8 max-w-3xl mx-auto gsap-fade-in">
            Real-time prediction and community alerts to prevent rockfall disasters 
            through advanced sensor networks and machine learning
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center gsap-fade-in">
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="btn-primary"
              aria-label="Learn more about our rockfall prediction system"
            >
              Learn More
            </button>
            <button 
              className="btn-secondary"
              aria-label="Get involved with the project"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="section-padding bg-white"
        id="about"
        role="region"
        aria-labelledby="about-heading"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="about-heading" className="heading-2 text-gray-900 mb-8 gsap-fade-in">
              Preventing Disasters Through Innovation
            </h2>
            <p className="text-large mb-6 gsap-fade-in">
              Rockfall incidents pose significant threats to mountainous communities, 
              infrastructure, and transportation networks. Our AI-powered early warning 
              system combines IoT sensors, machine learning, and real-time data processing 
              to predict dangerous rockfall events before they occur.
            </p>
            <p className="text-large gsap-fade-in">
              By integrating advanced sensing technologies with community-driven reporting 
              and multilingual alert systems, we create a comprehensive safety network 
              that saves lives and protects critical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section 
        className="section-padding bg-gray-50"
        id="objectives"
        role="region"
        aria-labelledby="objectives-heading"
      >
        <div className="container">
          <h2 id="objectives-heading" className="heading-2 text-center text-gray-900 mb-16 gsap-fade-in">
            System Objectives
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Sensor Data Collection',
                description: 'Comprehensive monitoring through accelerometers, tiltmeters, and environmental sensors'
              },
              {
                icon: '🤖',
                title: 'ML Prediction',
                description: 'Advanced algorithms using Random Forest, XGBoost, and LSTM for accurate forecasting'
              },
              {
                icon: '🔗',
                title: 'IoT Pipeline',
                description: 'Robust communication network with LoRaWAN and MQTT protocols'
              },
              {
                icon: '⚠️',
                title: 'Early Warning Alerts',
                description: 'Real-time community notifications through multiple communication channels'
              },
              {
                icon: '🌟',
                title: 'Gemini API Integration',
                description: 'AI-powered guidance and recommendations for emergency response'
              },
              {
                icon: '🌐',
                title: 'Multilingual Support',
                description: 'Scalable communication in local languages for maximum community reach'
              }
            ].map((objective, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 gsap-slide-up border border-gray-100"
              >
                <div className="text-4xl mb-4 text-center">{objective.icon}</div>
                <h3 className="heading-3 text-gray-900 mb-3 text-center">
                  {objective.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Overview Section */}
      <section 
        className="section-padding bg-white"
        id="system-overview"
        role="region"
        aria-labelledby="system-heading"
      >
        <div className="container">
          <h2 id="system-heading" className="heading-2 text-center text-gray-900 mb-16 gsap-fade-in">
            System Architecture
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Input Systems */}
            <div className="gsap-slide-left">
              <h3 className="heading-3 text-gray-900 mb-8 text-center lg:text-left">
                Input Systems
              </h3>
              <div className="space-y-4">
                {[
                  'Accelerometer sensors for ground movement detection',
                  'Tiltmeter arrays for slope stability monitoring', 
                  'Rain gauge networks for precipitation tracking',
                  'Geophone systems for seismic activity detection',
                  'Weather station data for environmental conditions'
                ].map((input, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-primary-blue rounded-full mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">{input}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Processing & Output Systems */}
            <div className="gsap-slide-right">
              <h3 className="heading-3 text-gray-900 mb-8 text-center lg:text-left">
                Processing & Outputs
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Processing</h4>
                  <p className="text-gray-600 text-sm">Random Forest, XGBoost, LSTM algorithms</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">IoT Communication</h4>
                  <p className="text-gray-600 text-sm">LoRaWAN networks, MQTT messaging</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alert Systems</h4>
                  <p className="text-gray-600 text-sm">Community notifications, emergency protocols</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Guidance</h4>
                  <p className="text-gray-600 text-sm">Gemini API integration for smart recommendations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Diagram Placeholder */}
          <div className="mt-16 p-8 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">System Architecture Diagram</h4>
              <p className="text-gray-600 text-sm">Detailed visual representation of data flow and system components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section 
        className="section-padding bg-gray-50"
        id="features"
        role="region"
        aria-labelledby="features-heading"
      >
        <div className="container">
          <h2 id="features-heading" className="heading-2 text-center text-gray-900 mb-16 gsap-fade-in">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Real-time Prediction',
                description: 'Continuous monitoring and instant threat assessment',
                icon: '⏱️'
              },
              {
                title: 'Geospatial Risk Mapping',
                description: 'Interactive maps showing risk zones and safe areas',
                icon: '🗺️'
              },
              {
                title: 'Crowdsourced Reporting', 
                description: 'Community-driven incident reporting and validation',
                icon: '👥'
              },
              {
                title: 'Predictive Maintenance',
                description: 'Smart sensor health monitoring and replacement scheduling',
                icon: '🔧'
              },
              {
                title: 'Offline Resilience',
                description: 'System continues operating during connectivity issues',
                icon: '📡'
              },
              {
                title: 'Historical Analysis',
                description: 'Long-term trend analysis and pattern recognition',
                icon: '📈'
              },
              {
                title: 'Multi-language Support',
                description: 'Alerts and guidance in local languages',
                icon: '🌍'
              },
              {
                title: 'Training Mode',
                description: 'Simulation environment for emergency response training',
                icon: '🎓'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 gsap-slide-up text-center"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section 
        className="section-padding bg-white"
        id="tech-stack"
        role="region"
        aria-labelledby="tech-heading"
      >
        <div className="container">
          <h2 id="tech-heading" className="heading-2 text-center text-gray-900 mb-16 gsap-fade-in">
            Technology Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'React', category: 'Frontend' },
              { name: 'Next.js', category: 'Framework' },
              { name: 'FastAPI', category: 'Backend' },
              { name: 'Flask', category: 'API' },
              { name: 'AWS IoT', category: 'Cloud' },
              { name: 'GCP IoT Core', category: 'Platform' },
              { name: 'TimescaleDB', category: 'Database' },
              { name: 'InfluxDB', category: 'Time Series' },
              { name: 'LoRaWAN', category: 'Network' },
              { name: 'MQTT', category: 'Protocol' },
              { name: 'Gemini API', category: 'AI/ML' },
              { name: 'TensorFlow', category: 'ML Framework' }
            ].map((tech, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-blue hover:text-white transition-all duration-300 gsap-slide-up cursor-pointer group"
              >
                <div className="w-12 h-12 bg-primary-blue group-hover:bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white group-hover:bg-primary-blue rounded"></div>
                </div>
                <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-500 group-hover:text-blue-100">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="section-padding bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white"
        id="cta"
        role="region"
        aria-labelledby="cta-heading"
      >
        <div className="container text-center">
          <h2 id="cta-heading" className="heading-2 mb-8 gsap-fade-in">
            Join the Mission to Save Lives
          </h2>
          <p className="text-large mb-8 max-w-3xl mx-auto opacity-90 gsap-fade-in">
            Partner with us to deploy AI-driven rockfall prediction systems in vulnerable 
            communities worldwide. Together, we can prevent disasters and protect lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center gsap-fade-in">
            <button className="bg-white text-primary-blue font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
              Collaborate with Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-blue font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
              Contact Our Team
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-400">
            <p className="text-blue-100 text-sm">
              SIH 2025 Project • Problem Statement ID: SIH25071
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage