const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("database.db");

db.run(
  `
    CREATE TABLE posts(
        [id] INTEGER PRIMARY KEY,
        [name] NVARCHAR(255),
        [content] NVARCHAR(255),
        [date] NVARCHAR(255)
    )
    `
);
