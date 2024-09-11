import Link from "next/link";
import { CryoKinesisBanner, MedusaBanner, WasabiBanner } from "@/components/Banners";

export const BundleBannerCard = ({ bundles }: any) => {
  console.log(bundles);
  return bundles.map((item: any) => (
    <Link
      href={`/bundle/${item.name.toLowerCase().split(" ").join("-")}`}
      className="hover:cursor-default"
      key={item.id}
    >
      <div className="bg-[#333333] rounded-lg overflow-hidden shadow-lg transition-transform  ">
        {item.imageSet.length === 0 ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-3/4 object-cover"
          />
        ) : (
          <>

            {item.name === "Cryo Kinesis Bundle" ? (
              <CryoKinesisBanner bundle={bundles[item.id-1]} />
            ) : (
              <>
                {item.name === "Medusa Bundle" ? (
                  <MedusaBanner bundle={bundles[item.id-1]} />
                ) : (
                  <WasabiBanner bundle={bundles[item.id-1]} />
                )}
              </>
            )}
          </>
        )}

        <div className="flex flex-row justify-between align-middle items-center p-4 z-20 relative bg-[#333333]">
          <h3
            className={`text-lg font-semibold`}
            style={{
              color: item.color,
            }}
          >
            {item.name}
          </h3>
          <div className="flex items-center text-[#bdbdbd]">
            <img src="/spectre_points_gray.webp" className="w-5 h-5 mr-1" />
            <span>{item.price}</span>
          </div>
        </div>
      </div>
    </Link>
  ));
};
