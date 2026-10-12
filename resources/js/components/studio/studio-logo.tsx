import React from 'react';

interface StudioLogoProps {
    className?: string;
    variant?: 'dark' | 'light' | 'auto';
    compact?: boolean;
}

export function StudioLogo({ className = '', variant = 'auto', compact = false }: StudioLogoProps) {
    const isLight = variant === 'light';
    const isDark = variant === 'dark';

    return (
        <a href="#hero" className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}>
            {/* Architectural Geometric N Mark */}
            <div
                className={`relative flex h-9 w-9 items-center justify-center rounded-sm border transition-colors ${
                    isLight
                        ? 'border-white/30 bg-white/10 text-white group-hover:border-white'
                        : isDark
                          ? 'border-foreground/20 bg-foreground/5 text-foreground group-hover:border-foreground'
                          : 'border-current/25 bg-current/5 group-hover:border-current'
                }`}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                >
                    <path d="M4 20L12 4l8 16" />
                    <path d="M7.5 14h9" />
                </svg>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
                <span
                    className={`font-sans text-base font-bold tracking-[0.2em] transition-colors ${
                        isLight ? 'text-white' : isDark ? 'text-foreground' : 'text-inherit'
                    }`}
                >
                    AIYRA STUDIO
                </span>
                {!compact && (
                    <span
                        className={`text-[9px] font-medium tracking-[0.26em] uppercase transition-colors ${
                            isLight ? 'text-white/60' : isDark ? 'text-muted-foreground' : 'text-inherit/60'
                        }`}
                    >
                        Architecture • Engineering • Design
                    </span>
                )}
            </div>
        </a>
    );
}
