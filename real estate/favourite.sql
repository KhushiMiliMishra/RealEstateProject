CREATE TABLE favorites (
    favorite_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    property_id INT REFERENCES properties(property_id)
);