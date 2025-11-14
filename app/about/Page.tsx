import { CityCard } from './CityCard';
import React from 'react';

const citiesData = [
  {
    city: 'New York',
    propertiesCount: 20,
    imageSrc: '/new york.webp',
    size: 'large',
  },
  {
    city: 'Boston',
    propertiesCount: 12,
    imageSrc: '/boston.avif',
    size: 'medium',
    isFeatured: true,
  },
  {
    city: 'Chicago',
    propertiesCount: 32,
    imageSrc: '/chicago.jpg',
    size: 'tall',
  },
  {
    city: 'Washington',
    propertiesCount: 18,
    imageSrc: '/washington.jpeg',
    size: 'medium',
  },
  {
    city: 'Miami',
    propertiesCount: 32,
    imageSrc: '/maini.webp',
    size: 'large',
  },
];


const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-900 mb-2">
          What city will you live in?
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor fermentum da unta eget.
        </p>
      </header>
      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
          {citiesData.map((city, index) => (
            <CityCard key={index} {...city} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;