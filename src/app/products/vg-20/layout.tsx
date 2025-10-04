import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VG-20 Bitumen Supplier | Ideal Asphalt | Kolhapur',
  description: 'Standard VG-20 Bitumen for moderate temperature regions. Reliable supplier in Kolhapur with competitive pricing. Get quote on WhatsApp.',
  keywords: ['VG-20 bitumen', 'standard bitumen', 'Kolhapur bitumen supplier', 'moderate temperature bitumen'],
};

export default function VG20Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
