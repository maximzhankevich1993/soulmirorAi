import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

import { CursorGlow } from "@/components/effects/CursorGlow";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
  ],
  display: "swap",
});



export const metadata: Metadata = {

  title: {
    default:
      "SoulMirror AI — Explore Your Inner World",
    template:
      "%s | SoulMirror AI",
  },


  description:
    "SoulMirror AI helps you explore emotions, dreams and personal patterns through AI-powered reflection, archetypes and symbolic analysis.",


  keywords: [
    "AI psychology",
    "dream analysis",
    "self discovery",
    "Jungian archetypes",
    "AI reflection",
    "personal growth",
  ],


  authors: [
    {
      name: "SoulMirror AI",
    },
  ],


  creator:
    "SoulMirror AI",


  metadataBase:
    new URL(
      "https://soulmirror.ai"
    ),


  openGraph: {

    title:
      "SoulMirror AI — Mirror Your Inner World",


    description:
      "Discover emotions, dreams and hidden patterns with AI-powered self reflection.",


    url:
      "https://soulmirror.ai",


    siteName:
      "SoulMirror AI",


    type:
      "website",


    locale:
      "en_US",


    images: [
      {
        url:
          "/og-image.png",

        width:
          1200,

        height:
          630,

        alt:
          "SoulMirror AI",
      },
    ],

  },


  twitter: {

    card:
      "summary_large_image",


    title:
      "SoulMirror AI",


    description:
      "Explore your inner world with AI.",


    images:
      [
        "/og-image.png",
      ],

  },


  icons: {

    icon:
      "/favicon.ico",

    apple:
      "/apple-touch-icon.png",

  },

};



export const viewport: Viewport = {

  themeColor:
    "#09090B",

  colorScheme:
    "dark",

};



export default function RootLayout({

  children,

}: Readonly<{

  children:
    React.ReactNode;

}>) {


  return (

    <html
      lang="en"
      className="dark"
    >

      <body

        className={`
        ${inter.variable}
        ${cormorant.variable}
        bg-[#09090B]
        text-[#F4F1EA]
        antialiased
        `}
      >


        <CursorGlow />


        {children}


      </body>


    </html>

  );

}