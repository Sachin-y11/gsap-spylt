# SPYLT

A premium, animated marketing landing page built with React, Vite, GSAP, and Tailwind CSS.

## Overview

This project is a single-page brand experience for a product-focused landing page. It includes:

- a smooth-scrolling hero experience
- animated section reveals using GSAP
- responsive navigation and layout
- flavour, nutrition, benefit, testimonial, and footer sections
- a polished modern visual style suitable for product marketing

## Tech Stack

- React 19
- Vite
- GSAP
- Tailwind CSS
- ESLint

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal, typically:

   ```bash
   http://localhost:5173
   ```

## Available Scripts

```bash
npm run dev
```

Runs the Vite dev server with hot reloading.

```bash
npm run build
```

Builds the production bundle for deployment.

```bash
npm run preview
```

Serves the production build locally for preview.

```bash
npm run lint
```

Runs ESLint checks on the project.

## Project Structure

```bash
src/
  App.jsx
  main.jsx
  index.css
  components/
  constants/
  sections/
```

## Notes

The app uses GSAP ScrollTrigger and ScrollSmoother to create smooth motion and reveal effects. The project is structured as a modular landing-page layout with reusable section components.
