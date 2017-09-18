const options = {
    query: (e) => {
        console.log(e.query)
    }
}

const app = require('pg-promise')(options)

function setDatabase() {
    if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp({
            database: 'foodFinder_dev',
            port: 5432,
            host: 'localhost',
        })
    } else {
        return pgp(process.env.DATABASE_URL);
    }
}

const db = setDatabase();

module.exports = db;