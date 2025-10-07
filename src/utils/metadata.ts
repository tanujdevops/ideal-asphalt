import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
}

export const generateMetadata = ({
    title = "Ideal Asphalt - Premium Bitumen & Petroleum Solutions",
    description = "Ideal Asphalt - premium bitumen and petroleum solutions. Serving road construction and infrastructure projects for 30+ years. Trusted by road contractors and industries.",
    icons = [
        {
            rel: "icon",
            url: "/favicon.png",
        },
        {
            rel: "apple-touch-icon",
            url: "/favicon.png",
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
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://idealasphalt.in");
    const appName = process.env.NEXT_PUBLIC_APP_NAME;

    return {
        metadataBase,
        title: {
            template: appName ? `%s | ${appName}` : "%s",
            default: title,
        },
        description,
        keywords,
        authors: author ? [{ name: author }] : undefined,
        creator: author,
        publisher: appName,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
        robots: noIndex ? { index: false, follow: false } : undefined,
    };
};
