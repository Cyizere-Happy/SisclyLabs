"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

const posts = [
    {
        id: 1,
        slug: 'shipping-mvp-in-12-days',
        category: 'Engineering',
        date: 'Feb 18, 2026',
        title: 'How We Shipped a Full-Stack MVP in 12 Days',
        excerpt: '"12 Days" chronicles how a single deadline redefined our engineering process. No fluff, no excuses — just a tight sprint, smart trade-offs, and a product in the hands of real users.',
        readTime: '8 min',
    },
    {
        id: 2,
        slug: 'design-system-in-5-days',
        category: 'Design',
        date: 'Feb 12, 2026',
        title: 'A Complete Design System in 5 Days: Our Process',
        excerpt: 'How do you build a scalable, production-ready component system in five days? You start with tokens, not components. This is that story.',
        readTime: '6 min',
    },
    {
        id: 3,
        slug: 'embedded-firmware-hard-truths',
        category: 'Embedded',
        date: 'Feb 5, 2026',
        title: 'Hard Truths About Embedded Firmware Development',
        excerpt: 'Hardware never lies. When your firmware breaks in the field there\'s no hotfix. We share the lessons learned the hard and expensive way.',
        readTime: '10 min',
    },
    {
        id: 4,
        slug: 'motion-graphics-one-day',
        category: 'Motion',
        date: 'Jan 29, 2026',
        title: 'Yes, a Motion Graphic in One Day Is Possible',
        excerpt: 'Speed doesn\'t mean cutting corners. It means knowing exactly where to start. Our full motion pipeline — from storyboard to final export in 24 hours.',
        readTime: '5 min',
    },
    {
        id: 5,
        slug: 'game-prototype-10-days',
        category: 'Games',
        date: 'Jan 22, 2026',
        title: 'From Game Concept to Playable Prototype in 10 Days',
        excerpt: 'Scope kills game projects. We use a tightly scoped GDD and rapid prototyping to validate mechanics before writing a single line of production code.',
        readTime: '7 min',
    },
    {
        id: 6,
        slug: 'why-we-love-os-development',
        category: 'Systems',
        date: 'Jan 15, 2026',
        title: 'Why We Love OS Development (And Why You Should Care)',
        excerpt: 'Most studios avoid kernel-level work. We run toward it. What makes operating system engineering so compelling — and commercially underrated.',
        readTime: '9 min',
    },
    {
        id: 7,
        slug: '3d-renders-48-hours',
        category: '3D Design',
        date: 'Jan 8, 2026',
        title: 'Studio-Quality 3D Renders in 48 Hours: Our Pipeline',
        excerpt: 'Clients always ask: how do you do it so fast? The answer is process. Our end-to-end 3D pipeline from concept to photorealistic output, documented.',
        readTime: '6 min',
    },
    {
        id: 8,
        slug: 'the-lab-philosophy',
        category: 'Culture',
        date: 'Jan 2, 2026',
        title: 'The Lab Never Sleeps: Our Philosophy on Speed & Quality',
        excerpt: 'Speed and quality are not opposites. They\'re both symptoms of the same thing: clarity. This is the SicilyLabs founding philosophy, written in full.',
        readTime: '11 min',
    },
];

