import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Contactez-nous 📩</h1>
        
        <div className="grid md:grid-cols-2 gap-20">
          <div className="mr-8">
            <ContactForm />
          </div>
          
          <div className="space-y-8 mr-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Informations ✂️</h2>
              <div className="space-y-4">
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
              <h2 className="text-2xl font-bold mb-4">Formulaire de contact ✉️</h2>
              <div className="space-y-2">
                <p>• Afin que votre demande, question ou autre soit prise en compte, nous vous remercions de rejoindre notre radio Discord et de modifier votre prénom et nom sur celle-ci.</p>
                <p>• Un ticket sera créé dans un délai d'environ 24 heures ou moins pour répondre à votre demande ou question, à condition qu'il ne s'agisse pas d'une "mauvaise blague".</p>
								<p><em>• ❌ Recrutement OFF ❌</em></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
