# AI-Driven Rockfall Prediction & Alert System

A modern, immersive landing page for the SIH 2025 Hackathon project "AI-Based Rockfall Prediction and Alert System" (Problem Statement ID: SIH25071).

## 🚀 Live Demo

Visit the deployed application: [Coming Soon]

## 📋 Project Overview

This landing page showcases an innovative AI-powered early warning system that combines IoT sensors, machine learning, and real-time data processing to predict dangerous rockfall events before they occur. The system integrates advanced sensing technologies with community-driven reporting and multilingual alert systems to create a comprehensive safety network.

## ✨ Features

### Design & User Experience
- **Otherlife-inspired Design**: Modern, immersive interface with subtle animations
- **3D Hero Animation**: Interactive rock terrain with WebGL/Three.js
- **Smooth Animations**: GSAP-powered scroll triggers and timeline animations
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels

### Technical Features
- **Performance Optimized**: WebGL fallback for low-power devices
- **Smooth Scrolling**: Enhanced scroll behavior with parallax effects
- **Modern Stack**: React + Vite + Tailwind CSS + Three.js + GSAP
- **Light Theme**: Clean white background with subtle blue (#1E90FF) accents
- **Typography**: Inter and Roboto fonts for optimal readability

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics and WebGL animations
- **GSAP** - Professional-grade animations

### Fonts & Icons
- **Inter & Roboto** - Primary typography
- **Custom Icons** - Optimized SVG icons for system features

## 🏗️ Project Structure

```
src/
├── components/
│   ├── HeroScene.jsx          # Three.js 3D rock terrain animation
│   └── LandingPage.jsx        # Main landing page with all sections
├── hooks/
│   └── useScrollAnimations.js # GSAP scroll animation logic
├── App.jsx                    # Root component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles and Tailwind config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📱 Page Sections

### 1. Hero Section
- Interactive 3D rock terrain animation
- Dynamic headline and call-to-action buttons
- Scroll-responsive camera movement
- WebGL fallback for compatibility

### 2. About Section
- Project introduction and problem statement
- Clear value proposition
- Accessible content structure

### 3. Objectives Section
- Six key system objectives in card layout
- Animated reveals on scroll
- Icon-based visual hierarchy

### 4. System Overview
- Two-column architecture breakdown
- Input systems vs. processing & outputs
- Placeholder for system diagram

### 5. Key Features
- Eight feature cards with hover animations
- Comprehensive system capabilities
- Grid-based responsive layout

### 6. Technology Stack
- Interactive technology badges
- Organized by category (Frontend, Backend, Cloud, etc.)
- Hover effects and animations

### 7. Call to Action
- Gradient background with strong visual appeal
- Partnership and collaboration focus
- Contact information and project details

## 🎨 Design System

### Colors
- **Primary Blue**: #1E90FF
- **Blue Light**: #4FA8FF  
- **Blue Dark**: #0F70D9
- **Grays**: 50-900 scale for text and backgrounds

### Typography
- **Headings**: Inter font family, bold weights
- **Body**: Roboto/Inter, optimized line-height
- **Responsive**: Fluid typography scales

### Animations
- **Entrance**: Fade-in with upward motion
- **Scroll**: Progressive reveal with stagger
- **Hover**: Subtle scale and color transitions
- **3D**: Continuous rotation with scroll parallax

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### WebGL Requirements
- Hardware-accelerated graphics
- WebGL 1.0 support
- Graceful fallback to static hero

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Comprehensive screen reader support
- **Color Contrast**: WCAG AA compliant ratios
- **Keyboard Navigation**: Full tab support
- **Reduced Motion**: Respects user preferences
- **Focus Management**: Visible focus indicators

## 🚀 Performance Optimizations

- **Code Splitting**: Dynamic imports for Three.js components
- **Image Optimization**: Responsive images with lazy loading
- **Animation Performance**: GPU-accelerated transforms
- **Bundle Size**: Tree-shaking and dead code elimination
- **Caching**: Optimized asset caching strategies

## 🏆 SIH 2025 Details

- **Problem Statement ID**: SIH25071
- **Theme**: Disaster Management
- **Category**: Hardware & Software
- **Organization**: Ministry of Earth Sciences

---

Built with ❤️ for SIH 2025 | Preventing disasters through innovation+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
