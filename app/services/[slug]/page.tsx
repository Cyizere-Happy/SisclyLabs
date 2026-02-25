"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const serviceData: Record<string, {
    title: string;
    tagline: string;
    hook: string;
    steps: { year: string; title: string; description: string }[];
}> = {
    'brand-identity': {
        title: 'Brand Identity',
        tagline: 'Forging Visual Legacies',
        hook: 'A full brand system — logo, palette, typography, and guidelines — delivered in 7 days. No back-and-forth. Just results.',
        steps: [
            { year: '01', title: 'Discovery & Research', description: 'We immerse ourselves in your world — audience, competitors, culture. We map what makes you different.' },
            { year: '02', title: 'Strategy & Positioning', description: 'We define your brand pillars, tone of voice, and positioning framework. Words before visuals.' },
            { year: '03', title: 'Visual System Design', description: 'Logo, color, typography, motion — we craft a complete visual language that scales from business card to billboard.' },
            { year: '04', title: 'Brand Guidelines', description: 'We deliver a precise brand book with usage rules, component libraries, and real-world examples.' },
        ],
    },
    'ui-ux-design': {
        title: 'UI/UX Design',
        tagline: 'Engineering Experiences',
        hook: 'From wireframes to pixel-perfect high-fidelity prototype in 5 days. We move fast and we move precise. Your users will feel the difference.',
        steps: [
            { year: '01', title: 'User Research', description: 'Interviews, personas, and behavioral analysis. We understand the human before we touch the pixels.' },
            { year: '02', title: 'Information Architecture', description: 'Sitemaps, user flows, and wireframes. We blueprint the structure before adding any style.' },
            { year: '03', title: 'High-Fidelity Prototyping', description: 'Full interactive designs in Figma. Every transition, every micro-animation, precisely specified.' },
            { year: '04', title: 'Handoff & QA', description: 'Developer-ready design tokens, component specs, and QA review to guarantee pixel-perfect implementation.' },
        ],
    },
    'software-dev': {
        title: 'Software Development',
        tagline: 'Building the Machine',
        hook: 'A full-stack application — from zero to production-ready — in just 12 days. We\'ve done it before. We\'ll do it for you.',
        steps: [
            { year: '01', title: 'Technical Architecture', description: 'We select the right stack for your scale. API design, data modelling, and infrastructure planning.' },
            { year: '02', title: 'Agile Sprints', description: 'Two-week sprints with clear deliverables. You get demos, not status updates.' },
            { year: '03', title: 'Testing & QA', description: 'Unit, integration, and E2E tests. We ship with confidence, not fingers crossed.' },
            { year: '04', title: 'Deployment & Monitoring', description: 'CI/CD pipelines, cloud deployment, and real-time monitoring from day one.' },
        ],
    },
    'embedded-systems': {
        title: 'Embedded Systems',
        tagline: 'Where Code Meets Hardware',
        hook: 'Firmware validated in the field, shipped in under 2 weeks. When hardware meets a deadline, it\'s because we were behind the code.',
        steps: [
            { year: '01', title: 'Hardware Scoping', description: 'We audit your MCU, sensors, and peripherals to define the exact firmware boundaries.' },
            { year: '02', title: 'Driver & HAL Development', description: 'Low-level drivers and hardware abstraction layers for reliable hardware communication.' },
            { year: '03', title: 'RTOS Integration', description: 'FreeRTOS, Zephyr, or bare metal — we handle scheduling, memory, and concurrency.' },
            { year: '04', title: 'Field Testing & Validation', description: 'Exhaustive testing under real operating conditions. Your device ships ready for the field.' },
        ],
    },
    'motion-graphics': {
        title: 'Motion Graphics',
        tagline: 'Designing in Time',
        hook: 'A production-ready motion graphic — storyboard to final export — in a single day of working with us. One day. Done.',
        steps: [
            { year: '01', title: 'Script & Storyboard', description: 'Every great animation starts with a story. We write, frame, and board the narrative first.' },
            { year: '02', title: 'Style Frames', description: 'We define the visual language — color, type, texture, and motion principles — before animating a single frame.' },
            { year: '03', title: 'Animation Production', description: 'Frame-accurate motion in After Effects, Lottie, or Spline. Your brand, alive and in motion.' },
            { year: '04', title: 'Render & Export', description: 'Multiple format deliverables: MP4, WebM, Lottie JSON, and more, optimized for every platform.' },
        ],
    },
    'os-development': {
        title: 'OS Development',
        tagline: 'Building the Foundation',
        hook: 'A bootable OS with working kernel, process management, and basic userland — ready to test in 3 weeks. We build what others only document.',
        steps: [
            { year: '01', title: 'Kernel Architecture', description: 'Monolithic vs microkernel — we define the architecture based on your performance and security requirements.' },
            { year: '02', title: 'Memory & Process Management', description: 'Virtual memory, paging, process scheduling, and IPC built for reliability.' },
            { year: '03', title: 'Driver Subsystems', description: 'Device drivers, file systems, and network stacks — the full hardware bridge.' },
            { year: '04', title: 'Toolchain & Userland', description: 'We ship a working build environment and basic userland utilities so your OS is immediately usable.' },
        ],
    },
    'game-development': {
        title: 'Game Development',
        tagline: 'Worlds From Scratch',
        hook: 'A fully playable game prototype — mechanics tested, loop validated — in 10 days. If your idea is good, we\'ll prove it in a week and a half.',
        steps: [
            { year: '01', title: 'Game Design Document', description: 'Mechanics, loops, progression systems, and economy — fully documented before a line of code.' },
            { year: '02', title: 'Prototyping', description: 'A fast, playable prototype to validate core mechanics before committing to full production.' },
            { year: '03', title: 'Full Production', description: 'Art pipeline, audio integration, physics, and network code — built in Godot, Unity, or Unreal.' },
            { year: '04', title: 'Optimization & Launch', description: 'Performance profiling, platform certification, and launch-day deployment across target platforms.' },
        ],
    },
    '3d-modeling': {
        title: '3D Modeling & Design',
        tagline: 'Rendering the Future',
        hook: 'Studio-quality 3D models and photorealistic renders of your product, delivered in 48 hours. Looks real. Ships fast.',
        steps: [
            { year: '01', title: 'Concept & Reference', description: 'We gather references, define style and scale, and produce sketch concepts before opening any 3D software.' },
            { year: '02', title: 'High-Poly Modeling', description: 'Building the full-detail base mesh in Blender or Maya, with precise proportions and clean topology.' },
            { year: '03', title: 'Texturing & Material', description: 'PBR textures, UV mapping, and material shading that look real under any lighting condition.' },
            { year: '04', title: 'Rendering & Export', description: 'Studio-quality renders, turntable animations, and game-ready exports in FBX, GLTF, or OBJ.' },
        ],
    },
};

