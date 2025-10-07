'use client';

import Link from "next/link";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

const primaryButtonClass = "bg-[#ed3838] text-white hover:bg-[#d32f2f] transition-colors duration-300";

const Navbar = () => {
    const handleWhatsAppClick = () => {
        const url = getWhatsAppUrl(siteConfig.whatsappMessages.default);
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50 border-b">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="/ideal-logo.png"
                            alt="Ideal Asphalt Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="text-base font-semibold text-foreground sm:text-lg">
                                {siteConfig.businessName}
                            </span>
                            <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:block lg:text-xs">
                                {siteConfig.tagline}
                            </span>
                        </div>
                    </Link>
                </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <ul className="flex items-center gap-8">
                            {siteConfig.navigation.map((link, index) => (
                                <li key={index} className="text-sm font-medium hover:text-primary transition-colors">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            onClick={handleWhatsAppClick}
                            className={`hidden lg:block ${primaryButtonClass}`}
                        >
                            Chat with Ideal Asphalt
                        </Button>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Navbar;
