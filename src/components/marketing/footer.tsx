'use client';

import Link from "next/link";
import Container from "../global/container";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { Button } from "../ui/button";

const Footer = () => {
    const handleWhatsAppClick = () => {
        const url = getWhatsAppUrl(siteConfig.whatsappMessages.default);
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[300px]">
                        <div className="flex items-center gap-2">
                            <img 
                                src="/ideal-logo.png" 
                                alt="Ideal Asphalt Logo" 
                                className="w-8 h-8 object-contain"
                            />
                            <span className="text-base md:text-lg font-medium text-foreground">
                                {siteConfig.businessName}
                            </span>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            {siteConfig.shortDescription}
                        </p>
                        <div className="mt-4">
                            <Button 
                                onClick={handleWhatsAppClick}
                                className="text-white transition-colors duration-300"
                                style={{ backgroundColor: '#ed3838' }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#ed3838'}
                            >
                                Chat on WhatsApp
                            </Button>
                        </div>
                    </div>
                </Container>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.1} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">
                                Products
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li className="mt-2">
                                    <Link href="/products/vg-10" className="link hover:text-foreground transition-all duration-300">
                                        VG-10 Bitumen
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/products/vg-20" className="link hover:text-foreground transition-all duration-300">
                                        VG-20 Bitumen
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/products/vg-30" className="link hover:text-foreground transition-all duration-300">
                                        VG-30 Bitumen
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/products/vg-40" className="link hover:text-foreground transition-all duration-300">
                                        VG-40 Bitumen
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.2} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground">
                                    Services
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                    <li>
                                        <span className="text-foreground">Bitumen Supply</span>
                                    </li>
                                    <li className="mt-2">
                                        <span className="text-foreground">Petroleum Solutions</span>
                                    </li>
                                    <li className="mt-2">
                                        <span className="text-foreground">Road Construction</span>
                                    </li>
                                    <li className="mt-2">
                                        <span className="text-foreground">Infrastructure Projects</span>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.3} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">
                                Contact Info
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li className="mt-2">
                                    <span className="text-foreground">Phone: {siteConfig.phone}</span>
                                </li>
                                <li className="mt-2">
                                    <span className="text-foreground">Email: {siteConfig.email}</span>
                                </li>
                                <li className="mt-2">
                                    <span className="text-foreground">Hours: {siteConfig.openingHours}</span>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.4} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground">
                                    Company
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                    <li>
                                        <Link href="/about" className="link hover:text-foreground transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/contact" className="link hover:text-foreground transition-all duration-300">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <span className="text-foreground">30+ Years Experience</span>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

            <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
                <div className="mt-8 md:flex md:items-center justify-center footer w-full">
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0 text-center">
                        &copy; {siteConfig.copyrightYear} {siteConfig.businessName}. All rights reserved.
                    </p>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        For quality bitumen for road construction. Contact {siteConfig.email} | {siteConfig.phone}
                    </p>
                </div>
            </Container>
        </footer>
    )
};

export default Footer
