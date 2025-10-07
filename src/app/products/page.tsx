'use client';

import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import ProductCard from "@/components/marketing/ProductCard";
import { Button } from "@/components/ui/button";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { primaryButtonClass, secondaryButtonClass } from "@/constants/ui";
import Link from "next/link";
import { BadgeCheck, Sparkles } from "lucide-react";

const comparisonRows = [
    {
        grade: "VG-10",
        penetration: "80-100",
        softeningPoint: "40-50",
        bestFor: "High-temperature regions",
        applications: "Heavy-duty highways, airport runways",
    },
    {
        grade: "VG-20",
        penetration: "60-80",
        softeningPoint: "45-55",
        bestFor: "Moderate temperature regions",
        applications: "Municipal roads, resurfacing",
    },
    {
        grade: "VG-30",
        penetration: "50-70",
        softeningPoint: "47-57",
        bestFor: "Heavy-duty applications",
        applications: "Industrial corridors, national highways",
    },
    {
        grade: "VG-40",
        penetration: "40-60",
        softeningPoint: "50-60",
        bestFor: "Extreme weather conditions",
        applications: "High-altitude roads, expressways",
    },
] as const;

type WhyChoose = {
    title: string;
    description: string;
};

const whyChoose: WhyChoose[] = [
    {
        title: "Certified performance data",
        description: "Each dispatch includes viscosity, penetration, softening point, and ductility reports for consultant approval.",
    },
    {
        title: "Decades of project insight",
        description: "We advise on grade selection for highways, airports, ports, and industrial corridors across India.",
    },
    {
        title: "Dispatch discipline",
        description: "Moisture-controlled storage and calibrated loading keep deliveries punctual and site-ready.",
    },
    {
        title: "On-call technical support",
        description: "Specialists coordinate with mix designers and site engineers throughout paving windows.",
    },
    {
        title: "Compliance-ready documentation",
        description: "MSDS, statutory certificates, and batch traceability accompany every truck for smooth approvals.",
    },
    {
        title: "Value-engineered sourcing",
        description: "Strategic refinery partnerships and in-house logistics keep pricing predictable without sacrificing quality.",
    },
];

