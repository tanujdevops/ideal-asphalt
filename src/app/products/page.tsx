'use client';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig, getWhatsAppUrl } from '@/config/site';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ProductsPage() {
  const handleWhatsAppClick = () => {
    const message = siteConfig.whatsappMessages.quote;
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Wrapper className="py-20">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Our Bitumen Products
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Premium quality bitumen solutions for all your road construction and infrastructure needs. 
          From standard applications to extreme weather conditions.
        </p>
        <Button 
          size="lg"
          onClick={handleWhatsAppClick}
          className="text-white transition-colors duration-300"
          style={{ backgroundColor: '#ed3838' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ed3838'}
        >
          Get Quote on WhatsApp
        </Button>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Available Bitumen Grades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{product.name}</CardTitle>
                <CardDescription className="text-lg">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Link href={`/products/${product.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-12 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Product Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold">Grade</th>
                <th className="text-left p-4 font-semibold">Penetration (dmm)</th>
                <th className="text-left p-4 font-semibold">Softening Point (°C)</th>
                <th className="text-left p-4 font-semibold">Best For</th>
                <th className="text-left p-4 font-semibold">Applications</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium text-primary">VG-10</td>
                <td className="p-4">80-100</td>
                <td className="p-4">40-50</td>
                <td className="p-4">High-temperature regions</td>
                <td className="p-4">Heavy-duty highways, airport runways</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium text-primary">VG-20</td>
                <td className="p-4">60-80</td>
                <td className="p-4">45-55</td>
                <td className="p-4">Moderate temperature regions</td>
                <td className="p-4">Standard roads, urban projects</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium text-primary">VG-30</td>
                <td className="p-4">50-70</td>
                <td className="p-4">47-57</td>
                <td className="p-4">Heavy-duty applications</td>
                <td className="p-4">High-traffic roads, industrial areas</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-primary">VG-40</td>
                <td className="p-4">40-60</td>
                <td className="p-4">50-60</td>
                <td className="p-4">Extreme weather conditions</td>
                <td className="p-4">High-altitude roads, extreme climates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Bitumen Products?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Premium Quality</CardTitle>
              <CardDescription>All our bitumen products meet international quality standards and undergo rigorous testing</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>30+ Years Experience</CardTitle>
              <CardDescription>Three decades of expertise in bitumen supply and road construction solutions</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reliable Supply</CardTitle>
              <CardDescription>Consistent availability and timely delivery across Maharashtra and beyond</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expert Consultation</CardTitle>
              <CardDescription>Professional guidance to help you choose the right grade for your project</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Competitive Pricing</CardTitle>
              <CardDescription>Best market rates without compromising on quality or service</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Support</CardTitle>
              <CardDescription>24/7 support and assistance for all your bitumen requirements</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Get expert consultation and competitive pricing for your bitumen requirements. 
          Our team is ready to help you choose the perfect grade for your project.
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
            Get Quote on WhatsApp
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Wrapper>
  );
}
