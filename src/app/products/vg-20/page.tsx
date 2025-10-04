'use client';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig, getWhatsAppUrl } from '@/config/site';

export default function VG20Page() {
  const handleWhatsAppClick = () => {
    const message = siteConfig.whatsappMessages.product('VG-20');
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Wrapper className="py-20">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          VG-20 Bitumen
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Standard grade bitumen for moderate temperature regions. Cost-effective solution for various road construction applications.
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

      {/* Overview Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              VG-20 Bitumen is a standard grade bitumen designed for moderate temperature regions. 
              It offers balanced viscosity and excellent workability, making it a popular choice 
              for various road construction and maintenance projects.
            </p>
            <p className="text-lg text-muted-foreground">
              Our VG-20 Bitumen provides reliable performance at competitive prices, making it 
              an ideal choice for contractors looking for quality bitumen solutions without 
              compromising on cost-effectiveness.
            </p>
          </div>
          <div className="bg-muted/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Quick Specifications</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-medium">Viscosity Grade:</span>
                <span>VG-20</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Penetration:</span>
                <span>60-80 dmm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Softening Point:</span>
                <span>45-55°C</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Flash Point:</span>
                <span>Min 220°C</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Balanced Viscosity</CardTitle>
              <CardDescription>Optimal flow properties for easy application and workability</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cost Effective</CardTitle>
              <CardDescription>Excellent value for money without compromising on quality</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Versatile Applications</CardTitle>
              <CardDescription>Suitable for a wide range of road construction projects</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Primary Uses</h3>
            <ul className="space-y-2">
              <li>• Standard road construction</li>
              <li>• Urban road projects</li>
              <li>• Residential area paving</li>
              <li>• Parking lot construction</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ideal For</h3>
            <ul className="space-y-2">
              <li>• Hot mix asphalt</li>
              <li>• Surface dressing</li>
              <li>• Bituminous macadam</li>
              <li>• Road maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Advantages</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Easy Workability</h4>
                  <p className="text-muted-foreground">Optimal viscosity for smooth application and spreading</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Good Adhesion</h4>
                  <p className="text-muted-foreground">Strong bonding with aggregates for durable road surfaces</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Temperature Stability</h4>
                  <p className="text-muted-foreground">Consistent performance in moderate temperature ranges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Economic Solution</h4>
                  <p className="text-muted-foreground">Cost-effective choice for standard construction projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Glossary */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Glossary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Viscosity</CardTitle>
              <CardDescription>Resistance to flow at high temperatures, crucial for workability</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Penetration</CardTitle>
              <CardDescription>Hardness measurement indicating bitumen consistency</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Softening Point</CardTitle>
              <CardDescription>Temperature at which bitumen becomes soft and pliable</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ductility</CardTitle>
              <CardDescription>Ability to stretch without breaking, important for flexibility</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Flash Point</CardTitle>
              <CardDescription>Safety parameter indicating fire resistance temperature</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Solubility</CardTitle>
              <CardDescription>Purity measure indicating bitumen content in solution</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">What is VG-20 Bitumen used for?</h3>
            <p className="text-muted-foreground">VG-20 Bitumen is ideal for standard road construction, urban projects, and moderate temperature applications where cost-effectiveness is important.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">How does VG-20 compare to VG-10?</h3>
            <p className="text-muted-foreground">VG-20 has lower viscosity than VG-10, making it more workable and cost-effective for standard applications, while VG-10 is better for high-temperature conditions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What is the delivery time?</h3>
            <p className="text-muted-foreground">Contact us via WhatsApp for specific delivery schedules based on your location and order quantity.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Order VG-20 Bitumen?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Get competitive pricing and expert consultation for your project requirements.
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
    </Wrapper>
  );
}

