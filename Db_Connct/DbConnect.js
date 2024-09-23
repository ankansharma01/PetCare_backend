const mongoose = require('mongoose');
const connectDb = async()=>{
  await mongoose.connect('mongodb://localhost:27017/Check_db')
           .then(()=>{console.log("connected");
           })
           .catch((err)=>{console.log("error");
           })

          
}
module.exports = connectDb;



