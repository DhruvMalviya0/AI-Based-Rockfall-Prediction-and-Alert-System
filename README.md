# AI-Based Rockfall Prediction & Alert System (SIH25071)

A responsive landing page for the AI-Based Rockfall Prediction & Alert System built with React + Vite, Tailwind CSS, and GSAP animations.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: GSAP-powered animations and scroll triggers
- **Modern UI**: Dark theme with teal/cyan accent colors
- **Interactive Elements**: Hover effects and smooth scrolling
- **Performance Optimized**: Lightweight and fast loading

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library with ScrollTrigger
- **PostCSS** - CSS processing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rockfall-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with animated text
│   ├── Features.jsx      # Feature cards with scroll animations
│   ├── Architecture.jsx  # SVG diagram with animated data flow
│   └── Footer.jsx        # Footer with contact info and links
├── App.jsx               # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Design System

### Colors
- **Background**: `#0f172a` (dark-bg)
- **Accent Teal**: `#14b8a6` (accent-teal)
- **Accent Cyan**: `#06b6d4` (accent-cyan)
- **Text**: White and slate variants

### Animations
- **Hero**: Fade-in with staggered text animation
- **Features**: Scroll-triggered card reveals
- **Architecture**: Animated SVG paths and pulsing elements
- **Hover**: Scale and glow effects on interactive elements

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### Hero Section
- Large gradient text with project name
- Animated call-to-action button
- Scroll indicator with bounce animation

### Features Section
- Three feature cards with hover effects
- Scroll-triggered staggered animations
- Gradient icons and smooth transitions

### Architecture Section
- Interactive SVG diagram
- Animated data flow paths
- Pulsing central processing indicator

### Footer
- Contact information
- Social media links
- Responsive grid layout

## 🔧 Customization

### Adding New Animations
1. Import GSAP modules in your component
2. Use `useEffect` hook for animation setup
3. Register ScrollTrigger if needed: `gsap.registerPlugin(ScrollTrigger)`

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Use Tailwind utility classes for component styling

## 📄 License

This project is part of Smart India Hackathon 2025 (SIH25071).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: contact@rockfall-ai.com
- **GitHub**: [Repository Link]
- **LinkedIn**: [Profile Link]

---

Built with ❤️ for Smart India Hackathon 2025