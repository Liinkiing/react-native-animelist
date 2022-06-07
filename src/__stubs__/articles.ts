export const ARTICLES = [
  {
    id: 1,
    title: 'Premier article',
    color: '#ff0000',
    body: 'Contenu du premier article',
  },
  {
    id: 2,
    title: 'Deuxième article',
    color: '#00ff00',
    body: 'Contenu du deuxième article',
  },
  {
    id: 3,
    title: 'Troisième article',
    color: '#0000ff',
    body: 'Contenu du troisième article',
  },
  {
    id: 4,
    title: 'Quatrième article',
    color: '#ffff00',
    body: 'Contenu du quatrième article',
  },
] as const

export type Article = typeof ARTICLES[number]
