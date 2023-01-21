export interface Product {
  id: number,
  title: string,
  image: string,
  amount: number,
  description: string,
  quantity?: number
}

export const productList: Array<Product> = [
  {
    id:1,
    title: 'Viagem ao Hawaii',
    image: '../assets/img/product-01.jpg',
    amount: 3000,
    description: 'Viagem ao Hawaii só de ida'
  },
  {
    id:2,
    title: 'Abacaxi',
    image: '../assets/img/product-02.jpg',
    amount: 10,
    description: `Um abacaxi maduro`
  },
  {
    id:3,
    title: 'Coco',
    image: '../assets/img/product-03.jpg',
    amount: 30,
    description: 'Uma variedade rara de coco verde'
  },
  {
    id:4,
    title: 'Prancha de Surf',
    image: '../assets/img/product-04.jpg',
    amount: 400,
    description: `Não é profissional mas boa para iniciantes`
  },
  {
    id:5,
    title: 'Filtro Solar',
    image: '../assets/img/product-05.jpg',
    amount: 20,
    description: `Não dá pra ficar sem filtro solar`
  },
  {
    id:6,
    title: 'Kombi corujinha',
    image: '../assets/img/product-06.jpg',
    amount: 60000,
    description: `Kombi Corujinha para você chegar no spot com estilo`
  },
  {
    id:7,
    title: 'Óculos de sol',
    image: '../assets/img/product-07.jpg',
    amount: 600,
    description: `Óculos polarizado com proteção UV`
  },
  {
    id:8,
    title: 'Neoprene para surf',
    image: '../assets/img/product-08.jpg',
    amount: 800,
    description: `Roupa de neoprene para surf`
  },
  {
    id:9,
    title: 'Saia para hula',
    image: '../assets/img/product-09.jpg',
    amount: 50,
    description: `Saia para curtir uma Hula na areia`
  }
]
