import { Zap, Store, Wallet } from 'lucide-react'

const BENEFITS = [
  {
    icon: Zap,
    title: 'Entrega rápida',
    text: 'Roteirização inteligente que prioriza os entregadores mais próximos do restaurante.',
  },
  {
    icon: Store,
    title: 'Variedade de restaurantes',
    text: 'De marmitas fit a alta gastronomia — mais de 3 mil parceiros cadastrados.',
  },
  {
    icon: Wallet,
    title: 'Pagamento fácil',
    text: 'Pix, cartão ou saldo em app, com checkout em um único passo.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="px-6 py-24 bg-ink2">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
            Feito para quem não quer perder tempo com fome
          </h2>
          <p className="text-cream/70">
            O GourmetOn nasceu para simplificar a ponte entre você e a cozinha do seu restaurante favorito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-cream/10 p-8 hover:border-citrus/40 transition-colors">
              <Icon className="text-citrus mb-5" size={28} />
              <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
