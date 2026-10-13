export type SkillCategory = 'Lenguajes' | 'Datos' | 'Visualización' | 'Web y despliegue';
export type Skill = { name: string; category: SkillCategory };

// Solo competencias que realmente dominas y puedes explicar en la defensa.
// Si en el Trabajo Integrador usaste DAX, modelado (datamart) o ML/Forecast,
// agrégalas aquí, una línea cada una.
export const skills: Skill[] = [
  { name: 'Python', category: 'Lenguajes' },
  { name: 'SQL', category: 'Lenguajes' },
  { name: 'ETL', category: 'Datos' },
  { name: 'Power BI', category: 'Visualización' },
  // Stack real de este portafolio
  { name: 'Astro', category: 'Web y despliegue' },
  { name: 'Tailwind CSS', category: 'Web y despliegue' },
  { name: 'Git y GitHub', category: 'Web y despliegue' },
  { name: 'Netlify (CI/CD)', category: 'Web y despliegue' },
];
