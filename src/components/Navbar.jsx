import { useEffect, useState } from 'react'
import { UtensilsCrossed, Menu, X } from 'lucide-react'

const LINKS = [
{ href: '#sobre', label: 'Sobre' },
{ href: '#cardapio', label: 'Cardápio' },
{ href: '#funcionalidades', label: 'Funcionalidades' },
{ href: '#depoimentos', label: 'Depoimentos' },
{ href: '#contato', label: 'Contato' },
]

export default function Navbar() {
const [scrolled, setScrolled] = useState(false)
const [open, setOpen] = useState(false)

useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
}, [])

  return (
    <header
    className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}
    >
    <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
        <UtensilsCrossed size={20} className="text-citrus" />
        GourmetOn
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-cream/80">
        {LINKS.map((l) => (
            <li key={l.href}>
            <a href={l.href} className="hover:text-citrus transition-colors">
                {l.label}
            </a>
            </li>
        ))}
        </ul>

        <a
        href="#contato"
        className="hidden md:inline-flex items-center rounded-full bg-citrus text-ink px-5 py-2 text-sm font-semibold hover:bg-citrus/90 transition-colors"
        >
        Baixar app
        </a>

        <button
        className="md:hidden text-cream"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menu"
        >
        {open ? <X size={22} /> : <Menu size={22} />}
        </button>
    </nav>

    {open && (
        <div className="md:hidden bg-ink border-t border-white/10 px-6 py-4 flex flex-col gap-4">
        {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-cream/80">
            {l.label}
            </a>
        ))}
        <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center rounded-full bg-citrus text-ink px-5 py-2 text-sm font-semibold"
        >
            Baixar app
        </a>
        </div>
    )}
    </header>
)
}