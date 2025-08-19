# Fukuoka School Council Website

A modern, multilingual website built with Astro for the Fukuoka School Council (福岡生徒会連盟), featuring a clean design and internationalization support.

## 🚀 About the Project

The Fukuoka School Council is dedicated to "Connecting people and student councils across Fukuoka." This website serves as the official platform for the organization, providing information about their mission, leadership team, organizational structure, and latest news.

### Key Features
- 🌐 **Multilingual Support**: English and Japanese localization
- 🎨 **Modern Design**: Clean, responsive interface with custom styling
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Astro for optimal loading speeds
- ♿ **Accessibility**: Accessible components and semantic HTML

## 🏗️ Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/           # Images and static assets
│   │   ├── fsc.jpg
│   │   └── organization.jpg
│   ├── components/       # Reusable UI components
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── Welcome.astro
│   ├── data/            # Static data files
│   │   ├── executives.json
│   │   └── news.json
│   ├── layouts/         # Page layout templates
│   │   └── Layout.astro
│   ├── locales/         # Internationalization files
│   │   ├── en.ts
│   │   └── ja.ts
│   ├── pages/           # Route components
│   │   ├── about.astro
│   │   ├── executives.astro
│   │   ├── index.astro
│   │   ├── news.astro
│   │   └── organization.astro
│   └── utils/           # Utility functions
│       └── i18n.ts
├── astro.config.mts     # Astro configuration
├── biome.json          # Biome linting configuration
├── package.json        # Project dependencies
└── tsconfig.json       # TypeScript configuration
```

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build) 5.13.2
- **Styling**: Custom CSS with CSS Variables
- **Internationalization**: Custom i18n implementation
- **Linting**: [Biome](https://biomejs.dev) 2.1.3
- **Package Manager**: Bun
- **Language**: TypeScript

## 📦 Installation & Setup

1. **Install dependencies**:
   ```bash
   bun i
   ```

2. **Start development server**:
   ```bash
   bun run dev
   ```

3. **Build for production**:
   ```bash
   bun run build
   ```

4. **Preview production build**:
   ```bash
   bun run preview
   ```

## 🧞 Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun i`                   | Install dependencies                             |
| `bun run dev`             | Start local dev server at `localhost:4321`       |
| `bun run build`           | Build production site to `./dist/`               |
| `bun run preview`         | Preview production build locally                 |
| `bun run check`           | Run Biome linting and formatting                 |
| `bun run astro ...`       | Run Astro CLI commands                           |


## 🌐 Pages Overview

- **Home** (`/`): Welcome page with organization introduction
- **About** (`/about`): Detailed information about FSC's mission and purpose
- **Executives** (`/executives`): Leadership team profiles and information
- **Organization** (`/organization`): Organizational structure and roles
- **News** (`/news`): Latest updates and announcements

## 🎨 Design System

The website uses a custom design system with:
- **Primary Color**: #0067B2 (Blue)
- **Secondary Color**: #FF5B4F (Coral)
- **Typography**: Inter, Roboto, and system font stack
- **Spacing**: Consistent 8px grid system
- **Responsive Breakpoints**: Mobile-first approach

## 📊 Internationalization

The website supports both English and Japanese languages through a custom i18n implementation. Language detection is automatic based on browser preferences.

### Adding New Translations
1. Update the locale files in `src/locales/`
2. Use the `t()` utility function in components:
   ```typescript
   import t from "@/utils/i18n"
   const text = t("page.key", locale)
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git switch -c feature/amazing-feature`
3. Commit changes: `git commit -m 'feat/fix: Add amazing feature'`
4. Push to branch: `git push`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Instagram**: [@fukuokaseitokai](https://www.instagram.com/fukuokaseitokai)
- **Dev**: [@weird0.oz](https://instagram.com/weird0.oz) or [7h3w3irdo0z@proton.me](mailto:7h3w3irdo0z@proton.me)


## 🙏 Acknowledgments

Supported by the **NPO Student Council Activities Promotion Association** (特定非営利活動法人 生徒会活動振興協会), one of Japan's largest comprehensive student council support organizations.

---

Built with ❤️ for the Fukuoka student community.
