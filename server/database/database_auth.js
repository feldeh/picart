
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const { MONGO_URI } = process.env;


module.exports = () => {
   // Connecting to the database
   mongoose
     .connect(MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,

     })
     .then(() => {
       console.log("Successfully connected to database");
     })
     .catch((error) => {
       console.log("database connection failed. exiting now...");
       console.error(error);
       process.exit(1);
     });
 };

// module.exports= () => {
//    const connectionParams = {
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
//    };

//    try {
//     mongoose.connect(process.env.MONGO_URI, connectionParams);
//     console.log("Connected to database successfully");
//    }catch(error){
//     console.log(error);
//     console.log("Couldn't connect to Database");
//    }


// }