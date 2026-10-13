export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  status?: 'completo' | 'en-progreso';
  href?: string; // página interna del proyecto
  repoUrl?: string; // repositorio en GitHub
  demoUrl?: string; // sitio en vivo
};

export const projects: Project[] = [
  {
    slug: 'colchagua',
    title: 'Vulnerabilidad territorial en Colchagua',
    summary:
      'Análisis de datos para identificar qué amenazas y qué comunas o PYMEs de Colchagua son más vulnerables. Incluye ETL, un dashboard en Power BI y las conclusiones del análisis.',
    tags: ['Python', 'SQL', 'ETL', 'Power BI'],
    featured: true,
    status: 'en-progreso', // cámbialo a 'completo' cuando termines
    href: '/proyectos/colchagua',
  },
  {
    slug: 'portafolio',
    title: 'Portafolio profesional web',
    summary:
      'Este mismo sitio: construido con Astro y Tailwind CSS, con despliegue continuo en Netlify, integración continua en GitHub Actions, modo oscuro y formulario de contacto.',
    tags: ['Astro', 'Tailwind CSS', 'Netlify', 'GitHub Actions'],
    demoUrl: 'https://jovendev.netlify.app',
    // repoUrl: 'https://github.com/JovenGit/portafolio-bi', // descomenta con el nombre real
  },
  // Agrega aquí tus otros proyectos, uno por objeto.
];