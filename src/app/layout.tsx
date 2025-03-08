import type { Metadata } from "next";
import { Montserrat, Hind } from "next/font/google";
import { ColorStoreProvider } from "@/providers/colorStoreProvider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Prettyai Colors",
  description: "Generate colors palettes, visualize on website and save them for use in your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${hind.variable} max-w-full min-h-screen overflow-hidden`}>
        <ColorStoreProvider>
          {children}
        </ColorStoreProvider>
      </body>
    </html>
  );
}
