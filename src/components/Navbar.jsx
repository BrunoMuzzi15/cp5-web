import { useEffect, useState } from 'react'
import { UtensilsCrossed } from 'lucide-react'

export default function Navbar() {
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    function verificarScroll() {
      if (window.scrollY > 50) {
        setRolou(true)
      } else {
        setRolou(false)
      }
    }

    window.addEventListener('scroll', verificarScroll)

    return () => {
      window.removeEventListener('scroll', verificarScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        rolou ? 'bg-yellow-400 text-black' : 'bg-slate-900 text-white'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href="#top"
          className="flex items-center gap-2 font-bold text-lg"
        >
          <UtensilsCrossed size={20} />
          GourmetOn
        </a>

        <div className="flex gap-6 text-sm">
          <a href="#sobre">Sobre</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </div>

        <a
          href="#contato"
          className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold"
        >
          Baixar app
        </a>

      </nav>
    </header>
  )
}