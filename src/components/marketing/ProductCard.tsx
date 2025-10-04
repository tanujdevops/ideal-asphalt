'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig, getWhatsAppUrl } from '@/config/site';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    description: string;
    features: string[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = siteConfig.whatsappMessages.product(product.name);
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary">
          {product.name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-auto space-y-2">
          <Button asChild className="w-full">
            <Link href={`/products/${product.slug}`}>
              Learn More
            </Link>
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleWhatsAppClick}
          >
            Get Quote on WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
