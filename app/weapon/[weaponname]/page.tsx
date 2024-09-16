'use client';
import WeaponViewer from "@/components/WeaponViewer";
import { Weapon } from "@/components/WeaponList";
import weapons from '@/weapons.json';
import { usePathname } from 'next/navigation';
import Header from "@/components/Header";

export default function WeaponPage() {
    const pathname = usePathname();
    // get weaponname from pathname, m20-carbon -> M20 Carbon
    // uppercase first letter of each word
    let weaponname = pathname.split('/').pop()?.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    if (pathname === '/weapon/prototype-op') {
        weaponname = "Prototype-OP";
    }

    console.log(weaponname);

    const weapon = weapons.find((w) => w.name === weaponname) as Weapon;
    if (!weapon) {
        return <div>Weapon not found</div>;
    }
    return (
        <div className='min-h-screen bg-[#272727]'>
            <Header />
            <div className='flex items-center justify-center'>
                <WeaponViewer weapon={weapon} />
            </div>
        </div>
    )
}