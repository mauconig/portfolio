'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  const skills = [
  {
    category: t('skills.backend'),
    items: [
      { name: 'PHP', level: 95 },
      { name: 'Laravel', level: 90 },
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 80 }
    ]
  },
  {
    category: t('skills.frontend'),
    items: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 }
    ]
  },
  {
    category: t('skills.databases'),
    items: [
      { name: 'SQL', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Firestore', level: 80 },
      { name: 'Machine Learning', level: 85 },
      { name: 'PyTorch', level: 75 }
    ]
  }
]

  const additionalTools = [
    'Git', 'Playwright', 'Cypress', 'Postman', 'Maestro', 'Claude Code',
    'Deep Learning', 'Data Analysis', 'Data Mining', 'Markdown', 'Unit Testing'
  ]
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-blue-400">{t('skills.technical')}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-6 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Experience Highlights */}
        <div className="mt-16 bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-semibold mb-8 text-center">{t('skills.experience.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-2xl font-bold">FS</span>
              </div>
              <h4 className="font-semibold text-white mb-2">{t('skills.experience.fullstack')}</h4>
              <p className="text-gray-300 text-sm">Freelancers del Paraguay</p>
              <p className="text-blue-400 text-sm">June 2025 - Present</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-2xl font-bold">SE</span>
              </div>
              <h4 className="font-semibold text-white mb-2">{t('skills.experience.engineer')}</h4>
              <p className="text-gray-300 text-sm">ITTI Digital</p>
              <p className="text-blue-400 text-sm">Feb 2025 - June 2025</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-2xl font-bold">SA</span>
              </div>
              <h4 className="font-semibold text-white mb-2">{t('skills.experience.analyst')}</h4>
              <p className="text-gray-300 text-sm">Code100</p>
              <p className="text-blue-400 text-sm">Nov 2023 - Feb 2024</p>
            </div>
          </div>
        </div>

        {/* Additional tools */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">{t('skills.tools')}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTools.map((tool) => (
              <span
                key={tool}
                className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}