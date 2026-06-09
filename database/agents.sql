CREATE TABLE agents (
    agent_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    company_name VARCHAR(100),
    status VARCHAR(20) DEFAULT 'Active'
);