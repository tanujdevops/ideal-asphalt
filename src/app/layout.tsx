import "@/styles/globals.css";
import { cn } from "@/lib";
import { generateMetadata } from "@/utils";
import { base, heading } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { subheading } from "@/constants/fonts";
import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import WhatsAppButton from "@/components/global/WhatsAppButton";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
                    base.variable,
                    heading.variable,
                    subheading.variable,
                )}
                style={{
                    backgroundImage: 'url(/bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                <Toaster richColors theme="dark" position="top-right" />
                <Navbar />
                <main className="mx-auto w-full z-40 relative">
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
};
