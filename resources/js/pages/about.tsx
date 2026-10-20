import React from 'react';
import { Link } from '@inertiajs/react';
import { StudioLayout, useStudio } from '@/layouts/studio-layout';
import {
    ArrowRight,
    Award,
    Building2,
    CheckCircle2,
    Compass,
    Eye,
    HardHat,
    HeartHandshake,
    ShieldCheck,
    Sparkles,
    Users,
} from 'lucide-react';

export default function About() {
    const { openProjectModal } = useStudio();

    const stats = [
        { label: 'Projects Planned', value: '150+' },
        { label: 'Years of Practice', value: '12+' },
        { label: 'RAJUK & Code Compliance', value: '100%' },
        { label: 'Satisfied Homeowners', value: '98%' },
    ];

    const principles = [
        {
            icon: Compass,
            title: 'Contextual Architecture',
            desc: 'Every plot possesses unique micro-climates, sun trajectories, and urban constraints. We design specifically for orientation, natural daylight, and cross-ventilation.',
        },
        {
            icon: ShieldCheck,
            title: 'Seismic & Structural Rigor',
            desc: 'Our engineering calculations conform rigorously to BNBC 2020 and international seismic standards. We prioritize life-safety and foundation longevity above all.',
        },
        {
            icon: Sparkles,
            title: 'Honesty of Materials',
            desc: 'We celebrate raw materiality—tactile fair-faced concrete, warm local timber, earthy terracotta bricks, and low-emissivity glass that age gracefully.',
        },
        {
            icon: HeartHandshake,
            title: 'Transparent Collaboration',
            desc: 'From preliminary floor plans to detailed bar bending schedules, we maintain complete transparency with clients, builders, and statutory authorities.',
        },
    ];

    const team = [
        {
            name: 'K. M. Rahman',
            role: 'Principal Architect & Founder',
            bio: 'Over a decade leading contemporary residential and commercial master planning with an emphasis on minimalist tropical architecture.',
            specialty: 'Spatial Concepts • Master Planning',
        },
        {
            name: 'Engr. S. I. Chowdhury',
            role: 'Chief Structural Engineer (PE)',
            bio: 'Specialist in high-rise seismic analysis, cast-in-situ deep piling, and finite element modeling compliant with BNBC 2020.',
            specialty: 'Seismic Analysis • Soil Mechanics',
        },
        {
            name: 'Tanvir Hossain',
            role: 'Head of 3D CGI & Visualization',
            bio: 'Expert in architectural lighting simulation, 4K ray-traced rendering, and cinematic virtual reality walkthroughs.',
            specialty: 'Corona / V-Ray • Unreal Engine',
        },
        {
            name: 'A. B. Siddique',
            role: 'Lead MEP & On-Site Coordinator',
            bio: 'Oversees plumbing, electrical shafts, fire protection integration, and on-site concrete pour inspections.',
            specialty: 'MEP Integration • Site Supervision',
        },
    ];

    return (
        <StudioLayout
            title="About Us — Architectural Heritage & Engineering Rigor | AYRA STUDIO"
            description="Learn about AYRA STUDIO's philosophy, multidisciplinary leadership, and commitment to contextual architecture and seismic safety in Bangladesh."
        >
            {/* Dark Architectural Hero Header */}
            <section className="relative overflow-hidden bg-surface-dark pt-32 pb-20 lg:pt-40 lg:pb-28 text-white">
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono tracking-widest text-white/80 uppercase backdrop-blur-xs">
                            <Building2 className="h-3.5 w-3.5 text-amber-300" />
                            <span>ABOUT AYRA STUDIO</span>
                        </div>

                        <h1 className="mt-6 font-sans text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] text-white">
                            Where architectural vision meets <br />
                            <span className="font-semibold text-white">structural precision.</span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl font-light">
                            AYRA STUDIO is a full-service architectural and civil engineering practice based in Dhaka. We bridge conceptual spatial artistry with scientific structural calculation so your building is as durable as it is breathtaking.
                        </p>
                    </div>

                    {/* Stats Counter Bar */}
                    <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/15">
                        {stats.map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-light text-white">
                                    {stat.value}
                                </span>
                                <p className="text-xs tracking-wider uppercase text-white/60 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story & Philosophy Section */}
            <section className="py-20 lg:py-28 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                                OUR STORY & MANIFESTO
                            </span>
                            <h2 className="font-sans text-3xl sm:text-4xl font-normal text-foreground leading-tight">
                                Built on the belief that a structure must inspire everyday life.
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                                Founded by architects and civil engineers who recognized a critical disconnect in the industry: aesthetic designs often lacked structural feasibility, while strictly engineered plans neglected the warmth, light, and soul of living spaces.
                            </p>

                            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                                At AYRA STUDIO, architecture and engineering work as one cohesive unit from day zero. When an architect sketches a cantilevered terrace or high-ceiling atrium, our structural engineers model the load distribution simultaneously. The result is pure elegance without compromising safety or budget.
                            </p>

                            <div className="pt-2">
                                <div className="rounded-xl border border-border bg-surface-sand p-5 space-y-2">
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-2">
                                        <Award className="h-4 w-4 text-amber-600" />
                                        <span>Our Statutory Commitment</span>
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        All our projects strictly comply with the Bangladesh National Building Code (BNBC 2020), RAJUK planning parameters (FAR, MGC, setback), and municipality fire codes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Media Showcase Grid */}
                        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-md">
                                    <img
                                        src="/images/studio/project_residence.jpg"
                                        alt="Residential Project by Ayra Studio"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square overflow-hidden rounded-2xl bg-muted shadow-md">
                                    <img
                                        src="/images/studio/service_civil.jpg"
                                        alt="Structural Engineering Precision"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="aspect-square overflow-hidden rounded-2xl bg-muted shadow-md">
                                    <img
                                        src="/images/studio/project_interior.jpg"
                                        alt="Interior Spatial Architecture"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-md">
                                    <img
                                        src="/images/studio/project_duplex.jpg"
                                        alt="Contemporary Duplex Design"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Design Principles Grid */}
            <section className="py-20 bg-surface-sand border-y border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="max-w-2xl mb-14">
                        <span className="text-[11px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                            OUR CORNERSTONES
                        </span>
                        <h3 className="mt-2 text-3xl font-light text-foreground">
                            The Four Architectural Pillars
                        </h3>
                        <p className="mt-3 text-sm text-muted-foreground">
                            Every project that leaves our drawing board is measured against four foundational criteria.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-foreground/30 hover:-translate-y-1"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-sand text-foreground mb-4">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h4 className="text-base font-semibold text-foreground">
                                        {item.title}
                                    </h4>
                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Studio Leadership & Team */}
            <section className="py-20 lg:py-28 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                        <div className="max-w-2xl">
                            <span className="text-[11px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                                THE MINDS BEHIND AYRA
                            </span>
                            <h3 className="mt-2 text-3xl font-light text-foreground">
                                Multidisciplinary Leadership
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Senior architects, licensed structural engineers, and visualization artists working together.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:opacity-75 transition-opacity"
                        >
                            <span>Schedule a Consultation</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-foreground/30"
                            >
                                <div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-sand font-mono text-sm font-bold text-foreground">
                                        {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                                    </div>
                                    <h4 className="mt-4 text-base font-semibold text-foreground">
                                        {member.name}
                                    </h4>
                                    <p className="text-xs font-medium text-emerald-700 mt-0.5">
                                        {member.role}
                                    </p>
                                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                                        {member.bio}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-border/60">
                                    <span className="text-[10px] font-mono tracking-wider uppercase text-muted-foreground">
                                        Focus Area:
                                    </span>
                                    <p className="text-[11px] font-medium text-foreground mt-0.5">
                                        {member.specialty}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dark CTA Banner */}
            <section className="relative overflow-hidden bg-surface-dark py-20 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
                    <h3 className="text-3xl sm:text-4xl font-light text-white">
                        Let’s bring your project to reality.
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
                        Whether you are planning a modern family home, a commercial complex, or require specialized structural engineering calculations, we are ready to assist.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button
                            type="button"
                            onClick={() => openProjectModal()}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-wider text-foreground shadow-lg hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
                        >
                            <span>Start Project Consultation</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-medium text-white hover:bg-white/10 transition-colors"
                        >
                            <span>Visit Our Office</span>
                        </Link>
                    </div>
                </div>
            </section>
        </StudioLayout>
    );
}
