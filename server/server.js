
// Import packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require("dotenv").config(); // Access the dotenv file

// Set the port number
const PORT = process.env.PORT || 8070; // Define the port number

// Set the middlewares
app.use(cors());
app.use(bodyParser.json()); // Use JSON format

// Set the MongoDB URL
const URI = process.env.MONGODB_URL;


// Create a connection with MongoDB
mongoose.connect(URI, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify :false
});



// hadagaththa connection eka open kranwa
const connection = mongoose.connection;
 connection.once("open",()=>{
    console.log("Mongodb CConnection Success!");
 })


// router folder eke thiyan fil eka access krala use krann kiyanwa 
const studentRouter = require("./routes/student.js");
app.use("/student",studentRouter );  // student kiyan url eken awoth studentRouter ta assign kral thiyan file eka execute wenna 




// Define the port and start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});