import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-purple-400 font-semibold">ERRO 404</p>
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-slate-400">A página que você tentou acessar não existe.</p>
      <Link
        to="/"
        className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition"
      >
        Voltar para o início
      </Link>
    </div>
  )
}
