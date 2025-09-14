'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.recommendations': 'Recommendations',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Software Engineer',
    'hero.description': 'I build exceptional digital experiences with modern web technologies',
    'hero.cta.contact': 'Get In Touch',
    'hero.cta.resume': 'View Resume',

    // About Section
    'about.title': 'About Me',
    'about.description': 'I\'m a passionate software engineer with expertise in full-stack development. I love creating efficient, scalable solutions and learning new technologies.',
    'about.detailed.p1': 'I\'m a Computer Science Engineer from Universidad Politécnica Taiwán-Paraguay with international experience through an exchange program at NTUST in Taiwan. I specialize in full-stack development with expertise in PHP, Laravel, Java, and modern frontend technologies.',
    'about.detailed.p2': 'My thesis on ML-Assisted sEMG analysis applied to fitness earned an honorable mention, demonstrating my passion for combining software engineering with cutting-edge technologies like Machine Learning and AI.',
    'about.badge.gpa': 'GPA',
    'about.badge.exchange': 'Taiwan Exchange Program',
    'about.badge.thesis': 'ML Thesis Recognition',

    // Skills Section
    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies and tools I use to deliver robust software solutions',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Databases & AI',
    'skills.tools': 'Tools & Technologies',
    'skills.experience.title': 'Professional Experience',
    'skills.experience.fullstack': 'Fullstack Developer',
    'skills.experience.engineer': 'Software Engineer',
    'skills.experience.analyst': 'Support Analyst',

    // Recommendations Section
    'recommendations.title': 'Recommendations',
    'recommendations.subtitle': 'What colleagues and managers say about working with me',
    'recommendations.cta.title': 'Want to work together?',
    'recommendations.cta.description': 'I\'m always open to discussing new opportunities and challenging projects. Let\'s connect and see how I can contribute to your team\'s success.',
    'recommendations.cta.button': 'Get In Touch',

    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to discussing new opportunities and interesting projects',
    'contact.connect': 'Let\'s Connect',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Location',
    'contact.response': 'Response Time',
    'contact.response.value': 'Within 24 hours',
    'contact.follow': 'Follow Me',
    'contact.footer.built': 'Built with Next.js and Tailwind CSS.',
    'contact.footer.role': 'Computer Science Engineer | Full-stack Developer | Asunción, Paraguay'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.skills': 'Habilidades',
    'nav.recommendations': 'Recomendaciones',
    'nav.contact': 'Contacto',

    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Ingeniero de Software',
    'hero.description': 'Construyo experiencias digitales excepcionales con tecnologías web modernas',
    'hero.cta.contact': 'Contáctame',
    'hero.cta.resume': 'Ver CV',

    // About Section
    'about.title': 'Acerca de Mí',
    'about.description': 'Soy un ingeniero de software apasionado con experiencia en desarrollo full-stack. Me encanta crear soluciones eficientes y escalables, y aprender nuevas tecnologías.',
    'about.detailed.p1': 'Soy Ingeniero en Ciencias de la Computación de la Universidad Politécnica Taiwán-Paraguay con experiencia internacional a través de un programa de intercambio en NTUST en Taiwán. Me especializo en desarrollo full-stack con experiencia en PHP, Laravel, Java y tecnologías frontend modernas.',
    'about.detailed.p2': 'Mi tesis sobre análisis sEMG asistido por ML aplicado al fitness obtuvo una mención honorífica, demostrando mi pasión por combinar la ingeniería de software con tecnologías de vanguardia como Machine Learning e IA.',
    'about.badge.gpa': 'Promedio',
    'about.badge.exchange': 'Programa de Intercambio en Taiwán',
    'about.badge.thesis': 'Reconocimiento de Tesis ML',

    // Skills Section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologías y herramientas que uso para entregar soluciones de software robustas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Bases de Datos e IA',
    'skills.tools': 'Herramientas y Tecnologías',
    'skills.experience.title': 'Experiencia Profesional',
    'skills.experience.fullstack': 'Desarrollador Fullstack',
    'skills.experience.engineer': 'Ingeniero de Software',
    'skills.experience.analyst': 'Analista de Soporte',

    // Recommendations Section
    'recommendations.title': 'Recomendaciones',
    'recommendations.subtitle': 'Lo que colegas y gerentes dicen sobre trabajar conmigo',
    'recommendations.cta.title': '¿Quieres trabajar juntos?',
    'recommendations.cta.description': 'Siempre estoy abierto a discutir nuevas oportunidades y proyectos desafiantes. Conectemos y veamos cómo puedo contribuir al éxito de tu equipo.',
    'recommendations.cta.button': 'Contáctame',

    // Contact Section
    'contact.title': 'Ponte en Contacto',
    'contact.description': 'Siempre estoy abierto a discutir nuevas oportunidades y proyectos interesantes',
    'contact.connect': 'Conectemos',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Ubicación',
    'contact.response': 'Tiempo de Respuesta',
    'contact.response.value': 'En 24 horas',
    'contact.follow': 'Sígueme',
    'contact.footer.built': 'Construido con Next.js y Tailwind CSS.',
    'contact.footer.role': 'Ingeniero en Ciencias de la Computación | Desarrollador Full-stack | Asunción, Paraguay'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'es' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}