import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { StudioLogo } from './studio-logo';
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react';

interface StudioNavbarProps {
    onStartProject: () => void;
}

export function StudioNavbar({ onStartProject }: StudioNavbarProps) {
    const { url } = usePage();
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const isHome = url === '/' || url.startsWith('/#');
    const isServices = url.startsWith('/services');
    const isGallery = url.startsWith('/gallery') || url.startsWith('/projects');
    const isAbout = url.startsWith('/about');
    const isContact = url.startsWith('/contact');

    useEffect(() => {
        if (!isHome) {
            if (isServices) setActiveSection('Services');
            else if (isGallery) setActiveSection('Gallery');
            else if (isAbout) setActiveSection('About');
            else if (isContact) setActiveSection('Contact');
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 15);

            if (isHome) {
                const sections = [
                    { id: 'hero', name: 'Home' },
                    { id: 'services', name: 'Services' },
                    { id: 'projects', name: 'Gallery' },
                    { id: 'planner', name: 'How We Work' },
                    { id: 'how-we-work', name: 'How We Work' },
                    { id: 'about', name: 'About' },
                ];

                const scrollPos = window.scrollY + 180;
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
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [url, isHome, isServices, isGallery, isAbout, isContact]);

    const navItems = [
        { number: '01', label: 'Home', href: '/' },
        { number: '02', label: 'Services', href: '/services' },
        { number: '03', label: 'Gallery', href: '/gallery' },
        { number: '04', label: 'How We Work', href: '/#how-we-work' },
        { number: '05', label: 'About', href: '/about' },
        { number: '06', label: 'Contact', href: '/contact' },
    ];

    const isItemActive = (item: { label: string; href: string }) => {
        if (item.label === 'Services') return isServices;
        if (item.label === 'Gallery') return isGallery;
        if (item.label === 'About') return isAbout;
        if (item.label === 'Contact') return isContact;
        if (isHome) return activeSection === item.label;
        return false;
    };

    const handleNavClick = (label: string) => {
        setActiveSection(label);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    scrolled
                        ? 'bg-[#141210]/95 backdrop-blur-md border-b border-surface-dark-border py-3.5 shadow-xl'
                        : isHome
                          ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-6'
                          : 'bg-[#141210]/90 backdrop-blur-md border-b border-surface-dark-border/60 py-3.5 sm:py-4 shadow-sm'
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-12">
                    {/* Logo */}
                    <StudioLogo variant="light" />

                    {/* Desktop Navigation Links */}
                    <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
                        {navItems.map((item) => {
                            const isActive = isItemActive(item);
                            return (
                                <Link
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
                                </Link>
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

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        type="button"
                        aria-label="Open navigation menu"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-xs text-white transition-all md:hidden hover:bg-white/20 active:scale-95"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </header>

            {/* Premium Full-Screen Architectural Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex flex-col justify-between bg-surface-dark text-white p-6 sm:p-8 animate-in fade-in duration-200">
                    {/* Top Header inside overlay */}
                    <div className="flex items-center justify-between border-b border-surface-dark-border pb-5">
                        <StudioLogo variant="light" compact />

                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            type="button"
                            aria-label="Close navigation menu"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 active:scale-95"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Middle: Large Elegant Navigation Links */}
                    <nav className="flex flex-col gap-6 py-8 my-auto">
                        {navItems.map((item) => {
                            const isActive = isItemActive(item);
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.label)}
                                    className="group flex items-center justify-between border-b border-white/10 pb-4 transition-colors"
                                >
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-xs font-mono text-white/40 tracking-wider">
                                            {item.number}
                                        </span>
                                        <span
                                            className={`font-sans text-2xl font-light tracking-tight transition-colors ${
                                                isActive ? 'text-white font-medium' : 'text-white/70 group-hover:text-white'
                                            }`}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                    <ArrowRight
                                        className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                                            isActive ? 'text-white opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100'
                                        }`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Bottom: CTA & Studio Quick Contacts */}
                    <div className="border-t border-surface-dark-border pt-6 space-y-5">
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                onStartProject();
                            }}
                            type="button"
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-xs font-semibold tracking-wider text-foreground shadow-lg transition-transform active:scale-98 uppercase"
                        >
                            <span>Start a Project</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>

                        <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-white/60">
                            <a
                                href="tel:+8801700000000"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <Phone className="h-3.5 w-3.5 text-white/40" />
                                <span>+880 1XXX-XXXXXX</span>
                            </a>
                            <a
                                href="mailto:hello@ayrastudio.com"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <Mail className="h-3.5 w-3.5 text-white/40" />
                                <span>hello@ayrastudio.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
