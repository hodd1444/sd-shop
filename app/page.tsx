import Image from "next/image";
import Shop from "@/components/Shop";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#272727] text-white">
      <Header />
      <Shop />
    </div>
  );
}
