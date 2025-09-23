import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import localFont from "next/font/local";

const angella = localFont({
  src: "../public/fonts/Angella.otf",
  variable: "--font-angella",
  display: "swap",
});

const cinzel = localFont({
  src: "../public/fonts/Cinzel.ttf",
  variable: "--font-cinzel",
  display: "swap",
});

const Montserrat = localFont({
  src: "../public/fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vihendo Community",
  description: "Putting love for the communities into actions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={
        (angella.variable, cinzel.variable, Montserrat.className || "") +
        " scroll-smooth"
      }
    >
      <body className="bg-[#146D2D] ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
