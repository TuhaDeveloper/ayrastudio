import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, X } from 'lucide-react';

interface ProcessStep {
    number: string;
    title: string;
    description: string;
    deepDive: string;
}

const stepsData: ProcessStep[] = [
    {
        number: '01',
        title: 'Understand',
        description: 'We learn about your requirements, site, budget and goals.',
        deepDive:
            'We conduct an in-depth site inspection, analyze terrain, sunlight angles, local bylaws (RAJUK/Paurashava), and discuss your lifestyle or commercial objectives to establish clear project boundaries.',
    },
    {
        number: '02',
        title: 'Plan',
        description: 'We develop the initial concept, planning and technical direction.',
        deepDive:
            'Our architects create preliminary zoning layouts, spatial flow diagrams, and volume studies. We evaluate initial feasibility with civil engineers before moving into aesthetic development.',
    },
    {
        number: '03',
        title: 'Design',
        description: 'Architecture, drawings, 3D visualization and engineering work.',
        deepDive:
            'We translate concepts into high-precision CAD plans, 3D photorealistic renderings, structural analysis models, and electrical/sanitary infrastructure documentation.',
    },
    {
        number: '04',
        title: 'Refine',
        description: 'We review, adjust and finalize the design with you.',
        deepDive:
            'Through collaborative sessions, we fine-tune finishes, door-window specifications, and structural parameters based on your feedback until every millimeter satisfies your expectations.',
    },
    {
        number: '05',
        title: 'Deliver',
        description: 'You receive the finalized drawings, visualizations and documentation.',
        deepDive:
            'You receive the full architectural dossier: stamped statutory drawings, 4K render albums, structural calculation books, BBS rebar sheets, and optional on-site supervision assistance.',
    },
];

export function StudioProcess() {
    const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);

    return (
        <section id="how-we-work" className="relative bg-background py-20 lg:py-28 border-t border-border">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* 2-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-4">
                        <span className="text-[11px] font-semibold tracking-[0.26em] text-muted-foreground uppercase">
                            HOW WE WORK
                        </span>
                        <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-normal leading-tight tracking-[-0.01em] text-foreground">
                            A simple process, <br />
                            clear at every step.
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            We keep things transparent and collaborative, so you always know what's
                            happening next.
                        </p>

                        <div className="mt-8">
                            <button
                                type="button"
                                onClick={() => setSelectedStep(stepsData[0])}
                                className="group inline-flex items-center gap-2 text-xs font-semibold text-foreground transition-colors hover:text-muted-foreground"
                            >
                                <span>Learn More</span>
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: 5 Sequential Steps */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                            {stepsData.map((step, idx) => (
                                <div
                                    key={step.number}
                                    onClick={() => setSelectedStep(step)}
                                    className="group cursor-pointer flex flex-col justify-between rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:shadow-md hover:border-foreground/30 hover:-translate-y-1"
                                >
                                    <div>
                                        {/* Step Number */}
                                        <div className="flex items-center justify-between border-b border-border pb-3">
                                            <span className="text-xs font-mono font-medium text-foreground tracking-wider">
                                                {step.number}
                                            </span>
                                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>

                                        {/* Step Title */}
                                        <h3 className="mt-3 font-sans text-sm font-semibold text-card-foreground group-hover:text-primary">
                                            {step.title}
                                        </h3>

                                        {/* Step Description */}
                                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Deep Dive Step Modal */}
            {selectedStep && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                    <div className="relative w-full max-w-lg rounded-xl border border-border bg-card p-6 sm:p-8 shadow-2xl animate-in zoom-in-95">
                        <button
                            onClick={() => setSelectedStep(null)}
                            type="button"
                            aria-label="Close dialog"
                            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-bold text-foreground">
                                Step {selectedStep.number}
                            </span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Detailed Phase Breakdown
                            </span>
                        </div>

                        <h3 className="mt-3 text-2xl font-semibold text-foreground">
                            {selectedStep.title} Phase
                        </h3>

                        <p className="mt-3 text-sm text-foreground/80 leading-relaxed font-normal">
                            {selectedStep.description}
                        </p>

                        <div className="mt-4 rounded-lg bg-surface-sand p-4 border border-border">
                            <p className="text-xs leading-relaxed text-foreground">
                                {selectedStep.deepDive}
                            </p>
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={() => setSelectedStep(null)}
                                type="button"
                                className="rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
