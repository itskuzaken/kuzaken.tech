import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollEffects from "@/components/ScrollEffects";
import BackgroundOrbs from "@/components/BackgroundOrbs";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kuzaken.tech"),
  title: {
    default: "KUZAKEN.TECH",
    template: "%s | KUZAKEN.TECH",
  },
  description:
    "Modern portfolio of Ken Francen G. Baylon (KUZAKEN): web development, design, and broadcast ops.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "KUZAKEN.TECH",
    description:
      "E-Portfolio of Ken Francen G. Baylon – development, design, and broadcast operations.",
    url: "/",
    siteName: "KUZAKEN.TECH",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KUZAKEN.TECH preview",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KUZAKEN.TECH",
    description:
      "E-Portfolio of Ken Francen G. Baylon – development, design, and broadcast operations.",
  images: ["/twitter-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased kb-bg`}
      >
        <ThemeProvider>
          <Header />
          <BackgroundOrbs />
          <ScrollEffects />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
