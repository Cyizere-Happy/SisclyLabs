'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene({ scene }: { scene: string }) {
    const [hasError, setHasError] = React.useState(false);

    // Simple error boundary logic
    React.useEffect(() => {
        const handleError = (error: ErrorEvent) => {
            if (error.message.includes('position') || error.message.includes('Spline')) {
                console.warn('Spline initialization issue detected, handling gracefully.');
                setHasError(true);
            }
        };

        window.addEventListener('error', handleError);
        return () => window.removeEventListener('error', handleError);
    }, []);

    if (hasError) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-zinc-50 border border-black/5 rounded-[40px] m-12 border-dashed opacity-20">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 text-center px-6">
                    3D Scene unavailable. <br /> Use the form on the left.
                </span>
            </div>
        );
    }

    return (
        <Spline
            scene={scene}
            onError={() => setHasError(true)}
        />
    );
}
