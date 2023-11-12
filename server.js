const express = require("express");
const server = express();
PORT = 3000;

server.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

server.listen(PORT, () => {
  console.log("Server listen on port 3000");
});
