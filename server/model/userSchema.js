const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const userSchema = Schema({
    name: {
        type: String,
        require: true,
    },
    aadharId: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    mobile: {
        type: Number,
        require: true,
    },
    percentage: {
        type: Number,
        require: true,
    },
    interested: {
        type: Array,
        require: true,
    },
    graduation: {
        type: String,
        require: true,
    },
    collegeID: {
        type: String,
        require: true,
    },
    dob: {
        type: Date,
        require: true,
    },
    enrolYear: {
        type: Number,
        require: true,
    },
    highSchool: {
        type: Number,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    fatherName: {
        type: String,
        require: true,
    },
    motherName: {
        type: String,
        require: true,
    },
    pincode: {
        type: Number,
        require: true,
    },
    backlogs: {
        type: Number,
        require: true,
    },
    languages: {
        type: String,
        require: true,
    },
    hobbies: {
        type: String,
        require: true,
    },
    secSchool: {
        type: Number,
        require: true,
    },
    activities: {
        type: String,
        require: true,
    },
    stream: {
        type: String,
        require: true,
    },
    skills: {
        type: String,
        require: true,
    },
    internships: {
        type: String,
        require: true,
    },
});
module.exports.User = mongoose.model("user", userSchema, "user");
// module.exports.userModel = mongoose.model("users", userSchema, "users");
