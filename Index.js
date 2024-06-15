require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');

const userRoutes = require('./Server/Routes/User');
const orderRoutes = require('./Server/Routes/Order');
const bookRoutes = require('./Server/Routes/Book');



mongoose.connect(process.env.dbURL)
  .then(console.log("DB Connected!!"))
  .catch(error => console.log(error));

app.use(express.json());

app.use(express.static(__dirname + "/public"));
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'/public','User.html')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
    next();
  });

  app.use('/user',userRoutes);
  app.use('/order',orderRoutes);
  app.use('/book',bookRoutes);



  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server started!! Listening on port ${PORT}!!! :)`));
