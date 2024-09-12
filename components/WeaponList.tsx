'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGun, faLayerGroup, faBan, faDollarSign, faChevronDown, faSort, faList, faSortAlphaDown, faSortAlphaDownAlt, faSortNumericDown, faSortNumericDownAlt } from "@fortawesome/free-solid-svg-icons";
import WeaponCard from "./WeaponCard";

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

const Weapons: Weapon[] = require('@/weapons.json');

export default function WeaponList() {
  const [filter, setFilter] = useState<string>('');
  const [filteredWeapons, setFilteredWeapons] = useState<Weapon[]>(Weapons);
  const [group, setGroup] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('default');

  // Group weapons by type
  const weaponsByType = Weapons.reduce((acc, weapon) => {
    if (!acc[weapon.type]) {
      acc[weapon.type] = [];
    }
    acc[weapon.type].push(weapon);
    return acc;
  }, {} as Record<string, Weapon[]>);

  useEffect(() => {
    let sorted = [...Weapons];
    switch (sortOrder) {
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      // 'default' case will use the original order, so no sorting needed
    }
    setFilteredWeapons(sorted);
  }, [sortOrder]);

  return (
    <div className="bg-[#272727] text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#FFCB00] mb-8"><FontAwesomeIcon icon={faGun} className="mr-2" /> Weapons</h1>
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <label htmlFor="group" className="mr-2 text-[#FFCB00] flex items-center">
              <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
              Group by:
            </label>
            <div className="relative">
              <select
                id="group"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="bg-[#333333] text-white p-2 pr-8 rounded appearance-none border border-[#444444] focus:outline-none focus:border-[#FFCB00]"
              >
                <option value="">❌ None</option>
                <option value="type">🔫 Type</option>
                <option value="price">💰 Price Range</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#FFCB00]">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-[#FFCB00] flex items-center">
              <FontAwesomeIcon icon={faSort} className="mr-2" />
              Sort by:
            </label>
            <div className="relative">
              <select
                id="sort"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="bg-[#333333] text-white p-2 pr-8 rounded appearance-none border border-[#444444] focus:outline-none focus:border-[#FFCB00]"
              >
                <option value="default">🔄 Default</option>
                <option value="name-asc">🔠 Name (A-Z)</option>
                <option value="name-desc">🔡 Name (Z-A)</option>
                <option value="price-asc">💵 Price (Low to High)</option>
                <option value="price-desc">💰 Price (High to Low)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#FFCB00]">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
        {group === 'type' ? (
          Object.entries(weaponsByType).map(([type, weapons]) => (
            <div key={type}>
              <h2 className="text-2xl font-semibold text-[#FFCB00] mt-8 mb-4">{type}s</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {weapons.map((weapon) => (
                  <Link href={`/weapon/${weapon.name.toLowerCase().replace(/ /g, "-")}`} key={weapon.name} className="transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <WeaponCard weapon={weapon} />
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : group === 'price' ? (
          ['0-500', '501-1000', '1001+'].map((range) => (
            <div key={range}>
              <h2 className="text-2xl font-semibold text-[#FFCB00] mt-8 mb-4">
                ${range === '1001+' ? '1001+' : range.replace('-', ' - $')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWeapons.filter((weapon) => {
                  const [min, max] = range.split('-').map(Number);
                  return weapon.price >= min && (max ? weapon.price <= max : true);
                }).map((weapon) => (
                  <Link href={`/weapon/${weapon.name.toLowerCase().replace(/ /g, "-")}`} key={weapon.name} className="transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <WeaponCard weapon={weapon} />
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWeapons.map((weapon) => (
              <Link href={`/weapon/${weapon.name.toLowerCase().replace(/ /g, "-")}`} key={weapon.name} className="transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <WeaponCard weapon={weapon} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}