const mongoose = require('mongoose');
const dotenv = require('dotenv');
const get_photo = require('../utils/db_seeder');
dotenv.config();

//const { MONGO_URI } = process.env;

module.exports = () => {
  // Connecting to the database
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });

  // mongoose.connection.once('open', () => {
  //   get_photo();
  // });
};
