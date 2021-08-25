// entry.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Entry Blueprint //
const entrySchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    location: String,
    entry: {
        type: String,
        // required: true
    },
    
    prompt: {
        type: String,
        default: "String"
    },
    
    image: String,
    mood: String,
    positive: String,
    negative: String,
})

module.exports = mongoose.model('Entry', entrySchema)