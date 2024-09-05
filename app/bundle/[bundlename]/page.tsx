'use client';
import { usePathname } from 'next/navigation';
import BundleViewer from '@/components/BundleViewer';
import itemList from '@/items.json' // Assume this file exists with bundle data
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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

  return (<div className="bg-[#272727] text-white p-8">
      <Link
        href={`/`}
        className="inline-flex items-center text-[#FFCB00] hover:underline mb-6"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Shop
      </Link>
    <div className="max-w-4xl mx-auto">
      
        <BundleViewer bundle={bundle} />
    </div>
  </div>
  );
}