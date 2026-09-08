import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Layout from "@/components/layout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Gotham = localFont({
  src: [
    {
      path: "../fonts/Gotham-Book.otf",
      weight: "400",
      style: "book",
    },
    {
      path: "../fonts/Gotham-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Gotham-Thin.otf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../fonts/Gotham-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/Gotham-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-gotham",
  preload: true,
});

export const metadata: Metadata = {
  title: "Fizza Munir | Full-Stack & Mobile Developer",
  description:
    "Fizza Munir — Freelance Full-Stack (MERN) & Mobile App Developer building scalable web and mobile products for clients across Pakistan, the UAE and the USA.",
  icons: [{ rel: "icon", url: `/favicon.ico` }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap');
          `}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Gotham.variable} ${inter.variable} ${sora.variable} antialiased dark:bg-neutral-950 transition-colors duration-300 pt-16 font-sans`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
