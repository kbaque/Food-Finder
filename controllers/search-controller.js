const MySearch = require('../models/search');

const searchController = {
    getAllSearch: (req, res) => {
        res.json(res.locals.data);
    },
    addMySearch: (req, res) => {
        MySearch.addSearch(JSON.stringify(req.body.search),req.body.user_id)
        .then(res => {
        }).catch(err => {
            console.log(err);
        })
    },
    getMySearch: (req, res) => {
        MySearch.getSearch(req.params.id)
        .then( data => {
            res.json(data);
        }).catch(err => console.log(err));
    },
    deleteMySearch: (req, res) => {
        MySearch.deleteSearch(req.params.id)
        .then(data => {
            res.json(data);
        }).catch(err => console.log(err));
    }
}

module.exports = searchController;