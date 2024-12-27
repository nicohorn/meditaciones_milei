import prisma from "@/lib/prisma";

const quotes = [
  {
    content: "La casta política es el cáncer de la Argentina.",
    description:
      "Javier Milei critica fuertemente a la clase política argentina, llamándola 'casta' y comparándola con una enfermedad.",
    date_published: "2023-04-15",
    type: "tuit",
    link: "https://twitter.com/JMilei/status/1234567890123456789",
    tags: ["casta política", "Argentina"],
  },
  {
    content: "Hay que dolarizar la economía para terminar con la inflación.",
    description:
      "Durante una entrevista en el programa 'Economía para todos', Milei propone la dolarización como solución para combatir la alta inflación en Argentina. Esta declaración se encuentra en el minuto 12:35 del video.",
    date_published: "2023-03-28",
    type: "fragmento de entrevista",
    link: "https://www.youtube.com/watch?v=abc123def456&t=755",
    tags: ["dolarización", "economía", "inflación"],
  },
  {
    content: "La educación debe ser libre y gratuita, pero no estatal.",
    description:
      "En el capítulo 3, página 78 de su libro 'La libertad avanza', Milei argumenta que la educación debe ser accesible y gratuita, pero no controlada por el Estado.",
    date_published: "2023-05-02",
    type: "cita de libro",
    link: "https://www.ejemplo.com/libro-milei-educacion-libre",
    tags: ["educación", "libertad"],
  },
  {
    content:
      "Hay que eliminar el Banco Central y terminar con la emisión monetaria descontrolada.",
    description:
      "Durante una entrevista en el canal de noticias 'Actualidad Económica', Milei aboga por la eliminación del Banco Central y el fin de la emisión excesiva de dinero. Esta declaración se encuentra en el minuto 22:10 del video.",
    date_published: "2023-04-20",
    type: "fragmento de entrevista",
    link: "https://www.youtube.com/watch?v=ghi789jkl012&t=1330",
    tags: ["Banco Central", "emisión monetaria"],
  },
  {
    content: "La libertad es el camino para el progreso y la prosperidad.",
    description:
      "Milei expresa su creencia fundamental en la libertad como motor del progreso y la prosperidad.",
    date_published: "2023-05-01",
    type: "tuit",
    link: "https://twitter.com/JMilei/status/9876543210987654321",
    tags: ["libertad", "progreso", "prosperidad"],
  },
  {
    content:
      "El socialismo ha fracasado en todos los lugares donde se ha implementado.",
    description:
      "Durante su discurso en el Congreso de Economía Libertaria, Milei critica duramente al socialismo y sus resultados históricos.",
    date_published: "2023-06-15",
    type: "discurso",
    link: "https://www.ejemplo.com/congreso-economia-libertaria-2023",
    tags: ["socialismo", "crítica ideológica"],
  },
  {
    content: "Los impuestos son un robo del Estado a los ciudadanos.",
    description:
      "En una conferencia sobre política fiscal, Milei argumenta que los impuestos representan una forma de robo estatal legalizado.",
    date_published: "2023-07-10",
    type: "conferencia",
    link: "https://www.ejemplo.com/conferencia-fiscal-2023",
    tags: ["impuestos", "Estado", "libertad económica"],
  },
  {
    content: "El keynesianismo es una teoría fallida que solo genera pobreza.",
    description:
      "Durante un debate económico televisado, Milei critica la teoría económica keynesiana y sus efectos en la economía.",
    date_published: "2023-08-05",
    type: "debate",
    link: "https://www.ejemplo.com/debate-economico-2023",
    tags: ["keynesianismo", "teoría económica"],
  },
  {
    content:
      "La justicia social es injusta porque viola el derecho de propiedad.",
    description:
      "En su columna mensual del diario 'Libertad Económica', Milei analiza el concepto de justicia social desde una perspectiva libertaria.",
    date_published: "2023-09-20",
    type: "artículo",
    link: "https://www.ejemplo.com/columna-milei-justicia-social",
    tags: ["justicia social", "derecho de propiedad"],
  },
  {
    id: "10",
    content: "El mercado libre es el mejor asignador de recursos que existe.",
    description:
      "Durante su presentación en el Foro Económico Nacional, Milei defiende las virtudes del libre mercado.",
    date_published: "2023-10-12",
    type: "conferencia",
    link: "https://www.ejemplo.com/foro-economico-2023",
    tags: ["mercado libre", "economía"],
  },
  {
    id: "11",
    content: "El Estado es el principal enemigo del desarrollo económico.",
    description:
      "En una entrevista radial, Milei explica por qué considera al Estado como un obstáculo para el crecimiento económico.",
    date_published: "2023-11-05",
    type: "entrevista radial",
    link: "https://www.ejemplo.com/entrevista-radio-2023",
    tags: ["Estado", "desarrollo económico"],
  },
  {
    id: "12",
    content: "La meritocracia es el único sistema justo de progreso social.",
    description:
      "Durante un discurso en una universidad, Milei defiende la meritocracia como sistema de movilidad social.",
    date_published: "2023-11-25",
    type: "discurso académico",
    link: "https://www.ejemplo.com/discurso-universidad-2023",
    tags: ["meritocracia", "sociedad"],
  },
  {
    id: "13",
    content:
      "El déficit fiscal es una forma de robo a las generaciones futuras.",
    description:
      "En su participación en el programa 'Debate Económico', Milei explica los efectos negativos del déficit fiscal.",
    date_published: "2023-12-03",
    type: "entrevista televisiva",
    link: "https://www.ejemplo.com/debate-economico-deficit",
    tags: ["déficit fiscal", "economía"],
  },
  {
    id: "14",
    content: "La libertad individual es un derecho inalienable.",
    description:
      "Durante su discurso de cierre de campaña, Milei enfatiza la importancia de la libertad individual como derecho fundamental.",
    date_published: "2023-12-15",
    type: "discurso político",
    link: "https://www.ejemplo.com/discurso-campana-2023",
    tags: ["libertad individual", "derechos"],
  },
  {
    id: "15",
    content:
      "El capitalismo es el único sistema que ha sacado a millones de la pobreza.",
    description:
      "En su conferencia en el Foro de Libertad Económica, Milei defiende el sistema capitalista como motor de desarrollo.",
    date_published: "2023-12-20",
    type: "conferencia",
    link: "https://www.ejemplo.com/foro-libertad-2023",
    tags: ["capitalismo", "desarrollo", "pobreza"],
  },
];

function createQuotes() {
  quotes.forEach(async (q) => {
    try {
      const quote = await prisma.quote.create({
        data: { ...q, id: undefined },
      });

      console.log(quote);
    } catch (error) {
      console.log(error);
    }
  });
}

createQuotes();
