const express = require('express');
const search = express.Router();
const searchController = require('../controllers/search-controller');
const searchHelpers = require('../services/search-helpers');

search.get('/zip/:zip', searchHelpers.getPlaces)
search.post('/search', searchHelpers.getPlaces,searchController.getAllSearch);
search.get('/mysearch/:id', searchController.getMySearch);
search.delete('/:id', searchController.deleteMySearch);
// search.post('/', searchController.addMySearch);

module.exports = search;