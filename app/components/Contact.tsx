'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 dark:bg-gray-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                <MdEmail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Email</h3>
              <a
                href="mailto:yuvraj9507@gmail.com"
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                yuvraj9507@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 dark:bg-gray-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                <MdLocationOn className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Bhubaneswar, India</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://github.com/Kishansingh890kiit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <FaGithub className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/in/kishan-kumar-783784221/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Phone: +91 7079704278
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 