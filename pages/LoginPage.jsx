import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const sucesso = login(email, senha)

    if (sucesso) {
      navigate('/dashboard')
    } else {
      setErro('E-mail ou senha inválidos. Confira as credenciais de teste abaixo.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <p className="text-purple-400 font-semibold mb-1 text-center">JOVI</p>
        <h1 className="text-3xl font-bold mb-6 text-center">Área restrita</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu@email.com"
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3"
            />
          </div>

          {erro && <p className="text-red-400 text-sm text-center">{erro}</p>}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          <p>Credenciais de teste:</p>
          <p className="text-slate-400">admin@jovi.com / jovi123</p>
        </div>
      </div>
    </div>
  )
}
