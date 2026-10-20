import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { StudioLayout, useStudio } from '@/layouts/studio-layout';
import { getServiceBySlug, studioServices } from '@/data/services-data';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Clock,
    FileCheck,
    Layers,
    Shield,
    Sparkles,
    Wrench,
} from 'lucide-react';

interface ServiceShowProps {
    slug: string;
}

export default function ServiceShow({ slug }: ServiceShowProps) {
    const { openProjectModal } = useStudio();
    const service = getServiceBySlug(slug) || studioServices[0];
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const otherServices = studioServices.filter((s) => s.slug !== service.slug);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <StudioLayout
            title={`${service.title} — AYRA STUDIO`}
            description={service.description}
        >
            {/* Architectural Hero Banner with Media Background */}
            <section className="relative min-h-[500px] flex items-end overflow-hidden bg-surface-dark text-white pt-32 pb-16 lg:pb-24">
                {/* Background Image with Dark Vignette Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover opacity-25 filter grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/85 to-surface-dark/40" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full">
                    {/* Back link */}
                    <div className="mb-6">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            <span>All Practice Disciplines</span>
                        </Link>
                    </div>

                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-mono tracking-widest uppercase text-white/90 backdrop-blur-xs">
                            <Sparkles className="h-3 w-3 text-amber-300" />
                            <span>PRACTICE SPECIALIZATION</span>
                        </div>

                        <h1 className="mt-4 font-sans text-3xl sm:text-5xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                            {service.title}
                        </h1>

                        <p className="mt-4 text-base sm:text-lg text-white/80 font-light leading-relaxed">
                            {service.tagline}
                        </p>

                        {/* Badges Bar */}
                        <div className="mt-8 flex flex-wrap gap-4 pt-2 border-t border-white/15 text-xs text-white/80">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-amber-300" />
                                <span>Timeline: <strong className="text-white font-medium">{service.timeline}</strong></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4 text-emerald-400" />
                                <span>Compliance: <strong className="text-white font-medium">{service.compliance}</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Narrative & Capabilities Section */}
            <section className="py-20 lg:py-28 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Left Main Content */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* Overview Text */}
                            <div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                    DISCIPLINE OVERVIEW
                                </span>
                                <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-foreground">
                                    The Approach & Architectural Standard
                                </h2>
                                <p className="mt-4 text-base leading-relaxed text-muted-foreground font-light">
                                    {service.fullDescription}
                                </p>
                            </div>

                            {/* Core Capabilities */}
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-6">
                                    Technical Scope & Capabilities
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {service.capabilities.map((cap, i) => (
                                        <div
                                            key={i}
                                            className="rounded-xl border border-border bg-card p-5 shadow-2xs transition-all hover:border-foreground/30 hover:shadow-sm"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-sand text-foreground font-mono text-xs font-semibold">
                                                    0{i + 1}
                                                </span>
                                                <h4 className="text-sm font-semibold text-foreground">
                                                    {cap.title}
                                                </h4>
                                            </div>
                                            <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                                                {cap.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Process Workflow Steps */}
                            <div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                    STEP-BY-STEP
                                </span>
                                <h3 className="mt-2 text-xl font-semibold text-foreground mb-6">
                                    How This Service Is Executed
                                </h3>

                                <div className="space-y-4">
                                    {service.processSteps.map((step) => (
                                        <div
                                            key={step.step}
                                            className="flex flex-col sm:flex-row sm:items-start gap-4 rounded-xl border border-border bg-card p-5"
                                        >
                                            <span className="font-mono text-lg font-bold text-foreground/40 sm:w-12">
                                                {step.step}
                                            </span>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold text-foreground">
                                                    {step.title}
                                                </h4>
                                                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Accordion */}
                            {service.faqs && service.faqs.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-6">
                                        Frequently Asked Questions
                                    </h3>
                                    <div className="space-y-3">
                                        {service.faqs.map((faq, idx) => {
                                            const isOpen = openFaq === idx;
                                            return (
                                                <div
                                                    key={idx}
                                                    className="overflow-hidden rounded-xl border border-border bg-card transition-colors"
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleFaq(idx)}
                                                        className="flex w-full items-center justify-between p-4 text-left text-xs sm:text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
                                                    >
                                                        <span>{faq.q}</span>
                                                        <ChevronDown
                                                            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                                                                isOpen ? 'rotate-180' : ''
                                                            }`}
                                                        />
                                                    </button>
                                                    {isOpen && (
                                                        <div className="border-t border-border/60 bg-muted/30 px-4 py-3.5 text-xs leading-relaxed text-muted-foreground">
                                                            {faq.a}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Sticky Sidebar */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Consultation Action Card */}
                            <div className="sticky top-28 rounded-2xl border border-border bg-card p-6 shadow-lg space-y-6">
                                <div>
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                        COMMISSION WORK
                                    </span>
                                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                                        Request {service.shortTitle} Service
                                    </h3>
                                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                                        Submit your plot size, requirements, and location for an architectural consultation and preliminary feasibility review.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => openProjectModal({ title: service.title })}
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95"
                                >
                                    <span>Start Project Briefing</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </button>

                                <div className="border-t border-border pt-4 space-y-4">
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
                                            <FileCheck className="h-3.5 w-3.5 text-foreground" />
                                            <span>Deliverables Included:</span>
                                        </h4>
                                        <ul className="space-y-2 text-xs text-muted-foreground">
                                            {service.deliverables.map((deliv, di) => (
                                                <li key={di} className="flex items-start gap-2">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                                    <span>
                                                        <strong className="font-medium text-foreground">{deliv.title}</strong> — {deliv.details}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="border-t border-border pt-4">
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
                                            <Wrench className="h-3.5 w-3.5 text-foreground" />
                                            <span>Software & Tooling:</span>
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {service.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="rounded-md border border-border bg-surface-sand px-2 py-1 text-[11px] font-medium text-foreground"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Disciplines Navigation */}
            <section className="py-16 bg-surface-sand border-t border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                                EXPLORE OTHER DISCIPLINES
                            </span>
                            <h3 className="text-xl font-semibold text-foreground">
                                Cross-Discipline Collaboration
                            </h3>
                        </div>
                        <Link
                            href="/services"
                            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:opacity-75 transition-opacity"
                        >
                            <span>View All Services</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {otherServices.map((other) => (
                            <Link
                                key={other.id}
                                href={`/services/${other.slug}`}
                                className="group block overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-foreground/30"
                            >
                                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted">
                                    <img
                                        src={other.image}
                                        alt={other.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h4 className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {other.shortTitle}
                                </h4>
                                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                                    {other.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </StudioLayout>
    );
}
