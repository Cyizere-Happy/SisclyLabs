'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavLinkProps {
    label: string;
    href: string;
    dropdown?: string[];
}

function NavLink({ label, href, dropdown }: NavLinkProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative group h-full flex flex-col items-center justify-center px-3"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Top indicator (visible on hover) */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

            <Link
                href={href}
                className="text-[10px] font-black uppercase tracking-wider text-black/60 group-hover:text-black transition-colors flex items-center gap-1"
            >
                {label}
                {dropdown && (
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-300 text-black/40">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                )}
            </Link>

            {/* Dropdown Menu */}
            {dropdown && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-40 bg-white border border-black/5 shadow-xl rounded-lg overflow-hidden transition-all duration-300 z-[110] ${isOpen ? 'opacity-100 translate-y-2 visible' : 'opacity-0 translate-y-4 invisible'}`}>
                    <div className="h-[2px] w-full bg-black" />
                    <div className="py-1">
                        {dropdown.map((item, idx) => (
                            <Link
                                key={idx}
                                href="#"
                                className="block px-3 py-1.5 text-[9px] font-bold uppercase tracking-tight text-black/60 hover:text-black hover:bg-zinc-50 transition-all border-b border-black/[0.02] last:border-0"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-full max-w-3xl px-4 pointer-events-none">
            <div className="w-full bg-white/80 backdrop-blur-md border border-black/5 rounded-full h-11 shadow-2xl pointer-events-auto flex items-center justify-between px-5 relative transition-all duration-300">

                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                            <span className="text-[8px] font-black">S</span>
                        </div>
                        <span className="text-xs font-black tracking-tighter text-black uppercase hidden sm:block">SICILYLABS</span>
                    </Link>
                </div>

                {/* Right: Links Grouped */}
                <div className="flex h-full items-center">
                    <NavLink label="Home" href="/" />
                    <NavLink label="Tutorial" href="#" dropdown={['WordPress Template', 'Google Adsense', 'Bootstrap Developing', 'Game Design']} />
                    <NavLink label="Portfolio" href="/portfolio" dropdown={['UI/UX Design', 'Motion Graphics', 'Embedded Systems', 'OS Development']} />
                    <NavLink label="Blog" href="#" />
                    <NavLink label="Our Team" href="#" dropdown={['Project Managers', 'Designers', 'Engineers', 'QA Leads']} />
                    <NavLink label="Contact Us" href="#" />
                </div>
            </div>
        </nav>
    );
}
