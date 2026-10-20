import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { StudioLayout, useStudio } from '@/layouts/studio-layout';
import { GalleryItem, galleryProjects } from '@/data/gallery-data';
import {
    ArrowRight,
    Building2,
    Calendar,
    CheckCircle2,
    Eye,
    Filter,
    Layers,
    MapPin,
    Maximize2,
    Ruler,
    Sparkles,
    X,
} from 'lucide-react';

export default function GalleryPage() {
    const { openProjectModal } = useStudio();
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [activeProject, setActiveProject] = useState<GalleryItem | null>(null);

    const categories = [
        { id: 'All', label: 'All Works' },
        { id: 'Residential', label: 'Residential' },
        { id: 'Commercial', label: 'Commercial' },
        { id: 'Interior', label: 'Interiors' },
        { id: 'Engineering', label: 'Structural Civil' },
        { id: 'Visualization', label: '3D CGI' },
    ];

    const filteredProjects =
        selectedCategory === 'All'
            ? galleryProjects
            : galleryProjects.filter((p) => p.category === selectedCategory);

    return (
        <StudioLayout
            title="Projects Gallery — Architectural Portfolio & Case Studies | AYRA STUDIO"
            description="Explore AYRA STUDIO's portfolio of contemporary residences, luxury duplexes, commercial towers, and civil engineering projects across Dhaka and Bangladesh."
        >
            {/* Dark Architectural Hero Header */}
            <section className="relative overflow-hidden bg-surface-dark pt-32 pb-20 lg:pt-40 lg:pb-24 text-white">
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
                            <span>SELECTED WORKS • GALLERY</span>
                        </div>

                        <h1 className="mt-6 font-sans text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] text-white">
                            Spaces designed to inspire. <br />
                            <span className="font-semibold text-white">Structures built to endure.</span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl font-light">
                            Explore our curated portfolio of residential duplexes, contemporary villas, commercial headquarters, and high-precision civil engineering solutions.
                        </p>
                    </div>

                    {/* Filter Bar */}
                    <div className="mt-12 flex flex-wrap items-center gap-2 pt-2 border-t border-white/15">
                        <div className="flex items-center gap-2 mr-3 text-xs text-white/50 font-mono uppercase tracking-wider hidden sm:flex">
                            <Filter className="h-3.5 w-3.5 text-amber-300" />
                            <span>Filter Discipline:</span>
                        </div>
                        {categories.map((cat) => {
                            const isSelected = selectedCategory === cat.id;
                            const count =
                                cat.id === 'All'
                                    ? galleryProjects.length
                                    : galleryProjects.filter((p) => p.category === cat.id).length;

                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                                        isSelected
                                            ? 'bg-white text-foreground shadow-md font-semibold scale-105'
                                            : 'border border-white/15 bg-white/5 text-white/80 hover:bg-white/15 hover:text-white'
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                    <span
                                        className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                                            isSelected
                                                ? 'bg-foreground/10 text-foreground'
                                                : 'bg-white/10 text-white/60'
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Gallery Grid Showcase */}
            <section className="py-20 lg:py-28 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setActiveProject(project)}
                                className="group cursor-pointer flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-2xs transition-all duration-300 hover:shadow-xl hover:border-foreground/30 hover:-translate-y-1.5"
                            >
                                {/* Media Container */}
                                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-muted">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-foreground shadow-lg transition-transform duration-300 scale-90 group-hover:scale-100">
                                            <Eye className="h-5 w-5" />
                                        </div>
                                    </div>

                                    {/* Top floating pill */}
                                    <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-surface-dark/85 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white border border-white/10">
                                        <span>{project.categoryLabel}</span>
                                    </div>

                                    {/* Bottom Year pill */}
                                    <div className="absolute bottom-3 right-3 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-white/80">
                                        {project.year}
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-4 pt-5 flex flex-col justify-between flex-1">
                                    <div>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1.5">
                                            <MapPin className="h-3.5 w-3.5 text-foreground shrink-0" />
                                            <span>{project.location}</span>
                                            <span className="mx-1">•</span>
                                            <span>{project.area}</span>
                                        </div>

                                        <h3 className="font-sans text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    {/* Services Delivered Tags & Action */}
                                    <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between">
                                        <div className="flex flex-wrap gap-1">
                                            {project.services.slice(0, 2).map((s) => (
                                                <span
                                                    key={s}
                                                    className="rounded-md bg-surface-sand px-2 py-0.5 text-[10px] font-medium text-foreground border border-border/80"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>

                                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground group-hover:translate-x-1 transition-transform">
                                            <span>View Details</span>
                                            <ArrowRight className="h-3 w-3" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-base text-muted-foreground">
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* In-Depth Project Lightbox Modal */}
            {activeProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in">
                    <div className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl animate-in zoom-in-95">
                        {/* Close button */}
                        <button
                            onClick={() => setActiveProject(null)}
                            type="button"
                            aria-label="Close project modal"
                            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-all hover:bg-black hover:scale-105 active:scale-95"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Large Featured Media */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                            <img
                                src={activeProject.image}
                                alt={activeProject.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white mb-2">
                                    {activeProject.categoryLabel}
                                </span>
                                <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-white">
                                    {activeProject.title}
                                </h3>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 space-y-6">
                            {/* Key Stats Bar */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-surface-sand border border-border text-xs">
                                <div>
                                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                                        Location
                                    </span>
                                    <p className="font-semibold text-foreground mt-0.5">
                                        {activeProject.location}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                                        Built Area
                                    </span>
                                    <p className="font-semibold text-foreground mt-0.5">
                                        {activeProject.area}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                                        Completion Year
                                    </span>
                                    <p className="font-semibold text-foreground mt-0.5">
                                        {activeProject.year}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                                        Discipline Scope
                                    </span>
                                    <p className="font-semibold text-foreground mt-0.5">
                                        {activeProject.scope}
                                    </p>
                                </div>
                            </div>

                            {/* Narrative */}
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-2">
                                    Architectural Narrative & Design Concept
                                </h4>
                                <p className="text-sm leading-relaxed text-muted-foreground font-light">
                                    {activeProject.description}
                                </p>
                            </div>

                            {/* Project Engineering & Design Highlights */}
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                                    Key Project Highlights & Features
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {activeProject.highlights.map((highlight, hi) => (
                                        <div
                                            key={hi}
                                            className="flex items-start gap-2.5 rounded-xl border border-border/80 bg-muted/20 p-3.5 text-xs text-foreground"
                                        >
                                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Services Provided */}
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                    Services Provided on this Project:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.services.map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Footer */}
                            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
                                <button
                                    type="button"
                                    onClick={() => setActiveProject(null)}
                                    className="rounded-full border border-border px-5 py-2.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                                >
                                    Close Gallery Viewer
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        const proj = activeProject;
                                        setActiveProject(null);
                                        openProjectModal({
                                            title: `Inquiry for ${proj.title} Style Project`,
                                        });
                                    }}
                                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95"
                                >
                                    <span>Commission Similar Project</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Dark Call to Action */}
            <section className="relative overflow-hidden bg-surface-dark py-20 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
                    <h3 className="text-3xl sm:text-4xl font-light text-white">
                        Ready to plan your architectural vision?
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
                        Speak directly with our principal architects. We conduct site surveys and initial zoning consultations to help realize your vision.
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
                            <span>Contact Our Dhaka Studio</span>
                        </Link>
                    </div>
                </div>
            </section>
        </StudioLayout>
    );
}
