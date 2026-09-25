import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Hero from '../components/landing/Hero.jsx'
import Solucao from '../components/landing/Solucao.jsx'
import Objetivo from '../components/landing/Objetivo.jsx'
import PublicoAlvo from '../components/landing/PublicoAlvo.jsx'
import ModoFotografia from '../components/landing/ModoFotografia.jsx'
import Galeria from '../components/landing/Galeria.jsx'
import Equipe from '../components/landing/Equipe.jsx'
import Contato from '../components/landing/Contato.jsx'

import { objetivos } from '../data/objetivos.js'
import { publicoAlvo } from '../data/publico.js'
import { galeria } from '../data/gallery.js'
import { equipe } from '../data/team.js'

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Solucao />
        <Objetivo objetivos={objetivos} />
        <PublicoAlvo publico={publicoAlvo} />
        <ModoFotografia />
        <Galeria imagens={galeria} />
        <Equipe equipe={equipe} />
        <Contato />
      </main>

      <Footer />
    </div>
  )
}
