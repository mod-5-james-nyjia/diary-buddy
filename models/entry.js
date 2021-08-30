// entry.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Entry Blueprint //
const entrySchema = new Schema({
    date: {
        type: Date,
        // required: true
    },
    location: String,
    entry: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        default: ""
    },
    text: {
        type: String,
        default: ""
    },
    image: String,
    mood: String,
    positive: String,
    negative: String,
    isEntry: {
        type: Boolean,
        default: true
    },
    // isMood: {
    //     type: Boolean,
    //     default: true
    // }
})

module.exports = mongoose.model('Entry', entrySchema)