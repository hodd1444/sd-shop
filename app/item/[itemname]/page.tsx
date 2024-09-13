"use client";

import { usePathname } from "next/navigation";
import itemList from "@/items.json";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ItemCard from "@/components/ItemCard";
import { ToastContainer } from "react-toastify";

export default function ItemPage() {
  const itemName = usePathname()
    .split("/")
    .pop()
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const item = itemList.items.find((item) => item.name.toLowerCase() === itemName?.toLowerCase());

  if (!item) {
    return (
      <div className="min-h-screen bg-[#272727] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Item not found</h1>
          <Link href="/" className="text-[#FFCB00] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#272727] text-white p-8">
      {item.bundle !== 0 && (
        <Link
          href={`/bundle/${itemList.bundles
            .find((b) => b.id === item.bundle)
            ?.name.toLowerCase()
            .split(" ")
            .join("-")}`}
          className="inline-flex items-center text-[#FFCB00] hover:underline mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Bundle
        </Link>
      )}
      {item.bundle === 0 && (
        <Link
          href={`/`}
          className="inline-flex items-center text-[#FFCB00] hover:underline mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Shop
        </Link>
      )}
      <div className="max-w-4xl mx-auto">
        <ItemCard {...item} />
      </div>
    </div>
  );
}
