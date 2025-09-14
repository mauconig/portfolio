'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const getText = (en: string, es: string) => {
    return language === 'en' ? en : es
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-blue-400">M</span>auricio
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {getText('Home', 'Inicio')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {getText('About', 'Acerca')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {getText('Skills', 'Habilidades')}
            </button>
            <button
              onClick={() => scrollToSection('recommendations')}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {getText('Recommendations', 'Recomendaciones')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {getText('Contact', 'Contacto')}
            </button>

            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 text-sm font-medium"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 text-xs font-medium"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <button className="text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}