"use client";
import React from "react";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";

export interface Property {
  id: number;
  status: "For sale" | "For rent";
  title: string;
  location: string;
  price: number;
  details: {
    bedrooms: number;
    bathrooms: number;
    totalArea: number;
    garages: number;
  };
  imageUrl: string;
}

const mockProperties: Property[] = [
  {
    id: 1,
    status: "For sale",
    title: "Division Road house",
    location: "New York",
    price: 250000,
    details: { bedrooms: 3, bathrooms: 2, totalArea: 1200, garages: 2 },
    imageUrl:
      "https://www.e-architect.com/wp-content/uploads/2016/07/ferry-road-house-in-north-haven-a160716-4.jpg",
  },
  {
    id: 2,
    status: "For sale",
    title: "North Road house",
    location: "Paris",
    price: 222000,
    details: { bedrooms: 3, bathrooms: 2, totalArea: 1200, garages: 1 },
    imageUrl:
      "https://www.parisouest-sothebysrealty.com/datas/biens/images/6634/listing/6634_00-2025-05-22-0137.jpg",
  },
  {
    id: 3,
    status: "For rent",
    title: "Bloomfield house",
    location: "London",
    price: 250000,
    details: { bedrooms: 4, bathrooms: 2, totalArea: 850, garages: 2 },
    imageUrl:
      "https://i.ytimg.com/vi/FeZUBzywqVo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA1FqGpXe2x1xkia3h02U7rgbHh6Q",
  },
  {
    id: 4,
    status: "For sale",
    title: "Rockville Ave villa",
    location: "Paris",
    price: 180000,
    details: { bedrooms: 5, bathrooms: 2, totalArea: 320, garages: 2 },
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/558181698.jpg?k=bb9d27893032deaeeb9f88f7a4232006831fb9b315b43d7f85e86c63c9697e4f&o=",
  },
  {
    id: 5,
    status: "For rent",
    title: "Scotch Plains villa",
    location: "London",
    price: 160000,
    details: { bedrooms: 2, bathrooms: 3, totalArea: 1200, garages: 2 },
    imageUrl:
      "https://st.hzcdn.com/simgs/9b71e65707153e26_4-6459/home-design.jpg",
  },
  {
    id: 6,
    status: "For sale",
    title: "Lees Creek house",
    location: "New York",
    price: 210000,
    details: { bedrooms: 3, bathrooms: 1, totalArea: 480, garages: 1 },
    imageUrl:
      "https://newyorklifestylesmagazine.com/images/content/2017/01/42/42_01.jpg",
  },
];

interface DetailItemProps {
  icon: React.ElementType;
  value: number | string;
  label: string;
}

const DetailItem: React.FC<DetailItemProps> = ({
  icon: Icon,
  value,
  label,
}) => (
  <div className="flex flex-col items-center justify-center space-y-1 w-full">
    <div className="flex items-center space-x-2">
      <Icon className="text-gray-800 text-xl" />
      <span className="text-gray-800 font-semibold text-base">{value}</span>
    </div>

    <span className="text-gray-500 text-sm">{label}</span>
  </div>
);

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const isForSale = property.status === "For sale";
  const badgeColor = isForSale ? "bg-green-500" : "bg-purple-500";

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="rounded-xl shadow-lg  overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100 cursor-pointer">
      <div
        className="relative h-52 sm:h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${property.imageUrl})` }}
      >
        <span
          className={`absolute top-4 left-4 ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}
        >
          {property.status}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{property.title}</h3>
        <p className="text-sm text-gray-500">{property.location}</p>

        <p className="text-2xl font-extrabold text-indigo-600 pt-2">
          {formattedPrice}
        </p>

        <div className="grid grid-cols-4 pt-4 border-t border-gray-200">
          <DetailItem
            icon={FaBed}
            value={property.details.bedrooms}
            label="Bedrooms"
          />
          <DetailItem
            icon={FaBath}
            value={property.details.bathrooms}
            label="Bathrooms"
          />
          <DetailItem
            icon={FaRulerCombined}
            value={property.details.totalArea}
            label="Total area"
          />
          <DetailItem
            icon={FaCar}
            value={property.details.garages}
            label="Garages"
          />
        </div>
      </div>
    </div>
  );
};

const FeaturedProperties: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 ">
            Discover your{" "}
            <span className="text-indigo-600">featured property</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of top properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
