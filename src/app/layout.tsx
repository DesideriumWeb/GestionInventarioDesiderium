import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../componets/Header";
import { Toaster } from "react-hot-toast"; 
import "../app/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <main>
          <Header />
          <div className="pt-20">{children}</div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
        <Toaster />
      </body>
    </html>
  );
}
