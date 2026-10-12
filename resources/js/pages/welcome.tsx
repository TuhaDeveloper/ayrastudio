import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { StudioNavbar } from '@/components/studio/studio-navbar';
import { StudioHero } from '@/components/studio/studio-hero';
import { StudioServices, ServiceItem } from '@/components/studio/studio-services';
import { StudioProjects } from '@/components/studio/studio-projects';
import { StudioPlanner, PlanOption } from '@/components/studio/studio-planner';
import { StudioProcess } from '@/components/studio/studio-process';
import { StudioCta } from '@/components/studio/studio-cta';
import { StudioFooter } from '@/components/studio/studio-footer';
import { StartProjectModal } from '@/components/studio/start-project-modal';

export default function Welcome() {
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [selectedPlanOption, setSelectedPlanOption] = useState<PlanOption | null>(null);

    const handleStartProject = () => {
        setSelectedPlanOption(null);
        setIsProjectModalOpen(true);
    };

    const handleSelectPlan = (plan: PlanOption) => {
        setSelectedPlanOption(plan);
        setIsProjectModalOpen(true);
    };

    return (
        <>
            <Head title="AIYRA STUDIO — Architecture • Engineering • Design">
                <meta
                    name="description"
                    content="End-to-end architectural planning, civil engineering, and 3D visualization solutions. Spaces designed to be lived in. Structures designed to last."
                />
            </Head>

            <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans">
                {/* Fixed Architectural Sticky Navbar */}
                <StudioNavbar onStartProject={handleStartProject} />

                {/* Hero Showcase with Dusk Villa Imagery and Slides */}
                <StudioHero onStartProject={handleStartProject} />

                {/* Section 1: Our Expertise / Services */}
                <StudioServices />

                {/* Section 2: Selected Projects Gallery */}
                <StudioProjects />

                {/* Section 3: Interactive Project Planner */}
                <StudioPlanner onSelectPlan={handleSelectPlan} />

                {/* Section 4: How We Work - 5 Step Process */}
                <StudioProcess />

                {/* Section 5: Call to Action Banner */}
                <StudioCta onStartProject={handleStartProject} />

                {/* Section 6: Architectural Studio Footer */}
                <StudioFooter />

                {/* Interactive Project Consultation Modal */}
                <StartProjectModal
                    isOpen={isProjectModalOpen}
                    onClose={() => setIsProjectModalOpen(false)}
                    initialPlan={selectedPlanOption}
                />
            </div>
        </>
    );
}
