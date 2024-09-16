'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGun, faDollarSign, faList, faCrosshairs, faRunning, faHourglassHalf, IconDefinition, faRuler, faSkull, faUserAlt, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { Weapon } from './WeaponList';
import items from '@/items.json';

const WeaponViewer: React.FC<{ weapon: Weapon }> = ({ weapon }) => {
    const [availableSkins, setAvailableSkins] = useState<any[]>([]);

    useEffect(() => {
        const skins = items.items.filter(item => 
            item.name.toLowerCase().includes(weapon.name.toLowerCase()) && 
            item.type === "weapon"
        );
        setAvailableSkins(skins);
    }, [weapon.name]);

    return (
        <div className="bg-[#272727] text-white p-8 rounded-lg max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-[#FFCB00] mb-4">{weapon.name}</h1>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <Image src={weapon.image} alt={weapon.name} width={400} height={400} className="rounded-lg" />
                    {/* New section for available skins */}
                    {availableSkins.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4 text-[#FFCB00]">Available Skins</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {availableSkins.map((skin, index) => (
                                    <div key={index} className="bg-[#333333] p-4 rounded-lg">
                                        <Image
                                            src={skin.image}
                                            alt={skin.name}
                                            width={100}
                                            height={100}
                                            className="w-full h-auto object-cover rounded-lg mb-2"
                                        />
                                        <p className="text-sm text-center">{skin.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <p className="mb-4">{weapon.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">

                        <div className="flex flex-row justify-center gap-4 items-center bg-[#444444] p-2 rounded relative overflow-hidden py-4">

                            <FontAwesomeIcon icon={faGun} className="text-[#EC3C7C] z-10" />
                            <span className="font-semibold z-10">{weapon.type}</span>
                        </div>
                        <div className="flex flex-row justify-center gap-4 items-center bg-[#444444] p-2 rounded relative overflow-hidden py-4">
                            <FontAwesomeIcon icon={faDollarSign} className="text-[#EC3C7C] z-10" />
                            <span className="font-semibold z-10">{weapon.price[0]}</span>
                        </div>
                        <StatItem icon={faList} value={weapon.stats.magazine} label="Magazine" maxValue={125} />
                        <StatItem icon={faCrosshairs} value={weapon.stats.fireRate} label="Fire Rate" maxValue={1000} />
                        <StatItem icon={faRunning} value={weapon.stats.runSpeed} label="Run Speed" maxValue={8} />
                        <StatItem icon={faHourglassHalf} value={`${weapon.stats.reloadTime}s`} label="Reload Time" maxValue={7} />
                    </div>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Damage</h2>
                    {Object.entries(weapon.stats.damage).map(([range, damageValues]) => (
                        <div key={range} className="mb-6 bg-[#333333] rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-[#FFCB00] mb-3 flex items-center">
                                <FontAwesomeIcon icon={faRuler} className="mr-2" /> {range}
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col items-center bg-[#444444] p-3 rounded-md">
                                    <FontAwesomeIcon icon={faSkull} className="text-[#EC3C7C] text-2xl mb-2" />
                                    <span className="font-bold text-lg">{damageValues.head}</span>
                                    <span className="text-xs text-gray-300">Head</span>
                                </div>
                                <div className="flex flex-col items-center bg-[#444444] p-3 rounded-md">
                                    <FontAwesomeIcon icon={faUserAlt} className="text-[#EC3C7C] text-2xl mb-2" />
                                    <span className="font-bold text-lg">{damageValues.body}</span>
                                    <span className="text-xs text-gray-300">Body</span>
                                </div>
                                <div className="flex flex-col items-center bg-[#444444] p-3 rounded-md">
                                    <FontAwesomeIcon icon={faShoePrints} className="text-[#EC3C7C] text-2xl mb-2" />
                                    <span className="font-bold text-lg">{damageValues.legs}</span>
                                    <span className="text-xs text-gray-300">Legs</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default WeaponViewer;

function StatItem({ icon, value, label, maxValue }: { icon: IconDefinition; value: string | number; label: string; maxValue?: number }) {
    const percentage = maxValue ? ((typeof value === 'string' ? parseFloat(value) : value) / maxValue) * 100 : 100;

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
