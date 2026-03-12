import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading" 
});

const body = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body" 
});

export const metadata: Metadata = {
  title: "Pee Exquisite Events | Luxury Event Planning Lagos",
  description: "Lagos' premier event planning hub specializing in opulent weddings and corporate galas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${heading.variable} ${body.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}