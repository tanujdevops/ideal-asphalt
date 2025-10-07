'use client';

import BitumenProductTemplate from "@/components/marketing/bitumen-product-template";
import { siteConfig } from "@/config/site";

const VG10Page = () => {
    const heroHighlights = [
        "Stable under relentless surface temperatures",
        "Strong aggregate adhesion for dense mixes",
        "Trusted across runways and premium highways",
    ];

    const specs = [
        { label: "Viscosity grade", value: "VG-10" },
        { label: "Penetration", value: "80-100 dmm" },
        { label: "Softening point", value: "40-50 deg C" },
        { label: "Flash point", value: "Min 220 deg C" },
    ];

    const features = [
        {
            title: "High-viscosity backbone",
            description: "Delivers strong aggregate binding and resilient surfaces capable of absorbing heavy tyre pressures in extreme heat.",
        },
        {
            title: "Heat-resilient surface",
            description: "Maintains structural integrity in hot climates, resisting bleeding, rutting, and premature deformation.",
        },
        {
            title: "Extended lifecycle value",
            description: "Slows down resurfacing cycles for premium highways, airports, and industrial pavements.",
        },
    ];

    const primaryUses = [
        "High-temperature expressways and highways",
        "Airport runways and taxiways",
        "Industrial yards and hardstands",
        "Premium urban carriageways",
    ];

    const idealMixes = [
        "Hot mix asphalt",
        "Dense bituminous macadam",
        "Bituminous concrete wearing courses",
        "Crack-resistant overlay mixes",
    ];

    const whyBullets = [
        {
            title: "Consistency every batch",
            description: "Refinery partnerships deliver uniform VG-10 properties so paving temperatures stay predictable and approvals move quickly.",
        },
        {
            title: "Temperature-controlled logistics",
            description: "Insulated tankers and proactive scheduling maintain the window your paving crew specifies.",
        },
        {
            title: "Compliance pack included",
            description: "MSDS, QA reports, and statutory certificates accompany every dispatch for consultant sign-off.",
        },
        {
            title: "Technical standby",
            description: "Advisors remain on call to align temperatures, modifier dosage, and compaction targets during execution.",
        },
    ];

    const glossary = [
        {
            title: "Viscosity",
            description: "Resistance to flow at mixing temperature; the higher value helps VG-10 withstand heavy traffic loads without deformation.",
        },
        {
            title: "Penetration",
            description: "Needle-test hardness indicator; the 80-100 range delivers stiffness tailored for hot climates.",
        },
        {
            title: "Softening point",
            description: "Temperature at which the binder softens; verifies suitability for high ambient conditions.",
        },
        {
            title: "Ductility",
            description: "Ability to stretch without cracking; protects dense mixes from shear and braking forces.",
        },
        {
            title: "Flash point",
            description: "Temperature where vapours ignite; informs safe heating and storage practices.",
        },
        {
            title: "Solubility",
            description: "Indicates binder purity and the absence of fillers that could affect long-term performance.",
        },
    ];

    const faqs = [
        {
            question: "Where does VG-10 perform best?",
            answer: "VG-10 excels on high-temperature expressways, airport pavements, and premium urban roads where surface temperatures regularly exceed 60°C.",
        },
        {
            question: "How quickly can you mobilise supply?",
            answer: "Share tonnage, dispatch timelines, and the delivery point—Ideal Asphalt aligns stock, transport, and compliance paperwork within hours.",
        },
        {
            question: "Do you assist with mix design adjustments?",
            answer: "Yes. We coordinate with your consultants to fine-tune binder content, modifier dosage, and compaction targets for VG-10 mixes.",
        },
    ];

    return (
        <BitumenProductTemplate
            productName="VG-10 bitumen"
            heroTagline="VG-10 bitumen engineered for high-temperature corridors"
            heroDescription="VG-10 pairs high viscosity with superior adhesion to deliver long-life surfaces for runways, premium highways, and industrial pavements exposed to intense heat."
            heroHighlights={heroHighlights}
            specs={specs}
            features={features}
            primaryUses={primaryUses}
            idealMixes={idealMixes}
            whyBullets={whyBullets}
            glossary={glossary}
            faqs={faqs}
            whatsappMessage={siteConfig.whatsappMessages.product('VG-10')}
            imageSrc="/vg10.png"
            imageAlt="VG-10 bitumen product packaging"
        />
    );
};

export default VG10Page;
