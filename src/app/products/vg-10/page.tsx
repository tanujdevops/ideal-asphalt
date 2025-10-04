'use client';

import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig, getWhatsAppUrl } from '@/config/site';

export default function VG10Page() {
  const handleWhatsAppClick = () => {
    const message = siteConfig.whatsappMessages.product('VG-10');
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Wrapper className="py-20">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          VG-10 Bitumen
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Premium grade bitumen for high-temperature applications and demanding road construction projects.
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
              VG-10 Bitumen is a premium grade bitumen specifically designed for high-temperature applications. 
              It offers exceptional durability and performance in extreme weather conditions, making it ideal 
              for heavy-duty road construction and infrastructure projects.
            </p>
            <p className="text-lg text-muted-foreground">
              Our VG-10 Bitumen meets international quality standards and is trusted by contractors across 
              Maharashtra for its consistent quality and reliable performance.
            </p>
          </div>
          <div className="bg-muted/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Quick Specifications</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-medium">Viscosity Grade:</span>
                <span>VG-10</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Penetration:</span>
                <span>80-100 dmm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Softening Point:</span>
                <span>40-50°C</span>
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
              <CardTitle>High Viscosity</CardTitle>
              <CardDescription>Superior binding properties for enhanced road durability</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Weather Resistant</CardTitle>
              <CardDescription>Excellent performance in extreme temperature conditions</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Long Lasting</CardTitle>
              <CardDescription>Extended service life reducing maintenance costs</CardDescription>
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
              <li>• High-temperature road construction</li>
              <li>• Heavy-duty highway projects</li>
              <li>• Industrial flooring applications</li>
              <li>• Airport runway construction</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ideal For</h3>
            <ul className="space-y-2">
              <li>• Hot mix asphalt production</li>
              <li>• Dense bituminous macadam</li>
              <li>• Bituminous concrete</li>
              <li>• Waterproofing applications</li>
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
                  <h4 className="font-semibold">Superior Adhesion</h4>
                  <p className="text-muted-foreground">Excellent bonding with aggregates ensuring long-lasting roads</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">High Temperature Stability</h4>
                  <p className="text-muted-foreground">Maintains properties even in extreme heat conditions</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Consistent Quality</h4>
                  <p className="text-muted-foreground">Uniform properties batch after batch for reliable performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Cost Effective</h4>
                  <p className="text-muted-foreground">Reduced maintenance requirements lower overall project costs</p>
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
            <h3 className="text-lg font-semibold mb-2">What is VG-10 Bitumen used for?</h3>
            <p className="text-muted-foreground">VG-10 Bitumen is primarily used for high-temperature applications, heavy-duty road construction, and infrastructure projects requiring superior durability.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">How does VG-10 differ from other grades?</h3>
            <p className="text-muted-foreground">VG-10 has higher viscosity and better temperature resistance compared to lower grades, making it ideal for extreme weather conditions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What is the minimum order quantity?</h3>
            <p className="text-muted-foreground">Contact us via WhatsApp for specific order quantities and delivery terms based on your project requirements.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Order VG-10 Bitumen?</h2>
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

