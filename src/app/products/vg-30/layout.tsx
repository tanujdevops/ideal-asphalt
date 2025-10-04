import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VG-30 Bitumen Supplier | Ideal Asphalt | Kolhapur',
  description: 'Heavy duty VG-30 Bitumen for demanding road construction. Premium supplier in Kolhapur with 30+ years experience. Get quote on WhatsApp.',
  keywords: ['VG-30 bitumen', 'heavy duty bitumen', 'Kolhapur bitumen supplier', 'premium bitumen'],
};

export default function VG30Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
