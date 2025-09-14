import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I&apos;m a Computer Science Engineer from Universidad Politécnica Taiwán-Paraguay with
              international experience through an exchange program at NTUST in Taiwan. I specialize
              in full-stack development with expertise in PHP, Laravel, Java, and modern frontend technologies.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              My thesis on ML-Assisted sEMG analysis applied to fitness earned an honorable mention,
              demonstrating my passion for combining software engineering with cutting-edge technologies
              like Machine Learning and AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-700 px-4 py-2 rounded-full">
                <span className="text-blue-400 font-semibold">3.7</span> GPA
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-full">
                <span className="text-blue-400 font-semibold">Taiwan</span> Exchange Program
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-full">
                <span className="text-blue-400 font-semibold">ML</span> Thesis Recognition
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <div className="space-y-6">
                {/* Profile Photo */}
                <div className="flex justify-center">
                  <div className="relative">
                    <Image
                      src="/portfolio/mauricio-1.jpg"
                      alt="Mauricio Conigliaro"
                      width={192}
                      height={192}
                      className="w-48 h-48 object-cover rounded-2xl border-4 border-blue-400/50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* Code snippet */}
                <div className="font-mono text-sm text-gray-300">
                  <div className="text-blue-400">const developer = {'{'}</div>
                  <div className="ml-4 text-green-400">name: &quot;Mauricio Conigliaro&quot;,</div>
                  <div className="ml-4 text-green-400">role: &quot;Full-stack Developer&quot;,</div>
                  <div className="ml-4 text-green-400">education: &quot;Computer Science Engineer&quot;,</div>
                  <div className="ml-4 text-green-400">location: &quot;Asunción, Paraguay&quot;</div>
                  <div className="text-blue-400">{'}'}</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}