'use client';

import Image from 'next/image';
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
    image?: string;
    imageAlt?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = siteConfig.whatsappMessages.product(product.name);
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="h-full overflow-hidden border-border/70 bg-background/80 backdrop-blur">
      <div className="relative aspect-square w-full overflow-hidden border-b border-border/60 bg-muted">
        <Image
          src={product.image ?? '/images/hero.png'}
          alt={product.imageAlt ?? `${product.name} presentation`}
          width={640}
          height={640}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          priority={false}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">
          {product.name}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-foreground/80 mb-2">Key features</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-auto space-y-2">
          <Button asChild className="w-full">
            <Link href={`/products/${product.slug}`}>
              Learn more
            </Link>
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleWhatsAppClick}
          >
            Get quote on WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
