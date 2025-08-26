import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Lewis Rabot',
      rating: 5,
      text: 'Bella Rodrigues, franchement incroyable. Très sympa, très serviable , un véritable sens de l\'humour comme on aime. Andrew Bashkim, incroyable aussi très professionnel, très aimable et des superbes conseils.',
    },
    {
      name: 'Rachid Jimenez',
      rating: 5,
      text: 'Wilson Stanford, Coupe parfaite coupe a la perfection !',
    },
    {
      name: 'Mike Myers',
      rating: 5,
      text: 'Ayman Welter, Un coiffeur au top du top ! Il conseille à la perfection, il est ultra sociable et super drôle ! Je lui souhaite d\'aller très loin dans sa carrière et je recommande fortement',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Avis Clients 💬</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
