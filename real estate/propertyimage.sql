CREATE TABLE property_images (
    image_id SERIAL PRIMARY KEY,
    property_id INT REFERENCES properties(property_id),
    image_url TEXT
);