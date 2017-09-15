const FoodFinder = require('../models/foodFinder');
const foodFinderController = {};

foodFinderController.index = (req, res) => {
    FoodFinder.findAll()
    .then(foodFinders =>{
        res.json({
            message: 'ok',
            data: foodFinders,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ err });
    });
};

foodFinderController.show = (req, res) =>{
    FoodFinder.findbyId(req.params.id)
    .then(foodFinder => {
        res.json({
            message: 'ok',
            data: foodFinder,
      });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ err });
    });
};

foodFinderController.create = (req, res) => {
    FoodFinder.create({
        ###
    })
    .then(foodFinder => {
        res.json({
            message: 'ok',
            data: foodFinder,
      });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ err });
    });
};

foodFinderController.update = (req, res) => {
    FoodFinder.update(
        {###

        },
        req.params.id,
    )
    .then(foodFinder => {
        res.json({
            message: 'ok',
            data: foodFinder,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ err });
    });
};

foodFinderController.destroy = (req, res) => {
    FoodFinder.destroy(req.params.id)
    .then(foodFinder => {
        res.json({
            message: 'ok',
            data: foodFinder,
        });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({ err });
      });
};

module.exports = foodFinderController;  