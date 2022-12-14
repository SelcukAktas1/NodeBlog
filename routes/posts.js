const express = require("express");
const router = express.Router();
const Posts = require("../models/Post");
const path = require("path");

router.get("/new", (req, res) => {
    console.log(req.url);
    res.render("site/addPost");
});

router.get("/:id", (req, res) => {
    Posts.findById(req.params.id)
        .lean()
        .then((post) => {
            res.render("site/post", { post: post });
        });
});

router.post("/test", (req, res) => {
    let post_image = req.files.post_image;
    post_image.mv(
        path.resolve(__dirname, "../public/img/postimages", post_image.name)
    );
    Posts.create({
        ...req.body,
        post_image: `/img/postimages/${post_image.name}`,
    });
    res.redirect("/");
});

module.exports = router;
