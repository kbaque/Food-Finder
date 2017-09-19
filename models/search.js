const db = require('../db/config');

const MySearch = {
    addSearch: (search, id) => {
        return db.one(`
        INSERT INTO search(user_id, data)
        VALUES($1, $2)
        RETURNING *`, [id,search])
    },
    getMySearch: (id) => {
        return db.query(`
        SELECT * from search where user_id=$1`,[id]);
    },
    deleteSearch: (id) => {
        return db.one(`
        DELETE from search where search_id = $1
        RETURNING *`, [id]);
    }
}


module.exports = MySearch;