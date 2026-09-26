const TESTIMONIALS = [
  {
    name: 'Marina Alves',
    role: 'Cliente desde 2023',
    quote:
      'Peço quase todo dia no almoço. O rastreamento em tempo real é o que mais uso — sei exatamente quando descer para buscar.',
  },
  {
    name: 'Rafael Nogueira',
    role: 'Dono da Trattoria Bella Vita',
    quote:
      'Desde que entramos no GourmetOn, os pedidos via app já são um terço do nosso faturamento no delivery.',
  },
  {
    name: 'Juliana Prado',
    role: 'Cliente desde 2022',
    quote:
      'Os filtros por tipo de prato salvam quando bate aquela indecisão. Encontro algo vegetariano em segundos.',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="px-6 py-24 bg-ink2">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-12 max-w-lg">
          Quem já pediu, conta como foi
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-cream/10 p-8 flex flex-col">
              <blockquote className="text-cream/80 leading-relaxed mb-6 flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption>
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-citrus text-sm">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
