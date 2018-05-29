const express = require("express");
const session = require("express-session");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4567;
const app = express();

app.use(
  session({
    secret: "some random string we should change for our application",
    resave: false,
    saveUninitialized: true
  })
);

app.use(bodyParser.urlencoded({
  extended: false
}));


app.set("view engine", "ejs");

app.get("/", (request, response) => {  
  const favoriteColor = request.session.favoriteColor;
  response.render("home/index", { 
    backgroundColor: favoriteColor,
    fontFamily: request.session.fontFamily
  
  });
});

app.post("/set-favorite-color", (request, response) => {
  console.log(request.body);
  
  const favoriteColor = request.session.favoriteColor;
  request.session.favoriteColor = request.body["favorite-color"];
  request.session.fontFamily = request.body["font-family-dropdown"];
  response.redirect(302, '/');
  });

app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
