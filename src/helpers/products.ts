export interface Product {
  id: number,
  title: string,
  amount: number,
  description: string,
  quantity?: number
}

export const productList: Array<Product> = [
  {
    id:1,
    title: 'Viagem ao Hawaii',
    amount: 3000,
    description: 'Viagem ao Hawaii só de ida'
  },
  {
    id:2,
    title: 'Abacaxi',
    amount: 10,
    description: `Um abacaxi maduro`
  },
  {
    id:3,
    title: 'Coco',
    amount: 30,
    description: 'Uma variedade rara de coco verde'
  },
  {
    id:4,
    title: 'Prancha de Surf',
    amount: 400,
    description: `Não é profissional mas boa para iniciantes`
  },
  {
    id:5,
    title: 'Filtro Solar',
    amount: 20,
    description: `Não dá pra ficar sem filtro solar`
  }
]
