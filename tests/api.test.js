const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

// Tests des endpoints
async function testAPI() {
    try {
        console.log('🧪 Démarrage des tests API...\n');

        // Test 1: Obtenir une citation aléatoire
        console.log('Test 1: Obtenir une citation aléatoire');
        const randomQuote = await axios.get(`${API_URL}/quotes/random`);
        console.log('✅ Citation aléatoire reçue:', randomQuote.data);
        console.log('------------------------\n');

        // Test 2: Rechercher des citations par anime
        console.log('Test 2: Rechercher des citations de Naruto');
        const searchResults = await axios.get(`${API_URL}/quotes/search?anime=Naruto`);
        console.log('✅ Résultats de recherche:', searchResults.data);
        console.log('------------------------\n');

        // Test 3: Obtenir les citations par catégorie
        console.log('Test 3: Obtenir les citations de motivation');
        const motivationQuotes = await axios.get(`${API_URL}/quotes/category/motivation`);
        console.log('✅ Citations de motivation:', motivationQuotes.data);
        console.log('------------------------\n');

        // Test 4: Ajouter une nouvelle citation
        console.log('Test 4: Ajouter une nouvelle citation');
        const newQuote = {
            text: "Plus ultra !",
            character: "All Might",
            anime: "My Hero Academia",
            category: "motivation",
            image: "https://example.com/all-might-plus-ultra.jpg"
        };
        const addedQuote = await axios.post(`${API_URL}/quotes`, newQuote);
        console.log('✅ Nouvelle citation ajoutée:', addedQuote.data);
        console.log('------------------------\n');

        // Test 5: Liker une citation
        console.log('Test 5: Liker une citation');
        const quoteId = addedQuote.data._id;
        const likedQuote = await axios.patch(`${API_URL}/quotes/${quoteId}/like`);
        console.log('✅ Citation likée:', likedQuote.data);
        console.log('------------------------\n');

        console.log('✨ Tous les tests sont passés avec succès !');

    } catch (error) {
        console.error('❌ Erreur pendant les tests:', error.response?.data || error.message);
    }
}

// Exécuter les tests
testAPI();
