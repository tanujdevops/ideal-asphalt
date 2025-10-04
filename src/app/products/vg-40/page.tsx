'use client';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig, getWhatsAppUrl } from '@/config/site';

export default function VG40Page() {
  const handleWhatsAppClick = () => {
    const message = siteConfig.whatsappMessages.product('VG-40');
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Wrapper className="py-20">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          VG-40 Bitumen
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Heavy grade bitumen for extreme conditions. Maximum viscosity and superior weather resistance for the most demanding applications.
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
              VG-40 Bitumen is the heaviest grade bitumen designed for extreme weather conditions and 
              the most demanding road construction applications. It offers maximum viscosity and 
              exceptional weather resistance, making it ideal for high-altitude and extreme climate regions.
            </p>
            <p className="text-lg text-muted-foreground">
              Our VG-40 Bitumen provides unmatched durability and performance in the harshest conditions, 
              ensuring long-lasting road surfaces that can withstand extreme temperature variations and 
              heavy traffic loads.
            </p>
          </div>
          <div className="bg-muted/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Quick Specifications</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-medium">Viscosity Grade:</span>
                <span>VG-40</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Penetration:</span>
                <span>40-60 dmm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Softening Point:</span>
                <span>50-60°C</span>
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
              <CardTitle>Maximum Viscosity</CardTitle>
              <CardDescription>Highest viscosity grade for extreme weather resistance</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Extreme Weather Resistance</CardTitle>
              <CardDescription>Superior performance in harsh climate conditions</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Heavy Traffic Suitable</CardTitle>
              <CardDescription>Designed for high-traffic and heavy-duty applications</CardDescription>
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
              <li>• Extreme weather road construction</li>
              <li>• High-altitude road projects</li>
              <li>• Heavy-duty industrial roads</li>
              <li>• Airport runway construction</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ideal For</h3>
            <ul className="space-y-2">
              <li>• Stone matrix asphalt</li>
              <li>• Heavy-duty surface courses</li>
              <li>• Extreme condition applications</li>
              <li>• High-stress infrastructure</li>
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
                  <h4 className="font-semibold">Extreme Temperature Stability</h4>
                  <p className="text-muted-foreground">Maintains properties in both extreme heat and cold conditions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Maximum Durability</h4>
                  <p className="text-muted-foreground">Superior resistance to cracking, rutting, and deformation</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Premium Performance</h4>
                  <p className="text-muted-foreground">Highest quality bitumen for the most demanding applications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Long-term Investment</h4>
                  <p className="text-muted-foreground">Maximum return on investment with extended service life</p>
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
            <h3 className="text-lg font-semibold mb-2">When should I use VG-40 Bitumen?</h3>
            <p className="text-muted-foreground">VG-40 is ideal for extreme weather conditions, high-altitude projects, and applications requiring maximum durability and weather resistance.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">How does VG-40 handle extreme temperatures?</h3>
            <p className="text-muted-foreground">VG-40 maintains excellent stability in both extreme heat and cold, with superior resistance to thermal cracking and deformation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What is the cost difference compared to other grades?</h3>
            <p className="text-muted-foreground">Contact us via WhatsApp for specific pricing information and cost-benefit analysis for your project requirements.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Order VG-40 Bitumen?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Get competitive pricing and expert consultation for your extreme condition project requirements.
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

