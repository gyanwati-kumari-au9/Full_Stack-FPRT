const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const {mongodb} = require('./config/keys')
// const mongodb = require('mongodb');
// const {MongoClient} = require('mongodb');
// const uri = "mongodb+srv://admin:AdminUser123@cluster0.i5gbr.mongodb.net/todo?retryWrites=true&w=majority";

const port = process.env.PORT || 5000;
// DB Connection logic import
// const { initialize } = require('./dbconnection');
//make object of express so that we can use methods
let app = express();
// let dbobj;
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(
  mongodb.dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, res) {
      try {
          console.log('Connected to Database');
      } catch (err) {
          throw err;
      }
  });

// initialize('todo', (db)=>{
//     dbobj = db;
// },(err)=>{
//     console.log("Error while connecting to db", err)
// })



const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
};


// Routers
const userRouter = require("./Routes/userRoutes");
const todosRouter = require("./Routes/todosRoutes");

// Set up routes
app.use("/users", userRouter);
app.use("/todos", todosRouter);




app.listen(port,(err) => {
    if(err) throw err;
    console.log(`App is running on port ${port}`)
})