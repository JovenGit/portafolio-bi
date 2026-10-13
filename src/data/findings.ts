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
  pending?: boolean; 
};

export type Kpi = { label: string; value: string; note?: string; pending?: boolean };
export type RankingItem = { name: string; value: number | null; unit?: string };

export const kindLabels: Record<FindingKind, string> = {
  amenaza: 'Amenaza',
  comuna: 'Comuna',
  pyme: 'PYME',
};

export const relationLabels: Record<Relation, string> = {
  descriptivo: 'Dato descriptivo',
  asociacion: 'Asociación observada (no implica causalidad)',
  proyeccion: 'Proyección del modelo (Forecast)',
};

export const headline = {
  text: 'Frente a esto hemos concluido que las lluvias e incendios desde el año 2016 al 2023 han tenido un gran impacto en la región de Colchagua, afectando principalmente a las comunas y PYMEs más vulnerables.',
  pending: false,
};

export const kpis: Kpi[] = [
  { label: 'Hectáreas quemadas (2017)', value: '+50.000 ha', note: 'Devastación en Pumanque, Santa cruz y alrededores', pending: false },
  { label: 'Megasequia (2018)', value: '~30%', note: 'Impacto directo en cuenca del Rio Tinguiririca', pending: false },
  { label: 'Afectación agrícola por lluvias(2023)', value: 'Severos', note: 'Desborde de ríos en San Fernando y Placilla', pending: false },
];

export const limitations: string[] = [
  'Este analisis, aunque busca ayudar prevenir los efectos de los incendios y las lluvias, no se puede garantizar que los eventos futuros sean iguales a los pasados.',
  'El forecast realizado es una proyección basada en los datos históricos de pocos años, y no puede predecir eventos extremos o cambios abruptos en el clima, como ocurrio en 2019 con un aumento significativo del precio del caballar',
];

export const findings: Finding[] = [
  {
    id: 'hallazgo-amenaza',
    kind: 'amenaza',
    title: 'Lluvias intensas',
    summary: 'Gran temporal ocurrido en 2023',
    evidence: [{ label: 'Cifra clave', value: '317 milimetros en curico, cifra mayor en 74 años', source: 'https://www.terram.cl/chile-cierra-2023-con-mas-lluvias-de-los-normal-pero-megasequia-no-esta-superada-aun/' }],
    relation: 'descriptivo',
    caveat: 'No se puede saber con certeza que tan frecuente será la lluvia en el futuro, pero se puede estimar con modelos de Forecast.',
    recommendation: 'Prepararse con infraestructura de drenaje y implementos para cubrir la lluvia',
    pending: false,
  },
  {
    id: 'hallazgo-comuna',
    kind: 'comuna',
    title: 'Pumanque: Epicentro de la vulnerabilidad del territorio',
    summary: 'En enero de 2017, la comuna de Pumanque perdió más de la mitad de su superficie total a causa de la "Tormenta de Fuego"',
    evidence: [{ label: 'Superficie comunal quemada', value: '~60%', source: 'CONAF (2017)' }],
    relation: 'asociacion',
    caveat: 'Desde 2017 ha habido esfuerzos de reforestación',
    recommendation: 'Priorizar el rediseño del paisaje agroforestal en Pumanque y comunas vecinas (Lolol, Marchigüe), creando cortafuegos naturales y diversificando cultivos.',
    pending: false,
  },
  {
    id: 'hallazgo-pyme',
    kind: 'pyme',
    title: 'PYMEs vitivinícolas',
    summary: 'Las PYMEs ligadas al enoturismo y agricultura (Ruta del Vino de Colchagua, viñas boutique en Santa Cruz) la caida del turismo (2020), la megasequía (2018), y las lluvias tardías (2023) dañaron infraestructura de riego y plantaciones.',
    evidence: [{ label: 'Caída turismo receptivo (2020)', value: '-75% est. a comparacion de 2019', source: 'Sernatur' }],
    relation: 'proyeccion',
    caveat: 'Las grandes viñas tienen seguros y capacidad de adaptación; este hallazgo aplica principalmente a pequeños productores (PYMEs).',
    recommendation: 'Crear líneas de financiamiento estatales exclusivas para la adaptación climática de PYMEs agrícolas (tecnificación de riego, seguros agrícolas subsidiados).',
    pending: false,
  },
];
