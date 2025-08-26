export async function sendToDiscord(data: { 
  firstName: string;
  lastName: string;
  radioPseudo: string;
  phone: string;
  message: string 
}) {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Erreur: VITE_DISCORD_WEBHOOK_URL non défini dans .env');
    throw new Error('Configuration manquante');
  }

  const payload = {
    content: '',
    embeds: [{
      title: "Nouveau message depuis le formulaire de contact",
      color: 0x000000,
      fields: [
        {
          name: "Nom complet",
          value: `${data.firstName} ${data.lastName}` || 'Non fourni',
          inline: true
        },
        {
          name: "Pseudo Radio D",
          value: data.radioPseudo || 'Non fourni',
          inline: true
        },
        {
          name: "Téléphone",
          value: data.phone || 'Non fourni',
          inline: true
        },
        {
          name: "Message",
          value: data.message || 'Aucun message'
        }
      ],
      timestamp: new Date().toISOString()
    }]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi à Discord:', error);
    throw new Error('Une erreur est survenue. Veuillez réessayer.');
  }
}
