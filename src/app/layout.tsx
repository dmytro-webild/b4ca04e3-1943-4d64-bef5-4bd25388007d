import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'CyberForge Arena: Multiplayer Shooting & Crafting Game',
  description: 'Dive into CyberForge Arena, the ultimate multiplayer game combining intense shooting combat with deep crafting and customization. Forge your weapons, dominate the battlefield, and become a legend.',
  keywords: ["multiplayer game, shooting game, crafting game, browser game, online game, sci-fi shooter, cyberpunk, FPS, crafting system, customizable weapons, game arena"],
  openGraph: {
    "title": "CyberForge Arena: Multiplayer Shooting & Crafting Game",
    "description": "Dive into CyberForge Arena, the ultimate multiplayer game combining intense shooting combat with deep crafting and customization. Forge your weapons, dominate the battlefield, and become a legend.",
    "url": "https://www.cyberforgearena.com",
    "siteName": "CyberForge Arena",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/person-wearing-futuristic-virtual-reality-glasses-gaming_23-2151133103.jpg",
        "alt": "CyberForge Arena Gameplay"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "CyberForge Arena: Multiplayer Shooting & Crafting Game",
    "description": "Dive into CyberForge Arena, the ultimate multiplayer game combining intense shooting combat with deep crafting and customization. Forge your weapons, dominate the battlefield, and become a legend.",
    "images": [
      "http://img.b2bpic.net/free-photo/person-wearing-futuristic-virtual-reality-glasses-gaming_23-2151133103.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
