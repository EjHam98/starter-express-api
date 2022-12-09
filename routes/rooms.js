const express = require("express");
const router = express.Router()

var max_rooms = 10;
var rooms = []

function random_room() {
    var room = {}
    room.id = rooms.length + 1
    room.name = "Room "+room.id
    room.game = "Some game"
    room.playercount = Math.floor(Math.random()*12)
    room.secured = (Math.random() >= 0.5? "Private":"Public")
    return room
}

router.get("/", (req, res) => {
    res.send("NO");
});


router.get("/room", (req, res) => {
    res.render("rooms/room");
});

router.post("/", (req, res) => {
    for(var i=0;i<25;i++) {
        rooms.push(random_room)
    }
    res.render("rooms", {"room_arr": rooms});
    // var isValid = true;
    // var name = req.body.firstName;
    // isValid = (name.length >= 4);
    // if(isValid) {
    //     rooms.push({"name": name});
    //     res.redirect(`/rooms/${rooms.length - 1}`)
    // }
    // else {
    //     console.log("ERROR");
    //     console.log(`room FAILED, name: ${name}`);
    //     res.render("rooms/new", {defaultName: name});
    // }
});

router.route("/:id")
.get((req, res) => {
    console.log(req.room);
    res.send(`room Get number ${req.params.id}`);
})
.put((req, res) => {
    res.send(`room Get number ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`room Get number ${req.params.id}`);
});

// const rooms = [{"name": "Ej"}, {"name": "Bk"}, {"name": "Oc"}];

router.param("id", (req, res, next, id) => {
    req.room = rooms[id];
    next();
});
// router.get("/:id", (req, res) => {
//     res.send(`room Get number ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//     res.send(`room Get number ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//     res.send(`room Get number ${req.params.id}`);
// });

module.exports = router