import { Zap, Store, Wallet } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="px-6 py-20 bg-ink2">
      <div className="max-w-6xl mx-auto">

        <h2 className="font-bold text-3xl mb-4">
          Feito para quem não quer perder tempo com fome
        </h2>

        <p className="text-cream/70 max-w-xl mb-10">
          O GourmetOn facilita o contato entre você e seus restaurantes favoritos.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 border border-cream/10 rounded-xl">
            <Zap className="text-citrus mb-4" />
            <h3 className="font-bold text-lg mb-2">
              Entrega rápida
            </h3>
            <p className="text-cream/60 text-sm">
              Encontre restaurantes próximos e receba seu pedido rapidamente.
            </p>
          </div>

          <div className="p-6 border border-cream/10 rounded-xl">
            <Store className="text-citrus mb-4" />
            <h3 className="font-bold text-lg mb-2">
              Variedade de restaurantes
            </h3>
            <p className="text-cream/60 text-sm">
              Encontre diferentes tipos de comida em um só lugar.
            </p>
          </div>

          <div className="p-6 border border-cream/10 rounded-xl">
            <Wallet className="text-citrus mb-4" />
            <h3 className="font-bold text-lg mb-2">
              Pagamento fácil
            </h3>
            <p className="text-cream/60 text-sm">
              Escolha entre diferentes formas de pagamento.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}