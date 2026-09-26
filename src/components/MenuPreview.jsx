import { useEffect, useState } from 'react'
import { Loader2, SearchX } from 'lucide-react'


const CATEGORIES = [
  { label: 'Massas', value: 'Pasta' },
  { label: 'Frango', value: 'Chicken' },
  { label: 'Sobremesas', value: 'Dessert' },
  { label: 'Vegetariano', value: 'Vegetarian' },
]


const CUSTOM_NAMES = {
  'Chilli prawn linguine': 'Macarrão com Camarão',
  'Fettuccine Alfredo': 'Fettuccine ao molho branco',
  'Fettucine alfredo': 'Fettuccine com queijo',
  'Grilled Mac and Cheese Sandwich': 'Sanduíche de Mac and Cheese',
  'Lasagna Sandwiches': 'Sanduíche',
  'Lasagne': 'Lasanha',
  '15-minute chicken & halloumi burgers': 'Hambúrguer de Frango',
  'Ayam Percik': 'Frango Assado',
  'Belgian Waterzooi Chicken': 'Frango com Legumes',
  'Bengali Chicken Curry with Potatoes': 'Frango com Batata',
  'Brown Stew Chicken': 'Frango ao molho',
  'Chick-Fil-A Sandwich': 'Sanduíche de Frango',
  'Æbleskiver': 'Bolinho com doce de leite',
  'Anzac biscuits': 'Biscoito de aveia',
  'Apam balik': 'Panqueca com recheio',
  'Apple & Blackberry Crumble': 'Torta de Maçã',
  'Apple cake': 'Bolo de Maçã',
  'Air fryer patatas bravas': 'Batatas Cozidas',
  'Algerian Flafla (Bell Pepper Salad)': 'Salada de Pimentão',
  'Aubergine & hummus grills': 'Legumes Grelhados',
  'Aubergine couscous salad': 'Salada de Berinjela',
  'Avocado dip with new potatoes': 'Guacamole com Batata',
  'Baingan Bharta': 'Berinjela temperada',

}

function displayName(meal) {
  return CUSTOM_NAMES[meal.strMeal] || meal.strMeal
}

export default function MenuPreview() {
  const [category, setCategory] = useState(CATEGORIES[0].value)
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchMeals() {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        )
        if (!response.ok) throw new Error('Falha na requisição')
        const data = await response.json()
        if (!cancelled) {
          setMeals((data.meals || []).slice(0, 6))
        }
      } catch (err) {
        if (!cancelled) setError('Não foi possível carregar o cardápio agora.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchMeals()
    return () => {
      cancelled = true
    }
  }, [category])

  return (
    <section id="cardapio" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-3">Cardápio em destaque</h2>
            <p className="text-cream/70 max-w-md">
              Pratos populares em tempo real, buscados via fetch na TheMealDB.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  category === c.value
                    ? 'bg-citrus text-ink'
                    : 'bg-ink2 text-cream/70 hover:text-cream border border-cream/10'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="flex items-center gap-3 text-cream/60 py-16 justify-center">
            <Loader2 className="animate-spin" size={20} />
            Buscando pratos...
          </div>
        )}

        {!loading && error && (
          <div className="flex flex-col items-center gap-3 text-cream/60 py-16">
            <SearchX size={28} />
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="rounded-2xl overflow-hidden bg-ink2 border border-cream/10 hover:border-citrus/40 transition-colors"
              >
                <img
                  src={meal.strMealThumb}
                  alt={displayName(meal)}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="font-display font-bold">{displayName(meal)}</p>
                  <p className="text-cream/50 text-xs mt-1">Disponível para entrega hoje</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}