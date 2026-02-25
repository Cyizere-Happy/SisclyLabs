'use client';

import React, { useState, useEffect } from 'react';

interface ProjectIconProps {
    label: string;
    icon: React.ReactNode;
}

function ProjectIcon({ label, icon }: ProjectIconProps) {
    return (
        <div className="flex flex-col items-center gap-1.5 group cursor-default">
            <div className="w-9 h-9 rounded-lg bg-zinc-50 border border-black/5 flex items-center justify-center text-black/60 group-hover:bg-black group-hover:text-white transition-all duration-300">
                {icon}
            </div>
            <span className="text-[8px] font-bold uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">{label}</span>
        </div>
    );
}

const projects = [
    {
        id: '01',
        title: 'STOCKA',
        accent: 'INV.',
        subtitle: 'Inventory & Ledger',
        tag: 'About project',
        description: 'STOCKA is a professional-grade dashboard designed for modern vendors to monitor stock levels in real-time and record debtors.',
        mirrored: false,
        icons: [
            { label: 'Inventory', svg: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg> },
            { label: 'Ledger', svg: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z" /></svg> },
            { label: 'Analytics', svg: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg> },
        ],
        mockup: (
            <div className="relative w-44 h-[360px] bg-zinc-950 rounded-[24px] border-[5px] border-zinc-900 shadow-2xl rotate-y-[-25deg] rotate-x-[10deg] rotate-z-[5deg] group-hover:rotate-y-[-15deg] transition-all duration-700">
                <div className="absolute inset-0 bg-white m-0.5 rounded-[20px] overflow-hidden flex flex-col p-4 font-sans text-left">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-5 h-0.5 bg-black/20 rounded-full" />
                        <div className="w-2 h-2 rounded-full border border-black/10 flex items-center justify-center"><div className="w-0.5 h-0.5 rounded-full bg-black/20" /></div>
                    </div>
                    <h4 className="text-sm font-black mb-0.5">STOCKA</h4>
                    <p className="text-[7px] text-black/40 font-bold uppercase tracking-tight mb-2">Inventory Ledger</p>
                    <div className="space-y-1.5 mb-3">
                        {[1, 2].map((i) => (
                            <div key={i} className="p-1.5 bg-zinc-50 border border-black/5 rounded-lg">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[7px] font-bold">Item {i}</span>
                                    <span className="text-[6px] font-black uppercase text-emerald-500">In Stock</span>
                                </div>
                                <div className="w-full bg-black/5 h-0.5 rounded-full"><div className="h-full bg-black w-2/3" /></div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto p-1.5 bg-black text-white rounded-lg flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
                        <span className="text-[6px] font-bold">K. Sam</span>
                        <span className="text-[6px] font-black ml-auto">$450</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: '02',
        title: 'NGWINO',
        accent: 'APP.',
        subtitle: 'Community Super-App',
        tag: 'Community impact',
        description: 'Ngwino is a community super-app handling real-time map interactions, event bookings, and secure digital payments.',
        mirrored: false,
        icons: [
            { label: 'Map Engine', svg: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7z" /><path d="M9 4v13" /><path d="M15 7v13" /></svg> },
            { label: 'Digital Pay', svg: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg> },
            { label: 'Ticketing', svg: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="M15 12h.01" /></svg> },
        ],
        mockup: (
            <div className="relative w-44 h-[360px] bg-zinc-950 rounded-[24px] border-[5px] border-zinc-900 shadow-2xl rotate-y-[-25deg] rotate-x-[10deg] rotate-z-[5deg] group-hover:rotate-y-[-15deg] transition-all duration-700">
                <div className="absolute inset-0 bg-white m-0.5 rounded-[20px] overflow-hidden flex flex-col p-4 font-sans text-left">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-5 h-0.5 bg-black/20 rounded-full" />
                        <div className="w-2 h-2 rounded-full bg-black/5" />
                    </div>
                    <h4 className="text-sm font-black mb-0.5">NGWINO</h4>
                    <p className="text-[7px] text-black/40 font-bold uppercase tracking-tight mb-2">Community Super-App</p>
                    <div className="space-y-2 mb-3">
                        <div className="w-full h-20 bg-zinc-100 rounded-lg flex items-center justify-center"><span className="text-[8px] font-black text-black/20">MAP VIEW</span></div>
                        <div className="flex gap-1.5">
                            <div className="flex-1 h-10 bg-zinc-50 border border-black/5 rounded-lg p-1.5"><div className="w-full h-1 bg-black/10 rounded mb-1" /><div className="w-2/3 h-1 bg-black/10 rounded" /></div>
                            <div className="flex-1 h-10 bg-black rounded-lg p-1.5"><div className="w-full h-1 bg-white/20 rounded mb-1" /><div className="w-2/3 h-1 bg-white/20 rounded" /></div>
                        </div>
                    </div>
                    <div className="mt-auto flex justify-between gap-1">
                        {[1, 2, 3].map(i => <div key={i} className={`w-7 h-7 rounded-full ${i === 2 ? 'bg-black' : 'bg-zinc-100'}`} />)}
                    </div>
                </div>
            </div>
        )
    },
    {
        id: '03',
        title: 'LAVENDER',
        accent: 'FASH.',
        subtitle: 'Retail E-commerce',
        tag: 'Fashion Tech',
        description: 'Lavender is a premium fashion e-commerce platform designed for visual storytelling and seamless retail operations.',
        mirrored: true,
        icons: [
            { label: 'Visual Story', svg: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" /></svg> },
            { label: 'Order Flow', svg: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> },
            { label: 'Retail Ops', svg: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3h18v18H3z" /><path d="M3 9h18" /><path d="M9 3v18" /></svg> },
        ],
        mockup: (
            <div className="relative w-44 h-[360px] bg-zinc-950 rounded-[24px] border-[5px] border-zinc-900 shadow-2xl rotate-y-[25deg] rotate-x-[10deg] rotate-z-[-5deg] group-hover:rotate-y-[15deg] transition-all duration-700">
                <div className="absolute inset-0 bg-white m-0.5 rounded-[20px] overflow-hidden flex flex-col p-4 font-sans text-left">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-5 h-0.5 bg-black/20 rounded-full" />
                        <div className="w-2 h-2 rounded-full border border-black/10 flex items-center justify-center"><div className="w-0.5 h-0.5 rounded-full bg-black/20" /></div>
                    </div>
                    <h4 className="text-sm font-black mb-0.5">LAVENDER</h4>
                    <p className="text-[7px] text-black/40 font-bold uppercase tracking-tight mb-2">Retail Boutique</p>
                    <div className="space-y-2 mb-3">
                        <div className="w-full h-24 bg-zinc-50 border border-black/5 rounded-lg overflow-hidden flex items-center justify-center">
                            <span className="text-[8px] font-black text-black/10 uppercase italic tracking-widest">Premium Look</span>
                        </div>
                        <div className="flex justify-between items-center px-1">
                            <div className="flex flex-col">
                                <span className="text-[7px] font-bold">Summer Gown</span>
                                <span className="text-[6px] opacity-40">$120.00</span>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center"><span className="text-white text-[8px]">+</span></div>
                        </div>
                    </div>
                    <div className="mt-auto h-8 flex items-center justify-center bg-zinc-50 border-t border-black/5">
                        <div className="flex gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                            <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                            <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

export default function ProjectShowcase() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIdx]);

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIdx((prev) => (prev + 1) % projects.length);
            setIsAnimating(false);
        }, 500);
    };

    const project = projects[currentIdx];

    return (
        <div className="bg-white overflow-hidden">
            {/* ── SECTION HEADER ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pt-8 md:pt-12 pb-4 border-t border-black/[0.03]">
                <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Work & Engineering</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-6 text-zinc-200">
                        Featured & <span className="text-black">Finished</span> Projects.
                    </h2>
                </div>
            </div>

            {/* ── CAROUSEL CONTAINER ── */}
            <div className="relative min-h-[500px] flex items-center py-12 md:py-20">
                <div className={`w-full max-w-4xl mx-auto px-8 flex flex-col items-center gap-12 md:gap-20 transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'} ${project.mirrored ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                    {/* Mockup Container */}
                    <div className={`relative w-full md:w-1/2 flex justify-center perspective-1000 scale-90 md:scale-95 group transition-all duration-1000 delay-100 ${isAnimating ? (project.mirrored ? '-rotate-y-12' : 'rotate-y-12') : 'rotate-y-0'}`}>
                        {project.mockup}

                        {/* Background Polish */}
                        <div className={`absolute -top-10 w-24 h-24 bg-zinc-50 border border-black/5 rounded-2xl -z-10 ${project.mirrored ? '-right-10 -rotate-12' : '-left-10 rotate-12'}`} />
                        <div className={`absolute -bottom-10 w-20 h-20 bg-zinc-100/50 rounded-full -z-10 blur-xl ${project.mirrored ? '-left-10' : '-right-10'}`} />
                    </div>

                    {/* Content Container */}
                    <div className={`w-full md:w-1/2 text-left ${project.mirrored ? 'md:pl-0 md:pr-10' : ''}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-zinc-300 font-bold text-sm tracking-tight">{project.id} /</span>
                            <span className="text-black font-black uppercase tracking-widest text-[9px]">{project.tag}</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4 leading-none">
                            {project.title} <span className="text-zinc-200">{project.accent}</span>
                        </h3>

                        <p className="text-black/60 text-sm md:text-base leading-relaxed mb-8 font-medium max-w-md">
                            {project.description}
                        </p>

                        {/* Technical Icons */}
                        <div className="flex gap-8 mb-10">
                            {project.icons.map((icon, i) => (
                                <ProjectIcon key={i} label={icon.label} icon={icon.svg} />
                            ))}
                        </div>

                        {/* Pagination Indicators */}
                        <div className="flex items-center gap-3">
                            {projects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setIsAnimating(true); setTimeout(() => { setCurrentIdx(i); setIsAnimating(false); }, 500); }}
                                    className={`h-1 rounded-full transition-all duration-500 ${currentIdx === i ? 'w-12 bg-black' : 'w-4 bg-zinc-100 hover:bg-zinc-200'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-\\[-25deg\\] { transform: rotateX(10deg) rotateY(-25deg) rotateZ(5deg); }
        .rotate-y-\\[25deg\\] { transform: rotateX(10deg) rotateY(25deg) rotateZ(-5deg); }
      `}</style>
        </div>
    );
}