const fallbackService = {
    title: 'Service',
    tagline: 'Engineering Excellence',
    hook: 'We approach every problem with precision, artistry, and relentless focus on delivery.',
    steps: [
        { year: '01', title: 'Discovery', description: 'Deep understanding of your goals, constraints, and success metrics.' },
        { year: '02', title: 'Strategy', description: 'A clear plan with milestones, deliverables, and timelines.' },
        { year: '03', title: 'Execution', description: 'Rigorous, high-quality production with ongoing reviews.' },
        { year: '04', title: 'Delivery', description: 'Final handoff with full documentation and post-launch support.' },
    ],
};

export default function ServiceDetail() {
    const params = useParams();
    const slug = typeof params?.slug === 'string' ? params.slug : '';
    const data = serviceData[slug] ?? fallbackService;

    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* IPAC-Style Hero */}
            <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden bg-black">
                {/* Giant background title */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none px-12">
                    <motion.span
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="text-[9vw] font-black uppercase text-white/10 leading-none tracking-tighter text-center"
                    >
                        {data.title}
                    </motion.span>
                </div>

                {/* Floating White Card and Title */}
                <div className="relative z-10 px-8 pb-16 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-end justify-between gap-8">

                    {/* Left: Title */}
                    <div className="flex-1">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4"
                        >
                            Our Process
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight max-w-lg"
                        >
                            {data.tagline}
                        </motion.h1>
                    </div>

                    {/* Right: Floating Utility Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
                        className="w-full md:w-[420px] bg-white rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
                    >
                        <h2 className="text-lg font-black tracking-tighter mb-2 text-zinc-900">{data.tagline}</h2>
                        <p className="text-[12px] font-medium text-zinc-500 mb-8 leading-relaxed">{data.hook}</p>

                        <div className="flex gap-3">
                            {/* Mock Search */}
                            <div className="flex-1 flex items-center gap-2 bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3">
                                <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                                </svg>
                                <span className="text-[11px] font-medium text-zinc-400">Search resources...</span>
                            </div>

                            {/* Explore Button → Contact */}
                            <Link href="/contact" className="bg-black text-white text-[11px] font-black uppercase tracking-widest px-5 rounded-xl hover:bg-zinc-800 transition-colors flex items-center">
                                Explore
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Futureblox-style Workflow Section */}
            <section className="bg-white py-24 px-8 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16">

                    {/* Left: Section intro */}
                    <div className="md:w-1/3">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-4">How We Do It</p>
                        <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight mb-6">
                            Our Methodology
                        </h2>
                        <p className="text-[12px] font-medium text-zinc-500 leading-relaxed">
                            A refined, milestone-driven approach that keeps you in the loop at every stage of the process.
                        </p>
                        <Link href="/services" className="inline-flex items-center gap-2 mt-8 text-[11px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors">
                            <span>← All Services</span>
                        </Link>
                    </div>

                    {/* Right: Timeline */}
                    <div className="md:w-2/3 relative">
                        {/* Vertical line */}
                        <div className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-zinc-100" />

                        <div className="flex flex-col gap-12">
                            {data.steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex gap-8"
                                >
                                    {/* Dot + Year */}
                                    <div className="flex flex-col items-center pt-1">
                                        <div className="w-3.5 h-3.5 rounded-full bg-black border-4 border-white ring-1 ring-zinc-200 shrink-0 z-10" />
                                    </div>
                                    <div className="pb-2">
                                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-2">{step.year}</p>
                                        <h3 className="text-lg font-black tracking-tight text-black mb-2">{step.title}</h3>
                                        <p className="text-[12px] font-medium text-zinc-500 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black py-24 px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6"
                >
                    Ready to Build?
                </motion.h2>
                <p className="text-zinc-400 text-sm font-medium mb-10 max-w-md mx-auto">Let's turn your idea into something real — fast, polished, and ready to scale.</p>
                <Link
                    href="/contact"
                    className="inline-block bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] px-10 py-4 rounded-full hover:bg-zinc-100 transition-colors"
                >
                    Start a Project →
                </Link>
            </section>
        </main>
    );
}