export default function BlogPage() {
    const [active, setActive] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const featured = posts[active];

    const scrollLeft = () => {
        setActive(prev => Math.max(0, prev - 1));
        scrollRef.current?.scrollBy({ left: -220, behavior: 'smooth' });
    };

    const scrollRight = () => {
        setActive(prev => Math.min(posts.length - 1, prev + 1));
        scrollRef.current?.scrollBy({ left: 220, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-[#f9f9f9] font-sans flex flex-col">
            <Navbar />

            {/* Top search bar */}
            <div className="pt-28 px-8 max-w-6xl mx-auto w-full flex justify-between items-center">
                <div className="flex items-center gap-3 bg-white border border-zinc-100 rounded-xl px-4 py-2.5 shadow-sm w-64">
                    <svg className="w-3.5 h-3.5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search story, author, topic..."
                        className="bg-transparent text-[11px] font-medium text-zinc-600 placeholder:text-zinc-300 outline-none w-full"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                        <span className="text-white text-[9px] font-black">SL</span>
                    </div>
                    <span className="text-[11px] font-bold text-zinc-700 hidden sm:block">SicilyLabs</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                </div>
            </div>

            {/* Hero Section: Split */}
            <section className="flex-1 px-8 max-w-6xl mx-auto w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Left: Headline + CTA */}
                <div className="pt-4">
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-5"
                    >
                        The Hustle Logs
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] text-black mb-6"
                    >
                        Keep the<br />story going..
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[12px] font-medium text-zinc-500 leading-relaxed mb-8 max-w-xs"
                    >
                        Don't let the story end just yet. Real accounts from the lab — how we build, what we've learned, and what's next.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link
                            href={`/blog/${featured.slug}`}
                            className="inline-flex items-center gap-2 bg-black text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors"
                        >
                            Start reading →
                        </Link>
                    </motion.div>
                </div>

                {/* Right: Featured Article Info */}
                <div className="pt-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={featured.id}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm"
                        >
                            {/* Author row */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center shrink-0">
                                    <span className="text-white text-[9px] font-black">SL</span>
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-black">SicilyLabs</p>
                                    <p className="text-[9px] text-zinc-400 font-medium">{featured.date} · {featured.readTime} read</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-300 bg-zinc-50 px-3 py-1 rounded-full">{featured.category}</span>
                                </div>
                            </div>

                            <h2 className="text-lg font-black tracking-tighter text-black leading-tight mb-4">
                                {featured.title}
                            </h2>

                            <p className="text-[12px] font-medium italic text-zinc-500 leading-relaxed mb-6">
                                "{featured.excerpt}"
                            </p>

                            {/* Prev / Next arrows */}
                            <div className="flex items-center justify-between pt-4 border-t border-zinc-50">
                                <span className="text-[9px] font-black text-zinc-300 uppercase tracking-widest">{active + 1} of {posts.length}</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={scrollLeft}
                                        disabled={active === 0}
                                        className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-300 transition-all disabled:opacity-30"
                                    >
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={scrollRight}
                                        disabled={active === posts.length - 1}
                                        className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-300 transition-all disabled:opacity-30"
                                    >
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Horizontal Scrolling Cards */}
            <section className="px-8 max-w-6xl mx-auto w-full mt-12 pb-16">
                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {posts.map((post, i) => (
                        <motion.button
                            key={post.id}
                            onClick={() => setActive(i)}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className={`snap-start shrink-0 w-[200px] text-left rounded-2xl p-5 border transition-all duration-300 ${active === i
                                    ? 'bg-black text-white border-black shadow-xl scale-[1.02]'
                                    : 'bg-white text-black border-zinc-100 hover:border-zinc-300 hover:shadow-sm'
                                }`}
                        >
                            <span className={`text-[8px] font-black uppercase tracking-[0.2em] mb-3 block ${active === i ? 'text-zinc-400' : 'text-zinc-300'}`}>
                                {post.category}
                            </span>
                            <h3 className={`text-[12px] font-black tracking-tight leading-snug mb-3 ${active === i ? 'text-white' : 'text-black'}`}>
                                {post.title}
                            </h3>
                            <div className="flex justify-between items-center">
                                <span className={`text-[8px] font-medium ${active === i ? 'text-zinc-500' : 'text-zinc-300'}`}>{post.readTime}</span>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    onClick={e => e.stopPropagation()}
                                    className={`text-[8px] font-black uppercase ${active === i ? 'text-zinc-400 hover:text-white' : 'text-zinc-300 hover:text-black'} transition-colors`}
                                >
                                    Read →
                                </Link>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </section>
        </main>
    );
}
