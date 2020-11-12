//Create blogpost
const express = require("express");
const router = express.Router();

//require firebase
const firebase = require("firebase");
//Initialize firebase
const db = firebase.firestore();
//reference a specific collection
const blogposts = db.collection("blogposts");

const form = `
<form>
    <input info="text" name="title" placeholder="Title of the Post" />
    <input info="text" name="text" placeholder="Text of the Post" />
    <input info="text" name="author" placeholder="Author of the Post" />
    <button type="submit">Submit Post</button>
</form>


`;

router.get("/", (req, res) => res.send(form));

module.exports = router;
