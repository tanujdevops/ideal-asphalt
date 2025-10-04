import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VG-10 Bitumen Supplier | Ideal Asphalt | Kolhapur',
  description: 'Premium VG-10 Bitumen for high-temperature applications. Trusted supplier in Kolhapur with 30+ years experience. Get quote on WhatsApp.',
  keywords: ['VG-10 bitumen', 'high temperature bitumen', 'Kolhapur bitumen supplier', 'premium bitumen'],
};

export default function VG10Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
