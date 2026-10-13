export type Profile = {
  name: string;
  role: string;
  field: string;
  tagline: string;
  about: string[];
  links: { github: string; email: string };
};

export const profile: Profile = {
  name: 'Alejandro Tapia · Jovendev',
  role: 'Analista de datos',
  field: 'Business Intelligence · Ingeniería en Programación',
  tagline:
    'Desarrollo paginas web, creacion de videojuegos y analista de datos, Transformo datos en información que se puede ver, entender y usar, y la publico en la web.',
  about: [
    'Soy estudiante de último semestre de Ingeniería en Programación en AIEP y trabajo como analista de datos. Uso Python y SQL para extraer y transformar datos, y Power BI para convertirlos en visualizaciones claras.',
    'Me gustan las páginas web, y por eso no me quedo en el análisis: este portafolio lo construí y lo publiqué yo mismo, con despliegue continuo desde GitHub, para que mi trabajo se pueda ver y no quede guardado en un archivo.',
    'He desarrollado videojuegos en Godot y páginas web con Astro y Tailwind CSS, y me interesa seguir aprendiendo sobre desarrollo web y despliegue de aplicaciones.',
  ],
  links: {
    github: 'https://github.com/JovenGit',
    email: 'Alejandro_tapia13@hotmail.com',
  },
};
