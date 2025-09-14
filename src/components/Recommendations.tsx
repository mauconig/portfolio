'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Recommendations() {
  const { t } = useLanguage()

  const recommendations = [
    {
      id: 1,
      name: 'Manuel Guerra',
      titleKey: 'recommendations.manuel.title',
      subtitleKey: 'recommendations.manuel.subtitle',
      company: 'ITTI Digital',
      relationshipKey: 'recommendations.manuel.relationship',
      dateKey: 'recommendations.manuel.date',
      image: '/portfolio/manuel-guerra.jpeg',
      testimonialKey: 'recommendations.manuel.testimonial'
    }
  ]

  return (
    <section id="recommendations" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-blue-400">{t('recommendations.professional')}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('recommendations.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Testimonial Section - Now at the top */}
              <div className="mb-8">
                <div className="relative">
                  {/* Quote icon */}
                  <div className="absolute -top-2 -left-2 text-blue-400/30 text-6xl font-serif">
                    &ldquo;
                  </div>

                  <div className="pl-6">
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      {t(rec.testimonialKey).split('\n\n').map((paragraph, index) => {
                        // Handle bold text for section headers
                        if (paragraph.includes('**')) {
                          const parts = paragraph.split('**')
                          return (
                            <p key={index} className="text-gray-300">
                              {parts.map((part, partIndex) =>
                                partIndex % 2 === 1 ?
                                  <strong key={partIndex} className="text-blue-400 font-semibold">{part}</strong> :
                                  part
                              )}
                            </p>
                          )
                        }
                        return <p key={index} className="text-gray-300">{paragraph}</p>
                      })}
                    </div>
                  </div>

                  {/* Quote end icon */}
                  <div className="flex justify-end mt-4">
                    <div className="text-blue-400/30 text-4xl font-serif transform rotate-180">
                      &rdquo;
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Section - Now at the bottom */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-700">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={rec.image}
                    alt={rec.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover border-2 border-blue-400"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{rec.name}</h3>
                  <p className="text-blue-400 font-medium text-sm mb-1">{t(rec.titleKey)}</p>
                  <p className="text-gray-400 text-xs mb-1">{t(rec.subtitleKey)}</p>
                  <p className="text-gray-400 text-sm">{rec.company}</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <p className="text-gray-500 text-xs">{t(rec.relationshipKey)}</p>
                    <span className="text-gray-600">•</span>
                    <p className="text-gray-500 text-xs">{t(rec.dateKey)}</p>
                  </div>
                </div>
              </div>

              {/* LinkedIn verification badge */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn Recommendation</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">{t('recommendations.cta.title')}</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('recommendations.cta.description')}
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {t('recommendations.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}