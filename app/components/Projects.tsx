'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJava, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiJavascript, SiPython } from 'react-icons/si';

const projects = [
  {
    title: 'Zerodha Clone – India\'s Largest Stock Trading Platform',
    period: 'Mar 2025 - Apr 2025',
    description: 'Built a full-stack clone of Zerodha with React (frontend) and Node.js + MongoDB (backend), enabling a seamless trading simulation experience. Integrated third-party APIs and ensured secure data transmission for simulated trading functions.',
    github: 'https://github.com/Kishansingh890kiit/zerodha-clone',
    demo: 'https://zerodha-clone-demo.vercel.app',
    technologies: ['React', 'Node.js', 'MongoDB', 'API Integration'],
    icons: [
      <FaReact key="react" className="h-5 w-5 text-blue-400" />,
      <FaNodeJs key="node" className="h-5 w-5 text-green-500" />,
      <SiMongodb key="mongo" className="h-5 w-5 text-green-600" />
    ]
  },
  {
    title: 'Parking Lot System using OOPJ',
    period: 'Jan 2025 – Feb 2025',
    description: 'Applied Low-Level Design patterns (e.g., Singleton, Strategy) and class-based modeling to simulate components like ParkingManager, Ticket, Vehicle, and Slot for future scalability. Applied OOP concepts like inheritance and polymorphism to model vehicle types and slot categories effectively.',
    github: 'https://github.com/Kishansingh890kiit/parking-lot-system',
    technologies: ['Java', 'OOP', 'Design Patterns'],
    icons: [
      <FaJava key="java" className="h-5 w-5 text-red-500" />
    ]
  },
  {
    title: 'SHL Assessment Recommendation System',
    period: 'Apr 2025',
    description: 'Created an AI-driven tool to recommend SHL assessments based on job descriptions, enhancing hiring efficiency by matching roles with the most relevant tests using natural language processing. Built and deployed a complete solution with an intuitive UI and robust backend, integrating GenAI (Gemini Pro), real-time recommendations, and dynamic search to support smarter recruitment decisions.',
    github: 'https://github.com/Kishansingh890kiit/shl-recommendation',
    demo: 'https://shl-recommendation.vercel.app',
    technologies: ['AI', 'NLP', 'React', 'Node.js', 'Gemini Pro'],
    icons: [
      <FaReact key="react" className="h-5 w-5 text-blue-400" />,
      <FaNodeJs key="node" className="h-5 w-5 text-green-500" />,
      <SiPython key="python" className="h-5 w-5 text-blue-500" />
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A showcase of my key projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="project-card flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {project.icons.map((icon, idx) => (
                    <div key={idx} className="h-8 w-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center border border-gray-200 dark:border-gray-600 shadow-sm">
                      {icon}
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              </div>
              <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400 font-medium">{project.period}</p>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="skill-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <FaGithub className="h-5 w-5" />
                  View on GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <FaExternalLinkAlt className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 