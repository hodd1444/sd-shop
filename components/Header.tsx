"use client";
import Link from "next/link";
import { ShoppingCart, Menu, X, List } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#272727] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <Link href="https://playspectre.com">
              <img className="w-8" src="/logo_yellow.png" />
            </Link>
            <Link href="/" className="text-2xl font-bold text-[#FFCB00]">
              Spectre Divide Shop
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="flex flex-row justify-between gap-2 text-[#FFCB00] hover:text-[#EC3C7C] transition-colors group"
            >
                <ShoppingCart className="h-6 w-6 text-[#FFCB00] group-hover:text-[#EC3C7C]" />
              Shop
            </Link>
            <Link
              href="/arsenal"
              className="flex flex-row justify-between gap-2 text-[#FFCB00] hover:text-[#EC3C7C] transition-colors group"
            >
                <List className="h-6 w-6 text-[#FFCB00] group-hover:text-[#EC3C7C]" />
              Arsenal
            </Link>
            {/*
            <Link
              href="/bundles"
              className="text-[#FFCB00] hover:text-[#EC3C7C] transition-colors"
            >
              Bundles
            </Link>
            <Link
              href="/about"
              className="text-[#FFCB00] hover:text-[#EC3C7C] transition-colors"
            >
              About
            </Link>*/}
          </nav>
          <div className="sm:hidden flex items-center">
            <button
              className="ml-4 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#FFCB00]" />
              ) : (
                <Menu className="h-6 w-6 text-[#FFCB00]" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-[#FFCB00] hover:text-[#EC3C7C] transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/arsenal"
              className="block px-3 py-2 text-[#FFCB00] hover:text-[#EC3C7C] transition-colors"
            >
              Arsenal
            </Link>
            {/*
            <Link
              href="/bundles"
              className="block px-3 py-2 text-[#FFCB00] hover:text-[#EC3C7C] transition-colors"
            >
              Bundles
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-[#FFCB00] hover:text-[#EC3C7C] transition-colors"
            >
              About
            </Link>*/}
          </div>
        </div>
      )}
    </header>
  );
}
