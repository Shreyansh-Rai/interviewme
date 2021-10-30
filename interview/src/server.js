const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
// express app
cors = require('cors')
const User = require("./models/user.js")
const app = express();
app.use(cors());
app.set('view engine', 'ejs')
mongoose.connect("mongodb://localhost/userDbs",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
User.insertMany([
    {
      //_id: ObjectId("617b8f3a9cb516928f77d3cb"),
      name: 'Sarthak Harne',
      gender: 'Male',
      age: 19,
      higher_secondary_school: 'Essar International School',
      undergrad_degree: 'BTech',
      undergrad_college: 'International Institute of Information Technology Bangalore',
      postgrad_degree: 'MTech',
      postgrad_college: 'International Institute of Information Technology Bangalore'
    },
    {
      //_id: ObjectId("617b90bc9cb516928f77d3cc"),
      name: 'Shreyansh Rai',
      gender: 'Male',
      age: 18,
      higher_secondary_school: 'Smt. Sulochanadevi Singhania School',
      undergrad_degree: 'BTech',
      undergrad_college: 'International Institute of Information Technology Bangalore',
      postgrad_degree: 'MTech',
      postgrad_college: 'International Institute of Information Technology Bangalore'
    },
    {
      //_id: ObjectId("617b90bc9cb516928f77d3cd"),
      name: 'Vatsal Dhama',
      gender: 'Male',
      age: 19,
      higher_secondary_school: 'Rawat Public School',
      undergrad_degree: 'BTech',
      undergrad_college: 'International Institute of Information Technology Bangalore',
      postgrad_degree: 'MTech',
      postgrad_college: 'International Institute of Information Technology Bangalore'
    },
    {
     // _id: ObjectId("617b910a9cb516928f77d3ce"),
      name: 'Kaushik Mishra',
      gender: 'Male',
      age: 19,
      higher_secondary_school: 'Delhi Public School',
      undergrad_degree: 'BTech',
      undergrad_college: 'International Institute of Information Technology Bangalore',
      postgrad_degree: 'MTech',
      postgrad_college: 'International Institute of Information Technology Bangalore'
    },
    {
      //_id: ObjectId("617b94499cb516928f77d3cf"),
      name: 'Khushi Vyas',
      gender: 'Female',
      age: 25,
      higher_secondary_school: 'Fountainhead School',
      undergrad_degree: 'BCom',
      undergrad_college: 'Narsee Monjee Institute of Management Studies',
      postgrad_degree: 'MCom',
      postgrad_college: 'Narsee Monjee Institute of Management Studies',
      work_experience: '2 years work experience with Tata Steel'
    },
    {
      //_id: ObjectId("617b94499cb516928f77d3d0"),
      name: 'Saket Gurjar',
      gender: 'Homosexual',
      age: 19,
      higher_secondary_school: 'VJ Public School Kolhapur',
      undergrad_degree: 'BTech',
      undergrad_college: 'International Institute of Information Technology Bangalore',
      postgrad_degree: 'MTech',
      postgrad_college: 'International Institute of Information Technology Bangalore'
    },
    {
      //_id: ObjectId("617b94499cb516928f77d3d1"),
      name: 'Pratima Prasad',
      gender: 'Homosexual',
      age: 20,
      higher_secondary_school: 'DK Public School Mumbai',
      undergrad_degree: 'BTech',
      undergrad_college: 'National Institute of Technology Rourkela'
    }
  ])
app.get('/', (req, res) => {
    console.log("this works");
})
app.get('/Meetings', async (req,res) =>
{
    const u = await User.findOne({name : "Vatsal Dhama"});
    //console.log(u)
    res.json(u);
    
});
app.use(express.json())
app.post('/Meetings/Get/:id',(req,res) =>
{
    // const u = await User.findOne({name : "Vatsal Dhama"});
    // //console.log(u)
    // res.json(u);
    console.log(req.body);
    res.json({message :"madarchod bhosdemon"})
});
// const userRouter = require('./routes/users')

// app.use('/users', userRouter)
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error: '));
db.once('open', function(){
    console.log("sunraha hai na tu~");
});
app.listen(4000)