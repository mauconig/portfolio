const projects = [
  {
    id: 1,
    title: 'ML-Assisted sEMG Fitness Analysis',
    description: 'Thesis project implementing Machine Learning algorithms for surface electromyography analysis in fitness applications. Received honorable mention for innovative approach.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'PyTorch', 'Machine Learning', 'Deep Learning', 'Data Analysis'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Enterprise Software Solutions',
    description: 'Developed tailored software solutions for major national initiatives using modern web technologies, focusing on modularity and scalability.',
    image: '/api/placeholder/600/400',
    technologies: ['PHP', 'Laravel', 'Java', 'PostgreSQL', 'Git'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Automated Testing Framework',
    description: 'Coordinated comprehensive software test cycles using multiple testing tools to ensure robust verification of applications.',
    image: '/api/placeholder/600/400',
    technologies: ['Playwright', 'Cypress', 'Maestro', 'Postman', 'Unit Testing'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 4,
    title: 'Full-stack Web Applications',
    description: 'Built responsive web applications with modern frontend frameworks and robust backend APIs, implementing best practices and design patterns.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    demoLink: '#',
    githubLink: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my work spanning Machine Learning, enterprise software, and modern web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  {project.id === 1 && <div className="text-gray-400 text-6xl">🧠</div>}
                  {project.id === 2 && <div className="text-gray-400 text-6xl">🏢</div>}
                  {project.id === 3 && <div className="text-gray-400 text-6xl">🔧</div>}
                  {project.id === 4 && <div className="text-gray-400 text-6xl">🌐</div>}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demoLink}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </a>
                  <a
                    href={project.githubLink}
                    className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievement */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-700">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
              <span className="text-blue-400 text-2xl">🏆</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Academic Recognition</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              My thesis on "ML-Assisted sEMG analysis applied to fitness" received an <strong className="text-blue-400">honorable mention</strong>
              from Universidad Politécnica Taiwán-Paraguay, recognizing innovative application of Machine Learning in healthcare technology.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>• GPA: 3.7</span>
              <span>• Computer Science Engineering</span>
              <span>• Exchange Program: NTUST, Taiwan</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://linkedin.com/in/mauricioconigliaro"
            className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-full transition-all duration-300"
          >
            <span>View More on LinkedIn</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}