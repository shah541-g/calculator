# Icode Guru Assignment 3: Calculator Building via Prompt Engineering

This repository contains the solution to Assignment 3 from Icode Guru, where the task was to build a calculator application using prompt engineering with React, TypeScript, and Tailwind CSS. The project demonstrates a functional calculator with an animated background grid, deployed live on GitHub Pages.

## Table of Contents
- [Features](#features)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Calculator Functionality**: Basic arithmetic operations (addition, subtraction, multiplication, division) with a clear, delete, and decimal point support.
- **Animated Background**: A dynamic grid of squares with customizable direction, speed, and colors, created using the HTML5 Canvas API.
- **Responsive Design**: Fully responsive layout that adapts to mobile and desktop screens using Tailwind CSS.
- **Gradient Heading**: A branded heading with a brown-to-white gradient reflecting the Icode Guru theme.
- **Accessibility**: Keyboard navigation and screen reader support for the calculator buttons.

## Live Demo
Check out the live version of the calculator here: [https://shah541-g.github.io/calculator/](https://shah541-g.github.io/calculator/)

## Installation
To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shah541-g/calculator.git
   cd calculator
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Usage
- Use the calculator buttons to perform arithmetic operations.
- Hover over the background grid to highlight squares (interactive on desktop).
- The gradient heading displays the assignment title: "Icode Guru Assignment 3: Calculator building via Prompt Engineering".

## Technologies Used
- **React**: For building the user interface.
- **TypeScript**: For type safety and better code maintainability.
- **Tailwind CSS**: For styling and responsive design.
- **Vite**: As the build tool for fast development and production builds.
- **HTML5 Canvas**: For the animated background grid.
- **GitHub Pages**: For hosting the live demo.

## Project Structure
```
calculator/
  ├── public/           # Static files (e.g., index.html, 404.html)
  ├── src/             # Source code
  │   ├── components/  # Reusable React components (e.g., Calculator, Squares)
  │   ├── App.tsx      # Main app component
  │   ├── index.css    # Tailwind CSS imports
  │   └── index.tsx    # Entry point
  ├── vite.config.ts   # Vite configuration
  ├── tsconfig.json    # TypeScript configuration
  ├── package.json     # Project dependencies and scripts
  └── README.md        # This file
```

## Deployment
The project is deployed to GitHub Pages using the following steps:
1. Build the project: `npm run build`
2. Deploy to the `gh-pages` branch: `npm run deploy`
3. Configure GitHub Pages to serve from the `gh-pages` branch in repository settings.

The base path `/calculator/` is set in `vite.config.ts` to match the GitHub Pages subdirectory.

## Contributing
This project was completed as an assignment and is not open for contributions. However, feel free to fork it and use it as a learning resource.

## License
This project is for educational purposes only and does not have an official license. All rights are reserved by the author (shah541-g) for Icode Guru Assignment 3.