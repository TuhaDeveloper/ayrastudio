import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    deliverables: string[];
}

const servicesData: ServiceItem[] = [
    {
        id: 'architecture',
        title: 'Architecture',
        description:
            'Residential and commercial architectural planning, concepts and documentation.',
        image: '/images/studio/service_architecture.jpg',
        features: [
            'Master planning & site analysis',
            'Conceptual design & massing studies',
            'Full architectural working drawings',
            'Statutory approvals & RAJUK/municipality liaison',
        ],
        deliverables: ['Detailed CAD Drawings', 'BIM Models', 'Specification Manuals', 'Site Supervision Plans'],
    },
    {
        id: 'civil-engineering',
        title: 'Civil Engineering',
        description:
            'Structural planning, engineering solutions and technical documentation.',
        image: '/images/studio/service_civil.jpg',
        features: [
            'Earthquake-resistant structural design',
            'Soil report analysis & foundation design',
            'Reinforced concrete & steel structure calculation',
            'Plumbing, electrical & HVAC integration',
        ],
        deliverables: ['Structural Calculation Reports', 'Bar Bending Schedules (BBS)', 'MEP Schematics', 'Load Bearing Proofs'],
    },
    {
        id: 'design-3d',
        title: '2D / 3D Design',
        description:
            'Detailed floor plans, elevations, 3D models and realistic visualization.',
        image: '/images/studio/service_3d.jpg',
        features: [
            'Photorealistic exterior & interior rendering',
            'Cutaway axonometric floor plan layouts',
            'Virtual 360° walkthrough animations',
            'Lighting simulation & material texturing',
        ],
        deliverables: ['4K Ultra-HD Renders', 'Interactive Walkthroughs', 'Elevation Sheets', 'Color & Material Palettes'],
    },
    {
        id: 'interior-exterior',
        title: 'Interior & Exterior',
        description:
            'Spaces designed around function, proportion and material.',
        image: '/images/studio/service_interior.jpg',
        features: [
            'Custom furniture & cabinetry layout',
            'Acoustic design & ambient lighting design',
            'Landscape architecture & outdoor terraces',
            'Material selection & luxury procurement guides',
        ],
        deliverables: ['Material Swatch Books', 'Custom Millwork Details', 'Lighting Layout Sheets', 'Complete Fit-out Guide'],
    },
];

interface StudioServicesProps {
    onSelectService?: (service: ServiceItem) => void;
}

export function StudioServices({ onSelectService }: StudioServicesProps) {
    const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

    const handleOpenService = (service: ServiceItem) => {
        setActiveModalService(service);
        if (onSelectService) onSelectService(service);
    };

    return (
        <section id="services" className="relative bg-background py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header Grid */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-12 sm:pb-16 border-b border-border">
                    <div className="max-w-xl">
                        <span className="text-[11px] font-semibold tracking-[0.26em] text-muted-foreground uppercase">
                            OUR EXPERTISE
                        </span>
                        <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-normal leading-tight tracking-[-0.01em] text-foreground">
                            End-to-end design <br />
                            and technical solutions.
                        </h2>
                    </div>
                    <div className="max-w-md lg:pb-1">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            From architectural planning to detailed design and visualization, we provide
                            professional services to bring your vision to life.
                        </p>
                    </div>
                </div>

                {/* 4 Services Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="group flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-2 transition-all duration-300 hover:shadow-lg hover:border-foreground/30 hover:-translate-y-1"
                        >
                            {/* Card Media */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-1 flex-col justify-between p-4 pt-5">
                                <div>
                                    <h3 className="font-sans text-base font-semibold text-card-foreground">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Link CTA */}
                                <div className="mt-6 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => handleOpenService(service)}
                                        className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-foreground/75"
                                    >
                                        <span>View Service</span>
                                        <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Service Details Modal */}
            {activeModalService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                    <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-xl border border-border bg-card p-6 sm:p-8 shadow-2xl animate-in zoom-in-95">
                        <button
                            onClick={() => setActiveModalService(null)}
                            type="button"
                            aria-label="Close modal"
                            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                                AYRA STUDIO EXPERTISE
                            </span>
                        </div>

                        <h3 className="mt-2 text-2xl font-semibold text-foreground">
                            {activeModalService.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {activeModalService.description}
                        </p>

                        <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
                            <img
                                src={activeModalService.image}
                                alt={activeModalService.title}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                                    Key Capabilities
                                </h4>
                                <ul className="mt-3 space-y-2">
                                    {activeModalService.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                                    Project Deliverables
                                </h4>
                                <ul className="mt-3 space-y-2">
                                    {activeModalService.deliverables.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <span className="h-1.5 w-1.5 rounded-full bg-foreground shrink-0 mt-1.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-border">
                            <button
                                onClick={() => setActiveModalService(null)}
                                type="button"
                                className="rounded-full border border-border px-5 py-2 text-xs font-medium text-foreground hover:bg-muted"
                            >
                                Close
                            </button>
                            <a
                                href="#planner"
                                onClick={() => setActiveModalService(null)}
                                className="rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
                            >
                                Request for this Service
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
