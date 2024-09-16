import Image from "next/image";
import Shop from "@/components/Shop";
import Header from "@/components/Header";
import { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    title: "Shop | Spectre",
    description: "View the Spectre Divide Shop and its contents",
    images: "/opengraph-image.png",
  },
  twitter: {
    title: "Shop | Spectre",
    description: "View the Spectre Divide Shop and its contents",
    images: "/opengraph-image.png",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#272727] text-white">
      <Header />
      <Shop />
    </div>
  );
}
