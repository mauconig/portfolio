'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient blur */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t('hero.greeting')} <span className="text-blue-400">Mauricio Conigliaro</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {t('nav.recommendations')}
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300"
            >
              {t('hero.cta.contact')}
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}