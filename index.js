const express = require("express");
const { signup, login } = require("./Controllers/User_Controllers");
const connectDb = require("./Db_Connct/DbConnect");
const router = require("./Router/Router");

const app = express();
const PORT = 8000;
app.use(express.json());
app.use('/',router)
connectDb().then(
   
    app.listen(PORT,()=>{
        console.log(`Listening On ${PORT}`)})
)
