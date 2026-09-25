export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-purple-400 font-semibold mb-4">NOVA FUNCIONALIDADE JOVI</p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Luz <span className="text-purple-400">Dinâmica</span>
        </h1>

        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Uma nova experiência de iluminação inteligente para os smartphones JOVI.
        </p>

        <a
          href="#solucao"
          className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition"
        >
          Conheça a solução
        </a>
      </div>
    </section>
  )
}
