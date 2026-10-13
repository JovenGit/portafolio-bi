export type FindingKind = 'amenaza' | 'comuna' | 'pyme';
export type Relation = 'descriptivo' | 'asociacion' | 'proyeccion';

export type Evidence = { label: string; value: string; source: string };

export type Finding = {
  id: string;
  kind: FindingKind;
  title: string;
  summary: string;
  evidence: Evidence[];
  relation: Relation;
  caveat: string;
  recommendation: string;
  pending?: boolean; // true = contenido de relleno
};

export type Kpi = { label: string; value: string; note?: string; pending?: boolean };
export type RankingItem = { name: string; value: number | null; unit?: string };

export const kindLabels: Record<FindingKind, string> = {
  amenaza: 'Amenaza',
  comuna: 'Comuna',
  pyme: 'PYME',
};

// El tipo de evidencia es lo que hace "honesto" cada hallazgo
export const relationLabels: Record<Relation, string> = {
  descriptivo: 'Dato descriptivo',
  asociacion: 'Asociación observada (no implica causalidad)',
  proyeccion: 'Proyección del modelo (Forecast)',
};

export const headline = {
  text: 'Aquí va la conclusión principal del análisis, en una o dos frases claras.',
  pending: true,
};

export const kpis: Kpi[] = [
  { label: 'Indicador 1', value: '—', note: 'Por completar', pending: true },
  { label: 'Indicador 2', value: '—', note: 'Por completar', pending: true },
  { label: 'Indicador 3', value: '—', note: 'Por completar', pending: true },
];

export const ranking = {
  title: 'Comunas según nivel de vulnerabilidad',
  description: 'Descripción de cómo se construyó el índice y qué significa un valor alto.',
  pending: true,
  items: [
    { name: 'Comuna A', value: null },
    { name: 'Comuna B', value: null },
    { name: 'Comuna C', value: null },
  ] as RankingItem[],
};

export const limitations: string[] = [
  'Lista aquí lo que el análisis NO permite afirmar (por ejemplo, relaciones de causa y efecto).',
  'Indica las limitaciones de los datos: cobertura, período, calidad o sesgos conocidos.',
  'Aclara qué suposiciones usa el modelo de Forecast y hasta dónde es confiable.',
];

export const findings: Finding[] = [
  {
    id: 'hallazgo-amenaza',
    kind: 'amenaza',
    title: '[Amenaza más relevante por completar]',
    summary: 'Qué amenaza resultó más relevante y por qué importa.',
    evidence: [{ label: 'Cifra clave', value: '—', source: 'Fuente por completar' }],
    relation: 'descriptivo',
    caveat: 'Limitación específica de este hallazgo.',
    recommendation: 'Qué debería hacer un decisor con esta información.',
    pending: true,
  },
  {
    id: 'hallazgo-comuna',
    kind: 'comuna',
    title: '[Comuna más vulnerable por completar]',
    summary: 'Qué comuna destaca y qué factores la distinguen.',
    evidence: [{ label: 'Cifra clave', value: '—', source: 'Fuente por completar' }],
    relation: 'asociacion',
    caveat: 'Limitación específica de este hallazgo.',
    recommendation: 'Qué debería hacer un decisor con esta información.',
    pending: true,
  },
  {
    id: 'hallazgo-pyme',
    kind: 'pyme',
    title: '[Perfil de PYME más expuesta por completar]',
    summary: 'Qué tipo de PYME enfrenta mayor riesgo.',
    evidence: [{ label: 'Cifra clave', value: '—', source: 'Fuente por completar' }],
    relation: 'proyeccion',
    caveat: 'Limitación específica de este hallazgo.',
    recommendation: 'Qué debería hacer un decisor con esta información.',
    pending: true,
  },
];