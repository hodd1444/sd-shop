import Link from "next/link";
import { Coins } from "lucide-react";
import items from "@/items.json";

interface Skin {
  id: number;
  name: string;
  price: string;
  image: string;
  rarity: string;
  color: string;
  bundle: number;
}

interface Bundle {
  id: number;
  name: string;
  price: string;
  image: string;
  rarity: string;
  color: string;
  items: number[]; // Define the type of the items array as number[]
}

interface BundleViewerProps {
  bundle: Bundle;
}

export default function BundleViewer({ bundle }: BundleViewerProps) {
  const skins = items.items.filter((skin) => bundle.items.includes(skin.id));
  return (
    <div className="bg-[#272727] text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-[#FFCB00] mb-4">
            {bundle.name}
          </h1>
          <p className="text-2xl text-[#EC3C7C] flex items-center">
            <img className="w-8 h-full mr-2" src="/spectre_points_pink.webp" />
            {bundle.price}
          </p>
        </div>
        {skins.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skins.map((skin) => (
              <div key={skin.id} className="bg-[#333333] rounded-lg overflow-hidden shadow-lg flex flex-col h-80 w-full">
                <div className="h-40 overflow-hidden p-4">
                  <img
                    src={skin.image}
                    alt={skin.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 truncate text-[#FFCB00]">
                      {skin.name}
                    </h3>
                    <p
                      className="inline-block text-sm font-bold text-gray-800 rounded-md px-2 py-1 mb-2"
                      style={{
                        backgroundColor: skin.color,
                      }}
                    >
                      {skin.rarity}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    {skin.price === "bundle" ? (
                      <p className="flex flex-row items-center text-[#bdbdbd]">
                        <img
                          className="w-6 h-6 mr-2"
                          src="/spectre_points_gray.webp"
                        />
                        Bundle only
                      </p>
                    ) : (
                      <p className="flex flex-row items-center text-[#EC3C7C]">
                        <img
                          className="w-6 h-6 mr-2"
                          src="/spectre_points_pink.webp"
                        />
                        {skin.price}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl text-center">No items to show right now! Check back later 👻</p>
          )}
      </div>
    </div>
  );
}
