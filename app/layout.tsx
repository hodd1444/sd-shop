import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? `http://localhost:${process.env.PORT || 3000}`
      : `https://${process.env.VERCEL_URL}`,
  ),
  // TODO: move to site config
  title: "Shop | Spectre",
  description: "View the Spectre Divide Shop and it's contents",
  openGraph: {
    title: "Shop | Spectre",
    description: "View the Spectre Divide Shop and it's contents",
    image: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "Shop | Spectre",
    description: "View the Spectre Divide Shop and it's contents",
    image: "/twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
