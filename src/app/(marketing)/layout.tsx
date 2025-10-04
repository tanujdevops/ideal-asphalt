import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Ideal Asphalt - Premium Bitumen & Petroleum Solutions',
  description: 'Ideal Asphalt — premium bitumen & petroleum solutions. Serving road construction and infrastructure projects for 30+ years. Trusted by road contractors & industries.',
  keywords: ['bitumen supplier', 'petroleum solutions', 'road construction', 'VG-10 bitumen', 'VG-20 bitumen', 'VG-30 bitumen', 'VG-40 bitumen', 'asphalt supplier', 'Kolhapur bitumen', 'Maharashtra bitumen'],
};

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default MarketingLayout;