'use client';
import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy, FaAward } from 'react-icons/fa';

const experiences = [
  {
    title: 'Zero Trust Security – Virtual Internship',
    period: 'Jan 2025 – Mar 2025',
    type: 'Certificate',
    points: [
      'Worked on real-life enterprise scenarios implementing Zero Trust security architecture.',
      'Developed and deployed multi-factor authentication (MFA) and least privilege access policies.'
    ],
    icon: <FaCertificate className="h-6 w-6 text-indigo-500" />
  },
  {
    title: 'SIH Hackathon – Team Member',
    period: 'Oct 2023',
    type: 'Certificate',
    points: [
      'Contributed to a real-life government project addressing a civic-tech problem statement.',
      'Strengthened hands-on skills in full-stack development and agile problem solving.'
    ],
    icon: <FaTrophy className="h-6 w-6 text-indigo-500" />
  }
];

const achievements = [
  {
    title: 'YRC KIIT – Volunteer',
    type: 'Certificate',
    points: [
      'Contributed to organizing blood donation camps, health awareness drives, and community outreach programs.',
      'Developed communication and leadership skills through active participation in event planning and team coordination.'
    ],
    icon: <FaAward className="h-6 w-6 text-indigo-500" />
  },
  {
    title: 'ICDCIT Summit Participation',
    points: [
      'Attended keynote sessions and panel discussions featuring renowned international scholars and researchers',
      'Engaged in QA sessions with experts, gaining insights into emerging trends in machine learning, data privacy, and network'
    ],
    icon: <FaAward className="h-6 w-6 text-indigo-500" />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="section-title">Experience & Achievements</h2>
          <p className="section-description">
            My professional journey and key accomplishments that have shaped my career.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl lg:max-w-none"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
            <FaCertificate className="h-6 w-6 text-indigo-500" />
            Work Experience
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="card flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  {exp.icon}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    {exp.period && (
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{exp.period}</p>
                    )}
                  </div>
                </div>
                {exp.type && (
                  <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-400 w-fit mb-4 ring-1 ring-inset ring-green-600/20">
                    {exp.type}
                  </span>
                )}
                <ul className="mt-2 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl lg:max-w-none"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
            <FaTrophy className="h-6 w-6 text-indigo-500" />
            Achievements & Activities
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="card flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  {achievement.icon}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                </div>
                {achievement.type && (
                  <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-400 w-fit mb-4 ring-1 ring-inset ring-green-600/20">
                    {achievement.type}
                  </span>
                )}
                <ul className="mt-2 space-y-2">
                  {achievement.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 