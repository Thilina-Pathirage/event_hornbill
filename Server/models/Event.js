const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    timezone: {
        type: String,
        required: true,
    },
    start_date: {
        type: String,
        required: true,
    },
    end_date: {
        type: String,
        required: true,
    },
    start_time: {
        type: String,
        required: true,
    },
    end_time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Event = mongoose.model("event", EventSchema)
module.exports = Event;
