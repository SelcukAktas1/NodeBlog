const express = require("express");
const router = express.Router();
const Posts = require("../models/post");

router.get("/new", (req, res) => {
    console.log(req.url);
    res.render("site/addPost");
});

router.post("/test", (req, res) => {
    Posts.create(req.body);
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;
