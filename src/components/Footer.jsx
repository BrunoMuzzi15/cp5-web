import { Instagram, Twitter, Facebook, UtensilsCrossed } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-cream/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold">
          <UtensilsCrossed size={18} className="text-citrus" />
          GourmetOn
        </div>

        <div className="flex items-center gap-5 text-cream/60">
          <a href="#" aria-label="Instagram" className="hover:text-citrus transition-colors">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-citrus transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-citrus transition-colors">
            <Facebook size={18} />
          </a>
        </div>

        <div className="text-sm text-cream/50 flex flex-col md:items-end gap-1">
          <span>contato@gourmeton.com.br</span>
          <a href="#" className="hover:text-citrus transition-colors">
            Termos de uso e privacidade
          </a>
        </div>
      </div>

      <p className="text-center text-cream/30 text-xs mt-8">
        © {new Date().getFullYear()} GourmetOn. Projeto acadêmico — Check-Point 05, Web Development with JS.
      </p>
    </footer>
  )
}
