require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const indexRouter = require('./router/index')
const app = express()
const url = process.env.DB_URL
mongoose.connect(url).then((res) => console.log("connect Data base"));
const PORT = process.env.PORT || 8081;
const path = require('path')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//To allow cross-origin requests
app.use(cors());
app.use("/", indexRouter);


app.listen(PORT, () => console.log(`running on ports ${PORT}`))
