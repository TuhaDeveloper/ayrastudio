import React, { useState, useEffect } from 'react';
import { StudioLogo } from './studio-logo';
import { ArrowRight, Menu, X } from 'lucide-react';

interface StudioNavbarProps {
    onStartProject: () => void;
}

export function StudioNavbar({ onStartProject }: StudioNavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = [
                { id: 'hero', name: 'Home' },
                { id: 'services', name: 'Services' },
                { id: 'projects', name: 'Projects' },
                { id: 'planner', name: 'How We Work' },
                { id: 'how-we-work', name: 'How We Work' },
                { id: 'about', name: 'About' },
            ];

            const scrollPos = window.scrollY + 200;
            for (const s of sections) {
                const el = document.getElementById(s.id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(s.name);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'How We Work', href: '#how-we-work' },
        { label: 'About', href: '#about' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-surface-dark/90 backdrop-blur-md border-b border-surface-dark-border py-3 shadow-lg'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
                {/* Logo */}
                <StudioLogo variant="light" />

                {/* Desktop Navigation Links */}
                <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.label;
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setActiveSection(item.label)}
                                className={`relative text-xs lg:text-[13px] font-normal tracking-wide transition-colors duration-200 ${
                                    isActive ? 'text-white font-medium' : 'text-white/75 hover:text-white'
                                }`}
                            >
                                {item.label}
                                {isActive && (
                                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white rounded-full transition-all duration-300" />
                                )}
                            </a>
                        );
                    })}
                </nav>

                {/* Right CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={onStartProject}
                        type="button"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-5 py-2 text-xs font-medium tracking-wide text-foreground shadow-sm transition-all duration-200 hover:bg-white hover:border-white hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <span>Start a Project</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    type="button"
                    aria-label="Toggle navigation menu"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden hover:bg-white/10"
                >
                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden border-b border-white/10 bg-surface-dark/95 backdrop-blur-xl px-6 py-6 text-white animate-in slide-in-from-top-4">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => {
                                    setActiveSection(item.label);
                                    setMobileMenuOpen(false);
                                }}
                                className={`text-sm tracking-wide py-1 transition-colors ${
                                    activeSection === item.label
                                        ? 'text-white font-semibold'
                                        : 'text-white/70 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="pt-3 border-t border-white/10">
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    onStartProject();
                                }}
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-2.5 text-xs font-semibold text-foreground tracking-wide"
                            >
                                <span>Start a Project</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
