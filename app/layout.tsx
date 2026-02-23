import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Aniket Mandloi | Software Engineer",
  description:
    "Portfolio of Aniket Mandloi - full-stack engineer focused on resilient backend systems, SaaS architecture, and cross-platform product delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="min-h-screen bg-[var(--bg)] pt-[7.2rem] text-[var(--ink)] lg:pt-[5.5rem]">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
