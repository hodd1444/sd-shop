"use client";
import { useState, useEffect } from "react";
import { Clock, Coins, Rocket, Github } from "lucide-react";
import { BundleBannerCard } from "./BundleBannerCard";

const bundles1 = [
  {
    id: 1,
    name: "Extinction Bundle",
    price: "2,600",
    image: "/shop_100824/extinction_bundle.webp",
    imageSet: [],
    rarity: "purple",
    color: "#B661FF",
  },
]

const bundles2 = [
  {
    id: 1,
    name: "Alchemist Bundle",
    price: "7,000",
    image: "/shop_100124/alchemist_bundle.webp",
    imageSet: [],
    rarity: "red",
    color: "#EA3546",
  }
]

const spotlight1 = [
  {
    id: 1,
    name: "District Defender Bundle",
    price: "1,500",
    image: "/shop_091724/district_defender_bundle.webp",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 2,
    name: "Eternal Warrior Crusader",
    price: "1,200",
    image: "/shop_091724/eternal_warrior_crusader.webp",
    rarity: "orange",
    color: "#F9B428",
  },
  {
    id: 3,
    name: "Troublemaker Cyclone",
    price: "800",
    image: "/shop_091724/troublemaker_cyclone.webp",
    rarity: "purple",
    color: "#B661FF",
  },
  {
    id: 4,
    name: "Troublemaker M18 Drummer",
    price: "800",
    image: "/shop_091724/troublemaker_m18_drummer.webp",
    rarity: "purple",
    color: "#B661FF",
  },
]

const offers1 = [
  {
    id: 1,
    name: "Starter Pack",
    price: "500",
    image: "/shop_090324/starter_pack.webp",
    rarity: "common",
    color: "#ffffff",
  },
  {
    id: 2,
    name: "Mako Buzzsaw RT40",
    price: "800",
    image: "/shop_090324/mako_buzzsaw_rt40.webp",
    rarity: "purple",
    color: "#B661FF",
  },
  {
    id: 3,
    name: "Mako Harpe",
    price: "800",
    image: "/shop_090324/mako_harpe.webp",
    rarity: "purple",
    color: "#B661FF",
  },
  {
    id: 4,
    name: "Eternal Warrior M49 Fury",
    price: "1,200",
    image: "/shop_090324/eternal_warrior_m49_fury.webp",
    rarity: "orange",
    color: "#F9B428",
  },
];

const offers2 = [
  {
    id: 1,
    name: "Primal",
    price: "1,500",
    image: "/shop_090324/primal.webp",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 2,
    name: "Prince",
    price: "1,500",
    image: "/shop_090324/prince.webp",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 3,
    name: "Outrider",
    price: "1,500",
    image: "/shop_090324/outrider.webp",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 4,
    name: "04",
    price: "1,000",
    image: "/shop_090324/04.webp",
    rarity: "orange",
    color: "#F9B428",
  },
  {
    id: 5,
    name: "Mako Beserker RB3",
    price: "800",
    image: "/shop_100124/mako_beserker_rb3.webp",
    rarity: "purple",
    color: "#B661FF"
  }
];

const offers3 = [
  {
    id: 1,
    name: "High Performance",
    price: "1,500",
    image: "/shop_090324/high_performance.webp",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 2,
    name: "Elegant Operative",
    price: "1,500",
    image: "/shop_090324/elegant_operative.webp",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 3,
    name: "Popstar",
    price: "1,500",
    image: "/shop_090324/popstar.webp",
    rarity: "red",
    color: "#EA3546",
  },
  {
    id: 4,
    name: "Beast",
    price: "1,000",
    image: "/shop_090324/beast.webp",
    rarity: "orange",
    color:"#F9B428"
  },
  {
    id: 5,
    name: "Eternal Warrior Harpe",
    price: "1,200",
    image: "/shop_100124/eternal_warrior_harpe.webp",
    rarity: "orange",
    color: "#F9B428",
  },
];

