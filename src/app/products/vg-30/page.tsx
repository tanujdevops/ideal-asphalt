'use client';

import BitumenProductTemplate from "@/components/marketing/bitumen-product-template";
import { siteConfig } from "@/config/site";

const VG30Page = () => {
    const heroHighlights = [
        "Built for heavy-duty carriageways",
        "Consistent performance under axle stress",
        "Preferred choice for high-traffic corridors",
    ];

    const specs = [
        { label: "Viscosity grade", value: "VG-30" },
        { label: "Penetration", value: "50-70 dmm" },
        { label: "Softening point", value: "47-57 deg C" },
        { label: "Flash point", value: "Min 220 deg C" },
    ];

    const features = [
        {
            title: "High load resilience",
            description: "Maintains structural strength under intense axle loads and sustained heavy traffic volumes.",
        },
        {
            title: "Durable binder film",
            description: "Superior adhesion keeps aggregates locked in, reducing raveling on demanding corridors.",
        },
        {
            title: "Low maintenance cycles",
            description: "Extends resurfacing intervals for national highways, ports, and industrial access roads.",
        },
    ];

    const primaryUses = [
        "National highways and expressways",
        "Industrial access roads",
        "Bus rapid transit lanes",
        "Port and logistics corridors",
    ];

    const idealMixes = [
        "Dense bituminous macadam",
        "Bituminous concrete",
        "Stone matrix asphalt",
        "Heavy-duty binder courses",
    ];

    const whyBullets = [
        {
            title: "Performance verified",
            description: "QA teams test every batch for viscosity, penetration, and specific gravity before loading.",
        },
        {
            title: "Logistics discipline",
            description: "Coordinated fleets and insulated tankers keep VG-30 within paving temperature bands.",
        },
        {
            title: "Compliance-ready documentation",
            description: "Consultant-ready certificates, MSDS, and calibration reports travel with every batch.",
        },
        {
            title: "Dedicated advisors",
            description: "On-call specialists help with paving temperature decisions, compaction windows, and QA clarifications.",
        },
    ];

    const glossary = [
        {
            title: "Viscosity",
            description: "Indicates binder stiffness at paving temperature; VG-30 delivers the structure heavy corridors demand.",
        },
        {
            title: "Penetration",
            description: "Lower penetration ensures VG-30 remains firm under heavy tyre pressure.",
        },
        {
            title: "Softening point",
            description: "Suitable for hotter regions where binder must resist deformation under load.",
        },
        {
            title: "Ductility",
            description: "Balances stiffness with flexibility so pavements absorb braking and turning forces.",
        },
        {
            title: "Flash point",
            description: "Confirms safe handling during heating and storage.",
        },
        {
            title: "Solubility",
            description: "Assures binder purity and compatibility with dense graded mixes.",
        },
    ];

    const faqs = [
        {
            question: "What projects benefit most from VG-30?",
            answer: "High-traffic expressways, industrial corridors, and logistics hubs that face constant heavy axle loads.",
        },
        {
            question: "How do you maintain supply continuity?",
            answer: "Dedicated storage, temperature-controlled tankers, and round-the-clock coordination keep deliveries punctual.",
        },
        {
            question: "Can you support multi-location programmes?",
            answer: "Yes. We align dispatches across regions with centralised tracking, compliance documentation, and escalation channels.",
        },
    ];

    return (
        <BitumenProductTemplate
            productName="VG-30 bitumen"
            heroTagline="VG-30 bitumen tuned for demanding expressways and industrial corridors"
            heroDescription="VG-30 combines stiffness, adhesion, and controlled production to keep high-load corridors performing in extreme heat, monsoons, and relentless traffic cycles."
            heroHighlights={heroHighlights}
            specs={specs}
            features={features}
            primaryUses={primaryUses}
            idealMixes={idealMixes}
            whyBullets={whyBullets}
            glossary={glossary}
            faqs={faqs}
            whatsappMessage={siteConfig.whatsappMessages.product('VG-30')}
            imageSrc="/vg30.png"
            imageAlt="VG-30 bitumen product packaging"
        />
    );
};

export default VG30Page;
