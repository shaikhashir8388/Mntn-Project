# MNTN - Hiking Guide Website

A modern, responsive hiking guide website built with **React**, **Vite**, and **Tailwind CSS**. This project showcases a beautiful mountain hiking interface with clean design, reusable components, and smooth user experience.


---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

---

## 🛠️ Tech Stack

- **⚡ Vite** – Lightning-fast build tool and dev server
- **⚛️ React 18** – Modern component-based UI library
- **🎨 Tailwind CSS** – Utility-first CSS framework
- **📝 TypeScript** – Type-safe JavaScript
- **🎭 Lucide React** – Beautiful, customizable icons
- **🔤 Inter Font** – Clean, modern typography
- **📱 Responsive Design** – Mobile-first approach

---

## ✨ Features

- 🎨 **Modern Design** – Clean, professional hiking-themed interface
- 📱 **Fully Responsive** – Optimized for desktop, tablet, and mobile
- 🧩 **Component Architecture** – Reusable, maintainable React components
- ♿ **Accessibility** – Semantic HTML and ARIA best practices
- 🌊 **Smooth Animations** – Subtle transitions and hover effects
- 🎯 **TypeScript Support** – Full type safety and IntelliSense
- ⚡ **Performance Optimized** – Fast loading and smooth interactions
- 🎨 **Custom Design System** – Consistent spacing, colors, and typography

---

## 📂 Project Structure

```
project/
├── 📁 public/                    # Static assets
│   ├── FK.png                   # Hero images
│   ├── hg.png
│   ├── MG.png
│   ├── RK.png
│   ├── SG.png
│   └── VG.png
├── 📁 src/                      # Source code
│   ├── 📁 components/           # Reusable components
│   │   ├── 📁 layout/           # Layout components
│   │   │   ├── Footer.tsx       # Site footer
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── Navigation.tsx   # Main navigation
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── SocialSidebar.tsx
│   │   ├── 📁 sections/         # Page sections
│   │   │   └── ArticleSection.tsx
│   │   └── 📁 ui/               # Base UI components
│   │       ├── Button.tsx       # Custom button component
│   │       ├── Container.tsx    # Layout container
│   │       └── Section.tsx      # Section wrapper
│   ├── 📁 lib/                  # Utilities
│   │   └── utils.ts             # Helper functions
│   ├── 📁 screens/              # Page components
│   │   └── 📁 Mntn/             # Main application
│   │       ├── Mntn.tsx         # Main app component
│   │       └── 📁 sections/     # Page-specific sections
│   │           ├── 📁 HeroSection/
│   │           │   └── HeroSection.tsx
│   │           └── 📁 MainContentSection/
│   │               └── MainContentSection.tsx
│   ├── 📁 styles/               # Global styles
│   │   ├── fonts.css            # Font imports
│   │   └── globals.css          # Global CSS variables
│   └── index.tsx                # Application entry point
├── 📁 dist/                     # Build output (generated)
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

---

## 🎨 Design System

### Colors
- **Background**: Custom dark theme with CSS variables
- **Text**: White and muted variants
- **Accent**: Custom app accent color
- **UI Components**: Shadcn-inspired color palette

### Typography
- **Primary**: Inter (400, 500, 600, 700, 800)
- **Display**: Playfair Display (serif)
- **Responsive**: Fluid typography scales

### Components
- **Button**: Customizable with variants and sizes
- **Container**: Responsive layout wrapper
- **Section**: Consistent spacing and layout

---

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px     /* Small tablets */
md: 768px     /* Tablets */
lg: 1024px    /* Small laptops */
xl: 1280px    # Large laptops
2xl: 1400px   # Desktop
```

---

## 🔧 Configuration

### Environment Setup
The project uses modern tooling with sensible defaults:

- **Vite**: Fast HMR and optimized builds
- **TypeScript**: Strict mode enabled
- **Tailwind**: Custom design system
- **ESLint**: Code quality and consistency

### Customization
- **Colors**: Edit `tailwind.config.js` and `src/styles/globals.css`
- **Fonts**: Modify font imports in `src/index.tsx`
- **Components**: Extend base components in `src/components/ui/`

---

## 📦 Dependencies

### Production
- `react` & `react-dom` - UI library
- `react-router-dom` - Client-side routing
- `lucide-react` - Icon library
- `clsx` & `tailwind-merge` - Utility functions
- `@fontsource/inter` - Typography

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React support
- `tailwindcss` - CSS framework
- `typescript` - Type checking
- `@types/react` - Type definitions

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**M Ashir**
- GitHub: [shaikhashir8388](https://github.com/shaikhashir8388)
- Email: shaikhashir871@gmail.com

---