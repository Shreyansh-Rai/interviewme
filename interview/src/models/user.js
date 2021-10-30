const mongoose = require('mongoose');

// schema for userDbs
let userSchema = new mongoose.Schema({
    // name gender age
    _id : {type: String},
    name: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    
    // school
    higher_secondary_school: {type: String, required: true},
    
    // undergrad
    undergrad_degree: {type: String},
    undergrad_college: {type: String},
    
    // postgrad
    postgrad_degree: {type: String},
    postgrad_college: {type: String},

    // work experience
    work_experience: {type: String}
})

// export userSchema
module.exports = mongoose.model('User', userSchema);