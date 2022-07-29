const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.url);
    res.render("site/index");
});

router.get("/about", (req, res) => {
    console.log(req.url);
    res.render("site/about");
});

router.get("/index", (req, res) => {
    console.log(req.url);
    res.render("site/index");
});

router.get("/blog", (req, res) => {
    console.log(req.url);
    res.render("site/blog");
});

router.get("/contact", (req, res) => {
    console.log(req.url);
    res.render("site/contact");
});

router.get("/login", (req, res) => {
    console.log(req.url);
    res.render("site/login");
});

router.get("/register", (req, res) => {
    console.log(req.url);
    res.render("site/register");
});

router.get("/posts/new", (req, res) => {
    console.log(req.url);
    res.render("site/addPost");
});


module.exports = router