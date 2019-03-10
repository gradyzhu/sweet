// express required.
const express = require("express");
const mongoose = require('mongoose');

// app is express
const app = express();
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const passport = require('passport');

// connects to monogoose database
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

//express listens for a request,
//listens for request on the route "/"
//second argument is a callback that handles request
//request object and response object.

app.get("/", (req, res) => res.send("Sweet Analytics"));
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.use(passport.initialize());
require('./config/passport')(passport);

