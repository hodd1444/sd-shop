"use client";
import { useState, useEffect } from "react";
import { Clock, Coins, Rocket, Github } from "lucide-react";
import Link from "next/link";
import { styleText } from "util";

const bundles = [
  {
    id: 1,
    name: "Cryo Kinesis Bundle",
    price: "7,000",
    image: "/shop_090324/cryo_kinesis_bundle.png",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 2,
    name: "Medusa Bundle",
    price: "3,400",
    image: "/shop_090324/medusa_bundle.png",
    rarity: "orange",
    color: "#F9B428",
  },
];

const offers1 = [
  {
    id: 1,
    name: "Starter Pack",
    price: "500",
    image: "/shop_090324/starter_pack.png",
    rarity: "common",
    color: "#ffffff",
  },
  {
    id: 2,
    name: "Outrider",
    price: "1,500",
    image: "/shop_090324/outrider.png",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 3,
    name: "Prince",
    price: "1,500",
    image: "/shop_090324/prince.png",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 4,
    name: "Eternal Warrior M49 Fury",
    price: "1,200",
    image: "/shop_090324/eternal_warrior_m49_fury.png",
    rarity: "orange",
    color: "#F9B428",
  },
];

const offers2 = [
  {
    id: 1,
    name: "Mako Buzzsaw RT40",
    price: "800",
    image: "/shop_090324/mako_buzzsaw_rt40.png",
    rarity: "purple",
    color: "#B661FF",
  },
  {
    id: 2,
    name: "Mako Harpe",
    price: "800",
    image: "/shop_090324/mako_harpe.png",
    rarity: "purple",
    color: "#B661FF",
  },
  {
    id: 3,
    name: "Eternal Warrior Duster RX6",
    price: "1,200",
    image: "/shop_090324/eternal_warrior_duster_rx6.png",
    rarity: "orange",
    color: "#F9B428",
  },
  {
    id: 4,
    name: "Elegant Operative",
    price: "1,500",
    image: "/shop_090324/elegant_operative.png",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 5,
    name: "High Performance",
    price: "1,500",
    image: "/shop_090324/high_performance.png",
    rarity: "red",
    color: "#EA3546",
  },
];

const offers3 = [
  {
    id: 1,
    name: "04",
    price: "1,000",
    image: "/shop_090324/04.png",
    rarity: "orange",
    color: "#F9B428",
  },
  {
    id: 2,
    name: "Starbright",
    price: "1,000",
    image: "/shop_090324/starbright.png",
    rarity: "orange",
    color: "#F9B428",
  },
  {
    id: 3,
    name: "Primal",
    price: "1,500",
    image: "/shop_090324/primal.png",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 4,
    name: "Popstar",
    price: "1,500",
    image: "/shop_090324/popstar.png",
    rarity: "red",
    color: "#EA3546",
  },
];

const offers4 = [
  {
    id: 1,
    name: "Beast",
    price: "1,000",
    image: "/shop_090324/beast.png",
    rarity: "orange",
    color: "#F9B428",
  },
  {
    id: 2,
    name: "Bloomtech Outfitters",
    price: "1,000",
    image: "/shop_090324/bloomtech_outfitters.png",
    rarity: "orange",
    color: "#F9B428",
  },
];

