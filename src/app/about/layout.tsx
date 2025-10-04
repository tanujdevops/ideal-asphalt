import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Ideal Asphalt | 30+ Years Experience',
  description: 'Learn about Ideal Asphalt, a proud part of Amar Sons Ventures. 30+ years of experience in bitumen and petroleum solutions in Kolhapur, Maharashtra.',
  keywords: ['about ideal asphalt', 'amar sons ventures', 'kolhapur bitumen company', '30 years experience'],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
