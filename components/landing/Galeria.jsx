import GaleriaItem from './GaleriaItem.jsx'

export default function Galeria({ imagens }) {
  return (
    <section id="galeria" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-3">GALERIA</p>
          <h2 className="text-4xl font-bold mb-4">Nossa interface</h2>
          <p className="text-slate-400">Algumas imagens da solução desenvolvida pela equipe.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {imagens.map((imagem) => (
            <GaleriaItem
              key={imagem.legenda}
              src={imagem.src}
              alt={imagem.alt}
              legenda={imagem.legenda}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
