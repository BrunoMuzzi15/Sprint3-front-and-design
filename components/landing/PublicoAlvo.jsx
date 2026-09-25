import PublicoCard from './PublicoCard.jsx'

export default function PublicoAlvo({ publico }) {
  return (
    <section id="publico" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-3">PÚBLICO-ALVO</p>
          <h2 className="text-4xl font-bold mb-4">Para quem é a solução?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A Luz Dinâmica foi pensada para usuários que gostam de tecnologia e
            personalização.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {publico.map((item) => (
            <PublicoCard key={item.titulo} titulo={item.titulo} descricao={item.descricao} />
          ))}
        </div>
      </div>
    </section>
  )
}
