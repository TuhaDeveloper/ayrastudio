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
            {/* Ayra Studio Official Emblem */}
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                    src="/images/studio/ayrastudio.png"
                    alt="Ayra Studio Symbol"
                    className="h-full w-full object-contain drop-shadow-sm"
                />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
                <span
                    className={`font-sans text-base font-bold tracking-[0.2em] transition-colors ${
                        isLight ? 'text-white' : isDark ? 'text-foreground' : 'text-inherit'
                    }`}
                >
                    AYRA STUDIO
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
