export interface GalleryItem {
    id: string;
    title: string;
    subtitle: string;
    category: 'Residential' | 'Commercial' | 'Interior' | 'Engineering' | 'Visualization';
    categoryLabel: string;
    location: string;
    area: string;
    year: string;
    image: string;
    aspectRatio?: 'landscape' | 'portrait' | 'square';
    services: string[];
    description: string;
    highlights: string[];
    scope: string;
}

export const galleryProjects: GalleryItem[] = [
    {
        id: 'modern-family-residence',
        title: 'The Linear Haven Residence',
        subtitle: 'Multi-tiered contemporary residence with deep cantilevered balconies and natural light shafts.',
        category: 'Residential',
        categoryLabel: 'Luxury Residential',
        location: 'Bashundhara R/A, Dhaka',
        area: '5,800 sq.ft',
        year: '2025',
        image: '/images/studio/project_residence.jpg',
        aspectRatio: 'landscape',
        services: ['Architecture', 'Civil Engineering', '3D Visualization'],
        description:
            'A minimalist private family sanctuary designed around natural ventilation and passive cooling. Deep structural cantilevers protect large glass openings from direct tropical heat, while an internal green courtyard connects multi-level living areas.',
        highlights: [
            '100% BNBC 2020 seismic frame with cast-in-situ foundation',
            'Full statutory approval clearance with optimized FAR',
            'Passive cross-ventilation reducing air-conditioning loads by 35%',
            'Integrated rainwater harvesting and rooftop terrace garden',
        ],
        scope: 'Full Turnkey Architecture & Structural Blueprints',
    },
    {
        id: 'serene-suburban-duplex',
        title: 'Dusk Vista Contemporary Duplex',
        subtitle: 'Bespoke two-family duplex blending local teak louvers with fair-faced concrete aesthetics.',
        category: 'Residential',
        categoryLabel: 'Contemporary Duplex',
        location: 'Pubail, Gazipur',
        area: '4,200 sq.ft',
        year: '2025',
        image: '/images/studio/project_duplex.jpg',
        aspectRatio: 'landscape',
        services: ['Architecture', 'Interior Design', '3D Walkthrough'],
        description:
            'Designed as a suburban retreat from urban density, this duplex features distinct public entertainment zones on the ground floor and secluded private suites on the upper level, framed by expansive glass facades and landscape views.',
        highlights: [
            'Warm natural stone wall cladding paired with louvers',
            'Double-height living room with acoustic ceiling treatments',
            'Custom timber joinery and concealed kitchen storage',
            'Earthquake-resistant RCC shear wall design',
        ],
        scope: 'Architectural Planning, Structural & Full Interior Fit-out',
    },
    {
        id: 'corporate-mixed-tower',
        title: 'Vertex Commercial Headquarters',
        subtitle: 'Modern mid-rise corporate tower with energy-efficient curtain wall and column-free floor plates.',
        category: 'Commercial',
        categoryLabel: 'Commercial Landmark',
        location: 'Tejgaon Commercial Area, Dhaka',
        area: '18,500 sq.ft',
        year: '2024',
        image: '/images/studio/project_commercial.jpg',
        aspectRatio: 'landscape',
        services: ['Civil & Structural', 'Architecture', 'MEP Integration'],
        description:
            'A commercial building engineered for maximum corporate flexibility. Structural grid spans were optimized using ETABS to create expansive open-plan offices, dedicated basement car parking, and integrated emergency fire safety stairways.',
        highlights: [
            'Deep cast-in-situ pile foundation design on alluvial clay strata',
            'BNBC 2020 Wind & Seismic compliance certified by Licensed PE',
            'Thermal-break double glazed curtain wall reducing solar gain',
            'Complete Bar Bending Schedule (BBS) saving 11% in steel scrap',
        ],
        scope: 'Full Structural Engineering Calculations & Architectural Approval',
    },
    {
        id: 'penthouse-interior-makeover',
        title: 'Minimalist Penthouse Renovation',
        subtitle: 'Turnkey interior architecture emphasizing tactile materiality and acoustic serenity.',
        category: 'Interior',
        categoryLabel: 'Luxury Interior',
        location: 'Gulshan 2, Dhaka',
        area: '3,400 sq.ft',
        year: '2026',
        image: '/images/studio/project_interior.jpg',
        aspectRatio: 'landscape',
        services: ['Interior Design', 'Lighting Architecture', 'Joinery Detailing'],
        description:
            'A comprehensive spatial redesign transforming a disjointed apartment into a fluid, light-filled penthouse. Features include concealed ambient lighting channels, Italian travertine stone, and bespoke fluted oak wood panelling.',
        highlights: [
            'Concealed magnetic architectural track lighting scenes',
            'Custom walk-in wardrobe and master bath vanity millwork',
            'Acoustic sound-dampening wall panels in family lounge',
            'Integrated smart home automation and motorized louvers',
        ],
        scope: 'Interior Architectural Drawings, Millwork Details & BOQ',
    },
    {
        id: 'dusk-modern-villa',
        title: 'The Glass Pavilion Villa',
        subtitle: 'Ultra-contemporary villa with seamless indoor-outdoor swimming pool and cantilevered roofline.',
        category: 'Residential',
        categoryLabel: 'Luxury Villa',
        location: 'Purbachal Sector 17, Dhaka',
        area: '6,400 sq.ft',
        year: '2026',
        image: '/images/studio/hero.jpg',
        aspectRatio: 'landscape',
        services: ['Architecture', '3D CGI Visualization', 'Structural'],
        description:
            'A showcase of dramatic spatial geometry. The villa’s upper floor floats above a transparent ground level, providing unobstructed vistas of private landscaped gardens and a reflective swimming pool terrace.',
        highlights: [
            'Extraordinary 12-foot column-free cantilevers',
            'Full 4K day-to-night lighting simulation in Corona Render',
            'Zero-threshold sliding glass walls opening to garden decks',
            'Advanced post-tensioned slab engineering',
        ],
        scope: 'Architectural Concept, 3D Visualization & Structural Analysis',
    },
    {
        id: 'seismic-civil-mastery',
        title: 'Geotechnical & Structural Frame Project',
        subtitle: 'Precision structural analysis, foundation detailing, and rebar placement verification.',
        category: 'Engineering',
        categoryLabel: 'Structural Engineering',
        location: 'Uttara Sector 11, Dhaka',
        area: '12,000 sq.ft',
        year: '2025',
        image: '/images/studio/service_civil.jpg',
        aspectRatio: 'landscape',
        services: ['Civil Engineering', 'Soil Mechanics', 'BBS Schedules'],
        description:
            'A high-demand structural engineering project designed to address low soil bearing capacity. Incorporating a combined mat-on-pile foundation system and ductile earthquake-resistant detailing.',
        highlights: [
            'Finite element modeling using ETABS and SAFE foundation software',
            'Soil improvement and pre-cast concrete pile load testing oversight',
            'Comprehensive BBS schedules preventing rebar wastage',
            'Periodic on-site concrete slump and rebar placement testing',
        ],
        scope: 'Structural Calculations, Stamped Engineering Drawings & BBS',
    },
    {
        id: 'exterior-photoreal-cgi',
        title: 'Photorealistic Exterior 3D CGI Showcase',
        subtitle: 'Ultra-high definition 4K architectural visual assets and material finish simulations.',
        category: 'Visualization',
        categoryLabel: '3D Visualization',
        location: 'Banani DOHS, Dhaka',
        area: '4,800 sq.ft',
        year: '2025',
        image: '/images/studio/service_3d.jpg',
        aspectRatio: 'landscape',
        services: ['3D CGI', 'Lighting Simulation', 'Material Palettes'],
        description:
            'Ray-traced photorealistic digital twin created for a private developer client prior to construction. Precise sunlight azimuths and physical material shaders allowed the client to approve facade materials with confidence.',
        highlights: [
            '4K 60fps cinematic camera path animation',
            'Physically accurate V-Ray and Corona material shaders',
            'Detailed exterior louver and architectural lighting analysis',
            '3D axonometric floor plan cutaways for marketing brochures',
        ],
        scope: '3D Digital Twin, 4K Still Renders & Virtual Walkthrough',
    },
    {
        id: 'master-planning-atrium',
        title: 'Biophilic Spatial Architecture Study',
        subtitle: 'Integrating central light-wells, green living walls, and natural cross-ventilation in dense urban plots.',
        category: 'Residential',
        categoryLabel: 'Architectural Concept',
        location: 'Dhanmondi, Dhaka',
        area: '5,100 sq.ft',
        year: '2025',
        image: '/images/studio/service_architecture.jpg',
        aspectRatio: 'landscape',
        services: ['Architecture', 'Environmental Design', 'RAJUK Clearances'],
        description:
            'A study in urban livability within tight property lines. By carving out a central double-height light atrium, natural daylight penetrates every floor while hot air exhausts naturally through rooftop solar chimneys.',
        highlights: [
            'Passive thermal comfort reducing daytime artificial light usage to zero',
            'Full compliance with RAJUK setback and MGC regulations',
            'Integrated planters and green balconies on every floor',
            'Acoustic street noise buffering facade',
        ],
        scope: 'Architectural Working Drawings & Environmental Analysis',
    },
];
