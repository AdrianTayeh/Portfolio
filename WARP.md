# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is Adrian Tayeh's personal portfolio website built with React, Vite, and Mantine UI. It's a modern single-page application showcasing projects, skills, and contact information with smooth GSAP animations.

## Development Commands

### Core Development
- `npm run dev` - Start development server (default port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

### Testing
This project currently has no test setup. Tests would typically be run with a testing framework like Vitest or Jest.

## Architecture

### Tech Stack
- **React 19** with functional components and hooks
- **Vite** for build tooling and development server  
- **Mantine UI** as the primary component library with dark theme
- **React Router DOM** for client-side routing
- **GSAP** with ScrollTrigger for animations
- **PostCSS** with Mantine preset for styling

### Project Structure
```
src/
├── pages/           # Route components (Home, Contact)
├── components/      # Reusable UI components (Layout, TechStackBand)
├── assets/          # Images and SVG files
├── App.jsx          # Main router configuration
└── main.jsx         # React app entry point with providers
```

### Key Architectural Patterns

**Routing**: Uses React Router with nested routes. Layout component wraps all pages with consistent header/navigation.

**Styling**: Mantine provides the component system, with custom CSS files for specific components. Dark theme is forced globally via MantineProvider.

**Animations**: GSAP context pattern used in useEffect hooks with proper cleanup. ScrollTrigger registered globally for scroll-based animations.

**State Management**: Uses Mantine's useForm for form handling. No global state management - component state only.

### Component Architecture

**Layout.jsx**: AppShell wrapper with header navigation and Outlet for page content

**Home.jsx**: Main landing page with:
- Hero section with GSAP animations
- Projects showcase with card grid
- TechStackBand component integration
- Custom SVG dividers for visual sections

**Contact.jsx**: Simple contact form using Mantine form validation, submits to Formspree

**TechStackBand.jsx**: Animated scrolling band of technology logos with CSS animations

## Development Notes

### Asset Management
- Images stored in `src/assets/` directory
- SVG logos imported as modules for tech stack display
- Hero and project images are PNG/SVG files

### Animation Implementation  
- GSAP context pattern ensures proper cleanup on component unmount
- ScrollTrigger used for entrance animations on scroll
- Hero section has separate refs for different animation timings

### Form Handling
- Contact form uses Mantine's useForm with validation
- Form submits directly to Formspree endpoint
- No client-side form submission handling

### Responsive Design
- Mantine's responsive utilities and breakpoints used
- Custom viewport units (8vw) for hero typography
- Container components manage content width

### Color Scheme
- Dark theme enforced globally through MantineProvider
- Custom light sections (white background) for project showcase
- Manual color overrides in inline styles where needed

## PostCSS Configuration

Custom Mantine breakpoint variables defined in postcss.config.cjs for consistent responsive behavior across the application.
