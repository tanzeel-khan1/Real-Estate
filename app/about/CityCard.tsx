import Image from "next/image";
import React from "react";

interface CityCardProps {
  city: string;
  propertiesCount: number;
  imageSrc: string;
  size: "large" | "medium" | "tall";
  isFeatured?: boolean;
}

const sizeClasses = {
  large: "col-span-2 row-span-1 h-60 md:h-72",
  medium: "col-span-1 row-span-1 h-60 md:h-72",
  tall: "col-span-1 row-span-2 h-full min-h-[30rem] md:min-h-[36rem]",
};

export const CityCard: React.FC<CityCardProps> = ({
  city,
  propertiesCount,
  imageSrc,
  size,
  isFeatured = false,
}) => {
  const cardClasses = sizeClasses[size];

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02] ${cardClasses} ${
        isFeatured ? "border-4 border-green-500/80" : ""
      }`}
    >
      <Image
        src={imageSrc}
        alt={`${city} city view`}
        fill
        style={{
          objectFit: "cover",
          filter: "brightness(0.5)",
        }}
        className="transition duration-500 group-hover:scale-105"
        priority={size === "large" || size === "tall"}
        sizes={
          size === "large"
            ? "(max-width: 768px) 100vw, 66vw"
            : "(max-width: 768px) 50vw, 33vw"
        }
      />

      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white z-10">
        <h2 className="text-2xl font-bold">{city}</h2>
        <p className="text-sm opacity-90">{propertiesCount} properties</p>
      </div>

      {isFeatured && (
        <div className="absolute top-0 right-0 p-2 bg-green-500 text-xs font-semibold rounded-bl-lg z-10">
          FEATURED
        </div>
      )}
    </div>
  );
};
