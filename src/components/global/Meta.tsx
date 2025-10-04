import Head from 'next/head';
import { siteConfig } from '@/config/site';

interface MetaProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
}

export default function Meta({ 
  title = siteConfig.businessName,
  description = siteConfig.shortDescription,
  canonical,
  ogImage = '/images/og-home.jpg',
  type = 'website'
}: MetaProps) {
  const fullTitle = title === siteConfig.businessName ? title : `${title} | ${siteConfig.businessName}`;
  const canonicalUrl = canonical || siteConfig.siteUrl;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.businessName,
    "description": siteConfig.shortDescription,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "254, Hira Manik Bunglow, Ruikar Colony",
      "addressLocality": "Kolhapur",
      "postalCode": "416005",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 10:00-19:00",
    "priceRange": "$$",
    "image": `${siteConfig.siteUrl}${ogImage}`,
    "sameAs": []
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteConfig.siteUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteConfig.businessName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteConfig.siteUrl}${ogImage}`} />
      
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
