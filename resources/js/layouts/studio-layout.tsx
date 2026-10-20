import React, { createContext, useContext, useState } from 'react';
import { Head } from '@inertiajs/react';
import { StudioNavbar } from '@/components/studio/studio-navbar';
import { StudioFooter } from '@/components/studio/studio-footer';
import { StartProjectModal } from '@/components/studio/start-project-modal';
import { PlanOption } from '@/components/studio/studio-planner';

interface StudioLayoutContextType {
    openProjectModal: (plan?: PlanOption | { title: string; costPerSft?: string }) => void;
    closeProjectModal: () => void;
}

const StudioLayoutContext = createContext<StudioLayoutContextType>({
    openProjectModal: () => {},
    closeProjectModal: () => {},
});

export const useStudio = () => useContext(StudioLayoutContext);

interface StudioLayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

export function StudioLayout({
    title = 'AYRA STUDIO — Architecture • Engineering • Design',
    description = 'End-to-end architectural planning, civil engineering, and 3D visualization solutions. Spaces designed to be lived in. Structures designed to last.',
    children,
}: StudioLayoutProps) {
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [selectedPlanOption, setSelectedPlanOption] = useState<any>(null);

    const openProjectModal = (plan?: any) => {
        setSelectedPlanOption(plan || null);
        setIsProjectModalOpen(true);
    };

    const closeProjectModal = () => {
        setIsProjectModalOpen(false);
        setSelectedPlanOption(null);
    };

    return (
        <StudioLayoutContext.Provider value={{ openProjectModal, closeProjectModal }}>
            <Head title={title}>
                <meta name="description" content={description} />
            </Head>

            <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans flex flex-col justify-between">
                <div>
                    {/* Fixed Architectural Sticky Navbar */}
                    <StudioNavbar onStartProject={() => openProjectModal()} />

                    {/* Page Content */}
                    <main className="w-full">{children}</main>
                </div>

                {/* Architectural Studio Footer */}
                <StudioFooter />

                {/* Interactive Project Consultation Modal */}
                <StartProjectModal
                    isOpen={isProjectModalOpen}
                    onClose={closeProjectModal}
                    initialPlan={selectedPlanOption}
                />
            </div>
        </StudioLayoutContext.Provider>
    );
}
