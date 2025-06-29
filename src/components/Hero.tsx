'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-accent text-white"
    >
  
      <motion.div
        className="z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.img
          src="C:\Users\HP\OneDrive\Dev-Cpp\Documents\portfolio page\my-portfolio\pf.jpg"
          alt=""
          className="w-40 h-40 rounded-full mb-6 border-4 border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-4"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Hi, I&apos;m <span className="text-gray-800">Rameez</span> Hoda
        </motion.h1>

        <motion.p
          className="max-w-xl text-xl md:text-2xl mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          A Computer Science student at IBA, passionate about data analytics and web development.
        </motion.p>

        <motion.div
          className="flex space-x-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            View Experience
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
