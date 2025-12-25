"use client";

import React, { useState } from "react";
import { BedDouble, Bath, Car } from "lucide-react";
import Page from "@/app/contact/page";
import { toast } from "react-toastify";

interface Property {
  id: number;
  title: string;
  price: string;
  status: "For sale" | "For rent";
  image: string;
  beds: number;
  baths: number;
  garage: number;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Pembroke Pines office",
    price: "$150000",
    status: "For sale",
    image:
      "https://cdn.commercialcafe.com/images/50A064A6-7379-40E8-84A8-F6FCC30E4F02/32587323.jpeg?width=450",
    beds: 2,
    baths: 2,
    garage: 2,
  },
  {
    id: 2,
    title: "Sulphur office",
    price: "$2500/mo",
    status: "For rent",
    image:
      "https://static2.sulphurtimes.com/data/articles/xl-sulphur-post-office-reopens-in-temporary-building-1733827854.jpg",
    beds: 2,
    baths: 2,
    garage: 2,
  },
  {
    id: 3,
    title: "Hamden depot",
    price: "$120000",
    status: "For sale",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Mikro_Depot_in_Hamden_Connecticut_%2853818601842%29.jpg/1024px-Mikro_Depot_in_Hamden_Connecticut_%2853818601842%29.jpg",
    beds: 2,
    baths: 2,
    garage: 2,
  },
  {
    id: 4,
    title: "Fairground office",
    price: "$200000",
    status: "For sale",
    image:
      "https://www.evergreenfair.org/Images/FormCenter/Items/Admin%20office.jpg",
    beds: 2,
    baths: 2,
    garage: 2,
  },
];

const PropertyModal: React.FC<{
  property: Property | null;
  onClose: () => void;
}> = ({ property, onClose }) => {
  if (!property) return null;

  const handleBuy = () => {
    toast.success(`You showed interest in ${property.title}!`);
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm"
        >
          X
        </button>

        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold">{property.title}</h2>
        <p className="text-gray-500">{property.price}</p>

        <div className="flex items-center text-gray-500 text-sm space-x-4 mt-3">
          <div className="flex items-center space-x-1">
            <BedDouble className="w-4 h-4" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-4 h-4" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Car className="w-4 h-4" />
            <span>{property.garage}</span>
          </div>
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

export default function CommercialProperty() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  return (
   <>
    <div>
      <div className="md:pl-20 pl-12 md:pr-14 pr-8">
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              Commercial property
            </h2>
            <p className="text-gray-500 mb-10">
              Leo morbi faucibus mattis pharetra tellus velit ultricies duis
              rhoncus
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {properties.map((property) => (
                <div
                  key={property.id}
                  onClick={() => setSelectedProperty(property)}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-48 w-full object-cover"
                    />
                    <span
                      className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-md ${
                        property.status === "For sale"
                          ? "bg-green-500 text-white"
                          : "bg-purple-500 text-white"
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>

                  <div className="p-4 text-left">
                    <h3 className="text-gray-900 font-semibold">
                      {property.title}
                    </h3>
                    <p className="text-indigo-600 font-semibold mb-3">
                      {property.price}
                    </p>

                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <BedDouble className="w-4 h-4" />
                        <span>{property.beds}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.baths}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Car className="w-4 h-4" />
                        <span>{property.garage}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedProperty && (
          <PropertyModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </div>
      <Page />
    </div>
    
   </>
  );
}
