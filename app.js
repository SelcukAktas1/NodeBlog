const express = require("express");
const app = express();
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
const path = require("path");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/NodeBlog');


app.use(express.static("public"));

const main = require("./routes/main");
const { default: mongoose } = require("mongoose");
app.use('/', main);


app.engine(
    "handlebars",
    exphbs.engine()
); //{    layoutsDir: __dirname + "/views/layouts",}
app.set("view engine", "handlebars");

app.listen(PORT, () =>
    console.log(`Server running at http://${HOSTNAME}:${PORT}`)
);
