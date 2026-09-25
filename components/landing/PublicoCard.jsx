export default function PublicoCard({ titulo, descricao }) {
  return (
    <article className="bg-slate-800 p-6 rounded-xl">
      <h3 className="font-bold text-xl mb-3">{titulo}</h3>
      <p className="text-slate-400 text-sm">{descricao}</p>
    </article>
  )
}
