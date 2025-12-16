import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@/components/Analytics";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoldenGlow IT Solutions - MVP Development Studio",
  description: "We turn your ideas into market-ready MVPs fast. Your trusted partner for startup success. Specializing in Web Apps, Mobile Apps, and UI/UX Design.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://goldenglowitsolutions.com",
    title: "GoldenGlow IT Solutions - MVP Development Studio",
    description: "Transforming ideas into high-quality MVPs. Expert software development for startups and enterprises.",
    siteName: "GoldenGlow IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoldenGlow IT Solutions - MVP Development Studio",
    description: "We build scalable MVPs for ambitious startups.",
  },
  verification: {
    google: "google-site-verification-code", // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased font-sans" suppressHydrationWarning>
        <Providers>
          {children}
          <Analytics domain="goldenglowitsolutions.com" />
        </Providers>
      </body>
    </html>
  );
}
