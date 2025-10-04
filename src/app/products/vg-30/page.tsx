'use client';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig, getWhatsAppUrl } from '@/config/site';

export default function VG30Page() {
  const handleWhatsAppClick = () => {
    const message = siteConfig.whatsappMessages.product('VG-30');
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Wrapper className="py-20">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          VG-30 Bitumen
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Heavy duty bitumen for demanding road construction projects. Superior binding properties and long-lasting performance.
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
              VG-30 Bitumen is a heavy-duty grade bitumen designed for demanding road construction projects. 
              It offers superior binding properties and exceptional durability, making it the preferred choice 
              for high-traffic roads and infrastructure projects.
            </p>
            <p className="text-lg text-muted-foreground">
              Our VG-30 Bitumen delivers consistent quality and performance, ensuring long-lasting road surfaces 
              that can withstand heavy traffic loads and harsh weather conditions.
            </p>
          </div>
          <div className="bg-muted/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Quick Specifications</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-medium">Viscosity Grade:</span>
                <span>VG-30</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Penetration:</span>
                <span>50-70 dmm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Softening Point:</span>
                <span>47-57°C</span>
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
              <CardTitle>High Penetration</CardTitle>
              <CardDescription>Superior binding strength for heavy-duty applications</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Superior Binding</CardTitle>
              <CardDescription>Excellent adhesion with aggregates for durable road surfaces</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Long Lasting</CardTitle>
              <CardDescription>Extended service life with minimal maintenance requirements</CardDescription>
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
              <li>• Heavy-duty highway construction</li>
              <li>• High-traffic road projects</li>
              <li>• Industrial road construction</li>
              <li>• Bridge deck waterproofing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ideal For</h3>
            <ul className="space-y-2">
              <li>• Dense bituminous concrete</li>
              <li>• Stone matrix asphalt</li>
              <li>• Heavy-duty surface courses</li>
              <li>• Infrastructure projects</li>
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
                  <h4 className="font-semibold">Exceptional Durability</h4>
                  <p className="text-muted-foreground">Superior resistance to traffic loads and environmental stress</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">High Temperature Performance</h4>
                  <p className="text-muted-foreground">Maintains stability and performance in hot weather conditions</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Premium Quality</h4>
                  <p className="text-muted-foreground">Consistent high-quality bitumen meeting international standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Cost Effective Long-term</h4>
                  <p className="text-muted-foreground">Reduced maintenance costs due to superior durability</p>
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
            <h3 className="text-lg font-semibold mb-2">What makes VG-30 suitable for heavy-duty applications?</h3>
            <p className="text-muted-foreground">VG-30 has higher penetration and superior binding properties, making it ideal for high-traffic roads and heavy-duty construction projects.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">How does VG-30 perform in different weather conditions?</h3>
            <p className="text-muted-foreground">VG-30 maintains excellent performance in both hot and cold weather, with superior temperature stability and durability.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What is the typical service life of VG-30 roads?</h3>
            <p className="text-muted-foreground">VG-30 roads typically last 15-20 years with proper construction and maintenance, significantly longer than lower grades.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Order VG-30 Bitumen?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Get competitive pricing and expert consultation for your heavy-duty project requirements.
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

