const express = require("express");
const app = express();
const port = process.env.PORT  || 4000;

// Configuration Values for Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDqJEG2yFIL66u-Mmreu79rgFWPeGboiIg",
    authDomain: "exercise-four-bae2d.firebaseapp.com",
    databaseURL: "https://exercise-four-bae2d.firebaseio.com",
    projectId: "exercise-four-bae2d",
    storageBucket: "exercise-four-bae2d.appspot.com",
    messagingSenderId: "333411851117",
    appId: "1:333411851117:web:90de2c3f3fe29d4e5d5864"
};

//Firebase
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);


//Routes Import
const indexRoute = require('./routes/index.js');
const postRoute = require('./routes/post.js');
const createRoute = require('./routes/createBlogpost.js');
//Routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () => console.log(`Exercise Four is running at localhost:${port}`)
);

