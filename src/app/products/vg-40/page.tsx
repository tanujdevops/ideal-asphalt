'use client';

import BitumenProductTemplate from "@/components/marketing/bitumen-product-template";
import { siteConfig } from "@/config/site";

const VG40Page = () => {
    const heroHighlights = [
        "Built for extreme temperature swings",
        "Maximum stiffness for heavy axle loads",
        "Trusted on expressways and high-elevation routes",
    ];

    const specs = [
        { label: "Viscosity grade", value: "VG-40" },
        { label: "Penetration", value: "40-60 dmm" },
        { label: "Softening point", value: "50-60 deg C" },
        { label: "Flash point", value: "Min 220 deg C" },
    ];

    const features = [
        {
            title: "Maximum stiffness",
            description: "Engineered to resist rutting and deformation under the heaviest axle loads and steep gradients.",
        },
        {
            title: "Extended durability",
            description: "Ideal for expressways, mountain passes, and ports that experience extreme weather swings.",
        },
        {
            title: "Compliance ready",
            description: "Delivered with stringent QA, temperature tracking, and documentation to satisfy national-level consultants.",
        },
    ];

    const primaryUses = [
        "High-altitude expressways",
        "Heavy-duty container corridors",
        "Industrial and port approaches",
        "Extreme climate paving contracts",
    ];

    const idealMixes = [
        "Stone matrix asphalt",
        "Dense bituminous macadam",
        "Heavy-duty binder courses",
        "High-modulus base layers",
    ];

    const whyBullets = [
        {
            title: "Temperature control",
            description: "Insulated tankers and real-time monitoring keep VG-40 within the tight temperature band it demands.",
        },
        {
            title: "Robust QA",
            description: "Each batch is tested for viscosity, penetration, ductility, and specific gravity to match consultant requirements.",
        },
        {
            title: "Expert liaison",
            description: "Specialists collaborate with NHAI, MoRTH, and state consultants for seamless approvals.",
        },
        {
            title: "On-call support",
            description: "Advisors stay available through paving windows to address field queries instantly.",
        },
    ];

    const glossary = [
        {
            title: "Viscosity",
            description: "Elevated viscosity ensures VG-40 maintains structural integrity under heavy loads and steep gradients.",
        },
        {
            title: "Penetration",
            description: "Lower penetration signals high stiffness, ideal for extreme climate pavements.",
        },
        {
            title: "Softening point",
            description: "Higher softening point combats rutting where pavement temperatures spike.",
        },
        {
            title: "Ductility",
            description: "Despite stiffness, VG-40 retains controlled ductility to manage thermal stresses.",
        },
        {
            title: "Flash point",
            description: "Confirms safe handling parameters during heating and transfer.",
        },
        {
            title: "Solubility",
            description: "Ensures binder purity and compatibility with polymer or fibre modifications when required.",
        },
    ];

    const faqs = [
        {
            question: "Which projects mandate VG-40?",
            answer: "Expressways, container terminals, hilly terrain highways, and locations with extreme weather swings frequently specify VG-40.",
        },
        {
            question: "How do you support compliance checks?",
            answer: "We supply full test certificates, MSDS, and maintain sample retention to support lab verification and consultant audits.",
        },
        {
            question: "Can VG-40 be modified on request?",
            answer: "Yes. We work with refiners and modifiers to deliver polymer or fibre enhanced VG-40 when project specifications demand it.",
        },
    ];

    return (
        <BitumenProductTemplate
            productName="VG-40 bitumen"
            heroTagline="VG-40 bitumen engineered for the harshest climates and heaviest loads"
            heroDescription="VG-40 delivers uncompromising stiffness, adhesion, and compliance support so national expressways, port corridors, and mountain passes stay resilient under the toughest conditions."
            heroHighlights={heroHighlights}
            specs={specs}
            features={features}
            primaryUses={primaryUses}
            idealMixes={idealMixes}
            whyBullets={whyBullets}
            glossary={glossary}
            faqs={faqs}
            whatsappMessage={siteConfig.whatsappMessages.product('VG-40')}
            imageSrc="/vg40.png"
            imageAlt="VG-40 bitumen product packaging"
        />
    );
};

export default VG40Page;
