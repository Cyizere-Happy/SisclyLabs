"use client";

import React, { useState, useEffect } from 'react';

const steps = [
    {
        title: "Welcome to young Innovators",
        description: "Explore the next generation of visual design. This guide will walk you through our mission and how to navigate the lab.",
        icon: (
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Visual Excellence",
        description: "Our core philosophy is simple: push boundaries. We focus on high-impact visual layouts that resonate with modern aesthetics.",
        icon: (
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Interactive Lab",
        description: "Scroll down to discover our interactive 'About Us' section. Each card presents a unique facet of our creative journey.",
        icon: (
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
        )
    },
    {
        title: "Global Aesthetic",
        description: "We draw inspiration from minimal, blocky, and industrial design patterns, combining them with high-end typography.",
        icon: (
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Join the Innovation",
        description: "Ready to start? Use the navigation buttons and explore the site. We are happy to have you here at the lab.",
        icon: (
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    }
];

export default function OnboardingGuide() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check for cookie
        const hasSeenGuide = document.cookie.split('; ').find(row => row.startsWith('has_seen_guide='));
        if (!hasSeenGuide) {
            // Delay it slightly for impact
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            handleComplete();
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleComplete = () => {
        // Set cookie for 30 days
        const date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = `has_seen_guide=true; expires=${date.toUTCString()}; path=/`;
        setIsVisible(false);
    };

    if (!isVisible) return null;

    const progress = ((currentStep + 1) / steps.length) * 100;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-500 animate-in fade-in">
            <div className="bg-white w-full max-w-[600px] rounded-[2.5rem] shadow-2xl p-10 relative overflow-hidden transition-all duration-300 scale-in-center">

                {/* Header: Progress Indicator */}
                <div className="flex flex-col gap-4 mb-8">
                    <div className="flex justify-between items-center text-xs font-black text-gray-400 uppercase tracking-widest">
                        <span>Guide</span>
                        <span>{currentStep + 1} / {steps.length}</span>
                    </div>

                    {/* Segmented Progress Bar */}
                    <div className="flex gap-2">
                        {steps.map((_, idx) => (
                            <div
                                key={idx}
                                className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${idx <= currentStep ? 'bg-black' : 'bg-gray-100'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Content: Main Body */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-10 transition-all duration-300">
                    {/* Visual Container */}
                    <div className="w-full md:w-[45%] aspect-[4/3] bg-gray-50 rounded-[2rem] flex items-center justify-center relative group overflow-hidden border border-gray-100/50 flex-shrink-0">
                        <div className="transition-transform duration-700 group-hover:scale-110">
                            {/* Larger Icons */}
                            {React.cloneElement(steps[currentStep].icon as React.ReactElement, { className: "w-20 h-20 text-gray-300" })}
                        </div>
                        {/* Play Button Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer">
                                <svg className="w-6 h-6 ml-1 text-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 text-left">
                        <h2 className="text-2xl font-black text-black tracking-tight leading-tight">
                            {steps[currentStep].title}
                        </h2>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            {steps[currentStep].description}
                        </p>
                    </div>
                </div>

                {/* Footer: Navigation Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={handlePrev}
                        disabled={currentStep === 0}
                        className={`flex-1 py-4 px-8 rounded-2xl font-black uppercase text-xs transition-all flex items-center justify-center gap-2 ${currentStep === 0 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                    >
                        ← Previous
                    </button>

                    <button
                        onClick={handleNext}
                        className="flex-[1.5] py-4 px-8 rounded-2xl bg-black text-white font-black uppercase text-xs hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] active:scale-95"
                    >
                        {currentStep === steps.length - 1 ? "Get Started →" : "Next →"}
                    </button>
                </div>

                {/* Close Button - Subtle Corner */}
                <button
                    onClick={handleComplete}
                    className="absolute top-8 right-8 text-gray-300 hover:text-black transition-colors"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            <style jsx>{`
        .scale-in-center {
          animation: scale-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
        @keyframes scale-in-center {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .fade-in {
          animation: fade-in 0.5s ease-out;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
        </div>
    );
}
