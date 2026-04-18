import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aniket Mandloi — Software Engineer",
  description:
    "Portfolio of Aniket Mandloi. Software engineer building cross-domain products — crypto infrastructure, healthtech, humanitarian tooling, and AI verification.",
  openGraph: {
    title: "Aniket Mandloi — Software Engineer",
    description:
      "Cross-domain software engineer. Building at the intersection of scale, reliability, and real users.",
    type: "website",
  },
  authors: [{ name: "Aniket Mandloi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
