const express = require("express");

const PORT = process.env.PORT || 4567;

const app = express();

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("home/index", { backgroundColor: "#F4FFFC" });
});

app.post("/set-favorite-color", (request, response) => {});

app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
