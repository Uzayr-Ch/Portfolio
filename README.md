# Modern Developer Portfolio

A scalable, modular, and privacy-focused developer portfolio built with Vanilla JS, Native Web Components, and Vite. This project extracts the resume data directly into a JSON structure, parses it, and dynamically renders it using reusable custom elements.

## 1. Project Overview & Deliverables

This project satisfies the following requirements:

1. **Full Project Code**: Provided in this repository.
2. **Folder Structure**: Clean, modular setup isolating components, data, and global styles.
3. **Tech Stack Explanation**: See below.
4. **Setup Instructions**: Easily run locally with standard npm commands.
5. **Deployment Instructions**: Ready for static site hosts like Vercel, Netlify, or GitHub Pages.

## 2. Folder Structure

```text
portfolio/
├── index.html                 # Entry HTML file with SEO and Accessibility metadata
├── package.json               # Project metadata and npm scripts
├── vite.config.js             # Vite bundler configuration
└── src/
    ├── main.js                # App bootstrap and layout assembly
    ├── data/
    │   └── resumeData.js      # Structured JSON-like data extracted directly from the CV
    ├── components/
    │   ├── BaseComponent.js   # Wrapper for shadow DOM boilerplate
    │   ├── HeaderInfo.js      # Custom element for personal & contact info
    │   ├── SectionHeader.js   # Reusable section title component
    │   ├── ProjectCard.js     # Component for project details and lists
    │   └── SkillTags.js       # Component rendering categorized skills
    └── styles/
        ├── variables.css      # CSS variables (colors, fonts, spacing, dark mode)
        └── main.css           # Global resets and structural styles
```

## 3. Tech Stack Explanation

- **Vanilla JavaScript & Native Web Components**: Chosen to provide a "clean component system" without heavily relying on external dependencies or heavy frameworks like React or Angular. This ensures maximum privacy, fast parsing times, and native browser performance.
- **Vite**: The build tool of choice. It provides an ultra-fast local development server and optimized, minified production builds. Since the application ships mostly standard HTML/JS/CSS, Vite makes chunking and asset delivery highly performant.
- **Vanilla CSS (with CSS Variables)**: Ensures the styling is modular and maintainable without tying the project to frameworks like Tailwind or Bootstrap. It fully supports Dark Mode integration natively.

## 4. Setup Instructions

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, then run the following commands in your terminal:

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. Open the provided `localhost` URL (usually `http://localhost:5173`) in your browser.

## 5. Deployment Instructions

The project is optimized for fast loading and can be deployed easily as a static site.

**To create a production build:**

```bash
npm run build
```

This will generate an optimized `dist/` folder. You can test it locally via `npm run preview`.

**Deployment Options:**

- **Vercel / Netlify**: Connect your GitHub repository and set the build command to `npm run build` and the output directory to `dist`. It will automatically deploy and host effortlessly.
- **GitHub Pages**: You can upload the generated `dist/` folder directly to a `gh-pages` branch, or use GitHub Actions to run the build step and deploy automatically.

## Highlights

- **SEO Ready**: Proper schema and meta tags (`og:title`, `description`) are integrated.
- **Accessibility**: Uses semantic HTML5 elements (`<article>`, `<header>`, `<main>`, `<section>`).
- **Responsive**: Fully adjusts layout for mobile, tablet, and desktop viewports, prioritizing readable typography.
- **Print Styles**: Included standard print media queries so exporting the website to PDF looks identical to a standard resume.
