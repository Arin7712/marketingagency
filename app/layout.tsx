import type { Metadata } from "next";
import localFont from "next/font/local";
import {Space_Grotesk} from "next/font/google"

import "./globals.css";

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

const font = Space_Grotesk({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Mo - Design and development agency",
  description: "Grow your business with Mo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
