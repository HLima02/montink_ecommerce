import type { Metadata } from "next";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";

import Header from './componentes/Header'
import Footer from "./componentes/Footer";

export const metadata: Metadata = {
  title: "E-commerce Montink",
  description: "Página de produto simulando um E-commerce para uma vaga de desenvolvedor front-end da empresa Montink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
