const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    uploads: {
        type: String
    },
    name: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;