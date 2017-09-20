require('isomorphic-fetch');
require('dotenv').config();
const axios = require ('axios');

function getPlaces (req, res) {
    let places = req.params.zip;
    console.log(places+ " api data received");
    axios.get(`http://opentable.herokuapp.com/api/restaurants?zip=${places}`)
    .then( search=> {
      console.log("data rec");
      console.log(res.data);
        res.json({
            data: search.data
        });   
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err});
    })

}



module.exports = {getPlaces};