'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGun, faLayerGroup, faBan, faDollarSign, faSort, faList, faSortAlphaDown, faSortAlphaDownAlt, faSortNumericDown, faSortNumericDownAlt, faCrosshairs, faSearch, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import WeaponCard from "./WeaponCard";

interface Weapon {
  name: string;
  description: string;
  type: string;
  price: number[];
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

interface Bundle {
  id: number;
  name: string;
  weapons: Weapon[];
  price: number;
}

const Weapons: Weapon[] = require('@/weapons.json');

// Move this function outside the component
const createBundles = (weapons: Weapon[]): Bundle[] => {
  const bundleMap = weapons.reduce((acc, weapon) => {
    weapon.bundleId.forEach((id, index) => {
      if (!acc[id]) {
        acc[id] = { id, name: "", weapons: [], price: weapon.price[index] };
      }
      acc[id].weapons.push(weapon);
      acc[id].name += ` + ${weapon.name}`;
    });
    return acc;
  }, {} as Record<number, Bundle>);

  Object.values(bundleMap).forEach(bundle => {
    bundle.name = bundle.name.slice(3);
  });

  return Object.values(bundleMap);
};

export default function WeaponList() {
  const [filteredWeapons, setFilteredWeapons] = useState<Weapon[]>(Weapons);
  const [group, setGroup] = useState<string>('type');
  const [sortOrder, setSortOrder] = useState<string>('default');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);
  const [bundles, setBundles] = useState<Bundle[]>(() => createBundles(Weapons));
  const [filteredBundles, setFilteredBundles] = useState<Bundle[]>(bundles);

  // Group weapons by type
  const weaponsByType = Weapons.reduce((acc, weapon) => {
    if (!acc[weapon.type]) {
      acc[weapon.type] = [];
    }
    acc[weapon.type].push(weapon);
    return acc;
  }, {} as Record<string, Weapon[]>);

  useEffect(() => {
    console.log("Updated Bundles:", bundles);
  }, [bundles]);

