import WeaponList from "@/components/WeaponList";
import Header from "@/components/Header";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arsenal | Spectre',
  description: 'Browse all available weapons in Spectre Divide and explore their stats, prices, and bundles.',
  keywords: 'weapons, gun list, weapon stats, Spectre Divide',
};

export default function WeaponListPage() {
    return (
        <div>
            <Header />
            <WeaponList />
        </div>
    );
}