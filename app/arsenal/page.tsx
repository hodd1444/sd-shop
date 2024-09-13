import WeaponList from "@/components/WeaponList";
import Header from "@/components/Header";
import { Metadata } from 'next';



export default function WeaponListPage() {
    return (
        <div>
            <meta property="og:image" content="<generated>" />
            <meta property="og:title" content="Arsenal | Spectre" />
            <meta property="og:description" content="Browse all available weapons in Spectre Divide and explore their stats, prices, and bundles." />
            <meta property="og:keywords" content="weapons, gun list, weapon stats, Spectre Divide" />
            <Header />
            <WeaponList />
        </div>
    );
}