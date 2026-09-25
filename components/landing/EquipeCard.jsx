export default function EquipeCard({ iniciais, nome, papel, descricao, cor }) {
  return (
    <article className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center">
      <div
        className={`w-24 h-24 mx-auto mb-5 rounded-full ${cor} flex items-center justify-center text-2xl font-bold`}
      >
        {iniciais}
      </div>
      <h3 className="font-bold text-xl">{nome}</h3>
      <p className="text-purple-400 text-sm mt-2">{papel}</p>
      <p className="text-slate-400 text-sm mt-3">{descricao}</p>
    </article>
  )
}
