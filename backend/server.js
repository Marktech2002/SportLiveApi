const express = require('express');
const colors = require('colors');
const app = express();
const PORT = process.env.PORT || 3000 ;
require('dotenv').config();
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddleware');

 connectDB(); 
//midddleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes 
app.use('/user', require("./routes/userRoute"));
app.use('/football', require("./routes/foootballRoute"));
app.use('/basketball', require("./routes/basketballRoute"));
app.use(errorHandler);

// running port 
app.listen(PORT , ()=> {
     console.log(`Server is up and running on port ${PORT}`.america) ;
})