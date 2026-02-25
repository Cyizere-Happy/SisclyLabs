'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Spline from '@splinetool/react-spline';
import Lottie from 'lottie-react';
import contactAnimation from '../../public/Contact-us.json';

// --- TRUE REACT ERROR BOUNDARY ---
interface Props {
    children: ReactNode;
    fallback: ReactNode;
}

interface State {
    hasError: boolean;
}

class SplineErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Spline Error Caught:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

// --- MAIN WRAPPER ---
export default function SplineScene({ scene }: { scene: string }) {
    const [isSplineLoaded, setIsSplineLoaded] = React.useState(false);
    const [shouldInitialize, setShouldInitialize] = React.useState(false);

    // Initial delay to ensure browser stability before loading Spline
    React.useEffect(() => {
        const timer = setTimeout(() => setShouldInitialize(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const FallbackUI = (
        <div className="w-full h-full flex items-center justify-center p-12">
            <div className="w-full max-w-[400px]">
                <Lottie
                    animationData={contactAnimation}
                    loop={true}
                    className="opacity-80"
                />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 text-center mt-4">
                    Visual Backup Active — 3D Lab Isolated.
                </p>
            </div>
        </div>
    );

    return (
        <div className="w-full h-full relative">
            {!isSplineLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-white">
                    <div className="w-full max-w-[300px] opacity-40 grayscale">
                        <Lottie
                            animationData={contactAnimation}
                            loop={true}
                        />
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/10 text-center mt-2 animate-pulse">
                            Initializing 3D Lab...
                        </p>
                    </div>
                </div>
            )}

            <SplineErrorBoundary fallback={FallbackUI}>
                {shouldInitialize && (
                    <Spline
                        scene={scene}
                        onLoad={() => setIsSplineLoaded(true)}
                        onError={() => {
                            console.warn("Spline onError triggered");
                            // getDerivedStateFromError will handle the state change if it throws
                        }}
                    />
                )}
            </SplineErrorBoundary>
        </div>
    );
}
