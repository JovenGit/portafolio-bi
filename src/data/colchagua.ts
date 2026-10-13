export type CaseSectionId = 'dashboard' | 'hallazgos' | 'notebooks';

export type CaseSection = {
  id: CaseSectionId;
  title: string;
  description: string;
  href: string;
  ready: boolean; // false = "En construcción" y sin enlace
};

export type StoryStep = {
  id: string;
  title: string;
  text: string;
  pending?: boolean;
};

export const caseInfo = {
  title: 'Vulnerabilidad territorial en Colchagua',
  subtitle:
    'Qué amenazas y qué comunas o PYMEs son más vulnerables, y cómo lo analicé de principio a fin.',
  tags: ['Python', 'SQL', 'ETL', 'Power BI'],
  repoUrl: '', // URL del repositorio de los notebooks, cuando esté
};

// Pasa `ready` a true cuando el contenido real de cada sección esté listo.
export const sections: CaseSection[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'El informe interactivo de Power BI para explorar los datos por comuna y amenaza.',
    href: '/proyectos/colchagua/dashboard',
    ready: false,
  },
  {
    id: 'hallazgos',
    title: 'Hallazgos',
    description: 'Las conclusiones del análisis, con su evidencia y sus límites.',
    href: '/proyectos/colchagua/hallazgos',
    ready: false,
  },
  {
    id: 'notebooks',
    title: 'Notebooks',
    description: 'El paso a paso técnico del análisis, publicado en GitHub.',
    href: '/proyectos/colchagua/notebooks',
    ready: false,
  },
];

// B2: el caso explicado para alguien no técnico. Reemplaza cada texto por el real.
export const story: StoryStep[] = [
  {
    id: 'problema',
    title: 'El problema',
    text: 'Qué se quería responder sobre Colchagua y por qué importa.',
    pending: true,
  },
  {
    id: 'datos',
    title: 'Los datos',
    text: 'Qué fuentes reales se usaron, de qué período y con qué cobertura.',
    pending: true,
  },
  {
    id: 'enfoque',
    title: 'El enfoque',
    text: 'Qué hice: limpieza y carga de datos, modelo de datos, medidas y proyecciones.',
    pending: true,
  },
  {
    id: 'resultado',
    title: 'El resultado',
    text: 'Qué encontró el análisis, resumido en una o dos frases.',
    pending: true,
  },
  {
    id: 'valor',
    title: 'El valor',
    text: 'Qué puede hacer con esta información alguien que toma decisiones.',
    pending: true,
  },
];
