export type Notebook = {
  id: string;
  title: string;
  stage: string;
  description: string;
  tools: string[];
  // URL del notebook en GitHub, por ejemplo:
  // https://github.com/JovenGit/portafolio-bi/blob/main/notebooks/01_etl.ipynb
  // Si está vacía, la tarjeta muestra "Enlace por completar".
  url?: string;
};

export const notebooksIntro =
  'Los notebooks documentan el proceso de análisis paso a paso. GitHub los muestra directamente en el navegador, sin instalar nada.';

// URL del repositorio donde están los notebooks (opcional).
export const notebooksRepoUrl = '';

// Reemplaza este relleno por tus notebooks reales, uno por objeto.
export const notebooks: Notebook[] = [
  {
    id: 'notebook-1',
    title: '[Título del notebook por completar]',
    stage: 'ETL',
    description: 'Qué hace este notebook: de dónde salen los datos y qué transformaciones aplica.',
    tools: ['Python', 'pandas'],
  },
  {
    id: 'notebook-2',
    title: '[Título del notebook por completar]',
    stage: 'Análisis',
    description: 'Qué pregunta responde este notebook y qué técnica usa.',
    tools: ['Python'],
  },
];