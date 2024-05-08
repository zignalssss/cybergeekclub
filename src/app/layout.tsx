import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import { Providers } from "./provider";
import Footer from "@/components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CyberGeek',
  description: 'Home Page of CyberGeek',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <Navbar/>
          {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
