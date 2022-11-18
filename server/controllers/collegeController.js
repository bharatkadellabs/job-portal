const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
const { CollegeSchema } = require('../model/collegeSchema')
const signInUser = async (req, res) => {
    const { email, password } = req.body;
    // .....
    const collegeLoginData = await CollegeSchema.findOne({ cEmail: email }).then(async (collegeLoginData) => {
        // var token = "vjnrvnerzovlzsk";
        console.log("userLogin data =====", collegeLoginData);
        if (collegeLoginData) {
            if (collegeLoginData.password === password) {
                return res.status(201).json({ message: "login sucess", collegeLoginData });
            } else {
                return res.json({
                    message: "Please Login Again! With Correct Email & Password..",
                });
            }
        }
        return res.json({ message: "User Not Register" });
    });
    if (!collegeLoginData) {
        return res.status(400).json({ message: "Credentials does not match" });
    }
}
const addCollege = async (req, res) => {
    const { cName, cEmail, cNumber, password, address, city, state, icit } = req.body;
    console.log("addcollge", req.body)
    const emailExsting = await CollegeSchema.findOne({ cEmail: cEmail });
    console.log("!@!@!!@!", emailExsting)
    if (!emailExsting) {
        try {
            let collegeData;
            collegeData = new CollegeSchema({
                cName, cEmail, cNumber, password, address, city, state, icit
            })
            await collegeData.save();
            if (!collegeData) {
                return res.status(406).json({ message: "Unable To Add Collega Data" })
            }
            return res.status(201).json({ message: "Succesfully Registration.." })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: err })
        }
    }
    if (emailExsting) {
        return res.status(406).json({ message: "College email is already exists." })
    }


}
const getCollegeData = async (req, res) => {
    const data = await CollegeSchema.find()
    return res.status(201).json({ message: 'Succesfull College Data', data })
    if (!data) {
        return res.status(404).json({ message: 'Somthing went Wrong' })
    }
}
exports.signInUser = signInUser;
exports.addCollege = addCollege;
exports.getCollegeData = getCollegeData;