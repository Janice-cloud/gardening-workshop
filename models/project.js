const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const projectSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project; 