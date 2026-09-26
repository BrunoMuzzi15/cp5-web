import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import MenuPreview from './components/MenuPreview.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'


export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <Features />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
