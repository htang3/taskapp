const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
 
}, {
    timestamps: true,
})

module.exports = mongoose.model("Task", taskSchema);