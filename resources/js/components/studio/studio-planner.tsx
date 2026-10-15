import React, { useState } from 'react';
import {
    Home,
    LayoutGrid,
    Box,
    Building2,
    Armchair,
    HelpCircle,
    ArrowRight,
    CheckCircle2,
    Clock,
    Target,
    Coins,
    ShieldCheck,
    Sparkles,
} from 'lucide-react';

export interface PlanOptionDeliverable {
    name: string;
    description: string;
}

export interface PlanOption {
    id: string;
    title: string;
    badge: string;
    icon: React.ComponentType<{ className?: string }>;
    tagline: string;
    typicalDuration: string;
    idealFor: string;
    pricingModel: string;
    scopeHighlights: string[];
    deliverables: PlanOptionDeliverable[];
    assuranceNote: string;
    ctaLabel: string;
}

const planningOptions: PlanOption[] = [
    {
        id: 'build-a-house',
        title: 'Build a house',
        badge: 'Full Turnkey',
        icon: Home,
        tagline: 'Complete architectural design, municipal permit sanction, structural engineering, and contractor cost controls for your new home.',
        typicalDuration: '3 to 6 Months (Design to Sanction)',
        idealFor: 'Landowners planning a new residential villa, duplex, or multi-family house',
        pricingModel: 'Transparent per sq.ft rate • Stage-by-stage milestone billing',
        scopeHighlights: [
            'Architectural conceptualization & master planning',
            'Seismic & foundation structural engineering',
            'Full statutory authority submission sheets',
            'BOQ & contractor tender documentation',
        ],
        deliverables: [
            {
                name: 'Municipal Authority Sanction Drawings',
                description: 'Full architectural drawing sets formatted and certified for immediate city building permit approval.',
            },
            {
                name: 'Earthquake & Structural Safety Engineering',
                description: 'Deep foundation, column, and beam calculations ensuring your building is 100% resilient.',
            },
            {
                name: 'Contractor Cost Guard (Itemized BOQ)',
                description: 'Exact material quantities (cement, steel, finishing) so contractors cannot inflate quotes or add surprise fees.',
            },
            {
                name: 'Photorealistic 3D Exterior & Interior Previews',
                description: 'High-resolution visualization of day/dusk lighting and materials before construction begins.',
            },
        ],
        assuranceNote: 'Includes revisions until you love the concept layout • Supervised by licensed lead architects.',
        ctaLabel: 'Plan Your House',
    },
    {
        id: 'floor-plan',
        title: 'Floor plan',
        badge: 'Layout & 2D',
        icon: LayoutGrid,
        tagline: 'Space-optimized architectural layout planning to maximize natural daylight, privacy, ventilation, and room circulation.',
        typicalDuration: '2 to 3 Weeks',
        idealFor: 'Property owners needing optimal room zoning, apartment partitioning, or CAD blueprints',
        pricingModel: 'Fixed rate per floor or per square-foot area',
        scopeHighlights: [
            'Vastu & climate-responsive zoning',
            'Detailed room circulation & furniture ergonomics',
            'Electrical & plumbing schematic coordination',
            'High-resolution PDF & DWG blueprints',
        ],
        deliverables: [
            {
                name: 'Ergonomic Room Circulation & Layout',
                description: 'Eliminates wasted corridor space, dark corners, and awkward door/window placements.',
            },
            {
                name: 'Climate & Natural Light Optimization',
                description: 'Arranges bedrooms and living spaces to maximize natural breeze and seasonal sunlight.',
            },
            {
                name: 'Plumbing & Electrical Schematic Coordinates',
                description: 'Precise switchboards, sanitary lines, and appliance positioning ready for tradesmen on site.',
            },
            {
                name: 'High-Resolution PDF & AutoCAD (DWG) Sheets',
                description: 'Full dimensioned architectural drawing sets ready for direct contractor execution.',
            },
        ],
        assuranceNote: 'Delivered in universal printable PDF and editable CAD files ready for immediate site work.',
        ctaLabel: 'Order Floor Plan',
    },
    {
        id: '3d-visualization',
        title: '3D visualization',
        badge: 'Renders & Walkthrough',
        icon: Box,
        tagline: 'Hyper-realistic exterior, interior, and aerial 3D renderings to see your future project in vivid detail before breaking ground.',
        typicalDuration: '1 to 2 Weeks',
        idealFor: 'Homeowners, developers, and builders wanting to visualize finishes or market a property',
        pricingModel: 'Per camera view / complete package rate',
        scopeHighlights: [
            'Daytime and dusk atmospheric lighting simulations',
            'Physically based materials (PBR) & textures',
            'Ultra 4K resolution renders suitable for marketing',
            'Optional cinematic walkthrough video animation',
        ],
        deliverables: [
            {
                name: 'Atmospheric Day & Dusk Lighting Renders',
                description: 'True-to-life sun position, ambient evening illumination, and landscape lighting simulations.',
            },
            {
                name: 'Realistic Material & Texture Simulation',
                description: 'Physically accurate simulation of marble, wood grains, textured plaster, glass, and metals.',
            },
            {
                name: 'Ultra-HD 4K High-Resolution Imagery',
                description: 'Crystal-clear presentation images ready for family sign-off, investors, or marketing.',
            },
            {
                name: 'Cinematic 3D Video Walkthrough (Optional)',
                description: 'Fluid motion camera paths that let you experience walking through your home before building.',
            },
        ],
        assuranceNote: 'Accurately scaled to real-world structural proportions and real materials available locally.',
        ctaLabel: 'Get 3D Visualization',
    },
    {
        id: 'civil-structural',
        title: 'Civil / structural',
        badge: 'Safety & Codes',
        icon: Building2,
        tagline: 'Certified structural engineering, soil load capacity calculations, and regulatory safety compliance for total peace of mind.',
        typicalDuration: '3 to 4 Weeks',
        idealFor: 'Builders needing signed engineering calculations, stability audits, or permit compliance',
        pricingModel: 'Calculated per floor & built-up square footage',
        scopeHighlights: [
            'BNBC & international code compliance',
            'Foundation, column, beam, and slab detailing',
            'Bar bending schedule (BBS) for rebar calculation',
            'Site inspection & structural fitness audit',
        ],
        deliverables: [
            {
                name: 'Soil Test Analysis & Foundation Engineering',
                description: 'Safe pile, raft, or pad foundation design tailored to your specific ground soil conditions.',
            },
            {
                name: 'Beam, Column & Slab Structural Detailing',
                description: 'BNBC and international code-compliant structural calculations ensuring maximum safety.',
            },
            {
                name: 'Rebar Schedule (Exact Steel Tonnage)',
                description: 'Precise steel rebar calculations so you purchase exact steel quantities without costly waste.',
            },
            {
                name: 'Certified Professional Engineer Sign-off',
                description: 'Official stamp and signature by registered structural engineers for city approval.',
            },
        ],
        assuranceNote: 'Engineered and certified by licensed structural engineers with extensive residential track records.',
        ctaLabel: 'Request Structural Review',
    },
    {
        id: 'interior-design',
        title: 'Interior design',
        badge: 'Finishes & Fitouts',
        icon: Armchair,
        tagline: 'Bespoke interior concepts, custom cabinetry, material moodboards, and layered lighting schemes for refined living.',
        typicalDuration: '4 to 6 Weeks',
        idealFor: 'Apartment owners, duplex residents, or commercial spaces seeking contemporary interiors',
        pricingModel: 'Custom per-room or comprehensive square-foot package',
        scopeHighlights: [
            'Space programming & false ceiling lighting plans',
            'Custom woodwork, kitchen & wardrobe details',
            'Hardware, tiles, lighting fixtures specification',
            'Vendor coordination & material sample approvals',
        ],
        deliverables: [
            {
                name: 'Custom Joinery & Millwork Blueprints',
                description: 'Detailed production drawings for master wardrobes, modular kitchen, and TV consoles.',
            },
            {
                name: 'Curated Material & Color Palette Moodboards',
                description: 'Handpicked stone, wood veneers, fabrics, tiles, and designer paint specifications.',
            },
            {
                name: 'Layered Ceiling & Ambient Lighting Schemes',
                description: 'False ceiling designs with warm indirect cove lighting, spotlights, and pendant placements.',
            },
            {
                name: 'Itemized Procurement & Hardware Guide',
                description: 'Direct supplier specs and hardware recommendations to get trade pricing on furniture and decor.',
            },
        ],
        assuranceNote: 'Tailored precisely to your lifestyle aesthetic: Minimalist, Japandi, Modern Warm, or Industrial.',
        ctaLabel: 'Plan Your Interior',
    },
    {
        id: 'not-sure-yet',
        title: 'Not sure yet',
        badge: 'Free Advice',
        icon: HelpCircle,
        tagline: 'Unsure what your plot or space actually needs? Speak directly with our lead architects for honest, zero-pressure advice.',
        typicalDuration: 'Initial consultation within 24 Hours',
        idealFor: 'Anyone in the early idea stage wanting clear guidance before committing to design work',
        pricingModel: '100% Free Consultation • Zero Obligation',
        scopeHighlights: [
            'Complimentary 30-minute discovery call',
            'Feasibility review based on your location & plot size',
            'Rough cost estimation & timeline roadmap',
            'Zero commitment exploratory session',
        ],
        deliverables: [
            {
                name: '30-Minute 1-on-1 Discovery Session',
                description: 'Discuss your property vision, family requirements, plot orientation, and aesthetic preferences.',
            },
            {
                name: 'Plot Feasibility & Zoning Regulation Check',
                description: 'Quick review of local setbacks, permissible building height, and ground coverage ratios.',
            },
            {
                name: 'Realistic Budget & Construction Estimate',
                description: 'Ballpark figures on design and construction costs so you avoid surprise budget overruns.',
            },
            {
                name: 'Customized Next-Steps Project Roadmap',
                description: 'Clear sequential checklist of what to do first, from soil test to handover.',
            },
        ],
        assuranceNote: 'Zero pressure, honest architectural advisory to give you complete clarity and direction.',
        ctaLabel: 'Book Free Discovery Call',
    },
];

