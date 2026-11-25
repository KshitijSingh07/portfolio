import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./components/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kshitij Singh | Software Developer Portfolio",
  description: "Kshitij Singh — Computer Science & Engineering undergraduate at IIIT Manipur. Full-stack development, backend engineering and systems programming projects.",
  metadataBase: new URL("https://portfolio-kj.vercel.app"),
  openGraph: {
    title: "Kshitij Singh | Software Developer Portfolio",
    description: "Explore Kshitij Singh's projects, technical skills, experience and resume.",
    url: "https://portfolio-kj.vercel.app",
    siteName: "Kshitij Singh Portfolio",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
