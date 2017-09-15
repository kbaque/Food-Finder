const express = require('express');
const foodFinderRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const foodFinderController = require('../controllers/foodFinder-controller');

foodFinderRouter.get('/', foodFinderController.index);
foodFinderRouter.post('/', foodFinderController.create);

foodFinderRouter.get('/:id', foodFinderController.show);
foodFinderRouter.put('/:id', foodFinderController.update);
foodFinderRouter.delete('/:id', foodFinderController.destroy);

module.exports = foodFinderRouter;

