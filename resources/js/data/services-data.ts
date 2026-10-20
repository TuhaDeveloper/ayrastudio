export interface ServiceDetail {
    id: string;
    slug: string;
    title: string;
    shortTitle: string;
    tagline: string;
    description: string;
    fullDescription: string;
    image: string;
    galleryImages?: string[];
    timeline: string;
    compliance: string;
    tools: string[];
    features: string[];
    capabilities: {
        title: string;
        description: string;
    }[];
    deliverables: {
        title: string;
        details: string;
    }[];
    processSteps: {
        step: string;
        title: string;
        desc: string;
    }[];
    faqs?: {
        q: string;
        a: string;
    }[];
}

export const studioServices: ServiceDetail[] = [
    {
        id: 'architecture',
        slug: 'architecture',
        title: 'Architecture & Master Planning',
        shortTitle: 'Architecture',
        tagline: 'Contextual spatial planning, conceptual massing, and statutory approvals.',
        description:
            'Residential and commercial architectural planning, concepts and technical documentation built to elevate living standards.',
        fullDescription:
            'At AYRA STUDIO, architecture is the seamless intersection of climate-responsive orientation, functional spatial flow, and timeless material beauty. We design residential duplexes, contemporary luxury villas, apartment complexes, and commercial towers with meticulous attention to natural sunlight, ventilation, and zoning regulations. From site analysis to RAJUK and municipal permit clearance, we ensure your building is both inspiring and buildable.',
        image: '/images/studio/service_architecture.jpg',
        galleryImages: [
            '/images/studio/project_residence.jpg',
            '/images/studio/project_duplex.jpg',
        ],
        timeline: '2 – 4 Weeks',
        compliance: 'RAJUK / CDA / BNBC 2020 Master Plan Codes',
        tools: ['Autodesk Revit (BIM)', 'AutoCAD Architecture', 'SketchUp Pro', 'Rhino 3D'],
        features: [
            'Comprehensive site topography & solar/wind orientation analysis',
            'Functional room adjacencies & ergonomic circulation planning',
            'Complete statutory sanction drawings for municipal approvals',
            'Working architectural blueprints, elevations, and section details',
            'Full window, door, and architectural fixture schedules',
        ],
        capabilities: [
            {
                title: 'Master Planning & Site Analysis',
                description:
                    'Detailed site layout optimizing setback distances, daylight exposure, wind channels, approach roads, and future expansion possibilities.',
            },
            {
                title: 'Schematic Design & Space Planning',
                description:
                    'Developing functional zoning between public, private, and service areas to maximize efficiency, privacy, and natural ventilation.',
            },
            {
                title: 'Statutory Approval Drawings (RAJUK / Cantonment / Municipal)',
                description:
                    'Precise code compliance with FAR (Floor Area Ratio), MGC (Maximum Ground Coverage), setback rules, and fire escape provisions.',
            },
            {
                title: 'Detailed Construction Drawings',
                description:
                    'Dimensioned floor plans, 4-side elevations, cross sections, wall sections, stairs, toilet & kitchen layouts, and finishing details.',
            },
        ],
        deliverables: [
            {
                title: 'Full Working Blueprint Set',
                details: 'Dimensioned architectural floor plans, sections, elevations, and roof drainage schematics in CAD & PDF.',
            },
            {
                title: 'Statutory Approval Documentation',
                details: 'Official sanction sheet prepared in compliance with local development authority guidelines.',
            },
            {
                title: 'BIM Architectural 3D Model',
                details: 'Coordinated Autodesk Revit / 3D model ensuring zero spatial clash with structural elements.',
            },
            {
                title: 'Material & Fixture Schedule',
                details: 'Door, window, railing, floor finish, and exterior facade cladding specification sheets.',
            },
        ],
        processSteps: [
            {
                step: '01',
                title: 'Site Study & Briefing',
                desc: 'Plot boundary verification, soil test review, orientation checks, and lifestyle requirements workshop.',
            },
            {
                step: '02',
                title: 'Conceptual Floor Plans',
                desc: '2 to 3 distinct architectural zoning options with room layouts and massing studies.',
            },
            {
                step: '03',
                title: 'Refinement & 3D Massing',
                desc: 'Finalizing room dimensions, facade language, window proportions, and statutory setback calculations.',
            },
            {
                step: '04',
                title: 'Working Drawings & Sanction',
                desc: 'Issuing complete working blueprints ready for municipal approval and contractor execution.',
            },
        ],
        faqs: [
            {
                q: 'Do you manage RAJUK or municipal building approval submissions?',
                a: 'Yes, our architectural drawings strictly conform to the Bangladesh National Building Code (BNBC) and RAJUK / local development authority bylaws, including FAR, setback, and height restrictions.',
            },
            {
                q: 'How many design revisions are included during the planning stage?',
                a: 'We offer iterative reviews during the schematic stage until you are fully confident with the layout and spatial flow before advancing to engineering drawings.',
            },
        ],
    },
    {
        id: 'civil-engineering',
        slug: 'civil-engineering',
        title: 'Civil & Structural Engineering',
        shortTitle: 'Civil Engineering',
        tagline: 'Seismic-resistant structural engineering, foundation mechanics, and BNBC compliance.',
        description:
            'Structural analysis, soil mechanics integration, and bar bending details engineered for maximum safety and cost efficiency.',
        fullDescription:
            'A beautiful structure must stand steadfast for generations. Our licensed civil and structural engineers perform finite element analysis to ensure earthquake resistance, wind stability, and foundation durability under Bangladesh’s unique geotechnical conditions. We optimize reinforcement steel and concrete grades to eliminate over-design costs while guaranteeing 100% structural safety.',
        image: '/images/studio/service_civil.jpg',
        galleryImages: [
            '/images/studio/service_civil_engineering_1791790989011.jpg',
            '/images/studio/project_commercial.jpg',
        ],
        timeline: '2 – 3 Weeks',
        compliance: 'BNBC 2020 • ACI 318-19 • ASTM Standards',
        tools: ['ETABS Structural Analysis', 'SAP2000', 'SAFE Foundation Design', 'AutoCAD Structural Detailing'],
        features: [
            'Deep geotechnical soil report interpretation & foundation selection',
            'Seismic Zone 2/3 earthquake-resistant RCC frame and shear wall analysis',
            'Cast-in-situ pile, mat/raft, or shallow isolated footing design',
            'Precise Bar Bending Schedule (BBS) to minimize on-site steel wastage',
            'Full coordination with MEP (Mechanical, Electrical, and Plumbing) ducts',
        ],
        capabilities: [
            {
                title: 'Geotechnical & Foundation Engineering',
                description:
                    'Interpreting SPT values, N-values, and soil strata to design safe pile caps, mat foundations, or combined footings that prevent differential settlement.',
            },
            {
                title: 'RCC Frame & Seismic Analysis',
                description:
                    '3D mathematical model building in ETABS, analyzing response spectra, dead loads, live loads, lateral wind pressures, and earthquake forces.',
            },
            {
                title: 'Bar Bending Schedules (BBS)',
                description:
                    'Exact cut lengths, hook details, lap lengths, and tonnage estimations for rebar, preventing steel wastage during construction.',
            },
            {
                title: 'MEP Integration & Load Proofing',
                description:
                    'Coordinating beam penetrations, sanitary conduits, and electrical shafts without compromising concrete core strength.',
            },
        ],
        deliverables: [
            {
                title: 'Certified Structural Calculation Report',
                details: 'Full ETABS mathematical model output, load combination checks, and licensed engineer endorsement.',
            },
            {
                title: 'Foundation & Pile Layout Drawings',
                details: 'Pile coordinate plans, pile cap reinforcement, tie beam layouts, and excavation level details.',
            },
            {
                title: 'Floor Slab & Beam Reinforcement Sheets',
                details: 'Crossection detailing of all columns, shear walls, beams, and slabs with bar placement marks.',
            },
            {
                title: 'Detailed BBS Schedule',
                details: 'Exact diameter-wise steel quantities and cutting schedules for procurement and on-site bending.',
            },
        ],
        processSteps: [
            {
                step: '01',
                title: 'Soil Data & Grid Mapping',
                desc: 'Analyzing soil test reports, calculating safe bearing capacity, and aligning structural column grids with architectural plans.',
            },
            {
                step: '02',
                title: '3D ETABS Modeling',
                desc: 'Simulating dead, live, wind, and seismic forces according to BNBC 2020 guidelines.',
            },
            {
                step: '03',
                title: 'Foundation & Frame Detailing',
                desc: 'Sizing piles, footings, columns, and beams while optimizing steel tonnage for cost efficiency.',
            },
            {
                step: '04',
                title: 'Construction Detailing & Sign-off',
                desc: 'Releasing certified structural blueprints, rebar schedules, and inspection guidelines.',
            },
        ],
        faqs: [
            {
                q: 'Can you provide structural design if we already have architectural drawings?',
                a: 'Yes. We routinely collaborate with homeowners and external architects to provide certified structural engineering based on existing floor plans.',
            },
            {
                q: 'Why is an optimized Bar Bending Schedule (BBS) important?',
                a: 'Steel is one of the highest expenses in construction. An accurate BBS reduces on-site rebar wastage from typical 12-15% down to under 3%, saving significant budget.',
            },
        ],
    },
    {
        id: '3d-visualization',
        slug: '3d-visualization',
        title: '2D Drafting & 3D Visualization',
        shortTitle: '3D Visualization',
        tagline: 'Hyper-realistic 4K architectural renderings, 3D cutaway plans, and animations.',
        description:
            'Detailed floor plans, elevations, 3D models and realistic visualization that bring your project to vivid life.',
        fullDescription:
            'Visualize every brick, shadow, and reflection before a single rupee or dollar is spent on construction. Our 3D visualization studio transforms 2D CAD files into photorealistic exterior and interior architectural CGI. With accurate sun azimuth angles, authentic physically-based material shaders, and cinematic animations, we empower you to evaluate finishes, lighting, and textures with complete clarity.',
        image: '/images/studio/service_3d.jpg',
        galleryImages: [
            '/images/studio/hero.jpg',
            '/images/studio/project_interior.jpg',
        ],
        timeline: '7 – 14 Days',
        compliance: 'Ultra HD 4K / 8K Rendering Standards',
        tools: ['3ds Max', 'Chaos Corona', 'Chaos V-Ray', 'Lumion Pro', 'Unreal Engine 5', 'Adobe Photoshop'],
        features: [
            'Photorealistic exterior renderings (Daylight, Golden Hour Dusk, and Night modes)',
            'Interior architectural CGI with true-to-life lighting and material textures',
            '3D cutaway axonometric floor plans highlighting furniture arrangement',
            'Cinematic 4K camera fly-through animations and drone montage simulation',
            'Virtual 360-degree panoramic tours for interactive spatial walkthroughs',
        ],
        capabilities: [
            {
                title: 'Daylight & Atmospheric Exterior Renders',
                description:
                    'Simulating natural sun trajectories, glass refractions, landscaping flora, and exterior facade textures at high resolution.',
            },
            {
                title: 'Photorealistic Interior CGI',
                description:
                    'Showcasing realistic woodwork grains, marble veining, fabrics, acoustic panels, and ambient layered LED lighting.',
            },
            {
                title: '3D Axonometric Floor Plans',
                description:
                    'Clear overhead cutaway angles demonstrating room proportions, circulation widths, and furniture placements.',
            },
            {
                title: 'Cinematic Video Walkthroughs',
                description:
                    'Fluid camera trajectories conveying spatial drama, height, depth, and landscaping continuity in 4K 60fps.',
            },
        ],
        deliverables: [
            {
                title: 'High-Resolution 4K Image Renderings',
                details: 'Multiple perspectives (front facade, corner view, aerial perspective, and detailed close-ups).',
            },
            {
                title: '3D Cutaway Floor Plan Views',
                details: 'Isometric cutaway renderings for each floor level displaying interior layouts.',
            },
            {
                title: 'Material & Texture Color Boards',
                details: 'Digital presentation boards showing exact paint codes, tile sizes, stone finishes, and glass tints.',
            },
            {
                title: 'Full HD / 4K Animation Video (Optional)',
                details: 'Edited cinematic walkthrough with subtle background soundscapes and branding overlays.',
            },
        ],
        processSteps: [
            {
                step: '01',
                title: 'Geometry & 3D Modeling',
                desc: 'Extruding CAD plans into an accurate 3D digital model with precise heights, wall thicknesses, and apertures.',
            },
            {
                step: '02',
                title: 'Camera Angle Selection',
                desc: 'Sharing clay render viewpoints to select the most dramatic and flattering architectural angles.',
            },
            {
                step: '03',
                title: 'Texturing & Lighting Simulation',
                desc: 'Applying physically accurate materials (concrete, glass, timber, stone) and dialing in natural sun and artificial lighting.',
            },
            {
                step: '04',
                title: 'Final High-Res Rendering & Post-Production',
                desc: 'Delivering full 4K imagery with color grading and environmental landscaping.',
            },
        ],
        faqs: [
            {
                q: 'What files do I need to supply for 3D visualization?',
                a: 'If you already have architectural drawings, you can share DWG (AutoCAD), PDF, or SketchUp files. If not, our team can draft the plans from scratch.',
            },
            {
                q: 'Can we test different paint colors and exterior wall cladding?',
                a: 'Absolutely! Our iterative workflow allows you to preview different stone tiles, louvers, colors, and facade elements before finalizing.',
            },
        ],
    },
    {
        id: 'interior-exterior',
        slug: 'interior-exterior',
        title: 'Interior & Exterior Design',
        shortTitle: 'Interior & Exterior',
        tagline: 'Spaces designed around human proportion, tactile materiality, and seamless landscape.',
        description:
            'Spaces designed around function, proportion, lighting, and bespoke materiality tailored to contemporary living.',
        fullDescription:
            'Great interior and landscape design is about how a space feels and functions in everyday life. We curate environments with an architectural eye—focusing on clean lines, bespoke joinery, acoustic comfort, concealed storage, and lighting scenes. From luxurious residential living rooms and master suites to private landscaped terraces and modern corporate offices, we tailor every detail.',
        image: '/images/studio/service_interior.jpg',
        galleryImages: [
            '/images/studio/project_interior.jpg',
            '/images/studio/cta_bg.jpg',
        ],
        timeline: '2 – 4 Weeks',
        compliance: 'Acoustic & Luminaire Ergonomic Guidelines',
        tools: ['AutoCAD Interior Detailing', 'SketchUp Pro', 'V-Ray / Corona', 'Dialux Lux Level Simulation'],
        features: [
            'Space planning, furniture layouts, and spatial ergonomic detailing',
            'Custom woodwork, millwork, kitchen cabinet, and wardrobe drawings',
            'Architectural false ceiling design with integrated lighting scenes',
            'Landscape architecture including rooftop gardens, patios, and pergolas',
            'Comprehensive FF&E (Furniture, Fixtures & Equipment) procurement list',
        ],
        capabilities: [
            {
                title: 'Bespoke Joinery & Millwork Design',
                description:
                    'Detailed fabrication blueprints for modular kitchens, TV backdrops, walk-in closets, and built-in credenzas.',
            },
            {
                title: 'Architectural Lighting & Ceiling Schemes',
                description:
                    'Layering ambient, task, and accent lighting with recessed downlights, cove lighting, and focal pendant placements.',
            },
            {
                title: 'Landscape & Outdoor Terrace Design',
                description:
                    'Integrating planter boxes, green walls, wooden decking, outdoor seating, and mood lighting for serene open-air living.',
            },
            {
                title: 'Material Curation & Sourcing Guidance',
                description:
                    'Specifying marble, porcelain tiles, engineered wood, fabrics, hardware fixtures, and sanitary fittings.',
            },
        ],
        deliverables: [
            {
                title: 'Complete Interior Drawing Package',
                details: 'Dimensioned floor plans, false ceiling layouts, electrical fixture points, and wall elevations.',
            },
            {
                title: 'Custom Millwork Shop Drawings',
                details: 'Section details and cutting instructions for carpenters and cabinet manufacturers.',
            },
            {
                title: 'Photorealistic Interior 3D Views',
                details: 'Renderings of every primary room (living room, master bedroom, kitchen, dining, foyer).',
            },
            {
                title: 'BOQ & Sourcing Specification Schedule',
                details: 'List of materials, brands, finishes, and quantities to assist your contractor and procurement team.',
            },
        ],
        processSteps: [
            {
                step: '01',
                title: 'Lifestyle & Aesthetic Discovery',
                desc: 'Understanding your daily routines, storage needs, design tastes, and functional priorities.',
            },
            {
                step: '02',
                title: 'Layout & Mood Boarding',
                desc: 'Presenting furniture arrangement options and curated material palette palettes.',
            },
            {
                step: '03',
                title: '3D Visualization & Finishes',
                desc: 'Producing detailed 3D views showing custom cabinetry, ceiling drops, and lighting moods.',
            },
            {
                step: '04',
                title: 'Execution Working Drawings',
                desc: 'Releasing precise fabrication drawings, electrical point schematics, and material schedules.',
            },
        ],
        faqs: [
            {
                q: 'Do you design both residential and commercial interiors?',
                a: 'Yes, we design luxury duplexes, penthouses, modern apartments, corporate headquarters, and boutique retail spaces.',
            },
            {
                q: 'Can you provide the drawings so our own contractor can execute?',
                a: 'Yes! Our drawing packages are comprehensive and include all dimensions, joinery sections, electrical layouts, and material codes so any skilled contractor can execute with precision.',
            },
        ],
    },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
    return studioServices.find((s) => s.slug === slug || s.id === slug);
}
