import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Purchasey - Premium Products",
  description: "Purchasey - Your one-stop destination for high-quality, premium products. Explore now!",
  keywords: "Purchasey, premium products, high-quality, online store, shopping, Purchasey store",
  author: "MZ-Motivational",
  openGraph: {
    title: "Purchasey - Premium Products",
    description: "Purchasey offers a range of high-quality products tailored to your needs.",
    url: "https://www.purchasey.com",
    type: "website",
    siteName: "Purchasey",
    image: "/images/purchasey-banner.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* General SEO Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.image} />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.image} />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
