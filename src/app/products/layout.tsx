import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bitumen Products | Ideal Asphalt | Premium Bitumen Supplier Kolhapur',
  description: 'Premium quality bitumen products - VG-10, VG-20, VG-30, VG-40. Trusted supplier in Kolhapur with 30+ years experience. Get quote on WhatsApp.',
  keywords: ['bitumen products', 'VG-10 bitumen', 'VG-20 bitumen', 'VG-30 bitumen', 'VG-40 bitumen', 'Kolhapur bitumen supplier', 'premium bitumen'],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
