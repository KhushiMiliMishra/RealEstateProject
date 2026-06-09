CREATE TABLE viewing_requests (
    request_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    property_id INT REFERENCES properties(property_id),
    viewing_date DATE,
    viewing_time TIME,
    status VARCHAR(20)
);