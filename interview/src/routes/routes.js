const express = require('express')
const mongoose = require('mongoose')
// interviewee schema
const userSchema = require('../models/user')
// interviewer schema
const interviewerSchema = require('../models/interviewer')

// connecting to mongoose
mongoose.connect('mongodb://interviewerDbs')

// router for interviewer
const router = express.Router();

router.get('/Meetings')

module.exports = router;