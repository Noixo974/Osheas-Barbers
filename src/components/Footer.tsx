import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">O'Sheas Barbers ✂️</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber-500" />
                <span>En cours ⌛</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-500" />
                <a href="https://discord.gg/UJU5p5rHBr" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-700">contact@osheas-barbers.com</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span>512 Alhambra Drive, Sandy Shores</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires d'ouverture 🕐</h3>
            <div className="space-y-1">
              <p>• Nos horaires varient en fonction de la disponibilité<br /> de nos coiffeurs.</p>
              <p>• Cependant, nous restons très actifs et flexibles<br /> pour répondre à vos besoins.</p>
              <p>• Et nous sommes également fiers d'être le salon de <br />coiffure le plus ouvert à Los Santos.</p>
            </div>
          </div>
          
          <div>
          <h3 className="text-xl font-bold mb-4">Suivez-nous 🌐</h3>
  <div className="flex space-x-4">
  <a href="https://discord.gg/sSKKH7kNwG" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
      <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png" alt="Discord" className="h-8 w-7" />
    </a>
    <a href="/" className="hover:text-amber-500 transition-colors">
  <img src="https://cdn.discordapp.com/attachments/1308442126937489540/1327584187175407636/internet.png?ex=6783989f&is=6782471f&hm=ec7e37c85bc772b0da2a47ee47502a9e7a0c4fcde84be02b177acadef1cbbf92&" alt="Accueil" className="h-7 w-7,5" />
</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
  <div className="flex justify-between text-center">
    <p className="text-left">
      By Nathan Pablosco pour le O'Sheas Barbers 🇷🇪
    </p>
    <p className="text-right">
      &copy; {new Date().getFullYear()} O'Sheas Barbers. Tous droits réservés.
    </p>
  </div>
</div>
      </div>
    </footer>
  );
}
