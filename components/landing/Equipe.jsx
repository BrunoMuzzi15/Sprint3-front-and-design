import EquipeCard from './EquipeCard.jsx'

export default function Equipe({ equipe }) {
  return (
    <section id="equipe" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-3">NOSSA EQUIPE</p>
          <h2 className="text-4xl font-bold mb-4">Quem fez o projeto?</h2>
          <p className="text-slate-400">Conheça os integrantes responsáveis pelo desenvolvimento.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipe.map((membro) => (
            <EquipeCard key={membro.nome} {...membro} />
          ))}
        </div>
      </div>
    </section>
  )
}
