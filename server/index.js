const express = require("express");

const app = express();

app.get("/", (req, res) => res.send({ message: "Hi there!" }));

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
