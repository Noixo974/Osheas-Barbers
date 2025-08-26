import React from 'react';
import { Scissors, Smile, Gift } from 'lucide-react';

export default function Prices() {
  const categories = [
    {
      name: 'Cheveux',
      icon: <Scissors className="h-8 w-8 text-amber-500" />,
      color: 'border-amber-500',
      services: [
        { name: 'Coupe', price: '1000$' },
        { name: 'Nouvelle Coupe', price: '2000$' },
        { name: 'Coloration', price: '450$' },
        { name: 'Ciseau Perdu (Coupe & Couleur aléatoire)', price: '700$' }
      ]
    },
    {
      name: 'Visage & Corps',
      icon: <Smile className="h-8 w-8 text-gray-900" />,
      color: 'border-gray-900',
      services: [
        { name: 'Barbe', price: '500$' },
        { name: 'Sourcils', price: '300$' },
        { name: 'Maquillage', price: '400$' },
        { name: 'Rouge à lèvre', price: '400$' },
        { name: 'Blush / Peinture', price: '1000$' },
        { name: 'Lentilles', price: '1250$' },
        { name: 'Épilation', price: '500$' }
      ]
    },
    {
      name: 'Autres',
      icon: <Gift className="h-8 w-8 text-amber-500" />,
      color: 'border-amber-500',
      services: [
        { name: 'Palette de Maquillage', price: '4000$' },
        { name: 'Verre de Whiskey', price: '500$' },
        { name: 'Cigare', price: '500$' },
        { name: 'Burger', price: '80$' },
        { name: 'Soda', price: '40$' }
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Tarifs 💰</h1>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.name} className={`border-l-4 ${category.color} p-6 bg-white rounded-lg shadow-lg`}>
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold text-gray-800">
                  {category.name}
                </h2>
              </div>
              
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <div key={service.name} className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-bold text-gray-900">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
