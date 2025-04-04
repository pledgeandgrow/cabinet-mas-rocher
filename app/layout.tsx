import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";

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

export const metadata: Metadata = {
  title: "Cabinet Mas Rocher",
  description: "Cabinet Mas Rocher - Gestion locative, Syndic, Vente immobilière à Paris",
  icons: {
    icon: [
      {
        url: '/logo-mas-rocher-dark.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
      {
        url: '/logo-mas-rocher-white.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
      },
    ],
    shortcut: ['/logo-mas-rocher-dark.png'],
    apple: [
      {
        url: '/logo-mas-rocher-dark.png',
        type: 'image/png',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
