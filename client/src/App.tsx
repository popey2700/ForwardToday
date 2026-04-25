import Navigation from '@/features/navigation/Navigation'
import Hero from '@/features/hero/Hero'
import Services from '@/features/services/Services'
import About from '@/features/about/About'
import Pricing from '@/features/pricing/Pricing'
import Reviews from '@/features/reviews/Reviews'
import Contact from '@/features/contact/Contact'
import Footer from '@/features/footer/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
