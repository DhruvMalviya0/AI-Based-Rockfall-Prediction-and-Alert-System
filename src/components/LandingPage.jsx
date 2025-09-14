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
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="heading-1 text-white mb-8 gsap-fade-in drop-shadow-lg">
              AI-Driven IoT Rockfall{' '}
              <span className="text-blue-300">Prediction & Alert</span>{' '}
              System
            </h1>
            
            <p className="text-large mb-12 max-w-4xl mx-auto text-gray-100 gsap-fade-in drop-shadow-md">
              Real-time prediction and community alerts to prevent rockfall disasters 
              through advanced sensor networks and machine learning
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center gsap-fade-in">
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="btn-primary text-lg py-4 px-10"
              aria-label="Learn more about our rockfall prediction system"
            >
              Learn More
            </button>
            <button 
              className="btn-secondary bg-white bg-opacity-20 border-white text-white hover:bg-white hover:text-gray-900 text-lg py-4 px-10"
              aria-label="Get involved with the project"
            >
              Get Involved
            </button>
          </div>

          {/* Key Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 gsap-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">95%</div>
              <div className="text-sm text-gray-200 uppercase tracking-wider">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">&lt; 30s</div>
              <div className="text-sm text-gray-200 uppercase tracking-wider">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">24/7</div>
              <div className="text-sm text-gray-200 uppercase tracking-wider">Monitoring</div>
            </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Content - 8 columns */}
            <div className="lg:col-span-8">
              <h2 id="about-heading" className="heading-2 text-gray-900 mb-8 gsap-fade-in">
                Preventing Disasters Through Innovation
              </h2>
              <div className="prose prose-lg max-w-none">
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
            
            {/* Stats/Highlights - 4 columns */}
            <div className="lg:col-span-4">
              <div className="bg-gray-50 p-8 rounded-2xl gsap-fade-in">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-blue mb-2">95%</div>
                    <div className="text-sm text-gray-600">Prediction Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-blue mb-2">&lt; 30s</div>
                    <div className="text-sm text-gray-600">Alert Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-blue mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Continuous Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
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
                description: 'Comprehensive monitoring through accelerometers, tiltmeters, and environmental sensors',
                color: 'bg-blue-500'
              },
              {
                icon: '🤖',
                title: 'ML Prediction Engine',
                description: 'Advanced algorithms using Random Forest, XGBoost, and LSTM for accurate forecasting',
                color: 'bg-green-500'
              },
              {
                icon: '🔗',
                title: 'IoT Communication',
                description: 'Robust communication network with LoRaWAN and MQTT protocols',
                color: 'bg-purple-500'
              },
              {
                icon: '⚠️',
                title: 'Early Warning System',
                description: 'Real-time community notifications through multiple communication channels',
                color: 'bg-red-500'
              },
              {
                icon: '🌟',
                title: 'AI-Powered Guidance',
                description: 'Gemini API integration for intelligent recommendations and emergency response',
                color: 'bg-yellow-500'
              },
              {
                icon: '🌐',
                title: 'Global Scalability',
                description: 'Multilingual support and customizable deployment for worldwide communities',
                color: 'bg-indigo-500'
              }
            ].map((objective, index) => (
              <div 
                key={index} 
                className="feature-card gsap-slide-up text-center group hover:-translate-y-1"
              >
                <div className="text-5xl mb-6">{objective.icon}</div>
                <h3 className="heading-4 text-gray-900 mb-4">
                  {objective.title}
                </h3>
                <p className="text-body text-gray-600 leading-relaxed mb-6">
                  {objective.description}
                </p>
                <div className={`w-12 h-1 ${objective.color} mx-auto rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Input Systems - 6 columns */}
            <div className="lg:col-span-6 gsap-slide-left">
              <div className="feature-card h-full">
                <h3 className="heading-3 text-gray-900 mb-8 text-center">
                  🔍 Input Systems
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Ground Movement Detection',
                      description: 'Accelerometer sensors for precise motion tracking',
                      icon: '📊'
                    },
                    {
                      title: 'Slope Stability Monitoring', 
                      description: 'Tiltmeter arrays for real-time slope analysis',
                      icon: '📐'
                    },
                    {
                      title: 'Environmental Conditions',
                      description: 'Weather stations and rain gauge networks',
                      icon: '🌦️'
                    },
                    {
                      title: 'Seismic Activity Detection',
                      description: 'Geophone systems for underground monitoring',
                      icon: '🌍'
                    }
                  ].map((input, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl flex-shrink-0 mt-1">{input.icon}</div>
                      <div>
                        <h4 className="heading-4 text-gray-900">{input.title}</h4>
                        <p className="text-small text-gray-600">{input.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Processing & Output Systems - 6 columns */}
            <div className="lg:col-span-6 gsap-slide-right">
              <div className="feature-card h-full">
                <h3 className="heading-3 text-gray-900 mb-8 text-center">
                  ⚡ Processing & Outputs
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'AI Processing Engine',
                      description: 'Random Forest, XGBoost, and LSTM algorithms for predictive analysis',
                      icon: '🤖'
                    },
                    {
                      title: 'IoT Communication Hub',
                      description: 'LoRaWAN networks with MQTT messaging protocols',
                      icon: '📡'
                    },
                    {
                      title: 'Alert Distribution System',
                      description: 'Multi-channel community notifications and emergency protocols',
                      icon: '🚨'
                    },
                    {
                      title: 'AI-Powered Guidance',
                      description: 'Gemini API integration for intelligent emergency response',
                      icon: '💡'
                    }
                  ].map((output, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl flex-shrink-0 mt-1">{output.icon}</div>
                      <div>
                        <h4 className="heading-4 text-gray-900">{output.title}</h4>
                        <p className="text-small text-gray-600">{output.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Simplified Architecture Flow */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-12 rounded-3xl">
              <h3 className="heading-3 text-center text-gray-900 mb-12 gsap-fade-in">
                Data Flow Architecture
              </h3>
              
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Step 1 */}
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                  <h4 className="heading-4 text-gray-900">Sensor Data Collection</h4>
                  <p className="text-small text-gray-600">IoT sensors monitor environmental conditions 24/7</p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:block text-primary-blue text-3xl">→</div>
                <div className="lg:hidden text-primary-blue text-3xl rotate-90">→</div>

                {/* Step 2 */}
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                  <h4 className="heading-4 text-gray-900">AI Analysis</h4>
                  <p className="text-small text-gray-600">Machine learning algorithms predict risk levels</p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:block text-primary-blue text-3xl">→</div>
                <div className="lg:hidden text-primary-blue text-3xl rotate-90">→</div>

                {/* Step 3 */}
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                  <h4 className="heading-4 text-gray-900">Alert Distribution</h4>
                  <p className="text-small text-gray-600">Community receives immediate warnings and guidance</p>
                </div>
              </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-time Prediction',
                description: 'Continuous monitoring and instant threat assessment with 95% accuracy',
                icon: '⏱️',
                highlight: '< 30s response'
              },
              {
                title: 'Geospatial Risk Mapping',
                description: 'Interactive maps showing risk zones and safe evacuation routes',
                icon: '🗺️',
                highlight: 'GPS integrated'
              },
              {
                title: 'Community Alerts', 
                description: 'Multi-channel notifications via SMS, app, and local sirens',
                icon: '�',
                highlight: 'Multilingual support'
              },
              {
                title: 'Predictive Maintenance',
                description: 'Smart sensor health monitoring and replacement scheduling',
                icon: '🔧',
                highlight: 'Automated diagnostics'
              },
              {
                title: 'Offline Resilience',
                description: 'System continues operating during connectivity disruptions',
                icon: '📡',
                highlight: 'Edge computing'
              },
              {
                title: 'Historical Analysis',
                description: 'Long-term trend analysis and seasonal pattern recognition',
                icon: '📈',
                highlight: '5+ years data'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="feature-card gsap-slide-up text-center group hover:-translate-y-2"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="heading-4 text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-body text-gray-600 mb-4">{feature.description}</p>
                <div className="inline-block px-3 py-1 bg-primary-blue bg-opacity-10 text-primary-blue text-xs font-semibold rounded-full">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card gsap-slide-up">
              <h3 className="heading-4 text-gray-900 mb-4">🌍 Global Scalability</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-body text-gray-700">Multi-language alert system</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-body text-gray-700">Regional weather integration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-body text-gray-700">Customizable risk thresholds</span>
                </li>
              </ul>
            </div>

            <div className="feature-card gsap-slide-up">
              <h3 className="heading-4 text-gray-900 mb-4">🎓 Training & Simulation</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-body text-gray-700">Emergency response drills</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-body text-gray-700">Community education portal</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-body text-gray-700">Virtual reality scenarios</span>
                </li>
              </ul>
            </div>
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
          
          {/* Tech Stack Table */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Frontend */}
              <div className="feature-card gsap-slide-up">
                <h3 className="heading-4 text-gray-900 mb-6 text-center">Frontend</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">React 18</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">Next.js</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">Tailwind CSS</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">Three.js</span>
                  </li>
                </ul>
              </div>

              {/* Backend & APIs */}
              <div className="feature-card gsap-slide-up">
                <h3 className="heading-4 text-gray-900 mb-6 text-center">Backend & APIs</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">FastAPI</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">Flask</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">Gemini API</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">TensorFlow</span>
                  </li>
                </ul>
              </div>

              {/* Infrastructure */}
              <div className="feature-card gsap-slide-up">
                <h3 className="heading-4 text-gray-900 mb-6 text-center">Infrastructure</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">AWS IoT Core</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">GCP IoT Core</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">TimescaleDB</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">InfluxDB</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* IoT Communication */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="feature-card gsap-slide-up">
                <h3 className="heading-4 text-gray-900 mb-6 text-center">IoT Communication</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">LoRaWAN Networks</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">MQTT Protocol</span>
                  </li>
                </ul>
              </div>

              <div className="feature-card gsap-slide-up">
                <h3 className="heading-4 text-gray-900 mb-6 text-center">ML Algorithms</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">Random Forest</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    <span className="text-body text-gray-700">XGBoost & LSTM</span>
                  </li>
                </ul>
              </div>
            </div>
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