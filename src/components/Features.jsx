import { Search, SlidersHorizontal, MapPin, Star } from 'lucide-react'

const FEATURES = [
  {
    icon: Search,
    title: 'Busca por tipo de comida',
    text: 'Encontre pratos e restaurantes por categoria, ingrediente ou nome em poucos toques.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Filtros inteligentes',
    text: 'Refine por preço, tempo de entrega, avaliação e restrições alimentares.',
  },
  {
    icon: MapPin,
    title: 'Rastreamento em tempo real',
    text: 'Acompanhe o entregador no mapa, do preparo até a porta da sua casa.',
  },
  {
    icon: Star,
    title: 'Avaliações da comunidade',
    text: 'Notas e comentários de outros clientes para decidir o que pedir com confiança.',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="px-6 py-24 bg-ink2">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-14">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
            Tudo que você precisa para decidir rápido
          </h2>
          <p className="text-cream/70">
            Funcionalidades pensadas para tirar a indecisão da hora da fome.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-citrus/15 flex items-center justify-center">
                <Icon className="text-citrus" size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">{title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}