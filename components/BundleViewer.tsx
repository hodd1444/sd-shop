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
        <h1 className="text-4xl font-bold text-[#FFCB00] mb-4">
          {bundle.name}
        </h1>
        <div className="flex items-center justify-between mb-8">
          <p className="text-2xl text-[#EC3C7C] flex items-center">
            <img className="w-8 h-full mr-2" src="/spectre_points_pink.png" />
            {bundle.price}
          </p>
          <button className="bg-[#FFCB00] text-[#272727] py-2 px-6 rounded-full font-semibold hover:bg-[#EC3C7C] transition-colors">
            Purchase Bundle
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skins.map((skin) => (
            <Link
              href={`/item/${skin.name.toLowerCase().replace(/ /g, "-")}`}
              key={skin.id}
            >
              <div className="bg-[#333333] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img
                  src={skin.image}
                  alt={skin.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#FFCB00] mb-2">
                    {skin.name}
                  </h3>{
                    skin.price === "bundle" ? (
                      <p className="flex flex-row text-[#EC3C7C] mb-2">
                        <img className="w-6 h-6 mr-2" src="/spectre_points_pink.png" />Bundle only</p>
                    ) : (
                      <p className="flex flex-row text-[#EC3C7C] mb-2">
                        <img className="w-6 h-6 mr-2" src="/spectre_points_pink.png" />
                        {skin.price}
                      </p>
                    )
                  }
                  <p className="text-sm">Rarity: {skin.rarity}</p>
                  <div className="mt-2 w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(skin.id / 100) * 100}%`,
                        backgroundColor: skin.color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
