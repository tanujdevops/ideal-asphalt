"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { Menu } from "lucide-react";
import Link from "next/link";

const primaryButtonClass = "bg-[#ed3838] text-white hover:bg-[#d32f2f] transition-colors duration-300";

const MobileMenu = () => {
    const handleWhatsAppClick = () => {
        const url = getWhatsAppUrl(siteConfig.whatsappMessages.default);
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] pt-12">
                <SheetHeader className="mb-8">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                    {siteConfig.navigation.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-base font-medium transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 mt-4 border-t border-border">
                        <Button
                            onClick={handleWhatsAppClick}
                            className={`w-full ${primaryButtonClass}`}
                        >
                            Chat on WhatsApp
                        </Button>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;
