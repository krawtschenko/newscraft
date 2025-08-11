import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/ui/header";

const signika = Signika({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Newscraft",
  description: "World of Newscraft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={signika.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
