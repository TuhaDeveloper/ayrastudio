import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { StudioLayout } from '@/layouts/studio-layout';
import {
    ArrowRight,
    Building,
    CheckCircle2,
    ChevronDown,
    Clock,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send,
    ShieldCheck,
    Sparkles,
} from 'lucide-react';

export default function Contact() {
    const { flash } = usePage().props as { flash?: { success?: string } };
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        email: '',
        service: 'Architecture & Master Planning',
        location: '',
        plot_size: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                setSubmittedSuccessfully(true);
                reset();
            },
        });
    };

    const faqs = [
        {
            q: 'How does an initial architectural consultation work?',
            a: 'We begin with an exploratory session to understand your plot size, zoning constraints, budget, and lifestyle requirements. We review orientation, RAJUK setback requirements, and propose preliminary zoning options before commencing full design drawings.',
        },
        {
            q: 'Do you manage RAJUK and municipal building approvals?',
            a: 'Yes. Our team produces complete statutory approval packages adhering strictly to the Bangladesh National Building Code (BNBC 2020), including FAR calculations, setback provisions, fire clearances, and required engineer endorsements.',
        },
        {
            q: 'Can we hire AYRA STUDIO only for structural design or 3D elevation?',
            a: 'Absolutely. While we provide end-to-end turnkey architectural planning, we frequently take on standalone civil/structural calculation packages or high-resolution 3D visualization assignments for external developers and homeowners.',
        },
        {
            q: 'What is the typical timeline for complete working blueprints?',
            a: 'A standard residential building (duplex or 6-to-10 storied apartment) typically takes 3 to 5 weeks for full architectural layouts, 3D visualization, and stamped structural/BBS calculations.',
        },
        {
            q: 'Do you accept projects outside Dhaka or across Bangladesh?',
            a: 'Yes. We design projects across Bangladesh (Chittagong, Sylhet, Comilla, Rajshahi, Cox’s Bazar, etc.). Preliminary planning is coordinated digitally with high-precision drone/topography data, followed by scheduled site visits for structural foundation checks.',
        },
    ];

    return (
        <StudioLayout
            title="Contact AYRA STUDIO — Architectural Consultation & Office in Dhaka"
            description="Get in touch with AYRA STUDIO in Dhaka, Bangladesh. Schedule an architectural consultation, structural calculation review, or 3D visualization brief."
        >
            {/* Dark Architectural Header Section */}
            <section className="relative overflow-hidden bg-surface-dark pt-32 pb-16 lg:pt-40 lg:pb-24 text-white">
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
                            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                            <span>STUDIO CONSULTATION</span>
                        </div>

                        <h1 className="mt-6 font-sans text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] text-white">
                            Let's discuss your <br />
                            <span className="font-semibold text-white">next landmark.</span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl font-light">
                            Whether you are developing an ancestral plot, planning a luxury duplex, or need certified structural engineering calculations, our team is ready to collaborate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 lg:py-28 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Direct Studio Channels & Office Details */}
                        <div className="lg:col-span-5 space-y-8">
                            <div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                                    STUDIO HEADQUARTERS
                                </span>
                                <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-foreground">
                                    Direct Channels
                                </h2>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                    Visit our architectural design atelier in Dhaka or reach out directly via phone or WhatsApp for quick inquiries.
                                </p>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-2xs">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-sand text-foreground">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                                            Studio Location
                                        </h4>
                                        <p className="mt-1 text-sm text-foreground font-medium">
                                            Road 11, Block D, Banani
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Dhaka - 1213, Bangladesh
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-2xs">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-sand text-foreground">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                                            Direct Telephone & Mobile
                                        </h4>
                                        <p className="mt-1 text-sm font-medium text-foreground">
                                            +880 1700-000000
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            +880 1800-000000 (Consultation Line)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-2xs">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-sand text-foreground">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                                            Electronic Mail
                                        </h4>
                                        <p className="mt-1 text-sm font-medium text-foreground">
                                            hello@ayrastudio.com
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            projects@ayrastudio.com (Drawings & RFP)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-2xs">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-sand text-foreground">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                                            Practice Hours
                                        </h4>
                                        <p className="mt-1 text-xs text-foreground font-medium">
                                            Sunday – Thursday: 9:00 AM – 7:00 PM
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Friday – Saturday: By Prior Appointment
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Direct Quick Action */}
                            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
                                        <MessageSquare className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-foreground">
                                            Instant WhatsApp Consultation
                                        </h4>
                                        <p className="text-xs text-muted-foreground">
                                            Send site photographs and preliminary sketch via WhatsApp.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://wa.me/8801700000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                                >
                                    <span>Open WhatsApp Messenger</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </a>
                            </div>

                            {/* Simulated Architectural Studio Coordinate Card */}
                            <div className="rounded-2xl border border-border bg-surface-dark text-white p-6 relative overflow-hidden">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="font-mono text-[10px] tracking-widest uppercase text-white/50">
                                        GEO-COORDINATES
                                    </span>
                                    <span className="font-mono text-[10px] text-amber-300">
                                        23.7937° N, 90.4066° E
                                    </span>
                                </div>
                                <div className="pt-4 space-y-1">
                                    <h4 className="font-sans text-base font-medium text-white">
                                        Banani Studio Atelier
                                    </h4>
                                    <p className="text-xs text-white/60">
                                        Accessible via Kamal Ataturk Ave & Gulshan-2 circle. Visitor parking available.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interactive Consultation Inquiry Form */}
                        <div className="lg:col-span-7">
                            <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-lg">
                                <div className="mb-8">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                        COMMISSION A PROJECT
                                    </span>
                                    <h3 className="mt-1 text-2xl font-semibold text-foreground">
                                        Project Inquiry & Briefing Form
                                    </h3>
                                    <p className="mt-1.5 text-xs text-muted-foreground">
                                        Provide your plot and requirement details. A senior architect will review and reach out within 24 hours.
                                    </p>
                                </div>

                                {submittedSuccessfully || flash?.success ? (
                                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center animate-in fade-in">
                                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                                            <CheckCircle2 className="h-8 w-8" />
                                        </div>
                                        <h4 className="mt-4 text-xl font-semibold text-foreground">
                                            Inquiry Received!
                                        </h4>
                                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                                            {flash?.success ||
                                                'Thank you for contacting AYRA STUDIO. Our architectural and engineering team has received your briefing and will contact you shortly.'}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setSubmittedSuccessfully(false)}
                                            className="mt-6 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-90"
                                        >
                                            Submit Another Inquiry
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name and Phone */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                                                    Your Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    placeholder="e.g. Barrister / Engr. / Client Name"
                                                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none transition-colors"
                                                />
                                                {errors.name && (
                                                    <p className="mt-1 text-[11px] text-destructive">{errors.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                                                    Phone / WhatsApp *
                                                </label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={data.phone}
                                                    onChange={(e) => setData('phone', e.target.value)}
                                                    placeholder="+880 17XX-XXXXXX"
                                                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none transition-colors"
                                                />
                                                {errors.phone && (
                                                    <p className="mt-1 text-[11px] text-destructive">{errors.phone}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Email and Service Selection */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    placeholder="you@domain.com"
                                                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none transition-colors"
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-[11px] text-destructive">{errors.email}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                                                    Service Required
                                                </label>
                                                <select
                                                    value={data.service}
                                                    onChange={(e) => setData('service', e.target.value)}
                                                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none transition-colors"
                                                >
                                                    <option value="Architecture & Master Planning">Architecture & Master Planning</option>
                                                    <option value="Civil & Structural Engineering">Civil & Structural Engineering</option>
                                                    <option value="2D Drafting & 3D Visualization">2D Drafting & 3D Visualization</option>
                                                    <option value="Interior & Exterior Design">Interior & Exterior Design</option>
                                                    <option value="Complete Turnkey House Build">Complete Turnkey House Build</option>
                                                    <option value="General Consultation">General Consultation</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Project Location and Plot Size */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                                                    Project Site Location
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data.location}
                                                    onChange={(e) => setData('location', e.target.value)}
                                                    placeholder="e.g. Uttara Sector 4 / Purbachal / Sylhet"
                                                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                                                    Plot Size / Built Area
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data.plot_size}
                                                    onChange={(e) => setData('plot_size', e.target.value)}
                                                    placeholder="e.g. 5 Katha / 4,500 sq.ft duplex"
                                                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* Project Description */}
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                                                Project Description & Requirements
                                            </label>
                                            <textarea
                                                rows={4}
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                placeholder="Tell us about your timeline, floor requirements, preferred architectural style, or questions..."
                                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
                                            />
                                            {errors.message && (
                                                <p className="mt-1 text-[11px] text-destructive">{errors.message}</p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-2 flex items-center justify-between">
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                                <span>100% Confidential & Secure</span>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
                                            >
                                                <span>{processing ? 'Submitting Brief...' : 'Send Project Inquiry'}</span>
                                                <Send className="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions Section */}
            <section className="py-20 bg-surface-sand border-t border-border">
                <div className="mx-auto max-w-4xl px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                            ANSWERS TO COMMON INQUIRIES
                        </span>
                        <h3 className="mt-2 text-3xl font-light text-foreground">
                            Frequently Asked Questions
                        </h3>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div
                                    key={i}
                                    className="overflow-hidden rounded-xl border border-border bg-card transition-colors"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-foreground hover:text-foreground/80 transition-colors"
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronDown
                                            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                    {isOpen && (
                                        <div className="border-t border-border/60 bg-muted/20 px-5 py-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </StudioLayout>
    );
}
