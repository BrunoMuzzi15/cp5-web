import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 px-6">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-citrus/20 blur-3xl" />
      <div className="absolute top-1/2 -left-32 w-72 h-72 rounded-full bg-herb/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-herb font-semibold tracking-wide mb-4">Delivery de comida, sem enrolação</p>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl leading-[1.05] mb-6">
            Peça. Descubra.
            <br />
            <span className="text-citrus">Repita.</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-md mb-8">
            O GourmetOn conecta você aos melhores restaurantes da cidade em poucos toques,
            com busca inteligente, filtros por tipo de prato e entrega rastreada de ponta a ponta.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-citrus text-ink px-6 py-3 font-semibold hover:bg-citrus/90 transition-colors"
            >
              Baixar o app
              <ArrowRight size={18} />
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 font-semibold text-cream/90 hover:border-citrus/60 hover:text-citrus transition-colors"
            >
              Ver cardápio
            </a>
          </div>

          <div className="flex items-center gap-2 mt-10 text-sm text-cream/60">
            <div className="flex text-citrus">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            4,8 de avaliação média entre mais de 12 mil pedidos
          </div>
        </div>
      </div>
    </section>
  )
}
