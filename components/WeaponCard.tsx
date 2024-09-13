import React from "react";
import { DollarSign } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGun, faFire, faBars, faRunning, faClock } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface WeaponCardProps {
  weapon: {
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
}

export default function WeaponCard({ weapon }: WeaponCardProps) {
  return (
    <div className="bg-[#333333] rounded-lg overflow-hidden shadow-lg flex flex-col h-[500px] w-full">
      <div className="h-48 overflow-hidden p-4">
        <img src={weapon.image} alt={weapon.name} className="w-full h-full object-contain" />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-semibold mb-2 truncate">{weapon.name}</h3>
          <span className="inline-block text-[#FFCB00] bg-[#444444] text-xs px-2 py-1 rounded-full mb-2">{weapon.type}</span>
          <p className="text-sm text-gray-300 mb-4 line-clamp-3">{weapon.description}</p>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="flex items-center text-[#EC3C7C]">
              <DollarSign className="w-4 h-4 mr-1" />
              {weapon.price.length > 1 ? `${weapon.price[0]} - ${weapon.price[weapon.price.length - 1]}` : weapon.price[0]}
            </span>
          </div>
          {weapon.name !== "Melee" && (
            <div className="grid grid-cols-2 gap-2 text-sm">
              <StatItem icon={faRunning} value={`${weapon.stats.runSpeed}`} label="Run Speed" maxValue={8} />
              <StatItem icon={faBars} value={weapon.stats.magazine} label="Magazine" maxValue={125} />
              <StatItem icon={faFire} value={`${weapon.stats.fireRate}`} label="Fire Rate" maxValue={1000} />
              <StatItem icon={faClock} value={`${weapon.stats.reloadTime}s`} label="Reload Time" maxValue={7} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatItem({ icon, value, label, maxValue }: { icon: IconDefinition; value: string | number; label: string; maxValue: number }) {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  const percentage = (numericValue / maxValue) * 100;

  return (
    <div className="flex flex-col items-center bg-[#444444] p-2 rounded relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[#FFCB00] opacity-20"
        style={{ width: `${percentage}%` }}
      />
      <FontAwesomeIcon icon={icon} className="text-[#FFCB00] mb-1 z-10" />
      <span className="font-semibold z-10">{value}</span>
      <span className="text-xs text-gray-300 z-10">{label}</span>
    </div>
  );
}
