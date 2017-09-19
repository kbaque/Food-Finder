const FoodFinder = require('../models/foodFinder');
const foodFinderController = {};

foodFinderController.index = (req, res) => {
    console.log(" food finding ")
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
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        area: req.body.area,
        postal_code: req.body.postal_code,
        country: req.body.country,
        phone: req.body.phone,
        price: req.body.price,
        image_url: req.body.image_url,
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
    FoodFinder.update({
         name: req.body.name,
         address: req.body.address,
         city: req.body.city,
         state: req.body.state,
         area: req.body.area,
         postal_code: req.body.postal_code,
         country: req.body.country,
         phone: req.body.phone,
         price: req.body.price,
         image_url: req.body.image_url,
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

foodFinderController.delete = (req, res) => {
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