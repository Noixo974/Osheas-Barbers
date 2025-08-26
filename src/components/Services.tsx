import React from 'react';
import { Scissors, PaintBucket, User } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Scissors className="h-12 w-12 text-amber-500" />,
      title: 'Cheveux',
      description: 'Transformez votre look avec nos coupes tendance, colorations vibrantes et soins capillaires de qualité. Votre style, notre expertise !',
    },
    {
      icon: <User className="h-12 w-12 text-amber-500" />,
      title: 'Visage & Corps',
      description: 'Sublimez votre visage et corps avec nos services personnalisés : maquillage professionnel, épilation précise et accessoires élégants. Parce que vous méritez le meilleur !',
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-amber-500" />,
      title: 'Autres',
      description: 'Offrez-vous une touche d\'élégance ou de gourmandise : palettes de maquillage, boissons raffinées ou petits plaisirs à savourer !',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services 💼</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
