import React, { useState } from 'react';
import { ArrowRight, Mouse } from 'lucide-react';

interface StudioHeroProps {
    onStartProject: () => void;
}

export function StudioHero({ onStartProject }: StudioHeroProps) {
    const [currentSlide, setCurrentSlide] = useState(1);

    const slides = [
        {
            id: 1,
            image: '/images/studio/hero.jpg',
            tag: 'ARCHITECTURE / ENGINEERING / DESIGN',
            headingLine1: 'Spaces designed',
            headingLine2: 'to be lived in.',
            headingLine3: 'Structures designed',
            headingLine4: 'to last.',
            description:
                'Architecture, civil engineering and visualization services — from the first idea to the final plan.',
        },
        {
            id: 2,
            image: '/images/studio/service_architecture.jpg',
            tag: 'SUSTAINABLE RESIDENTIAL DESIGN',
            headingLine1: 'Crafted with precision.',
            headingLine2: 'Built for generations.',
            headingLine3: 'Engineered with',
            headingLine4: 'passion.',
            description:
                'Transforming blueprints into enduring landmarks with cutting-edge structural engineering and aesthetic balance.',
        },
        {
            id: 3,
            image: '/images/studio/cta_bg.jpg',
            tag: 'VISIONARY URBAN CONCEPTS',
            headingLine1: 'Modern aesthetics',
            headingLine2: 'meet master structural',
            headingLine3: 'engineering and',
            headingLine4: 'elegance.',
            description:
                'End-to-end architectural workflows tailored for ambitious private residences and contemporary commercial developments.',
        },
    ];

    const activeSlide = slides[currentSlide - 1];

    return (
        <section
            id="hero"
            className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-surface-dark text-white pt-32 pb-12 lg:pt-36 lg:pb-16"
        >
            {/* Background Image with Cinematic Architectural Gradients */}
            <div className="absolute inset-0 z-0">
                <img
                    src={activeSlide.image}
                    alt="Luxury architectural residence at dusk"
                    className="h-full w-full object-cover object-center transition-all duration-1000 scale-105 animate-in fade-in zoom-in-95"
                />
                {/* Layered darkness for pristine legibility matching the design */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
            </div>

            {/* Main Hero Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 my-auto">
                <div className="max-w-2xl lg:max-w-3xl">
                    {/* Eyebrow Category */}
                    <div className="mb-4 inline-flex items-center gap-2">
                        <span className="text-[11px] font-semibold tracking-[0.28em] text-white/70 uppercase">
                            {activeSlide.tag}
                        </span>
                    </div>

                    {/* Main Display Headline */}
                    <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-[-0.02em] text-white drop-shadow-sm">
                        <span className="block font-medium">{activeSlide.headingLine1}</span>
                        <span className="block font-light text-white/95">{activeSlide.headingLine2}</span>
                        <span className="block font-medium">{activeSlide.headingLine3}</span>
                        <span className="block font-light text-white/95">{activeSlide.headingLine4}</span>
                    </h1>

                    {/* Lead Paragraph */}
                    <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-white/80 font-normal">
                        {activeSlide.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                        <button
                            onClick={onStartProject}
                            type="button"
                            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3 text-xs sm:text-sm font-medium tracking-wide text-foreground shadow-lg transition-all duration-200 hover:bg-white/95 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>Start Your Project</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>

                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 backdrop-blur-xs px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                        >
                            <span>Explore Our Work</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Scroll Indicator & Slide Pagination */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="flex items-center justify-between border-t border-white/15 pt-6 text-xs text-white/70">
                    {/* Left: Scroll to explore */}
                    <a
                        href="#services"
                        className="group flex items-center gap-2.5 transition-colors hover:text-white"
                    >
                        <div className="flex h-7 w-4 items-center justify-center rounded-full border border-white/40 group-hover:border-white">
                            <span className="h-1.5 w-0.5 rounded-full bg-white animate-bounce" />
                        </div>
                        <span className="text-[11px] font-medium tracking-wider">Scroll to explore</span>
                    </a>

                    {/* Right: Slide Pagination */}
                    <div className="flex items-center gap-4">
                        <span className="text-[11px] font-mono tracking-widest text-white">
                            0{currentSlide}
                        </span>
                        <div className="flex items-center gap-1.5">
                            {slides.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => setCurrentSlide(s.id)}
                                    type="button"
                                    aria-label={`Go to slide ${s.id}`}
                                    className={`h-[2px] transition-all duration-300 ${
                                        currentSlide === s.id ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/60'
                                    }`}
                                />
                            ))}
                        </div>
                        <span className="text-[11px] font-mono tracking-widest text-white/50">
                            0{slides.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
