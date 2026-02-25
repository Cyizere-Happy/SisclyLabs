'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamic import for SplineScene to prevent SSR/Hydration errors
const SplineScene = dynamic(() => import('../components/SplineScene'), {
    ssr: false,
    loading: () => (
        <div className="text-[10px] font-bold uppercase tracking-widest opacity-20">
            Initializing 3D Engine...
        </div>
    ),
});

export default function ContactPage() {

    return (
        <main className="min-h-screen bg-white relative overflow-hidden font-sans pt-20 selection:bg-black selection:text-white">

            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <span
                    className="font-black uppercase tracking-tighter leading-none whitespace-nowrap opacity-[0.03]"
                    style={{ fontSize: 'clamp(100px, 20vw, 300px)' }}
                >
                    CONTACT
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-12 md:px-20 h-full flex flex-col md:flex-row relative z-10 gap-12 md:gap-20">

                {/* Left Side: Form */}
                <div className="w-full md:w-1/2 py-12 md:py-24 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-sm md:text-base font-bold text-black mb-6 italic"
                        >
                            You bring the spark. We’ll light the fire. 🔥
                        </motion.p>

                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 mb-2">Connect with us</p>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
                            Let's <span className="text-zinc-200">Start</span> <br /> Something.
                        </h1>

                        <form className="space-y-8 max-w-md">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="NAME"
                                    className="w-full bg-transparent border-b-2 border-black/10 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                                />
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="EMAIL ADDRESS"
                                    className="w-full bg-transparent border-b-2 border-black/10 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                                />
                            </div>

                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="SUBJECT"
                                    className="w-full bg-transparent border-b-2 border-black/10 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                                />
                            </div>

                            <div className="relative group">
                                <textarea
                                    placeholder="MESSAGE"
                                    rows={4}
                                    className="w-full bg-transparent border-b-2 border-black/10 py-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-black transition-colors placeholder:text-black/20 resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-black text-white py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-800 transition-colors shadow-2xl"
                            >
                                Send Message
                            </motion.button>
                        </form>

                        <div className="mt-16">
                            <span className="text-black text-xs md:text-sm font-bold tracking-wide italic opacity-40">
                                young Innovators
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Spline Container */}
                <div className="w-full md:w-1/2 h-[500px] md:h-screen relative flex items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className="w-full h-full relative"
                    >
                        <SplineScene
                            scene="https://prod.spline.design/seQ9kDrJEjIsd29a/scene.splinecode"
                        />

                        {/* Overlay to catch clicks if needed, or just let users interact with Spline */}
                        <div className="absolute inset-0 pointer-events-none border-[20px] border-white/40 backdrop-blur-[2px] rounded-[40px] m-4 md:m-12 border-dashed opacity-20" />
                    </motion.div>
                </div>

            </div>

            {/* Decorative Accents */}
            <div className="absolute top-1/4 -right-20 w-40 h-40 bg-zinc-50 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-zinc-100 rounded-full blur-[100px] -z-10" />

        </main>
    );
}
