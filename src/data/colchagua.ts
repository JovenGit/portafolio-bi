export type CaseSectionId = 'dashboard' | 'hallazgos' | 'notebooks';

export type CaseSection = {
  id: CaseSectionId;
  title: string;
  description: string;
  href: string;
  ready: boolean;
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
  repoUrl: 'https://github.com/JovenGit/portafolio-bi/blob/main/Graficos.ipynb',
};

export const sections: CaseSection[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'El informe interactivo de Power BI para explorar los datos por comuna y amenaza.',
    href: '#dashboard',
    ready: true,
  },
  {
    id: 'hallazgos',
    title: 'Hallazgos',
    description: 'Las conclusiones del análisis, con su evidencia y sus límites.',
    href: '#hallazgos',
    ready: true,
  },
  {
    id: 'notebooks',
    title: 'Notebooks',
    description: 'El paso a paso técnico del análisis, publicado en GitHub.',
    href: '#notebooks',
    ready: true,
  },
];

// B2: el caso explicado para alguien no técnico. Reemplaza cada texto por el real.
export const story: StoryStep[] = [
  {
    id: 'problema',
    title: 'El problema',
    text: 'Las frecuentes lluvias e incendios en la región de Colchagua.',
    pending: false,
  },
  {
    id: 'datos',
    title: 'Los datos',
    text: 'Usamos fuentes como CONAF, INE y bases de datos sobre incendios.',
    pending: false,
  },
  {
    id: 'enfoque',
    title: 'El enfoque',
    text: 'Realizamos un datamart con ETL, un dashboard en Power BI, notebooks y un análisis de vulnerabilidad.',
    pending: false,
  },
  {
    id: 'resultado',
    title: 'El resultado',
    text: 'El gran aumento de precio de verduras, frutas y hortalizas y carne en la región de Colchagua despues de estos incidentes.',
    pending: false,
  },
  {
    id: 'valor',
    title: 'El valor',
    text: 'Permite ayudar a los decisores a priorizar recursos y tomar decisiones informadas de cuando comprar suministros',
    pending: false,
  },
];
