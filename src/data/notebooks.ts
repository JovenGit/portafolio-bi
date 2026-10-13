export type Notebook = {
  id: string;
  title: string;
  stage: string;
  description: string;
  tools: string[];
  url?: string;
};

export const notebooksIntro =
  'Proceso documentando por los notebooks que creé para el proyecto de Colchagua, con ETL y visualización en Power BI.';

// URL del repositorio donde están los notebooks (opcional).
export const notebooksRepoUrl = 'https://github.com/JovenGit/portafolio-bi/blob/main/Graficos.ipynb';

// Reemplaza este relleno por tus notebooks reales, uno por objeto.
export const notebooks: Notebook[] = [
{
    id: 'notebook-1',
    title: 'Gráficos y Visualización', 
    stage: 'Visualización de Datos',
    description: 'Generación de gráficos y análisis exploratorio para el proyecto de Colchagua.', 
    tools: ['Python', 'pandas', 'matplotlib'], 
    url: 'https://github.com/JovenGit/portafolio-bi/blob/main/Graficos.ipynb'
  },
];
