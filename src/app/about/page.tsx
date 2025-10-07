'use client';

import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { primaryButtonClass, secondaryButtonClass } from "@/constants/ui";
import Link from "next/link";
import { BadgeCheck, Building2, Compass, Factory, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";

const heroHighlights = [
    "Family leadership with national reach",
    "ISO-aligned reports on every batch",
    "Fleet-coordinated deliveries with live tracking",
] as const;

const valuePillars = [
    {
        icon: ShieldCheck,
        title: "Integrity in every batch",
        description: "Material traceability, compliance documentation, and transparent sourcing keep your audits seamless.",
    },
    {
        icon: Users,
        title: "Partnership mindset",
        description: "Specialists stay engaged from planning to project handover, aligning supply with your milestones.",
    },
    {
        icon: Sparkles,
        title: "Continuous improvement",
        description: "We refine processes, storage, and logistics to deliver stronger performance year after year.",
    },
];

const capabilityHighlights = [
    {
        title: "Bitumen science",
        points: [
            "Dedicated QA checks covering viscosity, penetration, and softening point",
            "Custom blends for climate, axle loads, and design life expectations",
        ],
    },
    {
        title: "Operational excellence",
        points: [
            "Integrated storage yards with moisture-controlled environments",
            "Coordinated fleet management for on-time dispatch and delivery",
        ],
    },
];

const reachHighlights = [
    {
        title: "Kolhapur HQ",
        description: "Strategic base with quick access to major highway corridors and industrial clusters.",
    },
    {
        title: "Western India",
        description: "Maharashtra, Goa, and Karnataka projects supported with dependable scheduling.",
    },
    {
        title: "Nationwide projects",
        description: "Large infra programmes and EPC contracts serviced through partner logistics.",
    },
];

const commitments = [
    {
        title: "For project owners",
        description: "Responsive advisory, proactive updates, and documentation tailored for consultants and PMCs.",
    },
    {
        title: "For execution teams",
        description: "Reliable batching, safe handling guidance, and standby supply for critical pours.",
    },
];

const AboutPage = () => {
    const handleWhatsAppClick = (message: string) => {
        const url = getWhatsAppUrl(message);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Wrapper className="relative space-y-24 py-24 lg:py-28">
            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background/90 via-background/70 to-background/50 px-6 py-16 sm:px-10 lg:px-16 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.45)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_60%)]" />
                <div className="pointer-events-none absolute -left-28 top-1/4 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />

                <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <Container delay={0.05} className="space-y-8 text-center lg:text-left">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur lg:mx-0">
                            <Sparkles className="h-4 w-4 text-sky-500" />
                            <span>About {siteConfig.businessName}</span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Delivering compliant bitumen logistics for India&apos;s critical builds
                        </h1>

                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-0">
                            As part of Amar Sons Ventures, Ideal Asphalt pairs family-led accountability with refinery partnerships so highways, airports, and industrial estates stay open on schedule.
                        </p>

                        <div className="grid gap-3 sm:grid-cols-3">
                            {heroHighlights.map((item) => (
                                <Container key={item} simple delay={0.1} className="rounded-2xl border border-border/50 bg-background/80 px-4 py-3 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur">
                                    {item}
                                </Container>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className={primaryButtonClass}
                                onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.default)}
                            >
                                Speak with a specialist
                            </Button>
                            <Button asChild size="lg" variant="outline" className={secondaryButtonClass}>
                                <Link href="/contact">Schedule a project call</Link>
                            </Button>
                        </div>
                    </Container>

                    <Container delay={0.18} className="relative w-full justify-center">
                        <div className="relative mx-auto max-w-[420px] space-y-6 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-2xl backdrop-blur">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                                    <Building2 className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Legacy</p>
                                    <p className="text-lg font-semibold text-foreground">Since 1994</p>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-border/50 bg-background/90 p-5 text-sm text-muted-foreground">
                                <p>
                                    “Their reliability has stood out across national highway packages. Ideal Asphalt&apos;s QA reports and delivery discipline simplify consultant approvals.”
                                </p>
                                <div className="mt-4 text-xs uppercase tracking-[0.25em] text-foreground/80">
                                    Project Director, EPC Partner
                                </div>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {siteConfig.stats.slice(0, 2).map((stat) => (
                                    <div key={stat.label} className="rounded-2xl border border-border/50 bg-background/90 p-4 text-center">
                                        <div className="text-xl font-semibold text-foreground">{stat.label}</div>
                                        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl space-y-12">
                    <Container delay={0.05} className="mx-auto max-w-3xl space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Built to remove bottlenecks between specification and delivery</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            What began as a single distribution yard now orchestrates refinery partnerships, QA labs, and logistics to remove the bottlenecks between specification and delivery.
                        </p>
                    </Container>

                    <div className="grid gap-10 lg:grid-cols-2">
                        {capabilityHighlights.map((section, index) => (
                            <Container key={section.title} delay={0.1 + index * 0.05} className="space-y-4 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur">
                                <div className="inline-flex items-center gap-3 rounded-full border border-border/40 bg-background/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                    <Factory className="h-4 w-4 text-sky-500" />
                                    {section.title}
                                </div>
                                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                                    {section.points.map((point) => (
                                        <li key={point} className="flex gap-3">
                                            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                                                <BadgeCheck className="h-3.5 w-3.5" />
                                            </span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Container>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background/70 to-background/40 px-6 py-16 sm:px-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.12),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_55%)]" />
                <div className="relative mx-auto max-w-6xl space-y-12">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Principles that keep programmes moving</h2>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            Decades inside the Amar Sons Ventures ecosystem shaped values that keep every tonne sourced, stored, and delivered with accountability.
                        </p>
                    </Container>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {valuePillars.map(({ icon: Icon, title, description }, index) => (
                            <Container key={title} delay={0.1 + index * 0.05} className="group relative h-full">
                                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-8 shadow-lg backdrop-blur transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:border-sky-500/60">
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="relative flex h-full flex-col space-y-5">
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/40 bg-background/90 text-sky-500 shadow-sm">
                                            <Icon className="h-6 w-6" />
                                        </span>
                                        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                                        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                                    </div>
                                </div>
                            </Container>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-red-400/15 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl space-y-12">
                    <Container delay={0.05} className="mx-auto max-w-3xl space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Part of Amar Sons Ventures</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Being integrated with Amar Sons Ventures gives us robust financial governance, ethical business practices, and the scale to support mega infrastructure programmes without compromising agility.
                        </p>
                    </Container>

                    <Container delay={0.12} className="rounded-3xl border border-border/60 bg-background/80 p-10 shadow-lg backdrop-blur lg:p-14">
                        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                            <div className="space-y-5 text-left">
                                <div className="inline-flex items-center gap-3 rounded-full border border-border/40 bg-background/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                    <Compass className="h-4 w-4 text-sky-500" />
                                    Group Advantage
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground">Group capabilities that accelerate execution</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Access to multidisciplinary teams, compliance specialists, and extended fleets means we scale from township overlays to expressway packages without losing pace.
                                </p>
                                <ul className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        "Working-capital backing for long-schedule projects",
                                        "Specialists across highways, airports, and industrial builds",
                                        "Embedded governance and EHS compliance controls",
                                        "24/7 escalation directly to decision-makers",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                                                <BadgeCheck className="h-3.5 w-3.5" />
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-xl">
                                <div className="rounded-2xl border border-border/40 bg-background/95 p-6 text-sm text-muted-foreground">
                                    <p>
                                        “The Amar Sons Ventures network enables Ideal Asphalt to mobilise resources faster than most regional suppliers, keeping our EPC sites on schedule.”
                                    </p>
                                    <div className="mt-4 text-xs uppercase tracking-[0.25em] text-foreground/80">National Highway Concessionaire</div>
                                </div>
                                <div className="grid gap-3">
                                    <div className="rounded-2xl border border-border/40 bg-background/95 p-4 text-center">
                                        <div className="text-lg font-semibold text-foreground">Petroleum & infra legacy</div>
                                        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Amar Sons Ventures</div>
                                    </div>
                                    <div className="rounded-2xl border border-border/40 bg-background/95 p-4 text-center">
                                        <div className="text-lg font-semibold text-foreground">Holistic compliance</div>
                                        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">ISO & statutory ready</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background/90 via-background/60 to-background/40 px-6 py-16 sm:px-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_60%)]" />
                <div className="relative mx-auto max-w-6xl space-y-12">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where we operate</h2>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            Kolhapur&apos;s position on NH48 feeds western and southern corridors, while partner yards and allied fleets extend coverage to national programmes.
                        </p>
                    </Container>

                    <div className="grid gap-6 md:grid-cols-3">
                        {reachHighlights.map((item, index) => (
                            <Container key={item.title} delay={0.1 + index * 0.05} className="rounded-3xl border border-border/60 bg-background/85 p-8 text-left shadow-lg backdrop-blur">
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/40 bg-background/90 text-sky-500 shadow-sm">
                                    <MapPin className="h-5 w-5" />
                                </span>
                                <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                            </Container>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-16 h-44 bg-gradient-to-b from-sky-500/15 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl space-y-12">
                    <Container delay={0.05} className="mx-auto max-w-3xl space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Our commitments</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Every engagement is anchored in clarity, responsiveness, and technical rigour so stakeholders experience smooth execution from tender to completion.
                        </p>
                    </Container>

                    <div className="grid gap-6 md:grid-cols-2">
                        {commitments.map((item, index) => (
                            <Container key={item.title} delay={0.1 + index * 0.05} className="rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur">
                                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                            </Container>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#111827] px-6 py-16 text-center text-white sm:px-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(239,68,68,0.18),transparent_65%)]" />
                <Container delay={0.05} className="relative space-y-6">
                    <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
                        Work with us
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Ready to partner with a petroleum supplier that works like part of your team?
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-white/70">
                        Share your scope and timelines and our advisors will align the grade, logistics plan, and documentation in a single response.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="bg-white text-slate-900 shadow-lg shadow-white/30 transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-white/40 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                            onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.quote)}
                        >
                            Book a consultation
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                            <Link href="/contact">Contact form</Link>
                        </Button>
                    </div>
                </Container>
            </section>
        </Wrapper>
    );
};

export default AboutPage;
