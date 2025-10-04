'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Wrapper from '@/components/global/wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig, getWhatsAppUrl } from '@/config/site';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message with form data
    const message = siteConfig.whatsappMessages.contact(
      formData.name || 'Not provided',
      formData.phone || 'Not provided', 
      formData.message || 'No specific message'
    );
    
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsApp = () => {
    const url = getWhatsAppUrl(siteConfig.whatsappMessages.default);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Wrapper className="py-20">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Contact Ideal Asphalt
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Get in touch with our experts for personalized bitumen solutions and competitive pricing
        </p>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you via WhatsApp with your project details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full text-white transition-colors duration-300"
                  style={{ backgroundColor: '#ed3838' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#ed3838'}
                >
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-muted-foreground">{siteConfig.phone}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">{siteConfig.email}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground">{siteConfig.address}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-muted-foreground">{siteConfig.openingHours}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
                <CardDescription>Connect with us instantly</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={handleDirectWhatsApp}
                  className="w-full text-white transition-colors duration-300"
                  style={{ backgroundColor: '#ed3838' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#ed3838'}
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Services Overview */}
      <section className="py-12 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Bitumen Supply</CardTitle>
              <CardDescription>Premium grade bitumen for all construction needs</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Petroleum Solutions</CardTitle>
              <CardDescription>Complete petroleum product solutions for industries</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expert Consultation</CardTitle>
              <CardDescription>Professional guidance for your project requirements</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">How quickly can you deliver?</h3>
            <p className="text-muted-foreground">Delivery times vary based on location and order quantity. Contact us via WhatsApp for specific delivery schedules.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Do you provide technical support?</h3>
            <p className="text-muted-foreground">Yes, our experienced team provides technical consultation and support for all your bitumen and petroleum product needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What is your minimum order quantity?</h3>
            <p className="text-muted-foreground">Minimum order quantities vary by product. Contact us via WhatsApp to discuss your specific requirements.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Do you offer competitive pricing?</h3>
            <p className="text-muted-foreground">Yes, we provide competitive pricing for all our products. Get in touch for a personalized quote based on your project needs.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Contact us today for expert consultation and competitive pricing on all your bitumen and petroleum product needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={handleDirectWhatsApp}
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Fill Contact Form
          </Button>
        </div>
      </section>
    </Wrapper>
  );
}

