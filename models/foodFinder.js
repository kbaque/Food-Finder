const db = require('../db/config');
const FoodFinder = {};

FoodFinder.findAll = () => {
    return db.query('SELECT * FROM foodFinder');
}

FoodFinder.findById = (id) => {
    return db.oneOrNone(`
      SELECT * FROM foodFinder
      WHERE id = $1
    `, [id]);
}

FoodFinder.create = (foodFinder, userid) => {
    return db.one(`
     INSERT INTO foodFinder
     (name, address, city, state, area, postal_code, country, phone, price, image_url, user_id) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
     RETURNING *
    `, [foodFinder.name, foodFinder.address, foodFinder.city, foodFinder.state, foodFinder.area, foodFinder.postal_code, foodFinder.country, foodFinder.phone, foodFinder.price, foodFinder.image_url, userid]);
  }

FoodFinder.update = (foodFinder, id) => {
    return db.one(`
     UPDATE foodFinder SET
     name = $1,
     address = $2,
     city = $3,
     state = $4,
     area = $5,
     postal_code = $6, 
     country = $7,
     phone = $8,
     price = $9,
     image_url = $10 
     WHERE id = $11
     RETURNING *
    `, [foodFinder.name, foodFinder.address, foodFinder.city, foodFinder.state, foodFinder.area, foodFinder.postal_code, foodFinder.country, foodFinder.phone, foodFinder.price, foodFinder.image_url, id]);
}

FoodFinder.destroy = (id) => {
    return db.none(`
     DELETE FROM foodFinder
     WHERE id = $1
    `, [id]);
}

module.exports = FoodFinder;