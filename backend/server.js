const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

// Your app routes and middleware here

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

let games = {};  // Store active games with gameId as key

const generateGameId = () => Math.random().toString(36).substr(2, 9);

// Function to broadcast active games to all clients
const broadcastActiveGames = () => {
    console.log('Broadcasting active games:', games);
    io.emit('activeGames', games);
};

// Helper function to clean up game on player disconnection
const cleanupGameOnDisconnect = (socketId) => {
    let gamesToDelete = [];

    for (let gameId in games) {
        const game = games[gameId];
        if (game.player1 === socketId || game.player2 === socketId) {
            gamesToDelete.push(gameId);
            console.log('Game removed due to player disconnection:', gameId);
        }
    }

    gamesToDelete.forEach(gameId => {
        delete games[gameId];
    });

    broadcastActiveGames();
};

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Send current active games when a client connects
    socket.emit('activeGames', games);

    // Event for Player 1 to create a game
    socket.on('createGame', (data, callback) => {
        const gameId = generateGameId();
        games[gameId] = {
            player1: socket.id,
            player2: null,
            wager: data.wager,
            status: 'Waiting for Player 2',  // Game waiting for player 2
        };

        console.log('Game Created:', games[gameId]);
        callback({ success: true, gameId });

        // Broadcast the updated list of active games
        broadcastActiveGames();
    });

    // Event for Player 2 to join the game
    socket.on('joinGame', (gameId, callback) => {
        const game = games[gameId];

        if (game && game.player2 === null) {
            game.player2 = socket.id;
            game.status = 'In Progress';  // Game now in progress

            console.log('Game Joined:', game);

            // Notify both players that the game has started
            io.to(game.player1).emit('gameJoined', { success: true, gameId });
            socket.emit('gameJoined', { success: true, gameId });

            // Broadcast the updated list of active games
            broadcastActiveGames();
        } else {
            console.log('Failed to join game:', gameId);
            socket.emit('gameJoined', { success: false, message: 'Game not found or already full' });
        }
    });

    // Handle player disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        cleanupGameOnDisconnect(socket.id);
    });

    // Handle the completion of a game (e.g., when the game finishes)
    socket.on('completeGame', (gameId, callback) => {
        const game = games[gameId];
        if (game) {
            game.status = 'Completed';  // Mark the game as completed
            console.log('Game completed:', gameId);
            callback({ success: true });

            // Optionally, clean up completed games after a certain time
            setTimeout(() => {
                delete games[gameId];
                broadcastActiveGames();
            }, 60000);  // Clean up after 60 seconds
        } else {
            callback({ success: false, message: 'Game not found' });
        }
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
