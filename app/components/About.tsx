'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBook, FaUsers } from 'react-icons/fa';

const education = [
  {
    school: 'KIIT University',
    degree: 'BTech in Computer Science Engineering',
    period: 'Sep 2022 – Jul 2026',
    details: 'CGPA: 8.2',
    icon: <FaGraduationCap className="h-6 w-6 text-indigo-500" />
  },
  {
    school: 'Sadhna Devi Vidyapeeth',
    degree: 'Higher Secondary Education',
    period: 'Completed in 2021',
    details: '12th CBSE Board Exam: 66%',
    icon: <FaBook className="h-6 w-6 text-indigo-500" />
  },
  {
    school: "St. Joseph's Public School",
    degree: 'Secondary Education',
    period: 'Completed in 2019',
    details: '10th CBSE Board Exam: 87%',
    icon: <FaBook className="h-6 w-6 text-indigo-500" />
  }
];

const skills = {
  'Languages': ['C/C++', 'HTML/CSS', 'JavaScript', 'SQL', 'Java', 'Python'],
  'Developer Tools': ['GitHub', 'React', 'Node.js', 'MongoDB', 'Vercel', 'Axios', 'Bootstrap', 'MERN stack', 'Power BI', 'MS Excel'],
  'Coursework': ['Data Structures', 'Operating System', 'Object-Oriented Programming', 'Database Management System'],
  'Non-technical skills': ['Leadership', 'Public Speaking', 'Team Management', 'Communication']
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            A passionate software developer with a strong foundation in computer science and a drive for creating impactful solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
            <FaGraduationCap className="h-6 w-6 text-indigo-500" />
            Education
          </h3>
          <div className="grid gap-8 lg:grid-cols-3">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="card flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  {edu.icon}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.school}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
                <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400 font-medium">{edu.period}</p>
                <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
            <FaCode className="h-6 w-6 text-indigo-500" />
            Skills & Competencies
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="card flex flex-col"
              >
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                  {category === 'Languages' && <FaCode className="h-5 w-5 text-indigo-500" />}
                  {category === 'Developer Tools' && <FaCode className="h-5 w-5 text-indigo-500" />}
                  {category === 'Coursework' && <FaBook className="h-5 w-5 text-indigo-500" />}
                  {category === 'Non-technical skills' && <FaUsers className="h-5 w-5 text-indigo-500" />}
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="skill-badge"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 