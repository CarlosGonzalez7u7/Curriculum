# Mi Curriculum - Portafolio Web

Un portafolio web moderno creado con **React**, **TypeScript**, **Vite** y **Tailwind CSS**.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🎨 Animaciones con Framer Motion
- 📱 Compatible con dispositivos móviles
- 🚀 Rendimiento optimizado con Vite
- 📦 Componentes reutilizables
- 🎯 Secciones de proyectos (Web, Móvil, Robótica)
- 🏆 Certificaciones y competencias
- 📊 Stack de tecnologías destacadas

## 🛠️ Tecnologías

- **React 19**: Librería UI
- **TypeScript**: Type-safe JavaScript
- **Vite 7**: Build tool rápido
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animaciones declarativas
- **React Icons**: Iconos populares

## 📋 Instalación

\`\`\`bash

# Instalar dependencias

npm install

# Iniciar servidor de desarrollo

npm run dev

# Compilar para producción

npm run build

# Validar código con ESLint

npm run lint
\`\`\`

## 📁 Estructura del Proyecto

\`\`\`
src/
├── components/ # Componentes React
│ ├── WebProjects.tsx
│ ├── MobileProjects.tsx
│ ├── Robotics.tsx
│ ├── Certifications.tsx
│ ├── Hero.tsx
│ └── ...
├── utils/ # Funciones utilitarias
└── App.tsx

public/ # Archivos estáticos e imágenes
├── school-management-system.jpg
├── fitness-app-interface.jpg
└── ...
\`\`\`

## 🖼️ Gestión de Imágenes

Las imágenes se encuentran en la carpeta \`/public\` y se cargan usando rutas absolutas con soporte automático para diferentes entornos:

- **Desarrollo**: \`/image.jpg\`
- **Producción (GitHub Pages)**: \`/Curriculum/image.jpg\`

El \`import.meta.env.BASE_URL\` se utiliza automáticamente para construir las rutas correctas según el entorno.

## 🚀 Despliegue

El proyecto está configurado para desplegarse en GitHub Pages:

\`\`\`bash
npm run deploy
\`\`\`

> Nota: Asegúrate de que el repositorio sea público y que hayas configurado GitHub Pages en los ajustes del repositorio.

## 📝 Configuración ESLint

El proyecto incluye reglas de ESLint estrictas:

- ✅ TypeScript strict mode
- ✅ React Hooks rules
- ✅ React Refresh optimization
- ⚙️ Reglas personalizadas para permitir variables con prefijo \`\_\`

## 🔧 Scripts Disponibles

- \`npm run dev\` - Iniciar servidor de desarrollo
- \`npm run build\` - Compilar para producción
- \`npm run lint\` - Validar código
- \`npm run preview\` - Ver build de producción localmente
- \`npm run deploy\` - Desplegar a GitHub Pages

---

Hecho con ❤️ por Carlos González

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
