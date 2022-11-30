const express = require("express");

const PORT = 9050;

// APP
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World !!!!!dddddddddd!!~~~~~~~!!!!!!!");
});

app.listen(PORT);

console.log("Server is Running");
