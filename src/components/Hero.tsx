import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
        L'Excellence de la Coiffure au O'Sheas Barbers 
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Découvrez l'art de la coiffure, de la barbe et plein d'autres prestations chez nous... 
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-md gap-2 transition-colors text-lg"
        >
          <Mail className="h-5 w-5" />
          Contactez-nous
        </Link>
      </div>
    </div>
  );
}
