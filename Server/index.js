const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require('cors');

const EventModel = require("./models/Event");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://thilina:thilina@cluster0.qvhfs.mongodb.net/eventDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post("/", async(req, res) => {

    const title = req.body.title;
    const location = req.body.location; 
    const timezone = req.body.timezone;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const start_time = req.body.start_time;
    const end_time = req.body.end_time;
    const description = req.body.description;
    

    const event = new EventModel({
        title: title,
        location: location, 
        timezone: timezone, 
        start_date: start_date,
        end_date: end_date,
        start_time: start_time,
        end_time: end_time,
        description: description,
    });

    try{
        await event.save();
        res.send("data inserted!");
    }catch(err){
        console.log(err);
    }
})


app.get("/events", async(req, res) => {

    EventModel.find({}, (err, result) => {
        if(err){
            res.send("error");
        }
        res.send(result);
    })
})

app.listen(3001, () => {
    console.log("The Server running on port 3001..");
});