const ProductsPage = () => {
    const handleWhatsAppQuote = () => {
        const url = getWhatsAppUrl(siteConfig.whatsappMessages.quote);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Wrapper className="relative space-y-24 py-24 lg:py-28">
            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-background/90 via-background/70 to-background/50 px-6 py-16 sm:px-10 lg:px-16 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.45)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_60%)]" />
                <div className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />

                <div className="relative z-10 flex flex-col-reverse gap-12 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <Container delay={0.05} className="space-y-8 text-center lg:text-left">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur lg:mx-0">
                            <Sparkles className="h-4 w-4 text-sky-500" />
                            <span>Bitumen product catalogue</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Viscosity-grade bitumen tailored for India&apos;s climates and axle loads
                        </h1>
                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-0">
                            Select viscosity grades backed by rigorous QA and disciplined logistics so highways, airports, and industrial corridors stay on schedule.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <Button size="lg" className={primaryButtonClass} onClick={handleWhatsAppQuote}>
                                Request pricing on WhatsApp
                            </Button>
                            <Button asChild size="lg" variant="outline" className={secondaryButtonClass}>
                                <Link href="/contact">Talk to a specialist</Link>
                            </Button>
                        </div>
                    </Container>

                    <Container delay={0.15} className="relative w-full justify-center">
                        <div className="relative mx-auto max-w-[420px] space-y-6 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-2xl backdrop-blur">
                            <div className="rounded-2xl border border-border/50 bg-background/90 p-5 text-sm text-muted-foreground">
                                <p>
                                    Ideal Asphalt delivers consistent batches and stores material exactly to spec. Project approvals move faster when their documentation accompanies every truck.
                                </p>
                                <div className="mt-4 text-xs uppercase tracking-[0.25em] text-foreground/80">Procurement Head, EPC Contractor</div>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {siteConfig.stats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl border border-border/50 bg-background/90 p-4 text-center">
                                        <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                                        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Bitumen grades ready for mobilisation</h2>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            Choose from our core grades or request customised blends tuned to axle loads, climate conditions, and mix designs.
                        </p>
                    </Container>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {siteConfig.products.map((product, index) => (
                            <Container key={product.id} delay={0.1 + index * 0.05} className="h-full">
                                <ProductCard product={product} />
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
                        <span className="mx-auto inline-flex items-center justify-center rounded-full border border-border/50 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            Grade comparison
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Find the viscosity grade that fits your design life</h2>
                    </Container>

                    <div className="overflow-hidden rounded-3xl border border-border/60 bg-background/85 shadow-xl backdrop-blur">
                        <div className="hidden sm:block">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-background/80 text-muted-foreground uppercase tracking-[0.2em] text-xs">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-foreground">Grade</th>
                                        <th className="px-6 py-4 font-semibold">Penetration (dmm)</th>
                                        <th className="px-6 py-4 font-semibold">Softening point (deg C)</th>
                                        <th className="px-6 py-4 font-semibold">Best for</th>
                                        <th className="px-6 py-4 font-semibold">Typical applications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map((row, index) => (
                                        <tr key={row.grade} className={index % 2 === 1 ? "bg-background/60" : undefined}>
                                            <td className="px-6 py-4 text-base font-semibold text-foreground">{row.grade}</td>
                                            <td className="px-6 py-4 text-muted-foreground">{row.penetration}</td>
                                            <td className="px-6 py-4 text-muted-foreground">{row.softeningPoint}</td>
                                            <td className="px-6 py-4 text-muted-foreground">{row.bestFor}</td>
                                            <td className="px-6 py-4 text-muted-foreground">{row.applications}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="sm:hidden">
                            {comparisonRows.map((row, index) => (
                                <div
                                    key={row.grade}
                                    className={`px-5 py-5 ${index !== 0 ? "border-t border-border/60" : ""}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold text-foreground">{row.grade}</span>
                                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">VG series</span>
                                    </div>
                                    <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-muted-foreground">
                                        <div className="space-y-1">
                                            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">Penetration (dmm)</dt>
                                            <dd className="text-base font-medium text-foreground">{row.penetration}</dd>
                                        </div>
                                        <div className="space-y-1">
                                            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">Softening point (deg C)</dt>
                                            <dd className="text-base font-medium text-foreground">{row.softeningPoint}</dd>
                                        </div>
                                        <div className="space-y-1">
                                            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">Best for</dt>
                                            <dd>{row.bestFor}</dd>
                                        </div>
                                        <div className="col-span-2 space-y-1">
                                            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">Typical applications</dt>
                                            <dd>{row.applications}</dd>
                                        </div>
                                    </dl>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-red-400/15 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl space-y-12">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <span className="mx-auto inline-flex items-center justify-center rounded-full border border-border/50 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            Why Ideal Asphalt
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Built-in assurances that keep civil packages on track</h2>
                    </Container>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {whyChoose.map((item, index) => (
                            <Container key={item.title} delay={0.1 + index * 0.05} className="group relative h-full">
                                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-8 shadow-lg backdrop-blur transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:border-sky-500/60">
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="relative flex h-full flex-col space-y-4">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/90 text-sky-500 shadow-sm">
                                            <BadgeCheck className="h-5 w-5" />
                                        </span>
                                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
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
                        Ready to pave
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Submit your mix design and we&apos;ll line up the right grade within hours
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-white/70">
                        Combine trusted grades, disciplined logistics, and responsive advisors so every kilometre meets spec and every pour starts on time.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="bg-white text-slate-900 shadow-lg shadow-white/30 transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-white/40 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                            onClick={handleWhatsAppQuote}
                        >
                            Request a supply quote
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                            <Link href="/contact">Contact our team</Link>
                        </Button>
                    </div>
                </Container>
            </section>
        </Wrapper>
    );
};

export default ProductsPage;
