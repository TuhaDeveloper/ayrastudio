import React from 'react';
import { StudioLogo } from './studio-logo';
import { Facebook, Instagram, Linkedin, MapPin, Youtube } from 'lucide-react';

export function StudioFooter() {
    const navLinks = [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'How We Work', href: '#how-we-work' },
        { label: 'About', href: '#about' },
    ];

    const socials = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Youtube, href: '#', label: 'YouTube' },
    ];

    return (
        <footer id="about" className="relative bg-background border-t border-border py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-border">
                    {/* Left: Studio Brand */}
                    <StudioLogo variant="dark" />

                    {/* Center: Navigation Links */}
                    <nav className="flex flex-wrap items-center gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Location & Social Links */}
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 text-foreground" />
                            <span>Dhaka, Bangladesh</span>
                        </div>

                        <div className="flex items-center gap-3">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                                    >
                                        <Icon className="h-3.5 w-3.5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Fine Print */}
                <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] text-muted-foreground">
                    <p>© {new Date().getFullYear()} AIYRA STUDIO Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-foreground transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-foreground transition-colors">
                            Terms of Engagement
                        </a>
                        <a href="#" className="hover:text-foreground transition-colors">
                            Statutory Compliance
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
