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
    Calendar,
    FileSpreadsheet,
} from 'lucide-react';

export interface PlanOption {
    id: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    tagline: string;
    typicalDuration: string;
    scopeHighlights: string[];
}

const planningOptions: PlanOption[] = [
    {
        id: 'build-a-house',
        title: 'Build a house',
        icon: Home,
        tagline: 'Complete turnkey architectural & construction planning for new residential homes.',
        typicalDuration: '3 to 6 months for design & statutory sanction',
        scopeHighlights: [
            'Architectural conceptualization & master planning',
            'Seismic & foundation structural engineering',
            'Full statutory authority submission sheets',
            'BOQ & contractor tender documentation',
        ],
    },
    {
        id: 'floor-plan',
        title: 'Floor plan',
        icon: LayoutGrid,
        tagline: 'Customized floor layout planning, space optimization, and architectural drafting.',
        typicalDuration: '2 to 3 weeks',
        scopeHighlights: [
            'Vastu & climate-responsive zoning',
            'Detailed room circulation & furniture ergonomics',
            'Electrical & plumbing schematic coordination',
            'High-resolution PDF & DWG blueprints',
        ],
    },
    {
        id: '3d-visualization',
        title: '3D visualization',
        icon: Box,
        tagline: 'Hyper-realistic exterior, interior, and axonometric 3D renderings.',
        typicalDuration: '1 to 2 weeks',
        scopeHighlights: [
            'Daytime and dusk atmospheric lighting simulations',
            'Physically based materials (PBR) & textures',
            'Ultra 4K resolution renders suitable for marketing',
            'Optional cinematic walkthrough video animation',
        ],
    },
    {
        id: 'civil-structural',
        title: 'Civil / structural',
        icon: Building2,
        tagline: 'Comprehensive structural analysis, soil review, and load calculations.',
        typicalDuration: '3 to 4 weeks',
        scopeHighlights: [
            'BNBC & international code compliance',
            'Foundation, column, beam, and slab detailing',
            'Bar bending schedule (BBS) for rebar calculation',
            'Site inspection & structural fitness audit',
        ],
    },
    {
        id: 'interior-design',
        title: 'Interior design',
        icon: Armchair,
        tagline: 'Interior concept, material moodboards, custom carpentry, and lighting scheme.',
        typicalDuration: '4 to 6 weeks',
        scopeHighlights: [
            'Space programming & false ceiling lighting plans',
            'Custom woodwork, kitchen & wardrobe details',
            'Hardware, tiles, lighting fixtures specification',
            'Vendor coordination & material sample approvals',
        ],
    },
    {
        id: 'not-sure-yet',
        title: 'Not sure yet',
        icon: HelpCircle,
        tagline: 'Consult with our principal architects to discover the ideal strategy for your plot or space.',
        typicalDuration: 'Initial consultation in 24 hours',
        scopeHighlights: [
            'Complimentary 30-minute discovery call',
            'Feasibility review based on your location & plot size',
            'Rough cost estimation & timeline roadmap',
            'Zero commitment exploratory session',
        ],
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
                </div>

                {/* 6 Selector Cards Grid matching the exact reference image */}
                <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {planningOptions.map((option) => {
                        const IconComponent = option.icon;
                        const isSelected = selectedId === option.id;

                        return (
                            <button
                                key={option.id}
                                type="button"
                                onClick={() => handleSelect(option)}
                                className={`group flex flex-col justify-between rounded-lg p-3.5 sm:p-5 text-left transition-all duration-200 border ${
                                    isSelected
                                        ? 'bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]'
                                        : 'bg-card text-foreground border-border hover:border-foreground/30 hover:bg-muted/40'
                                }`}
                            >
                                <div className="mb-4 sm:mb-8">
                                    <IconComponent
                                        className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:scale-110 ${
                                            isSelected ? 'text-primary-foreground' : 'text-foreground'
                                        }`}
                                    />
                                </div>

                                <div className="flex items-center justify-between gap-1">
                                    <span className="text-[11px] sm:text-xs font-semibold tracking-tight">
                                        {option.title}
                                    </span>
                                    {isSelected && (
                                        <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Interactive Dynamic Guidance Box */}
                <div className="mt-6 sm:mt-8 rounded-xl border border-border bg-card p-5 sm:p-8 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 border-b border-border pb-5 sm:pb-6">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                <span>Tailored Approach</span>
                                <span>•</span>
                                <span className="text-foreground">{selectedOption.title}</span>
                            </div>
                            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                {selectedOption.tagline}
                            </p>
                        </div>

                        <div className="flex items-center w-full sm:w-auto">
                            <button
                                type="button"
                                onClick={() => onSelectPlan(selectedOption)}
                                className="group w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-medium tracking-wide text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>Start with "{selectedOption.title}"</span>
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5 text-foreground" />
                                Timeline Expectation
                            </span>
                            <p className="mt-2 text-xs font-medium text-foreground">
                                {selectedOption.typicalDuration}
                            </p>
                        </div>

                        <div className="md:col-span-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                                <FileSpreadsheet className="h-3.5 w-3.5 text-foreground" />
                                Standard Deliverables Included
                            </span>
                            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {selectedOption.scopeHighlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <CheckCircle2 className="h-3 w-3 text-foreground shrink-0" />
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
