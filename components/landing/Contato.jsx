import { useState } from 'react'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setEnviado(true)
    setForm({ nome: '', email: '', mensagem: '' })
  }

  return (
    <section id="contato" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-3">CONTATO</p>
          <h2 className="text-4xl font-bold mb-4">Entre em contato</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ficou interessado na nossa proposta? Entre em contato com a nossa equipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Fale com a gente</h3>

            <div className="space-y-6">
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <p className="text-purple-400 font-semibold mb-1">E-mail</p>
                <p className="text-slate-400">contato@horizon.com</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <p className="text-purple-400 font-semibold mb-1">Telefone</p>
                <p className="text-slate-400">(11) 99999-9999</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <p className="text-purple-400 font-semibold mb-1">Redes sociais</p>
                <p className="text-slate-400">@horizon.oficial</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-sm">Nome</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">E-mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Mensagem</label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                rows="5"
                placeholder="Digite sua mensagem"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition"
            >
              Enviar mensagem
            </button>

            {enviado && (
              <p className="text-green-400 text-center font-semibold">
                Mensagem enviada com sucesso!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
