const mongoose = require('mongoose');
const Quote = require('../models/Quote');

// Fonction pour nettoyer le texte
const cleanText = (text) => {
    if (!text) return '';
    // Supprimer le CSS et le HTML
    return text
        .replace(/style="[^"]*"/g, '')  // Supprime les styles en ligne
        .replace(/\{[^}]*\}/g, '')      // Supprime les blocs CSS
        .replace(/<[^>]*>/g, '')        // Supprime les balises HTML
        .replace(/\s+/g, ' ')           // Normalise les espaces
        .trim();                        // Supprime les espaces au début et à la fin
};

async function cleanDatabase() {
    try {
        await mongoose.connect('mongodb://localhost/quotesdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connexion à MongoDB établie');

        // Récupérer toutes les citations
        const quotes = await Quote.find({});
        console.log(`Nombre de citations trouvées : ${quotes.length}`);

        // Nettoyer chaque citation
        for (const quote of quotes) {
            quote.text = cleanText(quote.text);
            quote.character = cleanText(quote.character);
            quote.anime = cleanText(quote.anime);
            await quote.save();
            console.log('Citation nettoyée :', quote.text);
        }

        console.log('Nettoyage terminé');
        process.exit(0);
    } catch (error) {
        console.error('Erreur :', error);
        process.exit(1);
    }
}

cleanDatabase();
