# Copilot Instructions

## Project Overview

This project is a personal portfolio website built as a modern frontend application.

The website emphasizes interactive 3D experiences over traditional webpage layouts. The homepage contains an interactive 3D 1x1 Rubik's Cube that acts as the primary navigation mechanism.

The codebase should prioritize readability, maintainability, modularity, and reusable components.

---

# Tech Stack

Always use the following technologies unless explicitly instructed otherwise.

## Language

- TypeScript

## Framework

- React

## Build Tool

- Vite

## Styling

- Tailwind CSS

Avoid writing custom CSS unless it is necessary for advanced styling.

Prefer utility classes over custom styles.

---

# 3D Rendering

Use:

- Three.js
- React Three Fiber (@react-three/fiber)
- Drei (@react-three/drei)

Never write raw WebGL code.

Prefer React Three Fiber abstractions whenever possible.

Organize all 3D components under:

src/components/three/

Examples include:

- RubiksCube
- Camera
- Lighting
- Scene
- Environment

---

# Animation

Use Framer Motion for UI animations.

Examples:

- page transitions
- fade animations
- slide animations
- hover effects
- expandable panels

Do not manually animate elements with CSS if Framer Motion provides a cleaner solution.

---

# Project Structure

Use the following folder organization.

src/

    app/

    components/

        ui/

        three/

    pages/

    hooks/

    utils/

    assets/

        textures/

        models/

Keep components focused on a single responsibility.

Prefer composition over large monolithic components.

---

# State Management

Use React hooks.

Prefer:

- useState
- useReducer
- useContext

Avoid adding external state libraries unless the project grows significantly.

---

# Routing

Use React Router if multiple pages are required.

Navigation should be driven primarily through the interactive Rubik's Cube.

---

# Code Style

Use:

- Functional components
- Arrow functions
- Named exports whenever practical

Prefer:

- small reusable components
- descriptive variable names
- early returns
- clean separation of concerns

Avoid deeply nested logic.

---

# TypeScript

Always use proper TypeScript types.

Avoid:

- any

Prefer:

- interfaces
- type aliases
- generics when appropriate

---

# Performance

Optimize rendering where appropriate.

Prefer:

- lazy loading
- React.memo when beneficial
- useMemo/useCallback only when there is measurable benefit

Do not prematurely optimize.

---

# Responsive Design

The website must work well on:

- desktop
- tablet
- mobile

Build mobile responsiveness using Tailwind responsive utilities.

---

# Accessibility

Generate accessible React components.

Include:

- semantic HTML
- keyboard accessibility
- aria labels when appropriate
- sufficient color contrast

---

# Docker

This project is containerized.

Assume Docker is used for both development and production.

Production containers should serve the built Vite application using Nginx.

Do not introduce backend services unless explicitly requested.

---

# Backend

This project is frontend-only.

Do not:

- create APIs
- create databases
- create authentication
- introduce Express
- introduce Node backend code

Unless explicitly instructed by the user.

---

# Dependencies

Prefer lightweight, actively maintained libraries.

Do not introduce new dependencies unless they provide significant value.

---

# Goal

When generating code, prioritize:

1. Clean architecture
2. Reusable components
3. Type safety
4. Excellent developer experience
5. Smooth user interactions
6. Interactive 3D experiences
7. Maintainable code