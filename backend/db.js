const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    telegramId: {
        type: String,
        required: true,
        unique: true,
    },
    telegramUsername: {
        type: String,
        required: true,
        unique: true,
    },
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    },
    walletActivated: {
        type: Boolean,
        default: false,   // By default, wallet is not activated
    },
    gamesPlayed: {
        type: Number,
        default: 0,
    },
    gamesWon: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastActive: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
