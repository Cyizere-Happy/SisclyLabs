"use client";

import React from 'react';
import Navbar from '../components/Navbar';

export default function PortfolioCover() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-gray-100">
      {/* Container to handle the relative positioning of all elements */}
      <div className="relative w-full max-w-4xl px-8 py-16 flex flex-col items-center md:items-start">

        {/* Top left date */}
        <div className="absolute top-0 left-8 md:static mb-6 md:mb-10 lg:mb-12">
          <span className="text-black text-xs md:text-sm font-medium tracking-tight">
            2014~2017
          </span>
        </div>

        {/* Large background "VISUAL" */}
        <div className="relative w-full flex flex-col items-center md:items-start group">
          <h2 className="text-[12vw] md:text-[10vw] font-bold text-[#f5f5f5] leading-none select-none tracking-tight">
            VISUAL
          </h2>

          {/* Main "PORTFOLIO" text */}
          <div className="relative -mt-[6vw] md:-mt-[5vw] flex items-baseline w-full transition-all duration-700">
            <h1 className="text-[14vw] md:text-[12vw] font-extrabold text-black leading-none tracking-tighter z-10 uppercase">
              SICILYLABS
            </h1>
            <div className="flex-1 h-[2px] bg-black/40 self-end mb-[2.5vw] md:mb-[2.2vw] ml-1"></div>
          </div>

          {/* Large background "DESIGN" */}
          <h2 className="text-[12vw] md:text-[10vw] font-bold text-[#f5f5f5] leading-none select-none tracking-tight -mt-[4vw] md:-mt-[3vw]">
            DESIGN
          </h2>
        </div>

        {/* Author Name */}
        <div className="w-full flex justify-end mt-4 md:mt-0">
          <span className="text-black text-xs md:text-sm font-bold tracking-wide italic">
            young Innovators
          </span>
        </div>

      </div>

      {/* Expand Icon in bottom right */}
      <div className="absolute bottom-6 right-8 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      </div>

      {/* Global Style reset for this page to match the clean aesthetic */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          background-color: white;
          color: black;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </main>
  );
}
