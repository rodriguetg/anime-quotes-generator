const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('Tentative de connexion à MongoDB...');
        console.log('URI:', process.env.MONGODB_URI);
        
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        });

        console.log(`MongoDB connectée: ${conn.connection.host}`);
    } catch (error) {
        console.error('Erreur de connexion détaillée:', error);
        console.error(`Message d'erreur: ${error.message}`);
        console.error('Stack trace:', error.stack);
        process.exit(1);
    }
};

module.exports = connectDB;
