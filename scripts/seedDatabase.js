const mongoose = require('mongoose');
const Quote = require('../models/Quote');
require('dotenv').config();

// Récupérer les citations depuis le fichier routes
const { animeQuotes } = require('../routes/quotes');

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connecté à MongoDB'))
.catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Fonction pour peupler la base de données
async function seedDatabase() {
    try {
        // Supprimer tous les index existants
        await Quote.collection.dropIndexes();
        console.log('Index supprimés');

        // Supprimer toutes les citations existantes
        await Quote.deleteMany({});
        console.log('Base de données nettoyée');

        // Ajouter les nouvelles citations
        const quotes = animeQuotes.map(quote => ({
            text: quote.text,
            character: quote.character,
            anime: quote.anime,
            category: quote.category,
            shareText: quote.shareText || `"${quote.text}" - ${quote.character} (${quote.anime})`,
            likes: 0,
            createdAt: new Date()
        }));

        await Quote.insertMany(quotes);
        console.log(`${quotes.length} citations ont été ajoutées à la base de données`);

        // Créer les nouveaux index
        await Quote.collection.createIndex({ 
            text: 'text', 
            character: 'text', 
            anime: 'text' 
        });
        console.log('Nouveaux index créés');

    } catch (error) {
        console.error('Erreur lors du peuplement de la base de données:', error);
    } finally {
        mongoose.connection.close();
    }
}

// Exécuter le script
seedDatabase();
