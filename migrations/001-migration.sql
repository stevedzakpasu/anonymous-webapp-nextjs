-- Up

CREATE TABLE Message(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
);

INSERT INTO Message (message) VALUES ("Hello World");

-- Down
DROP TABLE Message;
