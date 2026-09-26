export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl mx-auto text-center">


        <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
          Peça sua comida
          <br />
          <span className="text-citrus">de forma fácil.</span>
        </h1>

        <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
          Encontre restaurantes, escolha seu prato e acompanhe
          sua entrega pelo GourmetOn.
        </p>

        <a
          href="#cardapio"
          className="inline-block rounded-full bg-citrus text-ink px-6 py-3 font-semibold"
        >
          Ver cardápio
        </a>

      </div>
    </section>
  )
}