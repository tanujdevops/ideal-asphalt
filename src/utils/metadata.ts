import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `Ideal Asphalt - Premium Bitumen & Petroleum Solutions`,
    description = `Ideal Asphalt — premium bitumen & petroleum solutions. Serving road construction and infrastructure projects for 30+ years. Trusted by road contractors & industries.`,
    icons = [
        {
            rel: "icon",
            url: "/ideal-logo.png",
        },
        {
            rel: "apple-touch-icon",
            url: "/ideal-logo.png",
        },
    ],
    noIndex = false,
    keywords = [
        "bitumen supplier",
        "petroleum solutions",
        "road construction",
        "VG-10 bitumen",
        "VG-20 bitumen", 
        "VG-30 bitumen",
        "VG-40 bitumen",
        "asphalt supplier",
        "Kolhapur bitumen",
        "Maharashtra bitumen",
        "road construction materials",
        "infrastructure projects"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
    type = "website",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://idealasphalt.in");

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
    };
};