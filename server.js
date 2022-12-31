const express = require("express");

const PORT = 9050;

// APP
const app = express();

app.get("/", (req, res) => {
  res.send("메테오~ 메테오 ~ 거대 메테오야 ~ ");
});

app.listen(PORT);

console.log("Server is Running");
