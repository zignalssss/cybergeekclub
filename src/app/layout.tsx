import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./Provider";
import { getServerSession } from "next-auth";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import SessionProvider from "@/components/SessionProvider/SessionProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CyberGeek',
  description: 'Official website of CyberGeek club at KUSRC',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>

        <Providers>
          <SessionProvider session={session}>
            <Navbar />
              {children}
              <SpeedInsights />
              <Analytics />
            <Footer />
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
