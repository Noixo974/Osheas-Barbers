import React from 'react';

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <img 
              src="https://i.ibb.co/JRRGKkn1/logo.png" 
              alt="O'Sheas Barbers Logo"
              className="w-[350px] h-[350px] object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl font-bold mb-12">À Propos de Nous 🌟</h1>
            
            <div className="prose prose-lg mx-auto text-center">
              <p className="mb-6">
                Depuis notre réouverture, le O'Sheas Barbers s'est engagé à offrir des services de coiffure et de barbier de la plus haute qualité. Notre équipe de professionnels passionnés combine expertise traditionnelle et techniques modernes pour vous offrir une expérience unique.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">Notre Histoire 📜</h2>
              <p className="mb-6">
                Fondé en 1985, le O'Sheas Barbers est né de la passion pour l'art de la coiffure et de la volonté d'offrir un service d'excellence dans une ambiance chaleureuse et professionnelle.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">Notre Direction 👥</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
                {/* Existing Blocks */}
                <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h3 className="text-xl font-bold mb-2">Bella Rodrigues</h3>
                  <p className="text-gray-500"><b>Patronne</b></p>
                  <p className="text-gray-500"><em>Responsable RH</em></p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h3 className="text-xl font-bold mb-2">Nathan Pablosco</h3>
                <p className="text-gray-500"><b>Co-Patron</b></p>
                <p className="text-gray-500"><em>Responsable Stockage</em></p>
                </div>
              </div>

              {/* New Blocks Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
                {/* Existing Blocks */}
                <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h3 className="text-xl font-bold mb-2">Adam Malcomaque</h3>
                  <p className="text-gray-500"><b>Assistant-Direction</b></p>
                  <p className="text-gray-500"><em>Responsable Logistique</em></p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h3 className="text-xl font-bold mb-2">Adrian Roys</h3>
                <p className="text-gray-500"><b>Assistant-Direction</b></p>
                <p className="text-gray-500"><em>Responsable Événementiel</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}