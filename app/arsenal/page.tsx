import WeaponList from "@/components/WeaponList";
import Header from "@/components/Header";
import { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    title: "Arsenal | Spectre",
    description: "Browse all available weapons in Spectre Divide",
    images: "/arsenal/opengraph-image.png",
  },
  twitter: {
    title: "Arsenal | Spectre",
    description: "Browse all available weapons in Spectre Divide",
    images: "/arsenal/opengraph-image.png",
  },
};

export default function WeaponListPage() {
    return (
        <div>
            <Header />
            <WeaponList />
        </div>
    );
}