export default function Shop() {
  const [offerTimeLeft, setShopTimeLeft] = useState("23:59:59");
  const [featuredTimeLeft, setFeaturedTimeLeft] = useState("23:59:59");

  const shopAvailable = true;
  const calcColor = (rarity: string): string => {
    console.log(rarity, ": calcColor");
    switch (rarity) {
      case "common":
        console.log("common");
        return "#ffffff";
      case "red":
        console.log("red");
        return "#EA3546";
      case "orange":
        console.log("orange");
        return "#F9B428";
      case "purple":
        console.log("purple");
        return "#B661FF";
      default:
        console.log("default");
        return "#ababab";
    }
  };

  useEffect(() => {
    const shopResetDate = new Date(Date.UTC(2024, 9, 1, 20, 0, 0, 0)); // October is month 9 (0-indexed)

    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = shopResetDate.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      setShopTimeLeft(
        `${days.toString()} DAYS ${hours
          .toString()
          .padStart(2, "0")} HOURS ${minutes
          .toString()
          .padStart(2, "0")} MINUTES`
      );
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 60000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    const shopResetDate = new Date(Date.UTC(2024, 8, 10, 20, 0, 0, 0)); // October is month 9 (0-indexed)

    console.log(shopResetDate);

    const updateCountdownFeatured = () => {
      const now = new Date();
      const timeDiff = shopResetDate.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      setFeaturedTimeLeft(
        `${days.toString()} DAYS ${hours
          .toString()
          .padStart(2, "0")} HOURS ${minutes
          .toString()
          .padStart(2, "0")} MINUTES`
      );
    };

    updateCountdownFeatured();
    const countdownInterval = setInterval(updateCountdownFeatured, 60000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#272727] text-white p-8 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full">
        <div className="mb-8 flex flex-col justify-center align-middle items-center">
          <Link href="https://playspectre.com">
            <img className="w-28 mb-8" src="/logo_yellow.png" />
          </Link>
          <h2 className="text-2xl font-semibold mb-8">Spectre Divide Shop</h2>
        </div>

        <div className="flex flex-row items-center align-middle mb-4 mt-8 gap-4">
          <h2 className="text-2xl font-semibold">FEATURED</h2>
          <p className="text-gray-400">{featuredTimeLeft}</p>
        </div>
    
        <div className="flex flex-col justify-between gap-8">
          {bundles.map((item) => (
            <Link href={`/vault/bundle/${item.name.toLowerCase().split(" ").join("-")}`} className="hover:cursor-default">
            <div
              key={item.id}
              className="bg-[#333333] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-3/4 object-cover"
              />
              <div className="p-4">
                <h3
                  className={`text-lg font-semibold mb-2`}
                  style={{
                    color: item.color,
                  }}
                >
                  {item.name}
                </h3>
                <div className="flex items-center">
                  <img src="/spectre_points.png" className="w-5 h-5 mr-1" />
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-row items-center align-middle mb-4 mt-8 gap-4">
          <h2 className="text-2xl font-semibold">OFFERS</h2>
          <p className="text-gray-400">{offerTimeLeft}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers1.map((item) => (
            <div
              key={item.id}
              className="bg-[#333333] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-3/4 object-cover"
              />
              <div className="p-4">
                <h3
                  className={`text-lg font-semibold mb-2`}
                  style={{
                    color: item.color,
                  }}
                >
                  {item.name}
                </h3>
                <div className="flex items-center">
                  <img src="/spectre_points.png" className="w-5 h-5 mr-1" />
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          {offers2.map((item) => (
            <div
              key={item.id}
              className="bg-[#333333] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3
                  className={`text-lg font-semibold mb-2`}
                  style={{
                    color: item.color,
                  }}
                >
                  {item.name}
                </h3>
                <div className="flex items-center">
                  <img src="/spectre_points.png" className="w-5 h-5 mr-1" />
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          {offers3.map((item) => (
            <div
              key={item.id}
              className="bg-[#333333] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3
                  className={`text-lg font-semibold mb-2`}
                  style={{
                    color: item.color,
                  }}
                >
                  {item.name}
                </h3>
                <div className="flex items-center">
                  <img src="/spectre_points.png" className="w-5 h-5 mr-1" />
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          {offers4.map((item) => (
            <div
              key={item.id}
              className="bg-[#333333] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3
                  className={`text-lg font-semibold mb-2`}
                  style={{
                    color: item.color,
                  }}
                >
                  {item.name}
                </h3>
                <div className="flex items-center">
                  <img src="/spectre_points.png" className="w-5 h-5 mr-1" />
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-8 text-center text-sm text-gray-400">
          {shopAvailable && (
            <>
              <p>Items displayed are available in-game. Prices may change.</p>
              <p>
                Want to calculate prices? Head over to the{" "}
                <a
                  target="_blank"
                  href="https://antiparty.github.io/Spectre-divide-calc/"
                  className="hover:text-[#FFCB00] transition-all"
                >
                  Price Calculator
                </a>
              </p>
            </>
          )}
          <div className="flex flex-row justify-center align-middle items-center mt-4">
            <a target="_blank" href="https://github.com/hodd1444/sd-shop" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-4 hover:text-[#FFCB00]" />
            </a>
            <p>Made with ❤️ by @hodd</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
