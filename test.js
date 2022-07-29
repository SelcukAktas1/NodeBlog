const mongoose = require("mongoose");
const { post } = require("./routes/main");
const Post = require("./models/post");

mongoose.connect("mongodb://localhost:27017/NodeBlog");
/* 
Post.create(
    {
        title: "iKİNCİ blog balik asdsad",
        contect: "Post icerik2 asdsa",
    },
    (error, post) => {
        console.log(error, post);
    }
); */

Post.find({ title: "iKİNCİ blog balik asdsad" }, (error, post) => {
    console.log(error, post);
});

//Post.findById('62e2f1749204d59814e3b8bf', (error,post) => {console.log(error,post)});

/* Post.findByIdAndUpdate(
    "62e2f1749204d59814e3b8bf",
    { Title: "Benim 1.postum update edildi" },
    (error, post) => {
        console.log(error, post);
    }
); */
