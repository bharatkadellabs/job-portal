const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const collegeSchema = Schema({
    cName: {
        type: String,

    },
    cEmail: {
        type: String,
    },
    password: {
        type: String,

    },
    cNumber: {
        type: String,
    },
    icit: {
        type: Boolean,

    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    address: {
        type: String,
    },
})

module.exports.CollegeSchema = mongoose.model('collegeData', collegeSchema)