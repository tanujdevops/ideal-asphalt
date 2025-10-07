'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { primaryButtonClass, secondaryButtonClass } from "@/constants/ui";
import Link from "next/link";
import { Clock, Headset, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const contactHighlights = [
    "Dedicated supply coordinators on standby",
    "Responses in under 10 minutes",
    "Live dispatch tracking & documentation",
] as const;

type ChannelCta =
    | { type: "link"; label: string; href: string; external?: boolean }
    | { type: "action"; label: string; action: () => void };

type ChannelCard = {
    icon: LucideIcon;
    title: string;
    description: string;
    cta: ChannelCta;
};

const channelCards = (startWhatsApp: () => void): ChannelCard[] => [
    {
        icon: PhoneCall,
        title: "Call our desk",
        description: `Dial ${siteConfig.phone} for immediate assistance and dispatch scheduling.`,
        cta: {
            type: "link",
            label: "Call now",
            href: `tel:${siteConfig.phone}`,
            external: true,
        },
    },
    {
        icon: MessageCircle,
        title: "WhatsApp coordination",
        description: "Share BOQs, delivery windows, or drawings—we reply in minutes during business hours.",
        cta: {
            type: "action",
            label: "Open WhatsApp",
            action: startWhatsApp,
        },
    },
    {
        icon: Headset,
        title: "Book a consultation",
        description: "Need help choosing a grade or assembling compliance docs? Schedule a focused session with our specialists.",
        cta: {
            type: "link",
            label: "Schedule call",
            href: "/contact#consult",
        },
    },
];

const faqs = [
    {
        question: "How quickly will I hear back?",
        answer: "During business hours we respond in under 10 minutes on WhatsApp with next steps and a point of contact.",
    },
    {
        question: "Can you help me select the right bitumen grade?",
        answer: "Yes. Share your climate, axle load, and mix design requirements and our advisors will recommend the grade and modifiers that fit.",
    },
    {
        question: "Do you supply compliance paperwork with dispatches?",
        answer: "Every load is backed by lab reports, MSDS, and statutory documentation so consultant approvals move quickly.",
    },
    {
        question: "What details should I share to receive a quote?",
        answer: "Project location, delivery timeline, tonnage, and any consultant specifications help us firm up pricing and availability fastest.",
    },
] as const;

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const message = siteConfig.whatsappMessages.contact(
            formData.name || "Not provided",
            formData.phone || "Not provided",
            formData.message || "No specific message",
        );

        const url = getWhatsAppUrl(message);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const handleDirectWhatsApp = () => {
        const url = getWhatsAppUrl(siteConfig.whatsappMessages.default);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Wrapper className="relative space-y-24 py-24 lg:py-28">
            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-background/90 via-background/70 to-background/50 px-6 py-16 sm:px-10 lg:px-16 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.45)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_60%)]" />
                <div className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />

                <div className="relative z-10 flex flex-col-reverse gap-12 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <Container delay={0.05} className="space-y-8 text-center lg:text-left">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur lg:mx-0">
                            <Sparkles className="h-4 w-4 text-sky-500" />
                            <span>{siteConfig.businessName} support desk</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Coordinate your next bitumen delivery in minutes
                        </h1>
                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-0">
                            Share delivery windows, tonnage, or BOQs and we will align grade selection, compliance documentation, and logistics in one response.
                        </p>
                        <div className="grid gap-3 sm:grid-cols-3">
                            {contactHighlights.map((item) => (
                                <Container key={item} simple delay={0.1} className="rounded-2xl border border-border/50 bg-background/80 px-4 py-3 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur">
                                    {item}
                                </Container>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <Button size="lg" className={primaryButtonClass} onClick={handleDirectWhatsApp}>
                                Message our supply desk
                            </Button>
                            <Button asChild size="lg" variant="outline" className={secondaryButtonClass}>
                                <Link href="#contact-form">Send project brief</Link>
                            </Button>
                        </div>
                    </Container>

                    <Container delay={0.15} className="relative w-full justify-center">
                        <div className="relative mx-auto max-w-[460px] space-y-6 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-2xl backdrop-blur">
                            <div className="rounded-2xl border border-border/50 bg-background/90 p-5 text-sm text-muted-foreground">
                                <div className="flex items-center gap-3 text-left">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                                        <Clock className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Business hours</p>
                                        <p className="text-base font-semibold text-foreground">{siteConfig.openingHours}</p>
                                    </div>
                                </div>
                                <p className="mt-4">
                                    Requests outside business hours receive priority follow-up the next morning.
                                </p>
                            </div>
                            <div className="grid gap-4">
                                <div className="rounded-2xl border border-border/50 bg-background/90 p-4 text-left">
                                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sales hotline</p>
                                    <p className="text-lg font-semibold text-foreground">{siteConfig.phone}</p>
                                </div>
                                <div className="rounded-2xl border border-border/50 bg-background/90 p-4 text-left">
                                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Email</p>
                                    <p className="text-lg font-semibold text-foreground">{siteConfig.email}</p>
                                </div>
                                <div className="rounded-2xl border border-border/50 bg-background/90 p-4 text-left">
                                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Office</p>
                                    <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section id="contact-form" className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl">
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <Container delay={0.05} className="rounded-3xl border border-border/60 bg-background/85 p-8 shadow-xl backdrop-blur">
                            <Card className="border-none bg-transparent shadow-none">
                                <CardHeader className="space-y-2 p-0">
                                    <CardTitle className="text-2xl font-semibold text-foreground">Send us your requirement</CardTitle>
                                    <CardDescription className="text-base text-muted-foreground">
                                        Outline your project and we will respond with availability, pricing, and recommended grades.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="mt-8 space-y-6 p-0">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Name *</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone *</Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Preferred contact number"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Optional"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Project details *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Share grade requirements, timelines, and site location."
                                                rows={5}
                                            />
                                        </div>
                                        <Button type="submit" className={`w-full ${primaryButtonClass}`}>
                                            Submit and continue on WhatsApp
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </Container>

                        <Container delay={0.1} className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 text-left shadow-lg backdrop-blur">
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-foreground">Visit our office</h3>
                                <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-foreground">Share documents</h3>
                                <p className="text-sm text-muted-foreground">
                                    Email us drawings, technical specs, or order schedules. We will align documentation and QA certificates for consultant approvals.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-foreground">Need instant replies?</h3>
                                <p className="text-sm text-muted-foreground">
                                    Use the WhatsApp button to connect with our on-duty coordinator and receive real-time updates.
                                </p>
                                <Button size="lg" className={secondaryButtonClass} onClick={handleDirectWhatsApp}>
                                    WhatsApp our coordinator
                                </Button>
                            </div>
                        </Container>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background/70 to-background/40 px-6 py-16 sm:px-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.12),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_55%)]" />
                <div className="relative mx-auto max-w-6xl space-y-12">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <span className="mx-auto inline-flex items-center justify-center rounded-full border border-border/50 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            How we help
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Support designed to keep your supply moving</h2>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            From pre-bid grade reviews to post-delivery QA reports, we plug into your workflow wherever momentum matters most.
                        </p>
                    </Container>

                    <div className="grid gap-6 md:grid-cols-3">
                        {channelCards(handleDirectWhatsApp).map(({ icon: Icon, title, description, cta }, index) => (
                            <Container key={title} delay={0.1 + index * 0.05} className="group relative h-full">
                                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-8 shadow-lg backdrop-blur transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:border-sky-500/60">
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="relative flex h-full flex-col space-y-5">
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background/90 text-sky-500 shadow-sm">
                                            <Icon className="h-6 w-6" />
                                        </span>
                                        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                                        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                                        {cta.type === "link" ? (
                                            <Button
                                                asChild
                                                variant="ghost"
                                                className="group/btn inline-flex items-center gap-2 px-0 text-sm font-semibold text-sky-500 transition-colors duration-300 hover:text-sky-400"
                                            >
                                                <Link href={cta.href} target={cta.external ? "_blank" : undefined} rel={cta.external ? "noreferrer" : undefined}>
                                                    {cta.label}
                                                </Link>
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="ghost"
                                                className="group/btn inline-flex items-center gap-2 px-0 text-sm font-semibold text-sky-500 transition-colors duration-300 hover:text-sky-400"
                                                onClick={cta.action}
                                            >
                                                {cta.label}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Container>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="pointer-events-none absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-red-400/15 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-5xl space-y-10">
                    <Container delay={0.05} className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            Answers to the questions we hear most from procurement heads, project engineers, and consultants.
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
                        Ready to collaborate
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Keep every pour on schedule with dedicated supply coordination
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-white/70">
                        Whether it is a single shipment or a year-long framework, Ideal Asphalt keeps job sites moving without surprise delays.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="bg-white text-slate-900 shadow-lg shadow-white/30 transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-white/40 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                            onClick={handleDirectWhatsApp}
                        >
                            Message our supply desk
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                            <Link href="/products">View bitumen grades</Link>
                        </Button>
                    </div>
                </Container>
            </section>
        </Wrapper>
    );
};

export default ContactPage;


