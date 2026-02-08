import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Chef from '@/components/Chef'
import Gallery from '@/components/Gallery'
import Reservation from '@/components/Reservation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Hero />
      <About />
      <Menu />
      <Chef />
      <Gallery />
      <Reservation />
      <Footer />
    </main>
  )
}