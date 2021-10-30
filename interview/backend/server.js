const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
// express app
cors = require('cors')
const intervieweeModel = require("./models/interviewee.js")

const interviewer = require("./models/interviewer")
const app = express();
app.use(cors());
app.set('view engine', 'ejs')

const dbClass = require('./dbClass')

const obj = new dbClass()

console.log('sun raha hai na tu~')
// mongoose.connect("mongodb://localhost/userDbs",{
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });
intervieweeModel.insertMany([
  {
    
    name: 'Sarthak Harne',
    gender: 'Male',
    age: 19,
    higher_secondary_school: 'Essar International School',
    undergrad_degree: 'BTech',
    undergrad_college: 'International Institute of Information Technology Bangalore',
    postgrad_degree: 'MTech',
    postgrad_college: 'International Institute of Information Technology Bangalore',
    uID: 1,
    past_experience1: 'Senior Software Engineer at Flexnit',
    past_experience2: 'Senior Software Engineer at Ippul'
  },
  {
   
    name: 'Shreyansh Rai',
    gender: 'Male',
    age: 19,
    higher_secondary_school: 'Smt. Sulochanadevi Singhania School',
    undergrad_degree: 'BTech',
    undergrad_college: 'International Institute of Information Technology Bangalore',
    postgrad_degree: 'MTech',
    postgrad_college: 'International Institute of Information Technology Bangalore',
 
    uID: 2,
    past_experience1: 'Junior Software Engineer at Macrosoft',
    past_experience2: 'Senior Software Engineer at Ippul',
    past_experience3: 'Product Manager at Lolcomm'
  },
  {

    name: 'Vatsal Dhama',
    gender: 'Male',
    age: 19,
    higher_secondary_school: 'Rawat Public School',
    undergrad_degree: 'BTech',
    undergrad_college: 'International Institute of Information Technology Bangalore',
    postgrad_degree: 'MTech',
    postgrad_college: 'International Institute of Information Technology Bangalore',
 
    uID: 3,
    past_experience1: 'Senior Software Engineer at Flexnit',
    past_experience2: 'Senior Software Engineer at Ippul'
  },
  {
    name: 'Kaushik Mishra',
    gender: 'Male',
    age: 19,
    higher_secondary_school: 'Delhi Public School',
    undergrad_degree: 'BTech',
    undergrad_college: 'International Institute of Information Technology Bangalore',
    postgrad_degree: 'MTech',
    postgrad_college: 'International Institute of Information Technology Bangalore',
    
    uID: 4,
    past_experience1: 'Junior Software Engineer at Macrosoft',
    past_experience2: 'Project lead at Silverman Sachs'
  },
  {

    name: 'Khushi Vyas',
    gender: 'Female',
    age: 25,
    higher_secondary_school: 'Fountainhead School',
    undergrad_degree: 'BCom',
    undergrad_college: 'Narsee Monjee Institute of Management Studies',
    postgrad_degree: 'MCom',
    postgrad_college: 'Narsee Monjee Institute of Management Studies',
    
    uID: 5,
    past_experience1: 'Senior Software Engineer at Flexnit',
    past_experience2: 'Project lead at Silverman Sachs',
    past_experience3: 'Product Manager at Lolcomm'
  },
  {
   
    name: 'Saket Gurjar',
    gender: 'Homosexual',
    age: 19,
    higher_secondary_school: 'VJ Public School Kolhapur',
    undergrad_degree: 'BTech',
    undergrad_college: 'International Institute of Information Technology Bangalore',
    postgrad_degree: 'MTech',
    postgrad_college: 'International Institute of Information Technology Bangalore',
    
    uID: 6,
    past_experience1: 'Junior Software Engineer at Macrosoft',
    past_experience2: 'Project lead at Silverman Sachs'
  },
  {
    
    name: 'Pratima Prasad',
    gender: 'Homosexual',
    age: 20,
    higher_secondary_school: 'DK Public School Mumbai',
    undergrad_degree: 'BTech',
    undergrad_college: 'National Institute of Technology Rourkela',
    postgrad_degree: null,
    postgrad_college: null,
    
    uID: 7,
    past_experience1: 'Senior Software Engineer at Flexnit',
    past_experience2: 'Project lead at Silverman Sachs'
  }
])
app.use(express.json())

app.get('/Meetings', async (req, res) => {
    res.json({ message: 'connection success' })
})
app.post('/Meetings/Accept/:id', async (req, res) => {
  // console.log(req.body)

  // find the user
  let user = await intervieweeModel.findOne({ uID: req.body.uID })

  console.log(user)

  res.json(user)
})
app.post('/Meetings/Get/:id', async (req,res) =>
{
    console.log(req.body)
    // find the user
    let user = await intervieweeModel.findOne({ uID: req.body.uID })

    console.log(user)
    
    // create the object to return
    let retObj = {
        higher_secondary_school: user.higher_secondary_school,
        undergrad_degree: user.undergrad_degree,
        undergrad_college: user.undergrad_college,
        postgrad_degree: user.postgrad_degree,
        postgrad_college: user.postgrad_college,
        past_experience1: user.past_experience1,
        past_experience2: user.past_experience2,
        past_experience3: user.past_experience3
    }

    console.log(retObj)
    res.json(retObj)
});

app.listen(4000)