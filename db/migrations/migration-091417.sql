\connect food_finder_dev

CREATE TABLE if NOT EXISTS restaurant (
    id SERIAL PRIMARY KEY,
    name VARCHAR(225),
    address VARCHAR(225),
    city VARCHAR(225),
    state VARCHAR(225),
    area VARCHAR(225),
    postal_code VARCHAR(225),
    country VARCHAR(225),
    phone VARCHAR(225),
    price VARCHAR(225),
    image_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(225) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    firstname VARCHAR(225),
    lastname VARCHAR(225)
);

ALTER TABLE restaurant 
ADD COLUMN user_id INTEGER REFERENCES users(id);
