import React, { useState } from 'react';
import { sendToDiscord } from '../../services/discord';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    radioPseudo: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await sendToDiscord({
        firstName: formData.firstName,
        lastName: formData.lastName,
        radioPseudo: formData.radioPseudo,
        phone: formData.phone,
        message: formData.message
      });
      setStatus('success');
      setFormData({ 
        firstName: '',
        lastName: '',
        radioPseudo: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-lg font-medium text-gray-700 mb-2">
              Nom
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Pablosco"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-3 bg-gray-100 placeholder-gray-400"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 mb-2">
              Prénom
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Nathan"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-3 bg-gray-100 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="radioPseudo" className="block text-lg font-medium text-gray-700 mb-2">
              Mail (Pseudo Radio D)
            </label>
            <input
              type="text"
              id="radioPseudo"
              value={formData.radioPseudo}
              onChange={handleChange}
              required
              placeholder="Pseudo Discord"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-3 bg-gray-100 placeholder-gray-400"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="12345"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-3 bg-gray-100 placeholder-gray-400"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Votre demande ou question..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-lg p-3 bg-gray-100 placeholder-gray-400"
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-amber-500 text-white px-6 py-4 rounded-md hover:bg-amber-600 transition-colors disabled:opacity-50 text-lg"
        >
          {status === 'loading' ? 'Envoi en cours...' : '📩 Envoyer'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center text-lg">Message envoyé avec succès ! ✅️</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center text-lg">Une erreur est survenue. Veuillez réessayer. ❌ </p>
        )}
      </form>
    </div>
  );
}
