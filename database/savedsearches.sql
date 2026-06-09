CREATE TABLE saved_searches (
    search_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    locality VARCHAR(100),
    property_type VARCHAR(50),
    budget_min NUMERIC,
    budget_max NUMERIC
);