export default function Shop() {
  const [offerTimeLeft, setOfferTimeLeft] = useState("23:59:59");
  const [featured1TimeLeft, setFeatured1TimeLeft] = useState("23:59:59");
  const [featured2TimeLeft, setFeatured2TimeLeft] = useState("23:59:59");
  const [spotlight1TimeLeft, setSpotlight1TimeLeft] = useState("23:59:59");
  const [spotlight2TimeLeft, setSpotlight2TimeLeft] = useState("23:59:59");

  const shopAvailable = true;
  useEffect(() => {
    const offerResetDate = new Date(Date.UTC(2024, 9, 15, 20, 0, 0, 0)); // October is month 9 (0-indexed)

    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = offerResetDate.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      setOfferTimeLeft(
        `${days.toString()} DAYS ${hours
          .toString()
          .padStart(2, "0")} HOURS ${minutes
            .toString()
            .padStart(2, "0")} MINUTES`,
      );
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 60000);

    return () => clearInterval(countdownInterval);
  }, []);

  // Featured 1
  useEffect(() => {
    const featured1ResetDate = new Date(Date.UTC(2024, 9, 22, 20, 0, 0, 0));


    const updateCountdownFeatured = () => {
      const now = new Date();
      const timeDiff = featured1ResetDate.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      setFeatured1TimeLeft(
        `${days.toString()} DAYS ${hours
          .toString()
          .padStart(2, "0")} HOURS ${minutes
            .toString()
            .padStart(2, "0")} MINUTES`,
      );
    };

    updateCountdownFeatured();
    const countdownInterval = setInterval(updateCountdownFeatured, 60000);

    return () => clearInterval(countdownInterval);
  }, []);

  // Featured 2
  useEffect(() => {
    const featured2ResetDate = new Date(Date.UTC(2024, 9, 15, 20, 0, 0, 0));


    const updateCountdownFeatured2 = () => {
      const now = new Date();
      const timeDiff = featured2ResetDate.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      setFeatured2TimeLeft(
        `${days.toString()} DAYS ${hours
          .toString()
          .padStart(2, "0")} HOURS ${minutes
            .toString()
            .padStart(2, "0")} MINUTES`,
      );
    };


    updateCountdownFeatured2();
    const countdownInterval = setInterval(updateCountdownFeatured2, 60000);

    return () => clearInterval(countdownInterval);
  }, []);

  // Spotlight Time Counter
  useEffect(() => {
    const spotlight1ResetDate = new Date(Date.UTC(2024, 9, 15, 20, 0, 0, 0));

    console.log(spotlight1ResetDate);

    const updateCountdownSpotlight = () => {
      const now = new Date();
      const timeDiff = spotlight1ResetDate.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      setSpotlight1TimeLeft(
        `${days.toString()} DAYS ${hours
          .toString()
          .padStart(2, "0")} HOURS ${minutes
            .toString()
            .padStart(2, "0")} MINUTES`,
      );
    };

    updateCountdownSpotlight();
    const countdownInterval = setInterval(updateCountdownSpotlight, 60000);

    return () => clearInterval(countdownInterval);
  }, []);

  // Spotlight 2
  useEffect(() => {
    const spotlight2ResetDate = new Date(Date.UTC(2024, 9, 8, 20, 0, 0, 0));

    console.log(spotlight2ResetDate);

    const updateCountdownSpotlight2 = () => {
      const now = new Date();
      const timeDiff = spotlight2ResetDate.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      setSpotlight2TimeLeft(
        `${days.toString()} DAYS ${hours
          .toString()
          .padStart(2, "0")} HOURS ${minutes
            .toString()
            .padStart(2, "0")} MINUTES`,
      );
    };

    updateCountdownSpotlight2();
    const countdownInterval = setInterval(updateCountdownSpotlight2, 60000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#272727] text-white p-8 flex flex-col items-center justify-center">

      <div className="max-w-5xl w-full">
        <div className="flex flex-row items-center align-middle mb-4 mt-8 gap-4">
          <h2 className="text-2xl font-semibold">FEATURED</h2>
          <p className="text-gray-400">{featured1TimeLeft}</p>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <BundleBannerCard bundles={bundles1} />
        </div>
        <div className="flex flex-row items-center align-middle mb-4 mt-8 gap-4">
          <h2 className="text-2xl font-semibold">FEATURED</h2>
          <p className="text-gray-400">{featured2TimeLeft}</p>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <BundleBannerCard bundles={bundles2} />
        </div>

        <div className="flex flex-row items-center align-middle mb-4 mt-8 gap-4">
          <h2 className="text-2xl font-semibold">SPOTLIGHT</h2>
          <p className="text-gray-400">{spotlight1TimeLeft}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {spotlight1.map((item, index) => (
            <div
              key={item.id}
              className={`bg-[#333333] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${index < 1 ? "sm:col-span-2" : "sm:col-span-1"
                }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-3/4 object-cover"
              />
              <div className="flex flex-col justify-between p-4">
                <h3
                  className={`text-lg font-semibold mb-2`}
                  style={{
                    color: item.color,
                  }}
                >
                  {item.name}
                </h3>
                <div className="flex items-center text-[#bdbdbd]">
                  <img
                    src="/spectre_points_gray.webp"
                    className="w-5 h-5 mr-1"
                  />
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center align-middle mb-4 mt-8 gap-4">
          <h2 className="text-2xl font-semibold">OFFERS</h2>
          <p className="text-gray-400">{offerTimeLeft}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {offers1.map((item, index) => (
            <div
              key={item.id}
              className={`bg-[#333333] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${index === 0 ? "sm:col-span-2" : "sm:col-span-1"
                }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-3/4 object-cover"
              />
              <div className="flex flex-col justify-between p-4">
                <h3
                  className={`text-lg font-semibold mb-2`}
                  style={{
                    color: item.color,
                  }}
                >
                  {item.name}
                </h3>
                <div className="flex items-center text-[#bdbdbd]">
                  <img
                    src="/spectre_points_gray.webp"
                    className="w-5 h-5 mr-1"
                  />
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
                <div className="flex items-center text-[#bdbdbd]">
                  <img
                    src="/spectre_points_gray.webp"
                    className="w-5 h-5 mr-1"
                  />
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
                <div className="flex items-center text-[#bdbdbd]">
                  <img
                    src="/spectre_points_gray.webp"
                    className="w-5 h-5 mr-1"
                  />
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
                This site is not affiliated with Mountaintop Studios and all
                associated properties <br></br> “Spectre Divide” are trademarks
                or registered trademarks of Mountaintop Studios.
              </p>
              <p className="mt-4">
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
            <a
              target="_blank"
              href="https://github.com/hodd1444/sd-shop"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-4 hover:text-[#FFCB00]" />
            </a>
            <p>Made with ❤️ by @hodd and @kotsu</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
