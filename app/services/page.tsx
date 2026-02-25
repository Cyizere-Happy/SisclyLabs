"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const services = [
  { id: 1, slug: 'brand-identity', title: 'Brand Identity', description: 'Crafting unique visual languages that resonate and build trust.', number: '01' },
  { id: 2, slug: 'ui-ux-design', title: 'UI/UX Design', description: 'Intuitive interfaces and seamless journeys for digital excellence.', number: '02' },
  { id: 3, slug: 'software-dev', title: 'Software Dev', description: 'Scalable, robust applications built with modern architectures.', number: '03' },
  { id: 4, slug: 'embedded-systems', title: 'Embedded Systems', description: 'Low-level engineering for hardware that moves the world.', number: '04' },
  { id: 5, slug: 'motion-graphics', title: 'Motion Graphics', description: 'Fluid animations that bring static designs to life.', number: '05' },
  { id: 6, slug: 'os-development', title: 'OS Development', description: 'Building the core foundations of modern computing.', number: '06' },
  { id: 7, slug: 'game-development', title: 'Game Development', description: 'Immersive worlds and mechanics for the next generation.', number: '07' },
  { id: 8, slug: '3d-modeling', title: '3D Modeling & Design', description: 'Creating high-fidelity spatial assets and immersive product visuals.', number: '08' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-8 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-4"
        >
          What We Build
        </motion.p>
        <div className="flex items-end justify-between mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[13vw] md:text-[7vw] font-black uppercase tracking-tighter leading-none text-black"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[11px] font-bold text-black/30 uppercase tracking-widest max-w-[160px] text-right hidden md:block"
          >
            Click a service to explore our methodology
          </motion.p>
        </div>

        {/* Service List */}
        <div className="flex flex-col">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group flex items-center gap-6 py-5 border-b border-zinc-100 hover:border-zinc-300 transition-colors"
              >
                <span className="text-[11px] font-black text-zinc-300 w-6 shrink-0">{s.number}</span>
                <h2 className="text-lg md:text-2xl font-black uppercase tracking-tighter text-black group-hover:translate-x-2 transition-transform duration-300">
                  {s.title}
                </h2>
                <p className="text-[11px] font-medium text-zinc-400 hidden md:block flex-1">{s.description}</p>
                <svg
                  className="w-4 h-4 text-zinc-200 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 shrink-0"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
