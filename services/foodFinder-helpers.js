require('isomorphic-fetch');
require('dotenv').config();


//retrieving data
function getPlaces (req, res, next) {
    console.log("api data received");
    let places = req.params.id;

    fetch(`http://opentable.herokuapp.com/api/restaurants?zip=${place}`)
        .then(fetchRes => fetchRes.json())
        .then(jsonRes => {
            res.locals.place = jsonRes.restaurants;
            res.locals.name = places;
            return next();
        }).catch(err => {
            console.log(err);
            return next();
        })
    }


module.exports = {getPlaces};