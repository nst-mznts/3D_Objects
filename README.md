# 🌌 3D Objects Visualizer

## Description

This is a Three.js-based web application for visualizing interactive 3D objects in a retro wave-styled scene. It features a starry sky with round, static stars, a neon-gradient 3D mesh (e.g., torus knot, sphere, cube), and a control panel for customizing the scene. Users can switch shapes, change color presets, adjust scale, and toggle visibility, all rendered in a WebGL canvas with a synthwave aesthetic.

## Screenshot

![project image large screen](https://github.com/nst-mznts/3D_Objects/blob/main/public/3D_Objects.png)

## Tech Stack
![Three.js](https://img.shields.io/badge/threejs-%23000000.svg?style=for-the-badge&logo=three.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

## Features

- **Interactive 3D Scene**: Renders a starry sky with round, static stars and a neon-gradient 3D mesh using Three.js.
- **Control Panel**: Allows users to:
  - Switch between shapes (Torus Knot, Sphere, Cube).
  - Select color presets (Pink-Cyan, Purple-Blue, Green-Magenta).
  - Adjust the mesh scale with a slider.
  - Toggle mesh visibility.
- **Mouse Interaction**: Rotate the 3D mesh by moving the mouse.
- **Orbit Controls**: Navigate the scene by orbiting, zooming, and panning the camera.
- **Fullscreen Support**: Toggle fullscreen mode with a double-click.
- **Responsive Design**: The control panel and canvas adapt to different screen sizes.
- **Code Quality**: Linting with ESLint and formatting with Prettier ensure clean, consistent code.

## Requirements

Before you can run the project, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (Recommended version: v14 or higher)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

## Installation

To set up and run the project, follow these steps:

**1. Clone the Repository**

Clone the project code and install its dependencies:

```bash
git clone https://github.com/nst-mznts/3D_Objects.git
cd 3D_Objects
npm install
```

**2. Run the Development Server**

Start the Vite development server:

```bash
npm run dev
```

A link will appear in the console, e.g., `http://localhost:5173/`. Open it in your browser to view the 3D visualizer.

**3. Build for Production (Optional)**

To create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

**4. Linting and Formatting**

To lint and fix JavaScript files:

```bash
npm run lint
```

To format JavaScript, CSS, and HTML files:

```bash
npm run format
```