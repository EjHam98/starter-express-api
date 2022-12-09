const express = require("express");
var bodyParser = require('body-parser')
const path = require("path");

var app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.urlencoded({extended: true}))
// app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {
    if(req.body.nickname == null) {
        res.send("ERROR1");
        return;
    }
    let name = req.body.nickname;
    res.render("index", {"nickname": name});
});

app.post("/main", (req, res) => {
    if(req.body.nickname == null) {
        res.send("ERROR2");
        return;
    }
    let name = req.body.nickname;
    res.render("joincreate", {"nickname": name});
});

app.post("/create", (req, res) => {
    if(req.body.nickname == null) {
        res.send("ERROR3");
        return;
    }
    let name = req.body.nickname;
    res.render("create", {"nickname": name});
});

app.post("/join", (req, res) => {
    if(req.body.nickname == null) {
        res.send("ERROR4");
        return;
    }
    let name = req.body.nickname;
    res.render("join", {"nickname": name});
});

app.post("/rooms", (req, res) => {
    res.render("rooms");
});

const roomRouter = require("./routes/rooms");

app.use("/rooms", roomRouter);

app.listen(5000, () => {console.log("Server is up!")});












// const express = require("express");
// const path = require("path");
// app = express();
// // const mongo = require("mongoose");
// // mongo.connect("mongodb://localhost:5000/users", {useNewUrlParser: true});

// // const db = mongo.connection;
// // db.on("error", (error) => {
// //     console.log(error);
// // })
// // db.once("open", () => {
// //     console.log("Connected to Database!");
// // })

// app.set("view engine", "ejs");
// app.use("/public", express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({extended: true}))
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.render("index");
// });

// // const userRouter = require("./routes/users");

// // app.use("/users", logger, userRouter);

// // function logger(req, res, next) {
// //     console.log(req.originalUrl);
// //     next();
// // }

// app.listen(5000, () => {console.log("Server is up!")});