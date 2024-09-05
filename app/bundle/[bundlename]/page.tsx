'use client';
import { usePathname } from 'next/navigation';
import BundleViewer from '@/components/BundleViewer';
import itemList from '@/items.json' // Assume this file exists with bundle data
import Link from 'next/link';

export default function BundlePage() {
  const bundleName = usePathname().split("/").pop()?.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  const bundle = itemList.bundles.find(b => b.name === bundleName);

  if (!bundle) {
    return (
      <div className="min-h-screen bg-[#272727] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Bundle not found</h1>
          <Link href="/" className="text-[#FFCB00] hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return <BundleViewer bundle={bundle} />;
}