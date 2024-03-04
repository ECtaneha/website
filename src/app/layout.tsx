import "./globals.css";
import type { Metadata } from "next";
import Favicon from '/public/images/Metadata/Favicon.ico';
import { Inter } from "next/font/google";
import { Header } from "../components//Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CssBaseline } from "@mui/material";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taishin",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="jp">
      <body className={inter.className}>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
