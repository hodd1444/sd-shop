'use client';
import React, { useEffect, useState } from "react";
import { DollarSign } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGun, faFire, faBars, faRunning } from "@fortawesome/free-solid-svg-icons";

interface Weapon {
  name: string;
  description: string;
  type: string;
  price: number;
  bundleId: number[];
  image: string;
  stats: {
    runSpeed: number;
    magazine: number;
    fireRate: number;
    reloadTime: number;
    hipfireRange: string;
    damage: {
      closeRange?: {
        head: number;
        body: number;
        legs: number;
      };
      midRange?: {
        head: number;
        body: number;
        legs: number;
      };
      longRange?: {
        head: number;
        body: number;
        legs: number;
      };
    };
  };
}

const Weapons: Weapon[] = [
  {
    name: 'M2 Carbon',
    description: 'Standard-issue semi-automatic pistol.\nReliable and easy to use.\n\nPenetration: Mid',
    type: 'Sidearm',
    price: 0,
    bundleId: [1],
    image: '/vault/weapons/default/m2_carbon.png',
    stats: {
      runSpeed: 5.04,
      magazine: 12,
      fireRate: 352,
      reloadTime: 1.8,
      hipfireRange: '13.0M',
      damage: {
        midRange: {
          head: 74,
          body: 22,
          legs: 22,
        },
        longRange: {
          head: 66,
          body: 22,
          legs: 18,
        },
      }
    }
  },
  {
    name: 'M10 Brat',
    description: 'Fires a rapid barrage of bullets. SMall magazine so watch your ammo count.\n\nPenetration: Mid',
    type: 'Sidearm',
    price: 400,
    bundleId: [2],
    image: '/vault/weapons/default/m10_brat.png',
    stats: {
      runSpeed: 5.04,
      magazine: 12,
      fireRate: 900,
      reloadTime: 2.3,
      hipfireRange: '15.0M',
      damage: {
        midRange: {
          head: 49,
          body: 21,
          legs: 19,
        },
        longRange: {
          head: 34,
          body: 19,
          legs: 18,
        },
      }
    }
  },
  {
    name: 'Shiv',
    description: 'Low caliber supressed pistol.\nTracers are invisible to enemies.\nIncreased movement speed\n\nPenetration: Mid',
    type: 'Sidearm',
    price: 400,
    bundleId: [2, 3],
    image: '/vault/weapons/default/shiv.png',
    stats: {
      runSpeed: 5.35,
      magazine: 12,
      fireRate: 405,
      reloadTime: 1.7,
      hipfireRange: '18.0M',
      damage: {
        closeRange: {
          head: 100,
          body: 33,
          legs: 26,
        },
        midRange: {
          head: 74,
          body: 26,
          legs: 22,
        },
        longRange: {
          head: 66,
          body: 22,
          legs: 19,
        }
      }
    }
  },
  {
    name: 'Duster RX6',
    description: 'High risk, high reward. Low rate of fire, so make your shots count.\n\nPenetration: Mid',
    type: 'Sidearm',
    price: 800,
    bundleId: [3],
    image: '/vault/weapons/default/duster_rx6.png',
    stats: {
      runSpeed: 5.04,
      magazine: 6,
      fireRate: 150,
      reloadTime: 2.3,
      hipfireRange: '13.0M',
      damage: {
        midRange: {
          head: 160,
          body: 55,
          legs: 47,
        },
        longRange: {
          head: 145,
          body: 50,
          legs: 43,
        }
      }
    }
  }
];

export default function WeaponList() {
  const [filter, setFilter] = useState<string>('');
  const [filteredWeapons, setFilteredWeapons] = useState<Weapon[]>(Weapons);
  const [group, setGroup] = useState<string>('');

  // Group weapons by type
  const weaponsByType = Weapons.reduce((acc, weapon) => {
    if (!acc[weapon.type]) {
      acc[weapon.type] = [];
    }
    acc[weapon.type].push(weapon);
    return acc;
  }, {} as Record<string, Weapon[]>);

  return (
    <div className="bg-[#272727] text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#FFCB00] mb-8"><FontAwesomeIcon icon={faGun} className="mr-2" /> Weapons</h1>
        {Object.entries(weaponsByType).map(([type, weapons]) => (
          <div key={type}>
            <h2 className="text-2xl font-semibold text-[#FFCB00] mt-8 mb-4">{type}s</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {weapons.map((weapon) => (
                <div key={weapon.name} className="bg-[#333333] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <img
                    src={weapon.image}
                    alt={weapon.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#FFCB00] mb-4">
                      {weapon.name}
                    </h3>
                    <p className="text-sm text-[#bdbdbd] mb-2">{weapon.type}</p>
                    <p className="flex flex-row items-center text-[#EC3C7C] mb-4">
                      <DollarSign className="w-4 h-4"/>
                      {weapon.price}
                    </p>
                    <p className="text-sm text-[#bdbdbd] mb-2">
                      {weapon.description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < weapon.description.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-md font-semibold text-[#FFCB00] mb-2">Key Stats:</h4>
                      <div className="grid grid-cols-3 gap-2 text-sm text-[#bdbdbd]">
                        <div className="flex flex-col items-center bg-[#3a3a3a] p-2 rounded">
                          <span className="text-[#FFCB00] font-semibold mb-1">
                            <FontAwesomeIcon icon={faFire} className="mr-1" /> Fire Rate
                          </span>
                          <span>{weapon.stats.fireRate}</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#3a3a3a] p-2 rounded">
                          <span className="text-[#FFCB00] font-semibold mb-1">
                            <FontAwesomeIcon icon={faBars} className="mr-1" /> Magazine
                          </span>
                          <span>{weapon.stats.magazine}</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#3a3a3a] p-2 rounded">
                          <span className="text-[#FFCB00] font-semibold mb-1">
                            <FontAwesomeIcon icon={faRunning} className="mr-1" /> Run Speed
                          </span>
                          <span>{weapon.stats.runSpeed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}