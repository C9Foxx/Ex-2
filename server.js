const express = require("express");

const app = express();
var PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

app.get("/",function(req,res) {
    res.send("You are on the homepage");
});

app.post("/post",function(req,res) {
    const {user, pass} = req.body;
    res.send("Welcome" + " " + user);
});

app.post("/delete",function(req,res) {
    const {taskId} = req.body;
    res.json({delete: true});
});

app.put("/put/:ID",function(req,res) {
    let id = req.params.ID;
    res.send("Task " + id + " has been updated");
});

app.listen(PORT,function(){
    console.log("Server running on port: ", PORT);
})