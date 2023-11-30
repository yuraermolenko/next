import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/footer";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});
const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "CRITICICE",
  description: "Honest blockchain reviews",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${source_sans_3.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
