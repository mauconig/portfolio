'use client'

import Image from 'next/image'

const recommendations = [
  {
    id: 1,
    name: 'Manuel Guerra',
    title: 'QA Manager with SDET Focus',
    subtitle: 'Responsible for QA integrating advanced automation, CI/CD, DevOps and testing throughout the entire lifecycle',
    company: 'ITTI Digital',
    relationship: 'Manuel managed Mauricio directly',
    date: 'February 23, 2025',
    image: '/manuel-guerra.jpeg',
    testimonial: `I had the privilege of working with Mauricio Conigliaro at ITTI, where he stood out as a comprehensive professional in test automation, covering everything from mobile and UI testing to static code analysis and performance testing. His extensive technical knowledge and ability to solve complex problems made him a fundamental pillar within the team.

Among his main achievements and strengths, I highlight:

**Automation Expert**: He implemented and optimized automation strategies in multiple areas, including mobile testing, UI, static code analysis, and performance testing.

**Complex Problem Solving**: His creativity and analytical approach were key to overcoming technical roadblocks, providing innovative and efficient solutions.

**Training and Mentoring**: He dedicated time to train and guide the team, ensuring continuous growth in knowledge and skills within the automation area.

**Optimization and Continuous Improvement**: He always looked for ways to perfect processes and tools, achieving greater efficiency and quality in testing.

**Teamwork and Collaboration**: His willingness to help and share knowledge enabled the team to face technical challenges with confidence and success.

I recommend Mauricio without hesitation. His technical level, commitment, and automation skills make him an exceptional professional. I am confident that he will continue to make a difference in every challenge he undertakes.`
  }
]

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Professional <span className="text-blue-400">Recommendations</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What colleagues and managers say about working with me
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
                      {rec.testimonial.split('\n\n').map((paragraph, index) => {
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
                  <p className="text-blue-400 font-medium text-sm mb-1">{rec.title}</p>
                  <p className="text-gray-400 text-xs mb-1">{rec.subtitle}</p>
                  <p className="text-gray-400 text-sm">{rec.company}</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <p className="text-gray-500 text-xs">{rec.relationship}</p>
                    <span className="text-gray-600">•</span>
                    <p className="text-gray-500 text-xs">{rec.date}</p>
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
            <h3 className="text-2xl font-semibold mb-4">Want to work together?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and challenging projects.
              Let&apos;s connect and see how I can contribute to your team&apos;s success.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}