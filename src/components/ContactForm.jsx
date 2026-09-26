import { useState } from 'react'
import { Mail, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Digite um e-mail válido.')
      return
    }
    setError('')
    // Em produção: enviar `email` para o backend/API de marketing do GourmetOn.
    setSent(true)
  }

  return (
    <section id="contato" className="px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
          Seja avisado no lançamento na sua cidade
        </h2>
        <p className="text-cream/70 mb-10">
          Deixe seu e-mail e mande as novidades e um cupom de boas-vindas assim que o app chegar aí.
        </p>

        {sent ? (
          <div className="flex items-center justify-center gap-2 text-herb font-semibold rounded-full border border-herb/30 py-4 px-6 max-w-sm mx-auto">
            <CheckCircle2 size={20} />
            Cadastro recebido! Fique de olho no seu e-mail.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full rounded-full bg-paper text-ink pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-citrus"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-citrus text-ink px-6 py-3 font-semibold hover:bg-citrus/90 transition-colors"
            >
              Quero saber
            </button>
          </form>
        )}
        {error && <p className="text-citrus text-sm mt-3">{error}</p>}
      </div>
    </section>
  )
}
