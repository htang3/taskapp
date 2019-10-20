const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
 
}, {
    timestamps: true,
})

module.exports = mongoose.model("User", userSchema);