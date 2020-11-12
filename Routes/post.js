//Show one blogpost
const express = require("express");
const router = express.Router();

//require firebase
const firebase = require("firebase");
//Initialize firebase
const db = firebase.firestore();
//reference a specific collection
const blogposts = db.collection("blogposts");
// If no ID provided, send this
router.get('/', (req, res) => res.send("No Id Provided"));

router.get("/:id", (req, res) => {
    const queryId = req.params.id;
    blogposts
        .doc(queryId)
        .get()
        .then(function(doc) {
            if (doc.exists) {
                const data = doc.data();
                console.log(data);
                return res.send(doc.data);
            } else {
                return res.send("No document exists");
            }
        })
        .catch(function(error){
            return res.send(error);
        });
}); 


module.exports = router;

