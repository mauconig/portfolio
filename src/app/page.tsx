import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Recommendations from '@/components/Recommendations'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Recommendations />
        <Contact />
      </main>
    </div>
  )
}