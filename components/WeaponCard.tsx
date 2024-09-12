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
    price: number;
    image: string;
    stats: {
      runSpeed: number;
      magazine: number;
      fireRate: number;
      reloadTime: number;
      hipfireRange: string;
    };
  };
}

export default function WeaponCard({ weapon }: WeaponCardProps) {
  return (
    <div className="bg-[#333333] rounded-lg overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 overflow-hidden">
        <img src={weapon.image} alt={weapon.name} className="w-full h-full object-contain" />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{weapon.name}</h3>
        <p className="text-sm text-gray-300 mb-2">{weapon.type}</p>
        <p className="text-sm text-gray-300 mb-4">{weapon.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="flex items-center text-[#EC3C7C]">
            <DollarSign className="w-4 h-4 mr-1" />
            {weapon.price}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <StatItem icon={faRunning} value={`${weapon.stats.runSpeed} m/s`} label="Run Speed" />
          <StatItem icon={faBars} value={weapon.stats.magazine} label="Magazine" />
          <StatItem icon={faFire} value={`${weapon.stats.fireRate} rpm`} label="Fire Rate" />
          <StatItem icon={faClock} value={`${weapon.stats.reloadTime}s`} label="Reload Time" />
        </div>
      </div>
    </div>
  );
}

function StatItem({ icon, value, label }: { icon: IconDefinition; value: string | number; label: string }) {
  return (
    <div className="flex flex-col items-center bg-[#444444] p-2 rounded">
      <FontAwesomeIcon icon={icon} className="text-[#FFCB00] mb-1" />
      <span className="font-semibold">{value}</span>
      <span className="text-xs text-gray-300">{label}</span>
    </div>
  );
}
