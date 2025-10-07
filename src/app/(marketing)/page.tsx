'use client';

import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/marketing/ProductCard";
import { ArrowRightIcon, Factory, Fuel, HardHat, CircleDot, Sparkles, BadgeCheck } from "lucide-react";

const aboutHighlights = [
    "Dedicated advisors from tender to turnover",
    "Certified grades tuned to climate and axle load",
    "In-house logistics with real-time tracking",
    "Compliance packs ready for consultant review",
] as const;

const serviceIconMap = {
    fuel: Fuel,
    factory: Factory,
    "hard-hat": HardHat,
} as const;

type ServiceIconKey = keyof typeof serviceIconMap;

const primaryButtonClass =
    "bg-gradient-to-r from-[#ed3838] via-[#f0503e] to-[#f97316] text-white shadow-lg shadow-[#ed3838]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#ed3838]/40 focus-visible:ring-2 focus-visible:ring-[#ed3838]/60 focus-visible:ring-offset-2";
const secondaryButtonClass =
    "border border-border/60 bg-background/80 text-foreground transition-colors duration-300 hover:bg-background focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2";

const HomePage = () => {
    const handleWhatsAppClick = (message: string) => {
        const url = getWhatsAppUrl(message);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Wrapper className="relative space-y-24 py-24 lg:py-28">
            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-background/90 via-background/70 to-background/50 px-6 py-16 sm:px-10 lg:px-16 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.45)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_60%)]" />
                <div className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />

                <div className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <Container delay={0.05} className="space-y-8 text-center lg:text-left">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur lg:mx-0">
                            <Sparkles className="h-4 w-4 text-sky-500" />
                            <span>Infrastructure partner since 1994</span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Reliable bitumen supply that keeps every corridor on schedule
                        </h1>

                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-0">
                            Ideal Asphalt sources, certifies, and delivers viscosity-graded bitumen and petroleum products so highways, airports, and industrial builds finish without schedule slips.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className={primaryButtonClass}
                                onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.default)}
                            >
                                Message our supply desk
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className={secondaryButtonClass}
                                onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.quote)}
                            >
                                Plan my delivery
                            </Button>
                        </div>
                    </Container>

                    <Container delay={0.2} className="relative flex w-full justify-center">
                        <div className="relative w-full max-w-[520px]">
                            <div className="pointer-events-none absolute -top-10 -left-12 h-36 w-36 rounded-full bg-sky-500/25 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-12 right-0 h-32 w-32 rounded-full bg-red-500/25 blur-3xl" />
                            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 shadow-2xl backdrop-blur">
                                <Image
                                    src="/images/hero.png"
                                    alt="Premium bitumen and petroleum products"
                                    width={640}
                                    height={480}
                                    className="h-auto w-full object-cover"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/60 to-transparent" />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl">
                    <Container simple delay={0.05} className="mx-auto max-w-2xl space-y-3 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            Confidence built on measurable performance
                        </h2>
                        <p className="text-base text-muted-foreground">
                            Transparent QA, disciplined logistics, and responsive communication keep every milestone moving.
                        </p>
                    </Container>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {siteConfig.stats.map((stat, index) => (
                            <Container
                                key={stat.label}
                                delay={0.15 + index * 0.05}
                                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5 hover:border-sky-500/60"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="relative flex flex-col items-center gap-3 text-center">
                                    <span className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                        {stat.label}
                                    </span>
                                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                        {stat.value}
                                    </span>
                                </div>
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
                            Our Services
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            Specialists across the bitumen and petroleum lifecycle
                        </h2>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            From grade consulting to last-mile dispatch, our teams stay aligned with your planners, contractors, and consultants.
                        </p>
                    </Container>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {siteConfig.services.map((service, index) => {
                            const IconComponent = serviceIconMap[service.icon as ServiceIconKey] ?? CircleDot;

                            return (
                                <Container
                                    key={service.name}
                                    delay={0.15 + index * 0.05}
                                    className="group relative h-full"
                                >
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-sky-500/60">
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <div className="relative flex h-full flex-col space-y-5">
                                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background/90 text-sky-500 shadow-sm">
                                                <IconComponent className="h-6 w-6" />
                                            </span>
                                            <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                                            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                                                {service.description}
                                            </p>
                                            <Button
                                                variant="ghost"
                                                className="group/btn inline-flex items-center gap-2 px-0 text-sm font-semibold text-sky-500 transition-colors duration-300 hover:text-sky-400"
                                                onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.default)}
                                            >
                                                Coordinate on WhatsApp
                                                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                            </Button>
                                        </div>
                                    </div>
                                </Container>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-red-400/15 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl space-y-12">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <span className="mx-auto inline-flex items-center justify-center rounded-full border border-border/50 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            Featured Products
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            Viscosity grades for every climate and axle load
                        </h2>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            Explore our most requested viscosity grades, each validated for durability, binding strength, and compliance.
                        </p>
                    </Container>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {siteConfig.products.map((product, index) => (
                            <Container key={product.id} delay={0.15 + index * 0.05} className="h-full">
                                <ProductCard product={product} />
                            </Container>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background/90 via-background/60 to-background/40 px-6 py-16 sm:px-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_60%)]" />
                <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
                    <Container delay={0.05} className="space-y-6 text-center lg:w-1/2 lg:text-left">
                        <span className="inline-flex items-center justify-center rounded-full border border-border/50 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            About Ideal Asphalt
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            Infrastructure supply built on accountability
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            We scale with India&apos;s most demanding infrastructure programmes by pairing dependable sourcing with rigorous testing and support that stays from tender to turnover.
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {aboutHighlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/80 p-4 text-left shadow-sm backdrop-blur"
                                >
                                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                                        <BadgeCheck className="h-3.5 w-3.5" />
                                    </span>
                                    <span className="text-sm text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <Button asChild size="lg" className={primaryButtonClass}>
                                <Link href="/about">Explore our story</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className={secondaryButtonClass}
                                onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.default)}
                            >
                                Speak to an advisor
                            </Button>
                        </div>
                    </Container>

                    <Container delay={0.2} className="lg:w-1/2">
                        <div className="mx-auto max-w-[420px] space-y-6 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-2xl backdrop-blur">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground">Built for national programmes</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    From expressways to smart-city corridors, project leads count on rapid responses backed by rigorous lab documentation.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-border/50 bg-background/90 p-5 text-sm text-muted-foreground">
                                <p>
                                    &ldquo;Ideal Asphalt combines relentless follow-through with documentation our consultants approve immediately.&rdquo;
                                </p>
                                <div className="mt-4 text-xs uppercase tracking-[0.25em] text-foreground/80">
                                    Senior Procurement Lead, National Highway Contractor
                                </div>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl border border-border/50 bg-background/90 p-4 text-center">
                                    <div className="text-xl font-semibold text-foreground">150+</div>
                                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Clients</div>
                                </div>
                                <div className="rounded-2xl border border-border/50 bg-background/90 p-4 text-center">
                                    <div className="text-xl font-semibold text-foreground">Lakhs MMT</div>
                                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Supplied</div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#111827] px-6 py-16 text-center text-white sm:px-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(239,68,68,0.18),transparent_65%)]" />
                <Container delay={0.05} className="relative space-y-6">
                    <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
                        Ready to deliver
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Let&apos;s schedule the delivery that keeps your project on time
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-white/70">
                        Share your project requirements and our specialists will recommend the grade, logistics path, and compliance pack within hours.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="bg-white text-slate-900 shadow-lg shadow-white/30 transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-white/40 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                            onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.quote)}
                        >
                            Request a supply plan
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                            <Link href="/contact">Fill the contact form</Link>
                        </Button>
                    </div>
                </Container>
            </section>
        </Wrapper>
    );
};

export default HomePage;
