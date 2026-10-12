import React, { useState } from 'react';
import { ArrowRight, Eye, MapPin, Maximize2, X } from 'lucide-react';

export interface ProjectItem {
    id: string;
    title: string;
    location: string;
    category: string;
    services: string;
    image: string;
    area: string;
    year: string;
    description: string;
}

const projectsData: ProjectItem[] = [
    {
        id: 'modern-residence',
        title: 'Modern Family Residence',
        location: 'Dhaka',
        category: 'Residential',
        services: 'Architecture',
        image: '/images/studio/project_residence.jpg',
        area: '5,800 sq.ft',
        year: '2025',
        description:
            'A contemporary multi-level residential sanctuary maximizing natural airflow, cross-ventilation, and organic light through extensive cantilevered glass overhangs.',
    },
    {
        id: 'duplex-house',
        title: 'Duplex House',
        location: 'Gazipur',
        category: 'Residential',
        services: 'Architecture • Interior',
        image: '/images/studio/project_duplex.jpg',
        area: '4,200 sq.ft',
        year: '2025',
        description:
            'A tranquil suburban duplex balancing private family living with welcoming entertaining zones, featuring custom teak louvers and natural stone accents.',
    },
    {
        id: 'commercial-building',
        title: 'Commercial Building',
        location: 'Dhaka',
        category: 'Commercial',
        services: 'Architecture • Civil',
        image: '/images/studio/project_commercial.jpg',
        area: '18,500 sq.ft',
        year: '2024',
        description:
            'A state-of-the-art mid-rise corporate headquarters incorporating energy-efficient double glazing, seismic engineering, and flexible floor plate configurations.',
    },
    {
        id: 'interior-makeover',
        title: 'Interior Makeover',
        location: 'Dhaka',
        category: 'Interior',
        services: 'Interior • 3D Visualization',
        image: '/images/studio/project_interior.jpg',
        area: '3,400 sq.ft',
        year: '2026',
        description:
            'A comprehensive turnkey luxury penthouse transformation focusing on acoustic wooden panelling, bespoke concealed lighting, and European minimalist finishes.',
    },
];

export function StudioProjects() {
    const [filter, setFilter] = useState<string>('All');
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    const categories = ['All', 'Residential', 'Commercial', 'Interior'];

    const filteredProjects =
        filter === 'All'
            ? projectsData
            : projectsData.filter((p) => p.category === filter);

    return (
        <section id="projects" className="relative bg-background py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-10 border-b border-border">
                    <div>
                        <span className="text-[11px] font-semibold tracking-[0.26em] text-muted-foreground uppercase">
                            SELECTED PROJECTS
                        </span>
                        <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-normal leading-tight tracking-[-0.01em] text-foreground">
                            Spaces we've <br />
                            brought to life.
                        </h2>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Category Filter Pills */}
                        <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card p-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setFilter(cat)}
                                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                                        filter === cat
                                            ? 'bg-primary text-primary-foreground shadow-xs'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 text-xs font-medium text-foreground transition-colors hover:text-muted-foreground"
                        >
                            <span>View All Projects</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer flex flex-col overflow-hidden rounded-lg border border-border bg-card p-2 transition-all duration-300 hover:shadow-lg hover:border-foreground/30 hover:-translate-y-1"
                        >
                            {/* Project Photo with Aspect Ratio */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md transition-transform duration-300 scale-90 group-hover:scale-100">
                                        <Eye className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="p-3 pt-4">
                                <h3 className="font-sans text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="mt-1.5 text-xs text-muted-foreground tracking-wide">
                                    {project.location} • {project.category} • {project.services}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
                    <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl animate-in zoom-in-95">
                        <button
                            onClick={() => setSelectedProject(null)}
                            type="button"
                            aria-label="Close modal"
                            className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs transition-colors hover:bg-black"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="aspect-[16/9] w-full overflow-hidden bg-black">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="p-6 sm:p-8">
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                                <div>
                                    <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                                        {selectedProject.category} PROJECT
                                    </span>
                                    <h3 className="mt-1 text-2xl font-semibold text-foreground">
                                        {selectedProject.title}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="h-3.5 w-3.5" />
                                        {selectedProject.location}
                                    </span>
                                    <span>Area: {selectedProject.area}</span>
                                    <span>Year: {selectedProject.year}</span>
                                </div>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                {selectedProject.description}
                            </p>

                            <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                                <span className="text-xs text-muted-foreground">
                                    Scope: {selectedProject.services}
                                </span>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    type="button"
                                    className="rounded-full bg-primary px-6 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
                                >
                                    Close Preview
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
