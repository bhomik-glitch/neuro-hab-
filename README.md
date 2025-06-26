# NeuroHAD

A modern, multilingual web application for neurology clinics, built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡️ Fast and modern React app powered by Vite
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🌐 Internationalization (i18n) with i18next (English & Hindi supported)
- 🧑‍🤝‍🧑 Team showcase, product, and service sections
- 📦 Modular, maintainable codebase

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS, PostCSS
- **Icons:** Lucide React
- **Internationalization:** i18next
- **Linting:** ESLint

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/neurohad.git
   cd neurohad/web/project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
web/project/
  ├── src/
  │   ├── assets/         # Images and static assets
  │   ├── components/     # React components
  │   ├── locales/        # i18n translation files
  │   ├── pages/          # (For future expansion)
  │   ├── i18n.ts         # i18next configuration
  │   └── main.tsx        # App entry point
  ├── index.html
  ├── tailwind.config.js
  ├── postcss.config.js
  ├── vite.config.ts
  └── package.json
```

## Localization

- English: `src/locales/en/translation.json`
- Hindi: `src/locales/hi/translation.json`

