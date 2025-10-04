'use client';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig, getWhatsAppUrl } from '@/config/site';

export default function AboutPage() {
  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl(siteConfig.whatsappMessages.default);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Wrapper className="py-20">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          About Ideal Asphalt
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A trusted name in petroleum and road construction industry for over 30 years
        </p>
      </section>

      {/* Main About Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 30 years, Ideal Asphalt, a proud part of Amar Sons Ventures, has been a trusted name in the petroleum and road construction industry. Based in Kolhapur, we specialize in supplying premium-grade bitumen and related petroleum products that power infrastructure projects and fuel industrial growth.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From national highways to city roads, from waterproofing works to industrial fuel needs — our products form the foundation of progress. Our expertise spans across paving grade bitumen, emulsions, cutback bitumen, modified bitumen, furnace oil, light diesel oil, and more.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong>Ideal Asphalt — Fueling Infrastructure, Building Trust.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Quality First</CardTitle>
              <CardDescription>We maintain the highest standards in all our products and services</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Trust</CardTitle>
              <CardDescription>Building long-term relationships through reliable service and support</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
              <CardDescription>Continuously improving our products and processes for better results</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Experience & Expertise</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">30+ Years of Excellence</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Since our establishment, Ideal Asphalt has been at the forefront of the petroleum and road construction industry. Our three decades of experience have given us deep insights into the evolving needs of infrastructure development.
            </p>
            <p className="text-lg text-muted-foreground">
              We have successfully supplied bitumen and petroleum products for numerous high-profile projects across Maharashtra and beyond, earning the trust of contractors, government agencies, and private enterprises.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Comprehensive Product Range</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Paving Grade Bitumen (VG-10, VG-20, VG-30, VG-40)</li>
              <li>• Bitumen Emulsions</li>
              <li>• Cutback Bitumen</li>
              <li>• Modified Bitumen</li>
              <li>• Furnace Oil (FO)</li>
              <li>• Light Diesel Oil (LDO)</li>
              <li>• And more petroleum solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Amar Sons Ventures */}
      <section className="py-12 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Part of Amar Sons Ventures</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ideal Asphalt operates as a proud member of Amar Sons Ventures, a respected business group with a strong foundation in the petroleum and infrastructure sectors. This association brings additional credibility, resources, and expertise to our operations.
          </p>
          <p className="text-lg text-muted-foreground">
            Our connection to Amar Sons Ventures ensures that we maintain the highest standards of business ethics, financial stability, and customer service excellence that our clients have come to expect.
          </p>
        </div>
      </section>

      {/* Location & Reach */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Location & Reach</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Based in Kolhapur</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Strategically located in Kolhapur, Maharashtra, we are well-positioned to serve the growing infrastructure needs of the region. Our location provides easy access to major transportation routes, enabling efficient distribution of our products.
            </p>
            <p className="text-lg text-muted-foreground">
              Kolhapur's central location in Maharashtra allows us to serve clients across the state and neighboring regions with reliable and timely delivery of our bitumen and petroleum products.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>• Maharashtra (Primary market)</li>
              <li>• Karnataka (Border regions)</li>
              <li>• Goa (Coastal projects)</li>
              <li>• National highway projects</li>
              <li>• Industrial zones</li>
              <li>• Urban development projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-12 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Our Commitment</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">To Our Customers</h3>
              <p className="text-muted-foreground">
                We are committed to providing high-quality products, competitive pricing, and exceptional service. Your success is our success, and we work tirelessly to ensure your projects are completed on time and within budget.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">To Quality</h3>
              <p className="text-muted-foreground">
                Quality is not just a goal but a fundamental principle that guides every aspect of our operations. From product sourcing to delivery, we maintain the highest standards to ensure consistent quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Experience the difference that 30+ years of expertise and commitment to quality can make for your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-white transition-colors duration-300"
            style={{ backgroundColor: '#ed3838' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#ed3838'}
          >
            Contact Us on WhatsApp
          </Button>
          <Button 
            size="lg"
            variant="outline"
            asChild
          >
            <a href="/contact">Visit Contact Page</a>
          </Button>
        </div>
      </section>
    </Wrapper>
  );
}

