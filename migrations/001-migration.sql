-- Up
CREATE TABLE User(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
);

CREATE TABLE Message(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
);

INSERT into user(username, password) VALUES ("admin", "admin")

-- Down
DROP TABLE User;

DROP TABLE Message;
