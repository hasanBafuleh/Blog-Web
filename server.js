const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("database.db");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/posts", (req, res) => {
  db.all(`SELECT * FROM posts`, {}, (error, rows) => res.send(rows));
});

app.post("/posts", (req, res) => {
  db.run(
    `
  
    INSERT INTO posts
    (
      name,
      content,
      date
    )
    VALUES
    (
        '${req.body.name}',
        '${req.body.content}',
        '${req.body.date}'
    )
  `,
    () => {
      res.send("Done");
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
