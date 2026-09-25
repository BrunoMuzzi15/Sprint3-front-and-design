import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-purple-400">
          JOVI
        </Link>

        <ul className="flex flex-col md:flex-row gap-6 text-sm items-center">
          <li>
            <a href="/#solucao" className="hover:text-purple-400 transition">
              A Solução
            </a>
          </li>
          <li>
            <a href="/#publico" className="hover:text-purple-400 transition">
              Público-Alvo
            </a>
          </li>
          <li>
            <a href="/#galeria" className="hover:text-purple-400 transition">
              Galeria
            </a>
          </li>
          <li>
            <a href="/#equipe" className="hover:text-purple-400 transition">
              Nossa Equipe
            </a>
          </li>
          <li>
            <a href="/#contato" className="hover:text-purple-400 transition">
              Contato
            </a>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <Link to="/dashboard" className="hover:text-purple-400 transition">
                  Painel
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition"
                >
                  Sair
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/login"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
              >
                Entrar
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
