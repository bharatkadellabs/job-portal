const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
const userSchema = Schema({
    name: {
        type: String,
        require: true
    },
    aadharId: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    percentage: {
        type: Number,
    },
    interested: {
        type: Array,
    },
    graduation: {
        type: String,
    },
    collegeID: {
        type: String,
    },
    age: {
        type: Number,
    }, enrolYear: {
        type: Number,
    }, highSchool: {
        type: Number,
    },
    address: {
        type: String,
    }, fatherName: {
        type: String,
    }, motherName: {
        type: String,
    }, pincode: {
        type: Number,
    }, backlogs: {
        type: String,
    }, languages: {
        type: String,
    }
});
module.exports.User = mongoose.model('user', userSchema, 'user');
// module.exports.userModel = mongoose.model("users", userSchema, "users");
