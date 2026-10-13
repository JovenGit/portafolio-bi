# Portafolio BI · Alejandro Tapia

[![CI](https://github.com/JovenGit/portafolio-bi/actions/workflows/ci.yml/badge.svg)](https://github.com/JovenGit/portafolio-bi/actions/workflows/ci.yml)

🔗 **Sitio en producción:** https://Jovendev.netlify.app

## Qué incluye

- **Inicio:** Perfil profesional, competencias y stack.
- **Proyectos:** Proyectos realizados.
- **Colchagua:** Síntesis del caso Colchagua.
- **Dashboard:** Informe de Power BI incrustado.
- **Hallazgos:** Conclusiones sobre vulnerabilidad territorial, con su evidencia y sus límites.
- **Notebooks:** enlaces a los notebooks del análisis en GitHub.
- **Contacto:** Formulario funcional con animaciones (Netlify Forms).

## Stack y por qué

| Tecnología | Motivo |
|---|---|
| [Astro](https://astro.build) + TypeScript | Sitio de contenido rapido y con buena construccion. |
| Tailwind CSS | Diseño consistente y responsivo, con tokens de diseño y modo oscuro. |
| React (islas) | Solo para componentes interactivos que lo necesiten. |
| Netlify | Despliegue continuo desde GitHub, previews por pull request y formularios. |
| ESLint, Prettier, `astro check` | Calidad de código, formato y tipos. |
| GitHub Actions | CI: valida cada push y pull request. |

## Cómo correrlo

Requisitos: Node.js 22 o superior y Git.

```bash
git clone https://github.com/JovenGit/portafolio-bi.git
cd portafolio-bi
npm install
npm run dev       # http://localhost:4321
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve el build localmente |
| `npm run lint` | Revisa el código con ESLint |
| `npm run format` | Da formato con Prettier |
| `npm run check` | Valida tipos con `astro check` |

> En desarrollo el formulario de contacto simula el envío. Netlify Forms solo funciona en el sitio desplegado.

## Estructura

```
src/
├─ layouts/       BaseLayout (SEO, header, footer)
├─ pages/         una página por ruta
├─ components/
│  ├─ layout/     Header, Footer, ThemeToggle
│  ├─ ui/         Button, Card, Badge, Container, SectionHeading
│  ├─ sections/   Hero, SkillsGrid, FindingCard, ContactForm, ...
│  └─ powerbi/    PowerBIEmbed
├─ data/          contenido separado de la interfaz (perfil, hallazgos, notebooks)
└─ styles/        tokens de diseño y modo oscuro
```

## Despliegue

1. Un push a `main` dispara el build en Netlify (`npm run build`, publica `dist/`).
2. Cada pull request genera un **Deploy Preview**.
3. La configuración está versionada en `netlify.toml`.
4. GitHub Actions ejecuta lint, formato, tipos y build en cada push y pull request.

Flujo de trabajo: una rama por funcionalidad (`feat/...`, `fix/...`, `docs/...`),
pull request, revisión del preview y merge. Commits siguiendo Conventional Commits.

## Accesibilidad y rendimiento

- Navegación por teclado, enlace de salto, foco visible y estructura semántica.
- Contraste revisado en modo claro y oscuro; respeta `prefers-reduced-motion`.
- Lighthouse (móvil, producción): Performance [__], Accessibility [__], Best Practices [__], SEO [__].

## Declaración de uso de IA

Usé un asistente de IA (Claude, de Anthropic) como apoyo para [planificar
la arquitectura, generar borradores de código y resolver errores de configuración].
Revisé, probé, tuve errores y adapté el resultado, y puedo
explicar el código y las decisiones técnicas del proyecto.

## Autor

**Alejandro Tapia** · Ingeniería en Programación, AIEP
[GitHub](https://github.com/JovenGit) · Alejandro_tapia13@hotmail.com