"use client";

import Image from "next/image";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/site";
import { primaryButtonClass, secondaryButtonClass } from "@/constants/ui";
import { BadgeCheck, Sparkles } from "lucide-react";

interface FeatureItem {
    title: string;
    description: string;
}

interface ProductDetailProps {
    productName: string;
    heroTagline: string;
    heroDescription: string;
    heroHighlights: string[];
    specs: Array<{ label: string; value: string }>;
    features: FeatureItem[];
    primaryUses: string[];
    idealMixes: string[];
    whyBullets: FeatureItem[];
    glossary: FeatureItem[];
    faqs: Array<{ question: string; answer: string }>;
    whatsappMessage: string;
    imageSrc?: string;
    imageAlt?: string;
}

const BitumenProductTemplate = ({
    productName,
    heroTagline,
    heroDescription,
    heroHighlights,
    specs,
    features,
    primaryUses,
    idealMixes,
    whyBullets,
    glossary,
    faqs,
    whatsappMessage,
    imageSrc = "/vg10.png",
    imageAlt,
}: ProductDetailProps) => {
    const handleWhatsAppClick = () => {
        const url = getWhatsAppUrl(whatsappMessage);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Wrapper className="relative space-y-24 py-24 lg:py-28">
            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-background/90 via-background/70 to-background/50 px-6 py-16 sm:px-10 lg:px-16 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.45)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_60%)]" />
                <div className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />

                <div className="relative z-10 flex flex-col-reverse gap-12 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <Container delay={0.05} className="space-y-8 text-center lg:text-left">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur lg:mx-0">
                            <Sparkles className="h-4 w-4 text-sky-500" />
                            <span>{productName}</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            {heroTagline}
                        </h1>
                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-0">
                            {heroDescription}
                        </p>
                        <div className="grid gap-3 sm:grid-cols-3">
                            {heroHighlights.map((item) => (
                                <Container key={item} simple delay={0.1} className="rounded-2xl border border-border/50 bg-background/80 px-4 py-3 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur">
                                    {item}
                                </Container>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <Button size="lg" className={primaryButtonClass} onClick={handleWhatsAppClick}>
                                Get quote on WhatsApp
                            </Button>
                            <Button asChild size="lg" variant="outline" className={secondaryButtonClass}>
                                <a href="/contact">Talk to our advisors</a>
                            </Button>
                        </div>
                    </Container>

                    <Container delay={0.15} className="relative w-full justify-center">
                        <div className="relative mx-auto flex max-w-[440px] flex-col gap-6">
                            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/85 shadow-2xl backdrop-blur">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt ?? `${productName} packaging`}
                                    width={640}
                                    height={640}
                                    priority
                                    className="h-full w-full object-cover"
                                />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent" />
                            </div>
                            <div className="rounded-3xl border border-border/60 bg-background/85 p-6 shadow-lg backdrop-blur">
                                <div className="grid gap-3 text-left">
                                    {specs.map((spec) => (
                                        <div key={spec.label} className="flex items-center justify-between gap-6 border-b border-border/40 pb-3 last:border-b-0 last:pb-0">
                                            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{spec.label}</span>
                                            <span className="text-base font-semibold text-foreground">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl space-y-12">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What makes this grade stand out</h2>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            Engineered, tested, and delivered to handle the specific climate bands and load cycles this grade was built for.
                        </p>
                    </Container>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <Container key={feature.title} delay={0.1 + index * 0.05} className="group relative h-full">
                                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-8 shadow-lg backdrop-blur transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:border-sky-500/60">
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="relative flex h-full flex-col space-y-4">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/90 text-sky-500 shadow-sm">
                                            <BadgeCheck className="h-5 w-5" />
                                        </span>
                                        <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                                        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                                    </div>
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
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where this grade performs best</h2>
                    </Container>

                    <div className="grid gap-10 md:grid-cols-2">
                        <Container delay={0.1} className="rounded-3xl border border-border/60 bg-background/85 p-8 shadow-lg backdrop-blur">
                            <h3 className="text-xl font-semibold text-foreground">Primary uses</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {primaryUses.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                                            <BadgeCheck className="h-3 w-3" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Container>
                        <Container delay={0.15} className="rounded-3xl border border-border/60 bg-background/85 p-8 shadow-lg backdrop-blur">
                            <h3 className="text-xl font-semibold text-foreground">Ideal mixes</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {idealMixes.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                                            <BadgeCheck className="h-3 w-3" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Container>
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-red-400/15 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl space-y-12">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why contractors choose this grade from Ideal Asphalt</h2>
                    </Container>

                    <div className="grid gap-6 md:grid-cols-2">
                        {whyBullets.map((item, index) => (
                            <Container key={item.title} delay={0.1 + index * 0.05} className="rounded-3xl border border-border/60 bg-background/85 p-8 shadow-lg backdrop-blur">
                                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                            </Container>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background/70 to-background/40 px-6 py-16 sm:px-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.12),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_55%)]" />
                <div className="relative mx-auto max-w-6xl space-y-10">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Technical glossary</h2>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            Keep your teams aligned on the terms that drive mix design, quality control, and compliance checks.
                        </p>
                    </Container>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {glossary.map((item, index) => (
                            <Container key={item.title} delay={0.1 + index * 0.05} className="rounded-3xl border border-border/60 bg-background/85 p-6 text-left shadow-lg backdrop-blur">
                                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                            </Container>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-5xl space-y-10">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            Quick answers to keep procurement, execution teams, and consultants aligned.
                        </p>
                    </Container>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <Container key={faq.question} delay={0.1 + index * 0.05} className="rounded-3xl border border-border/60 bg-background/85 p-6 text-left shadow-lg backdrop-blur">
                                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
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
                        Ready to order
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Share your delivery schedule and we will align supply that keeps every pour on time
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-white/70">
                        From refinery to job site, Ideal Asphalt synchronises sourcing, storage, documentation, and dispatch so your teams can focus on execution.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="bg-white text-slate-900 shadow-lg shadow-white/30 transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-white/40 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                            onClick={handleWhatsAppClick}
                        >
                            Request a grade quote
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                            <a href="/products">View all grades</a>
                        </Button>
                    </div>
                </Container>
            </section>
        </Wrapper>
    );
};

export default BitumenProductTemplate;
