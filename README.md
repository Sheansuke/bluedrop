# BlueDrop - Pool & Home Services Portfolio

A modern, responsive website showcasing BlueDrop's pool and home improvement services. Built with Astro and Tailwind CSS for optimal performance and user experience.

## 🌊 About

BlueDrop specializes in pool and home improvement services, offering comprehensive solutions including installation, maintenance, remodeling, and equipment sales. This website serves as their digital portfolio and service catalog.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v5.13.9
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.13 (with Vite plugin)
- **Icons**: [@lucide/astro](https://lucide.dev) v0.544.0
- **Language**: TypeScript
- **Utilities**: clsx for conditional class management

## 📁 Project Structure

```
frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Images and SVG files
│   │   ├── secomoelagua.jpg
│   │   ├── pagina3.svg
│   │   ├── pagina4.svg
│   │   └── ... (pagina5-10.svg)
│   ├── components/
│   │   └── Menu/
│   │       ├── Menu.astro       # Main navigation menu
│   │       └── MenuItem.astro   # Individual menu items
│   ├── layouts/
│   │   └── Layout.astro         # Base layout with smooth scroll
│   ├── pages/
│   │   └── index.astro          # Homepage
│   └── styles/
│       └── global.css           # Global styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🎨 Services Featured

The website showcases 6 core services:

1. **Instalación** (Installation) - Professional installation services
2. **Venta de Accesorios / Equipo** (Equipment Sales) - Pool accessories and equipment
3. **Remodelado de Espacios** (Space Remodeling) - Complete space renovations
4. **Mantenimiento en General** (General Maintenance) - Ongoing maintenance services
5. **Minerales y Suministros** (Minerals & Supplies) - Pool chemicals and supplies
6. **Servicios de Piscinas y Jacuzzis** (Pool & Jacuzzi Services) - Specialized pool services

## 🛠️ Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Smooth Scrolling**: Custom smooth scroll implementation for anchor navigation
- **Optimized Images**: Uses Astro's built-in image optimization
- **SVG Graphics**: Crisp, scalable service illustrations
- **Modern UI**: Clean, professional design with brand colors (#008cc7, #231f20)
- **Performance**: Static site generation for lightning-fast load times

## 🎨 Design System

### Colors
- **Primary Blue**: `#008cc7`
- **Primary Black**: `#231f20`
- **Background**: White

### Responsive Breakpoints
- Mobile: Default (< 768px)
- Desktop: `md:` breakpoint (≥ 768px)

## 🚀 Getting Started

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start development server**
   ```sh
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📦 Build for Production

```sh
npm run build
```

The built files will be in the `./dist/` directory, ready for deployment.

## 🔧 Configuration

- **Astro Config**: [`astro.config.mjs`](astro.config.mjs) - Includes CSP experimental features and Tailwind Vite plugin
- **TypeScript**: [`tsconfig.json`](tsconfig.json) - Extends Astro's strict configuration
- **Tailwind**: Configured via Vite plugin in Astro config

## 📱 Browser Support

Modern browsers with CSS Grid, Flexbox, and ES6+ support.

## 📄 License

© BlueDrop - All rights reserved

## 👥 Client

**BlueDrop** - Professional Pool & Home Improvement Services

---

Built with ❤️ using [Astro](https://astro.build)