interface StudioPlannerProps {
    onSelectPlan: (plan: PlanOption) => void;
}

export function StudioPlanner({ onSelectPlan }: StudioPlannerProps) {
    const [selectedId, setSelectedId] = useState<string>('build-a-house');

    const selectedOption =
        planningOptions.find((p) => p.id === selectedId) || planningOptions[0];

    const handleSelect = (option: PlanOption) => {
        setSelectedId(option.id);
    };

    return (
        <section id="planner" className="relative bg-background py-20 lg:py-28 border-t border-border">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <div className="max-w-2xl">
                    <span className="text-[11px] font-semibold tracking-[0.26em] text-muted-foreground uppercase">
                        WHAT ARE YOU PLANNING?
                    </span>
                    <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-normal leading-tight tracking-[-0.01em] text-foreground">
                        Tell us what you need. <br />
                        We'll guide you from there.
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        Select your project type below to explore typical timelines, what you will actually receive, and estimated fee models.
                    </p>
                </div>

                {/* 6 Selector Cards Grid: Client-Focused with micro-tags & clean active indicator */}
                <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-2.5 sm:gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
                    {planningOptions.map((option) => {
                        const IconComponent = option.icon;
                        const isSelected = selectedId === option.id;

                        return (
                            <button
                                key={option.id}
                                type="button"
                                onClick={() => handleSelect(option)}
                                className={`group relative flex flex-col justify-between rounded-xl p-4 sm:p-5 text-left transition-all duration-200 border ${
                                    isSelected
                                        ? 'bg-primary text-primary-foreground border-primary shadow-lg ring-1 ring-primary/20 scale-[1.02]'
                                        : 'bg-card text-foreground border-border hover:border-foreground/30 hover:bg-muted/40 shadow-xs'
                                }`}
                            >
                                <div className="flex items-center justify-between w-full mb-3 sm:mb-6">
                                    <div
                                        className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                                            isSelected
                                                ? 'bg-primary-foreground/15 text-primary-foreground'
                                                : 'bg-muted text-foreground group-hover:bg-foreground/10'
                                        }`}
                                    >
                                        <IconComponent className="h-4 w-4" />
                                    </div>
                                    <span
                                        className={`text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                                            isSelected
                                                ? 'bg-primary-foreground/20 text-primary-foreground'
                                                : 'bg-muted/80 text-muted-foreground'
                                        }`}
                                    >
                                        {option.badge}
                                    </span>
                                </div>

                                <div>
                                    <span className="block text-xs sm:text-sm font-semibold tracking-tight leading-snug">
                                        {option.title}
                                    </span>
                                    <span
                                        className={`mt-1 block text-[10px] sm:text-[11px] leading-tight ${
                                            isSelected
                                                ? 'text-primary-foreground/80'
                                                : 'text-muted-foreground'
                                        }`}
                                    >
                                        {option.typicalDuration.split(' ')[0]} {option.typicalDuration.split(' ')[1]}
                                    </span>
                                </div>

                                {isSelected && (
                                    <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-4 h-2 bg-primary [clip-path:polygon(50%_100%,0_0,100%_0)] hidden lg:block" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Interactive Dynamic Guidance Card */}
                <div className="mt-7 sm:mt-9 rounded-2xl border border-border bg-card p-6 sm:p-9 shadow-sm transition-all duration-300">
                    {/* Header Row: Overview & Primary CTA */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-border pb-6 sm:pb-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-sand px-3 py-1 text-[11px] font-semibold text-foreground uppercase tracking-wider">
                                    <Sparkles className="h-3 w-3 text-foreground" />
                                    {selectedOption.title}
                                </span>
                                <span className="text-xs text-muted-foreground font-medium">
                                    • {selectedOption.badge}
                                </span>
                            </div>
                            <h3 className="mt-2.5 font-sans text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                                {selectedOption.tagline}
                            </h3>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2.5 shrink-0">
                            <button
                                type="button"
                                onClick={() => onSelectPlan(selectedOption)}
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3 text-xs font-semibold tracking-wide text-primary-foreground shadow-sm transition-all duration-200 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>{selectedOption.ctaLabel}</span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                            <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                                <ShieldCheck className="h-3.5 w-3.5 text-foreground" />
                                Free 30-min discovery call • No commitment
                            </span>
                        </div>
                    </div>

                    {/* 3 Key Decision Metrics: What every client actually asks about */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <div className="rounded-xl border border-border/80 bg-background/50 p-4.5">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                <Clock className="h-4 w-4 text-foreground shrink-0" />
                                <span>Typical Timeline</span>
                            </div>
                            <p className="mt-2 text-sm font-semibold text-foreground">
                                {selectedOption.typicalDuration}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground leading-normal">
                                From initial kickoff through review & final delivery
                            </p>
                        </div>

                        <div className="rounded-xl border border-border/80 bg-background/50 p-4.5">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                <Target className="h-4 w-4 text-foreground shrink-0" />
                                <span>Ideal For</span>
                            </div>
                            <p className="mt-2 text-sm font-semibold text-foreground">
                                {selectedOption.idealFor}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground leading-normal">
                                Tailored to your site size, permit needs, and lifestyle
                            </p>
                        </div>

                        <div className="rounded-xl border border-border/80 bg-background/50 p-4.5">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                <Coins className="h-4 w-4 text-foreground shrink-0" />
                                <span>Investment & Fee Model</span>
                            </div>
                            <p className="mt-2 text-sm font-semibold text-foreground">
                                {selectedOption.pricingModel}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground leading-normal">
                                No surprise fees • Fixed milestone deliverables
                            </p>
                        </div>
                    </div>

                    {/* Standard Deliverables Included: Tangible client benefits */}
                    <div className="mt-8 pt-6 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                                What You Will Receive in Your Hands (Standard Deliverables)
                            </span>
                            <span className="text-xs text-muted-foreground hidden sm:inline">
                                4 Core Deliverables Included
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedOption.deliverables.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/40 p-4 transition-colors hover:border-foreground/20 hover:bg-background/80"
                                >
                                    <CheckCircle2 className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                                            {item.name}
                                        </h4>
                                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Client Assurance Note Strip */}
                    <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl bg-surface-sand p-4 border border-border/50 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                            <ShieldCheck className="h-4 w-4 shrink-0 text-foreground" />
                            <span>AYRA Studio Guarantee:</span>
                            <span className="text-muted-foreground font-normal">
                                {selectedOption.assuranceNote}
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={() => onSelectPlan(selectedOption)}
                            className="text-xs font-semibold text-foreground hover:underline shrink-0"
                        >
                            Request Estimate →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
