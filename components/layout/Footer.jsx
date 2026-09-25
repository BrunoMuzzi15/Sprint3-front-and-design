export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-7">
        <div>
          <h2 className="text-2xl font-bold text-purple-400">JOVI</h2>
          <p className="text-slate-500 text-sm mt-2">
            Luz Dinâmica — tecnologia que acompanha você.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <a href="/#solucao" className="hover:text-white">A Solução</a>
          <a href="/#publico" className="hover:text-white">Público-Alvo</a>
          <a href="/#galeria" className="hover:text-white">Galeria</a>
          <a href="/#equipe" className="hover:text-white">Nossa Equipe</a>
          <a href="/#contato" className="hover:text-white">Contato</a>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-5">
        <p className="text-slate-600 text-xs">© 2026 JOVI - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
