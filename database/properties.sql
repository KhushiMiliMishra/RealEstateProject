CREATE TABLE properties (
    property_id SERIAL PRIMARY KEY,
    agent_id INT REFERENCES agents(agent_id),
    title VARCHAR(200),
    description TEXT,
    property_type VARCHAR(50),
    transaction_type VARCHAR(20),
    price NUMERIC(12,2),
    bhk INT,
    area_sqft INT,
    address TEXT,
    city VARCHAR(50),
    status VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);