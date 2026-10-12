import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Send, X, Building, Home, Ruler, MapPin } from 'lucide-react';
import { PlanOption } from './studio-planner';

interface StartProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialPlan?: PlanOption | null;
}

export function StartProjectModal({ isOpen, onClose, initialPlan }: StartProjectModalProps) {
    const [projectType, setProjectType] = useState('Build a house');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('Dhaka');
    const [plotSize, setPlotSize] = useState('5 Katha (3600 sq.ft)');
    const [notes, setNotes] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (initialPlan) {
            setProjectType(initialPlan.title);
        }
    }, [initialPlan]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        setSubmitted(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in zoom-in-95">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border bg-surface-sand p-6">
                    <div>
                        <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                            AIYRA STUDIO • INQUIRY
                        </span>
                        <h3 className="mt-1 text-xl font-semibold text-foreground">
                            Start Your Architectural Project
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        type="button"
                        aria-label="Close dialog"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {submitted ? (
                    <div className="p-8 text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <h4 className="mt-4 text-xl font-semibold text-foreground">
                            Thank you, {name || 'valued client'}!
                        </h4>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                            Our architectural team has received your project briefing for{' '}
                            <span className="font-semibold text-foreground">"{projectType}"</span>. We will review
                            your plot details and contact you within 24 hours.
                        </p>
                        <div className="mt-6 flex justify-center">
                            <button
                                type="button"
                                onClick={handleReset}
                                className="rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-90"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
                        {/* Project Type Select */}
                        <div>
                            <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                                Project Requirement
                            </label>
                            <select
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none transition-colors"
                            >
                                <option value="Build a house">Build a house (Full Turnkey Architecture)</option>
                                <option value="Floor plan">Floor plan (2D Architectural Blueprint)</option>
                                <option value="3D visualization">3D visualization (Hyper-realistic Renders)</option>
                                <option value="Civil / structural">Civil / structural (Engineering & Approval)</option>
                                <option value="Interior design">Interior design & Fit-out</option>
                                <option value="Commercial Development">Commercial / Mixed-use Building</option>
                                <option value="Consultation">Not sure yet (General Consultation)</option>
                            </select>
                        </div>

                        {/* Name and Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                                    Your Full Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Architect / Client Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+880 17XX-XXXXXX"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        {/* Email & Location */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@domain.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                                    Site / Project Location
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Uttara, Gulshan, Purbachal"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        {/* Plot Size / Area */}
                        <div>
                            <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                                Plot Size or Approximate Floor Area
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. 5 Katha / 3,500 sq.ft duplex"
                                value={plotSize}
                                onChange={(e) => setPlotSize(e.target.value)}
                                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none transition-colors"
                            />
                        </div>

                        {/* Project Notes */}
                        <div>
                            <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                                Project Brief or Special Notes
                            </label>
                            <textarea
                                rows={2}
                                placeholder="Tell us about your requirements, timeline, or preferred architectural style..."
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none transition-colors resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-full border border-border px-5 py-2.5 text-xs font-medium text-foreground hover:bg-muted"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95"
                            >
                                <span>Submit Project Brief</span>
                                <Send className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
