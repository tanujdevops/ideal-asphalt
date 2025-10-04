'use client';

import Link from "next/link";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

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
                        <Link href="/" className="flex items-center gap-2">
                            <img 
                                src="/ideal-logo.png" 
                                alt="Ideal Asphalt Logo" 
                                className="w-8 h-8 object-contain"
                            />
                            <span className="text-xl font-semibold hidden lg:block text-primary">
                                {siteConfig.businessName}
                            </span>
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
                            className="hidden lg:block text-white transition-colors duration-300"
                            style={{ backgroundColor: '#ed3838' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#ed3838'}
                        >
                            Chat on WhatsApp
                        </Button>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
