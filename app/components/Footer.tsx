'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HillPath = ({ d, fill, delay }: { d: string, fill: string, delay: number }) => (
    <motion.path
        d={d}
        fill={fill}
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay, ease: "circOut" }}
        viewport={{ once: true }}
    />
);

export default function Footer() {
    return (
        <footer className="w-full relative overflow-hidden bg-white mt-12 pb-12">

            {/* Minimal SVG 3D Simulation (Subtle & Compact) */}
            <div className="absolute inset-x-0 bottom-0 h-[200px] z-0 overflow-hidden opacity-60 pointer-events-none">
                <svg
                    viewBox="0 0 1440 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full object-cover"
                    preserveAspectRatio="xMidYMin slice"
                >
                    <HillPath
                        d="M0 100 C400 50 800 150 1440 100 V200 H0 V100 Z"
                        fill="#f4f4f5"
                        delay={0.4}
                    />
                    <HillPath
                        d="M0 150 C500 100 1000 200 1440 150 V200 H0 V150 Z"
                        fill="#e4e4e7"
                        delay={0.2}
                    />
                    <HillPath
                        d="M0 180 C600 150 1200 210 1440 180 V200 H0 V180 Z"
                        fill="#27272a"
                        delay={0}
                    />
                </svg>
            </div>

            {/* Simple & Clean Content Layer */}
            <div className="relative z-10 max-w-6xl mx-auto px-8 pt-12">

                {/* Top Grid: Minimal Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <h2 className="text-sm font-black uppercase tracking-tighter mb-4 text-black">SICILYLABS</h2>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
                            Visual Engineering Studio.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-300 mb-2">Work</span>
                        {['Services', 'Portfolio', 'Studio'].map(item => (
                            <a key={item} href="#" className="text-[11px] font-bold uppercase text-zinc-600 hover:text-black transition-colors">{item}</a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-300 mb-2">Connect</span>
                        {['Instagram', 'LinkedIn', 'Twitter'].map(item => (
                            <a key={item} href="#" className="text-[11px] font-bold uppercase text-zinc-600 hover:text-black transition-colors">{item}</a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-300 mb-2">Lab</span>
                        <p className="text-[11px] font-bold uppercase text-zinc-500">
                            Available for <br /> Q4 2026.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar: Ultra Clean */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-zinc-100 gap-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-300">
                        © 2026 SICILYLABS. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex items-center gap-6">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-200">
                            Simulated Horizon V4.0
                        </span>
                        <div className="w-2 h-2 rounded-full bg-zinc-100 animate-pulse" />
                    </div>
                </div>

                {/* Branding Hook at the very bottom */}
                <div className="mt-24 text-center">
                    <p className="text-[12vw] font-black text-black/5 leading-none select-none uppercase tracking-tighter">
                        SicilyLabs
                    </p>
                </div>
            </div>
        </footer>
    );
}
