import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useUsers } from '../hooks/useUsers.js'
import LoadingSpinner from '../components/common/LoadingSpinner.jsx'

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const { users, loading, error } = useUsers()

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Link to="/" className="text-2xl font-bold text-purple-400">
              JOVI
            </Link>
            <p className="text-slate-500 text-sm">Painel • logado como {user?.email}</p>
          </div>

          <button
            onClick={logout}
            className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-purple-400 font-semibold mb-2">ÁREA PRIVADA</p>
        <h1 className="text-3xl font-bold mb-2">Comunidade Luz Dinâmica</h1>
        <p className="text-slate-400 mb-10">
          Lista de usuários testando a funcionalidade, consumida de uma API pública
          de terceiros (JSONPlaceholder) através do hook customizado{' '}
          <code className="text-purple-300">useUsers</code>.
        </p>

        {loading && <LoadingSpinner texto="Carregando usuários da API..." />}

        {error && (
          <p className="text-red-400 text-center py-10">
            Ocorreu um erro ao carregar os dados: {error}
          </p>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((pessoa) => (
              <article
                key={pessoa.id}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl"
              >
                <h3 className="font-bold text-xl">{pessoa.name}</h3>
                <p className="text-purple-400 text-sm mt-1">@{pessoa.username}</p>
                <p className="text-slate-400 text-sm mt-3">{pessoa.email}</p>
                <p className="text-slate-500 text-sm mt-1">{pessoa.company?.name}</p>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
