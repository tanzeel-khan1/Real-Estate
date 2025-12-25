"use client";

import React, { useState } from "react";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

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
];

interface DetailItemProps {
  icon: React.ElementType;
  value: number | string;
  label: string;
}

// const DetailItem: React.FC<DetailItemProps> = ({ icon: Icon, value, label }) => (
//   <div className="flex flex-col items-center justify-center space-y-1 w-full">
//     <div className="flex items-center space-x-2">
//       <Icon className="text-gray-800 text-xl" />
//       <span className="text-gray-800 font-semibold text-base">{value}</span>
//     </div>
//     <span className="text-gray-500 text-sm">{label}</span>
//   </div>
// );
const DetailItem: React.FC<DetailItemProps> = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center justify-center space-y-1">
    <div className="flex items-center gap-2">
      <Icon className="text-gray-800 text-lg sm:text-xl" />
      <span className="text-gray-800 font-semibold text-sm sm:text-base">
        {value}
      </span>
    </div>
    <span className="text-gray-500 text-xs sm:text-sm text-center">
      {label}
    </span>
  </div>
);

const PropertyCard: React.FC<{ property: Property; onClick: (property: Property) => void; }> = ({ property, onClick }) => {
  const isForSale = property.status === "For sale";
  const badgeColor = isForSale ? "bg-green-500" : "bg-purple-500";

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div
      onClick={() => onClick(property)}
      className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100 cursor-pointer"
    >
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

        <p className="text-2xl font-extrabold text-indigo-600 pt-2">{formattedPrice}</p>

        <div className="grid grid-cols-4 pt-4 border-t border-gray-200">
          <DetailItem icon={FaBed} value={property.details.bedrooms} label="Bedrooms" />
          <DetailItem icon={FaBath} value={property.details.bathrooms} label="Bathrooms" />
          <DetailItem icon={FaRulerCombined} value={property.details.totalArea} label="Total area" />
          <DetailItem icon={FaCar} value={property.details.garages} label="Garages" />
        </div>
      </div>
    </div>
  );
};

const Modal: React.FC<{ property: Property | null; onClose: () => void; }> = ({ property, onClose }) => {
  if (!property) return null;

  const handleBuy = () => {
    toast.success("Purchase request submitted!"); 
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm"
        >
          X
        </button>

        <img src={property.imageUrl} className="w-full h-56 object-cover rounded-lg mb-4" />
        <h2 className="text-2xl font-bold">{property.title}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-xl font-bold text-indigo-600 mt-3">{property.price}</p>

        <div className="grid grid-cols-4 gap-4 mt-4">
          <DetailItem icon={FaBed} value={property.details.bedrooms} label="Bedrooms" />
          <DetailItem icon={FaBath} value={property.details.bathrooms} label="Bathrooms" />
          <DetailItem icon={FaRulerCombined} value={property.details.totalArea} label="Total area" />
          <DetailItem icon={FaCar} value={property.details.garages} label="Garages" />
        </div>

        <button
          onClick={handleBuy}
          className="mt-6 w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition text-white font-bold py-3 rounded-xl"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

const FeaturedProperties: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Discover your <span className="text-indigo-600">featured property</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of top properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} onClick={setSelectedProperty} />
          ))}
        </div>

        <Modal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      </div>
    </section>
  );
};

export default FeaturedProperties;
