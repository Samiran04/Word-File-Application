const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    uploads: {
        type: String
    }
}, {timestamps: true});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;