  useEffect(() => {
    let filtered = Weapons.filter(weapon =>
      weapon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Apply sorting to filtered weapons
    switch (sortOrder) {
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        filtered.sort((a, b) => a.price[0] - b.price[0]);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price[0] - a.price[0]);
        break;
    }

    setFilteredWeapons(filtered);

    // Filter and sort bundles
    let filteredBundles = bundles.filter(bundle =>
      bundle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bundle.weapons.some(weapon => weapon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    switch (sortOrder) {
      case 'name-asc':
        filteredBundles.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filteredBundles.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        filteredBundles.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredBundles.sort((a, b) => b.price - a.price);
        break;
    }
    setFilteredBundles(filteredBundles);
  }, [searchTerm, sortOrder, bundles]);

  const renderWeaponLink = (weapon: Weapon) => (
    <Link href={`/weapon/${weapon.name.toLowerCase().replace(/ /g, "-")}`} key={weapon.name} className="group relative transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <WeaponCard weapon={weapon} />
      <div className="absolute backdrop-blur-sm rounded-lg inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 z-10">
        <p className="text-lg font-bold mb-2">{weapon.name}</p>
        <div className="text-sm space-y-1">
          <p><FontAwesomeIcon icon={faDollarSign} className="mr-1" /> Price: {weapon.price[0]}</p>
          <p><FontAwesomeIcon icon={faGun} className="mr-1" /> Type: {weapon.type}</p>
          <p><FontAwesomeIcon icon={faList} className="mr-1" /> Magazine: {weapon.stats.magazine}</p>
          {weapon.stats.damage.closeRange && (
            <p><FontAwesomeIcon icon={faCrosshairs} className="mr-1" /> Close Range Damage: {weapon.stats.damage.closeRange.body}</p>
          )}
        </div>
        <p className="text-sm mt-2">Click to view details</p>
      </div>
    </Link>
  );

  const renderBundleCard = (bundle: Bundle & { price: number }) => (
    <div key={bundle.id} className="bg-[#333333] rounded-lg overflow-hidden shadow-lg p-4 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-[#FFCB00]">{bundle.name}</h3>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faDollarSign} className="text-[#EC3C7C] mr-1" />
          <span className="text-lg font-semibold">{bundle.price}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-between px-8 items-center">
        {bundle.weapons.map((weapon) => (
          <Link href={`/weapon/${weapon.name.toLowerCase().replace(/ /g, "-")}`} key={weapon.name} className="relative group">
            <Image
              src={weapon.image}
              alt={weapon.name}
              width={100}
              height={100}
              className="rounded-md transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-semibold bg-black bg-opacity-75 p-1 rounded">
                {weapon.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center text-sm">
        <div>
          <FontAwesomeIcon icon={faList} className="text-[#EC3C7C] mr-1" />
          <span>{Array.from(new Set(bundle.weapons.map(w => w.type))).join(', ')}</span>
        </div>
      </div>
      <div className="mt-2 text-sm">
        <FontAwesomeIcon icon={faCrosshairs} className="text-[#EC3C7C] mr-1" />
        <span>Damage range: {Math.min(...bundle.weapons.flatMap(w => Object.values(w.stats.damage).flatMap(d => [d.body || Infinity])))} - {Math.max(...bundle.weapons.flatMap(w => Object.values(w.stats.damage).flatMap(d => [d.body || 0])))} (body shots)</span>
      </div>
    </div>
  );

  const renderWeaponGroups = () => {
    if (group === 'bundle') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBundles.map((bundle) => {
            if(bundle.weapons.length > 1) {
              return renderBundleCard(bundle);
            }
            console.log("Skipping bundle:", bundle.name);
            return null;
          })}
        </div>
      );
    } else if (group === 'type') {
      const groupedWeapons = filteredWeapons.reduce((acc, weapon) => {
        if (!acc[weapon.type]) {
          acc[weapon.type] = [];
        }
        acc[weapon.type].push(weapon);
        return acc;
      }, {} as Record<string, Weapon[]>);

      return Object.entries(groupedWeapons).map(([type, weapons]) => (
        <div key={type}>
          <h2 className="text-2xl font-semibold text-[#FFCB00] mt-8 mb-4">{type}{type === 'Melee' ? '' : 's'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weapons.map(renderWeaponLink)}
          </div>
        </div>
      ));
    } else if (group === 'price') {
      const priceRanges = [
        { min: 0, max: 500, label: '$0 - $500' },
        { min: 501, max: 1000, label: '$501 - $1,000' },
        { min: 1001, max: 2000, label: '$1,001 - $2,000' },
        { min: 2001, max: 5000, label: '$2,001 - $5,000' },
        { min: 5001, max: Infinity, label: '$5,001+' }
      ];
      return priceRanges.map((range) => {
        const weapons = filteredWeapons.filter((weapon) =>
          weapon.price[0] >= range.min && weapon.price[0] <= range.max
        );
        if (weapons.length === 0) return null;
        return (
          <div key={range.label}>
            <h2 className="text-2xl font-semibold text-[#FFCB00] mt-8 mb-4">
              {range.label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {weapons.map(renderWeaponLink)}
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWeapons.map(renderWeaponLink)}
        </div>
      );
    }
  };

  console.log("Rendering with bundles:", bundles);

  return (
    <div className="bg-[#272727] text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#FFCB00] mb-8"><FontAwesomeIcon icon={faGun} className="mr-2" /> Weapons</h1>

        <div className="mb-8">
          {/* Search Field */}
          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Search weapons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#333333] text-white p-2 pl-10 pr-4 rounded border border-[#444444] focus:outline-none focus:border-[#FFCB00]"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EC3C7C]"
            />
          </div>

          {/* Collapsible Filters Section */}
          <div className="sm:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-[#333333] text-white p-2 rounded flex justify-between items-center"
            >
              <span>Filter and Sort</span>
              <FontAwesomeIcon icon={showFilters ? faChevronUp : faChevronDown} />
            </button>
          </div>

          <div className={`sm:block ${showFilters ? 'block' : 'hidden'} mt-4 sm:mt-0`}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Group dropdown */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
                <label htmlFor="group" className="mr-2 text-[#EC3C7C] flex items-center mb-2 sm:mb-0">
                  <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
                  Group by:
                </label>
                <div className="relative w-full sm:w-auto">
                  <select
                    id="group"
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                    className="bg-[#333333] text-white p-2 pr-8 rounded appearance-none border border-[#444444] focus:outline-none focus:border-[#FFCB00] w-full sm:w-auto"
                  >
                    <option value="">❌ None</option>
                    <option value="type">🔫 Type</option>
                    <option value="price">💰 Price Range</option>
                    <option value="bundle">🧩 Bundles</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#EC3C7C]">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
              </div>

              {/* Sort dropdown */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
                <label htmlFor="sort" className="mr-2 text-[#EC3C7C] flex items-center mb-2 sm:mb-0">
                  <FontAwesomeIcon icon={faSort} className="mr-2" />
                  Sort by:
                </label>
                <div className="relative w-full sm:w-auto">
                  <select
                    id="sort"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="bg-[#333333] text-white p-2 pr-8 rounded appearance-none border border-[#444444] focus:outline-none focus:border-[#FFCB00] w-full sm:w-auto"
                  >
                    <option value="default">🔄 Default</option>
                    <option value="name-asc">🔠 Name (A-Z)</option>
                    <option value="name-desc">🔡 Name (Z-A)</option>
                    <option value="price-asc">💵 Price (Low to High)</option>
                    <option value="price-desc">💰 Price (High to Low)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#EC3C7C]">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {renderWeaponGroups()}

        {filteredWeapons.length === 0 && group !== 'bundle' && (
          <p className="text-center text-xl mt-8">No weapons found matching your search.</p>
        )}
      </div>
    </div>
  );
}
