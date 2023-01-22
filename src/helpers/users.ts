export interface User {
  name: string,
  id: string,
  password: string,
  isAdmin: boolean
}

export const Users:Array<User> = [
  {
    id: 'joaosilva',
    name: 'João da Silva',
    password: '1234',
    isAdmin: true
  },
  {
    id: 'mariazinha',
    name: 'Maria do Carmo',
    password: '1234',
    isAdmin: false
  },
  {
    id: 'carlao',
    name: 'Carlos Nascimento',
    password: '1234',
    isAdmin: false
  },
  {
    id: 'patosocio',
    name: 'Donald o Pato',
    password: '1234',
    isAdmin: true
  },
]
