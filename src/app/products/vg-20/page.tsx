'use client';

import BitumenProductTemplate from "@/components/marketing/bitumen-product-template";
import { siteConfig } from "@/config/site";

const VG20Page = () => {
    const heroHighlights = [
        "Balanced viscosity for urban and regional roads",
        "Smooth compaction for resurfacing programmes",
        "Optimised for municipal budgets",
    ];

    const specs = [
        { label: "Viscosity grade", value: "VG-20" },
        { label: "Penetration", value: "60-80 dmm" },
        { label: "Softening point", value: "45-55 deg C" },
        { label: "Flash point", value: "Min 220 deg C" },
    ];

    const features = [
        {
            title: "Balanced workability",
            description: "Flows smoothly through mixing, laying, and compaction, delivering uniform finishes across resurfacing and new-lay projects.",
        },
        {
            title: "Economic durability",
            description: "Extends resurfacing intervals for municipalities and developers without overstretching budgets.",
        },
        {
            title: "Versatile application",
            description: "Performs across binder courses, wearing courses, and periodic maintenance overlays.",
        },
    ];

    const primaryUses = [
        "Municipal and regional road construction",
        "Urban resurfacing and overlay programmes",
        "Township and campus road networks",
        "Parking lots and commercial driveways",
    ];

    const idealMixes = [
        "Hot mix asphalt",
        "Bituminous macadam",
        "Dense bituminous macadam",
        "Surface dressing layers",
    ];

    const whyBullets = [
        {
            title: "Predictable handling",
            description: "Consistent viscosity helps crews maintain target temperatures, roller patterns, and finish quality.",
        },
        {
            title: "Strong aggregate adhesion",
            description: "Locks in aggregates to deliver smooth, durable surfaces that resist raveling and fretting.",
        },
        {
            title: "Budget-conscious logistics",
            description: "Optimised routing and staging reduce idle time and keep municipal resurfacing windows on track.",
        },
        {
            title: "Consultant-ready paperwork",
            description: "Material certificates, MSDS, and batch traceability ship with every load for quick approvals.",
        },
    ];

    const glossary = [
        {
            title: "Viscosity",
            description: "Indicates binder flow at paving temperature; VG-20 offers an easy lay for moderate climates and resurfacing work.",
        },
        {
            title: "Penetration",
            description: "Needle-test hardness; the 60-80 range balances stiffness and flexibility for municipal projects.",
        },
        {
            title: "Softening point",
            description: "Temperature where the binder softens; VG-20 stays resilient through moderate temperature swings.",
        },
        {
            title: "Ductility",
            description: "Flexibility under load; protects surfaces from cracking driven by steering and braking.",
        },
        {
            title: "Flash point",
            description: "Defines safe heating parameters during storage and application.",
        },
        {
            title: "Solubility",
            description: "Confirms binder purity, ensuring predictable performance in dense graded mixes.",
        },
    ];

    const faqs = [
        {
            question: "Where does VG-20 deliver the best results?",
            answer: "VG-20 is the go-to choice for municipal, township, and regional roads in moderate climates where budgets and speed matter.",
        },
        {
            question: "Is VG-20 suited for resurfacing contracts?",
            answer: "Yes. Its workability keeps milling and overlay programmes quick and uniform across long stretches of road.",
        },
        {
            question: "Do you support compliance approvals?",
            answer: "We provide complete documentation—MSDS, QA reports, and statutory certificates—so consultant and PMC approvals are straightforward.",
        },
    ];

    return (
        <BitumenProductTemplate
            productName="VG-20 bitumen"
            heroTagline="VG-20 bitumen that keeps municipal programmes on schedule"
            heroDescription="VG-20 balances viscosity, workability, and cost-efficiency so municipal, township, and regional road projects finish on time without overrunning budgets."
            heroHighlights={heroHighlights}
            specs={specs}
            features={features}
            primaryUses={primaryUses}
            idealMixes={idealMixes}
            whyBullets={whyBullets}
            glossary={glossary}
            faqs={faqs}
            whatsappMessage={siteConfig.whatsappMessages.product('VG-20')}
            imageSrc="/vg20.png"
            imageAlt="VG-20 bitumen product packaging"
        />
    );
};

export default VG20Page;
