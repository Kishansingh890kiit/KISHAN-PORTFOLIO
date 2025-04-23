'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 sm:pt-24 sm:pb-20 hero-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:max-w-5xl flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
                Hi, I'm <span className="gradient-text">Kishan Kumar</span>
              </h1>
              <p className="text-xl sm:text-2xl leading-8 text-gray-600 dark:text-gray-400 font-medium">
                Aspiring software developer with experience in full-stack projects and a keen interest in integrating intelligent automation solutions in domains like finance and security.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-lg">
                <FaMapMarkerAlt className="h-6 w-6 text-indigo-500" />
                <span>Bhubaneswar, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-lg">
                <MdEmail className="h-6 w-6 text-indigo-500" />
                <a href="mailto:yuvraj9507@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  yuvraj9507@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-lg">
                <FaPhone className="h-6 w-6 text-indigo-500" />
                <a href="tel:+917079704278" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  +91 7079704278
                </a>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-x-6"
            >
              <a
                href="mailto:yuvraj9507@gmail.com"
                className="btn-primary"
              >
                <MdEmail className="h-5 w-5 mr-2" />
                Contact Me
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Kishansingh890kiit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <FaGithub className="h-8 w-8" />
                </a>
                <a
                  href="https://linkedin.com/in/kishan-kumar-783784221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <FaLinkedin className="h-8 w-8" />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="profile-image-container w-72 h-72 sm:w-96 sm:h-96">
              <Image
                src="/1695356749402.jpg"
                alt="Kishan Kumar"
                width={384}
                height={384}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
