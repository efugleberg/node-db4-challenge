const express = require('express');

const RecipeRouter = require('../data/recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

module.exports = server;