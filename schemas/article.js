const mongoose = require('mongoose');
const { Schema } = mongoose; // set Schema as object

// set articleSchema as Article
const articleSchema = new Schema({
    _id: {
        type: Number,
        required: true, // using custom id
    },
    title:{
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default : 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{_id:false}); // _id use set false.

module.exports = mongoose.model('Article', articleSchema);

