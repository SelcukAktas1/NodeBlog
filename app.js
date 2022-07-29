const express = require("express");
const app = express();
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/NodeBlog");

app.use(express.static("public"));

const main = require("./routes/main");
const posts = require("./routes/posts");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/", main);
app.use("/posts", posts);

app.engine("handlebars", exphbs.engine()); //{    layoutsDir: __dirname + "/views/layouts",}
app.set("view engine", "handlebars");

app.listen(PORT, () =>
    console.log(`Server running at http://${HOSTNAME}:${PORT}`)
);
