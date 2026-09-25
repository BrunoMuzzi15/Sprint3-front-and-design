import { useState, useEffect } from 'react'

// Dados mockados (simulando uma API), sem depender de nenhum serviço externo.
// Edite esse array com os dados que você quiser exibir.
const usuariosMock = [
  {
    id: 1,
    name: 'Bruno Muzzi',
    username: 'brunomuzzi',
    email: 'bruno@jovi.com',
    company: { name: 'Front-end' },
  },
  {
    id: 2,
    name: 'Arthur Kazuo',
    username: 'arthurkazuo',
    email: 'arthur@jovi.com',
    company: { name: 'Design' },
  },
  {
    id: 3,
    name: 'Daniel Lopes',
    username: 'daniellopes',
    email: 'daniel@jovi.com',
    company: { name: 'Interatividade' },
  },
  {
    id: 4,
    name: 'João Felipe',
    username: 'joaofelipe',
    email: 'joao@jovi.com',
    company: { name: 'Pesquisa' },
  },
  {
    id: 5,
    name: 'Thiago Lutfi',
    username: 'thiagolutfi',
    email: 'thiago@jovi.com',
    company: { name: 'Pesquisa' },
  },
]

// Hook customizado responsável por toda a lógica de "consumo da API".
// Os componentes visuais (páginas) apenas leem os estados retornados aqui,
// mantendo a separação entre lógica e apresentação.
export function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ativo = true

    // Simula uma chamada assíncrona de API (delay de 600ms).
    const timeout = setTimeout(() => {
      if (ativo) {
        setUsers(usuariosMock)
        setLoading(false)
      }
    }, 600)

    return () => {
      ativo = false
      clearTimeout(timeout)
    }
  }, [])

  return { users, loading, error }
}