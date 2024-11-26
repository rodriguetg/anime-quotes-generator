const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    character: {
        type: String,
        required: true,
        trim: true
    },
    anime: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
        default: 'philosophie'
    },
    image: {
        type: String,
        required: false,
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Index pour améliorer les performances des recherches
quoteSchema.index({ character: 'text', anime: 'text', text: 'text' });

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
