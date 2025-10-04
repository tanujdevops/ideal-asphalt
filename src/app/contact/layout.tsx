import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Ideal Asphalt | Get Quote on WhatsApp',
  description: 'Contact Ideal Asphalt for bitumen and petroleum solutions. Get expert consultation and competitive pricing. Phone: +91-9822002357, Email: info@idealasphalt.in',
  keywords: ['contact ideal asphalt', 'bitumen quote', 'kolhapur bitumen contact', 'whatsapp contact'],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
