'use client';

import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import Link from "next/link";
import ProductCard from "@/components/marketing/ProductCard";

const HomePage = () => {
    const handleWhatsAppClick = (message: string) => {
        const url = getWhatsAppUrl(message);
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Wrapper className="py-20 relative">
            {/* Hero Section */}
            <section className="text-center py-20">
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                    Premium Bitumen & Petroleum Solutions
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                    Trusted by road contractors & industries for over 30 years.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                        size="lg"
                        onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.default)}
                        className="text-white transition-colors duration-300"
                        style={{ backgroundColor: '#ed3838' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#ed3838'}
                    >
                        Chat on WhatsApp
                    </Button>
                    <Button 
                        size="lg"
                        variant="outline"
                        onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.quote)}
                    >
                        Get a Free Quote on WhatsApp
                    </Button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {siteConfig.stats.map((stat, index) => (
                        <div key={index} className="p-6">
                            <div className="text-3xl font-bold text-primary mb-2">
                                {stat.label}
                            </div>
                            <div className="text-muted-foreground">
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {siteConfig.services.map((service, index) => (
                        <Card key={index} className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <CardTitle>{service.name}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button 
                                    onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.default)}
                                    className="w-full text-white transition-colors duration-300"
                                    style={{ backgroundColor: '#ed3838' }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ed3838'}
                                >
                                    Chat on WhatsApp
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {siteConfig.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* About Preview Section */}
            <section className="py-16 bg-muted/50 rounded-lg">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">About Ideal Asphalt</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        For over 30 years, Ideal Asphalt, a proud part of Amar Sons Ventures, has been a trusted name in the petroleum and road construction industry. Based in Kolhapur, we specialize in supplying premium-grade bitumen and related petroleum products that power infrastructure projects and fuel industrial growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild>
                            <Link href="/about">Learn More About Us</Link>
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.default)}
                        >
                            Contact Us on WhatsApp
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Get in touch with our experts for personalized bitumen solutions and competitive pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                        size="lg"
                        onClick={() => handleWhatsAppClick(siteConfig.whatsappMessages.quote)}
                        className="bg-primary hover:bg-primary/90"
                    >
                        Get Quote on WhatsApp
                    </Button>
                    <Button 
                        size="lg"
                        variant="outline"
                        asChild
                    >
                        <Link href="/contact">Contact Form</Link>
                    </Button>
                </div>
            </section>
        </Wrapper>
    );
};

export default HomePage;