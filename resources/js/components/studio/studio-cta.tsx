import React from 'react';
import { ArrowRight, Mail, MessageSquare, Phone } from 'lucide-react';

interface StudioCtaProps {
    onStartProject: () => void;
}

export function StudioCta({ onStartProject }: StudioCtaProps) {
    return (
        <section className="relative w-full overflow-hidden bg-surface-dark text-white py-14 sm:py-16">
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/studio/cta_bg.jpg"
                    alt="Architectural structure at dusk"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/75" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Left Column: Heading and Tagline */}
                    <div className="max-w-xl">
                        <span className="text-[10px] font-semibold tracking-[0.28em] text-white/60 uppercase">
                            LET'S BUILD TOGETHER
                        </span>
                        <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-medium tracking-tight text-white">
                            Have a project in mind?
                        </h2>
                        <p className="mt-2 text-xs sm:text-sm text-white/75 font-normal leading-relaxed">
                            Tell us what you're planning. We'll help you understand the right next step.
                        </p>
                    </div>

                    {/* Right Column: CTA Button + Contact Quick Links */}
                    <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                        {/* Start a Project Pill Button */}
                        <button
                            type="button"
                            onClick={onStartProject}
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold tracking-wide text-foreground shadow-md transition-all duration-200 hover:bg-white/95 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>Start a Project</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>

                        {/* Direct Contacts List */}
                        <div className="flex flex-wrap items-center gap-5 text-xs text-white/80">
                            {/* Phone */}
                            <a
                                href="tel:+8801700000000"
                                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                            >
                                <Phone className="h-3.5 w-3.5 text-white/60" />
                                <span>+880 1XXX-XXXXXX</span>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/8801700000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                            >
                                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                                <span>WhatsApp</span>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:hello@aiyrastudio.com"
                                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                            >
                                <Mail className="h-3.5 w-3.5 text-white/60" />
                                <span>hello@aiyrastudio.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
