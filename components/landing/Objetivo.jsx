export default function Objetivo({ objetivos }) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="w-56 h-[450px] bg-slate-900 border-4 border-slate-700 rounded-[35px] p-2">
            <div className="h-full rounded-[28px] bg-gradient-to-br from-purple-700 to-blue-900 flex flex-col justify-center items-center">
              <strong className="text-3xl mt-5">JOVI</strong>
            </div>
          </div>
        </div>

        <div>
          <p className="text-purple-400 font-semibold mb-3">NOSSO OBJETIVO</p>
          <h2 className="text-4xl font-bold mb-5">Tecnologia que se adapta.</h2>
          <p className="text-slate-400 mb-8">
            O principal objetivo do trabalho foi criar uma proposta inovadora para
            smartphones, desenvolver uma interface moderna e aplicar conceitos de
            Front-end e estilização.
          </p>

          <div className="space-y-4">
            {objetivos.map((item) => (
              <div key={item.numero} className="border-b border-slate-800 pb-3">
                <span className="text-purple-400 font-bold">{item.numero}</span>{' '}
                {item.texto}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
