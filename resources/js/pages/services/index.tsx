import React from 'react';
import { Link } from '@inertiajs/react';
import { StudioLayout, useStudio } from '@/layouts/studio-layout';
import { studioServices } from '@/data/services-data';
import {
    ArrowRight,
    CheckCircle2,
    Clock,
    Cpu,
    FileText,
    Layers,
    ShieldCheck,
    Sparkles,
} from 'lucide-react';

export default function ServicesIndex() {
    const { openProjectModal } = useStudio();

    return (
        <StudioLayout
            title="Our Services — Architecture, Civil Engineering & 3D Visualization | AYRA STUDIO"
            description="Explore AYRA STUDIO's comprehensive architectural planning, seismic-resistant civil engineering, 4K 3D visualization, and luxury interior design services in Dhaka, Bangladesh."
        >
            {/* Dark Architectural Hero Section */}
            <section className="relative overflow-hidden bg-surface-dark pt-32 pb-20 lg:pt-40 lg:pb-28 text-white">
                {/* Architectural Grid Background Texture */}
                <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '36px 36px',
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono tracking-widest text-white/80 uppercase backdrop-blur-xs">
                            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                            <span>PRACTICE DISCIPLINES</span>
                        </div>

                        <h1 className="mt-6 font-sans text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] text-white">
                            Integrated architecture. <br />
                            <span className="font-semibold text-white">Uncompromising engineering.</span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl font-light">
                            From initial site contour evaluation to BNBC-compliant structural schematics and 4K photorealistic rendering, AYRA STUDIO offers complete end-to-end building design solutions.
                        </p>

                        {/* Quick Filter Jump Chips */}
                        <div className="mt-8 flex flex-wrap gap-2.5 pt-2">
                            {studioServices.map((service, index) => (
                                <a
                                    key={service.id}
                                    href={`#${service.id}`}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 transition-all hover:bg-white hover:text-foreground hover:scale-105"
                                >
                                    <span className="font-mono text-[10px] text-white/50">0{index + 1}</span>
                                    <span>{service.shortTitle}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth Disciplines Showcase */}
            <section className="py-20 lg:py-28 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-24 sm:space-y-32">
                    {studioServices.map((service, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <div
                                key={service.id}
                                id={service.id}
                                className="scroll-mt-28 border-b border-border pb-20 sm:pb-28 last:border-b-0 last:pb-0"
                            >
                                <div
                                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                                        isEven ? 'lg:flex-row-reverse' : ''
                                    }`}
                                >
                                    {/* Media Column (5 cols) */}
                                    <div
                                        className={`lg:col-span-5 ${
                                            isEven ? 'lg:order-2' : 'lg:order-1'
                                        }`}
                                    >
                                        <div className="group relative overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
                                            <div className="aspect-[4/3] w-full overflow-hidden">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Floating Info Pill */}
                                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-surface-dark/85 backdrop-blur-md border border-white/10 p-3.5 text-white">
                                                <div className="flex items-center gap-2 text-xs">
                                                    <Clock className="h-3.5 w-3.5 text-amber-300" />
                                                    <span>Turnaround: {service.timeline}</span>
                                                </div>
                                                <span className="text-[10px] font-mono tracking-widest uppercase text-white/60">
                                                    0{index + 1} / 04
                                                </span>
                                            </div>
                                        </div>

                                        {/* Software & Code Stack */}
                                        <div className="mt-5 flex flex-wrap items-center gap-2">
                                            <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground mr-1">
                                                Core Tools:
                                            </span>
                                            {service.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="rounded-md border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-foreground shadow-2xs"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Text Content Column (7 cols) */}
                                    <div
                                        className={`lg:col-span-7 space-y-6 ${
                                            isEven ? 'lg:order-1' : 'lg:order-2'
                                        }`}
                                    >
                                        <div className="space-y-2">
                                            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                                                DISCIPLINE 0{index + 1}
                                            </span>
                                            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground">
                                                {service.title}
                                            </h2>
                                            <p className="text-sm sm:text-base font-light text-muted-foreground italic">
                                                "{service.tagline}"
                                            </p>
                                        </div>

                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {service.fullDescription}
                                        </p>

                                        {/* Key Capabilities 2x2 Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                            {service.capabilities.slice(0, 4).map((cap, i) => (
                                                <div
                                                    key={i}
                                                    className="rounded-xl border border-border/80 bg-card p-4 transition-colors hover:border-foreground/30"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                                                        <h4 className="text-xs font-semibold text-foreground">
                                                            {cap.title}
                                                        </h4>
                                                    </div>
                                                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                                                        {cap.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Deliverables Checklist */}
                                        <div className="rounded-xl bg-surface-sand p-4 border border-border">
                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-2">
                                                <FileText className="h-3.5 w-3.5 text-foreground" />
                                                <span>Tangible Deliverables</span>
                                            </h4>
                                            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                                                {service.deliverables.map((deliv, di) => (
                                                    <li key={di} className="flex items-start gap-2">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-foreground shrink-0 mt-1.5" />
                                                        <span className="font-medium text-foreground">
                                                            {deliv.title}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-wrap items-center gap-4 pt-2">
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-xs font-medium text-background transition-all hover:opacity-90 active:scale-95"
                                            >
                                                <span>Read Full Specifications</span>
                                                <ArrowRight className="h-3.5 w-3.5" />
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => openProjectModal({ title: service.title })}
                                                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                                            >
                                                <span>Inquire for {service.shortTitle}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Deliverables Matrix Table */}
            <section className="py-20 bg-surface-sand border-y border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="max-w-2xl mb-12">
                        <span className="text-[11px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                            PACKAGE MATRIX
                        </span>
                        <h3 className="mt-2 text-3xl font-light text-foreground">
                            Comparison & Scope Inclusions
                        </h3>
                        <p className="mt-3 text-sm text-muted-foreground">
                            Every project is customized to your exact site requirements. Review what is standard across our four primary scopes.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
                        <table className="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr className="border-b border-border bg-muted/50 text-foreground">
                                    <th className="p-4 font-semibold uppercase tracking-wider">Service Scope Element</th>
                                    <th className="p-4 font-semibold text-center uppercase tracking-wider">Architecture</th>
                                    <th className="p-4 font-semibold text-center uppercase tracking-wider">Civil & Structural</th>
                                    <th className="p-4 font-semibold text-center uppercase tracking-wider">3D Visualization</th>
                                    <th className="p-4 font-semibold text-center uppercase tracking-wider">Interior Design</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border text-muted-foreground">
                                <tr>
                                    <td className="p-4 font-medium text-foreground">Site Contour & Topography Analysis</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-foreground">Statutory Authority Sanction Drawing (RAJUK)</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-foreground">Seismic Analysis & Soil Capacity Calculation</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-foreground">Bar Bending Schedule (BBS) & Steel Tonnage Optimization</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-foreground">Photorealistic 4K Daylight & Dusk Renders</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-foreground">Custom Joinery & Millwork Shop Drawings</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-foreground">Physical On-Site Engineering Oversight Visits</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">Optional</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">✓ (Key Pours)</td>
                                    <td className="p-4 text-center text-muted-foreground/40">—</td>
                                    <td className="p-4 text-center text-emerald-600 font-bold">Optional</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Dark CTA Banner */}
            <section className="relative overflow-hidden bg-surface-dark py-20 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
                    <h3 className="text-3xl sm:text-4xl font-light text-white">
                        Have a specific plot or project in mind?
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
                        Speak directly with our senior architect or civil engineer. We review plot dimensions, zoning, and project feasibility free of charge.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button
                            type="button"
                            onClick={() => openProjectModal()}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-wider text-foreground shadow-lg hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
                        >
                            <span>Start Architectural Briefing</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-medium text-white hover:bg-white/10 transition-colors"
                        >
                            <span>Contact Studio Office</span>
                        </Link>
                    </div>
                </div>
            </section>
        </StudioLayout>
    );
}
