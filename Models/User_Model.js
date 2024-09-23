const mongoose = require('mongoose');
const User_Schema  = mongoose.Schema({
   name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    trim: true
  },
  password:{
    type:String,
    required:true,
  },
  pets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet' // Refers to the Pet model
  }],
  appointments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment' // Refers to the Appointment model
  }]
}, {
  timestamps: true
});

    


const user_Model = mongoose.model("user_Model",User_Schema);
module.exports = user_Model;