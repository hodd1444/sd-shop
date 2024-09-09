"use client";
import { Coins } from "lucide-react";
import items from "@/items.json";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

interface ItemCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  rarity: string;
  color: string;
  bundle: number;
  variants?: { id: number; name: string; image: string }[];
}

export default function ItemCard({
  id,
  name,
  price,
  image,
  rarity,
  color,
  bundle,
  variants,
}: ItemCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(image);

  const changeVariant = (image: string) => () => {
    setSelectedVariant(image);
  };

  const handleAddToOwned = () => {
    /* toast.success(`${name} added to owned!`,  {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    }); */
    toast.dark(`This feature is currently in development!`,   {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        backgroundColor: "#272727",
        color: "#FFCB00",
      },
    });
  };

  const handleAddToWishlist = () => {
    toast.dark(`This feature is currently in development!`,   {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        backgroundColor: "#272727",
        color: "#FFCB00",
      },
    });
  };

  return (
    <div className="bg-[#272727] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center mb-6">
          <img className="w-8 h-full mr-4" src={`/rarity/${rarity}.png`} />
          <h1 className="text-4xl font-bold" style={{ color: color }}>
            {name}
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-8 shadow-md">
          <div className="lg:col-span-2">
            <div className="bg-[#333333] rounded-lg overflow-hidden shadow-lg">
              <img
                src={selectedVariant}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-[#333333] rounded-lg p-6 shadow-lg">
            {price === "bundle" && (
              <p className="text-2xl text-[#EC3C7C] mb-4 flex flex-wrap items-center">
                <img className="w-8 h-full mr-2" src={`/spectre_points_pink.png`} />
                Only available in{" "}
                <Link
                  className={`ml-4 hover:text-[#FFCB00] transition-all`}
                  href={`/bundle/${items.bundles.find((b) => b.id === bundle)?.name.split(" ").join("-").toLowerCase()}`}
                >
                  {items.bundles.find((b) => b.id === bundle)?.name}
                </Link>
              </p>
            )}
            {price !== "bundle" && (
              <p className="text-2xl text-[#EC3C7C] mb-4 flex items-center">
                <img className="w-8 h-full mr-2" src={`/spectre_points_pink.png`} />
                {price}
              </p>
            )}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-[#FFCB00]">
                Details
              </h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>ID:</span>
                  <span className="text-[#FFCB00]">{id}</span>
                </li>
                <li className="flex justify-between">
                  <span>Rarity:</span>
                  <span className="text-[#FFCB00]">{rarity}</span>
                </li>
                <li className="flex justify-between">
                  <span>Color:</span>
                  <span className="text-[#FFCB00]" style={{ color: color }}>
                    {color}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Bundle:</span>
                  <span className="text-[#FFCB00]">{bundle}</span>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <p className="text-center font-bold mt-2 text-sm py-2 px-4 w-fit rounded-md" style={{
                backgroundColor: color,
                color: "#272727"
              }}>{rarity}</p>
            </div>
            {variants && (
              <div className="grid grid-cols-2 md:grid-cols-4 mb-4">
                {variants.map((variant, index) => (
                  <button onClick={changeVariant(variant.image)} key={index}>
                    <div className="flex flex-col items-center justify-between gap-4 bg-[#333333] p-4 rounded-lg hover:bg-gray-700">
                      <div
                        className="w-16 h-16 bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${variant.image})` }}
                      ></div>
                      <p className="text-xl font-semibold">{variant.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-row justify-between gap-8 p-4">
              <button className="w-full bg-[#FFCB00] text-[#272727] py-2 px-4 rounded-full font-semibold hover:bg-[#EC3C7C] transition-colors" onClick={handleAddToOwned}>
                Add to Owned
              </button>
              <button className="w-full bg-[#FFCB00] text-[#272727] py-2 px-4 rounded-full font-semibold hover:bg-[#EC3C7C] transition-colors" onClick={handleAddToWishlist}>
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
