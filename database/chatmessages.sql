CREATE TABLE chat_messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    property_id INT REFERENCES properties(property_id),
    message TEXT,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);