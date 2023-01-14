interface product {
  id: number,
  title: string,
  amount: number,
  description: string
}

export const products: Array<product> = [
  {
    id:1,
    title: 'Trip to Hawaii',
    amount: 3000,
    description: 'trip to Hawaii, one-way'
  },
  {
    id:2,
    title: 'Pineapple',
    amount: 10,
    description: `ripe pineapple... And that's it`
  },
  {
    id:3,
    title: 'Coconut',
    amount: 30,
    description: 'A rare coconut'
  },
  {
    id:4,
    title: 'Surfboard',
    amount: 400,
    description: `It's not professional, but good for beginners`
  },
  {
    id:5,
    title: 'Sunscreen',
    amount: 20,
    description: `Can't have enough sunscreen`
  }
]
