require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const pictures = require('./model/pictures.model');

const dbConnection = require('./database/dbConnection');
const registerRoutes = require('./routes/registerRoutes');
const authRoutes = require('./routes/authRoutes');
const loginRouter = require('./routes/login.route');
const fetcher = require('./utils/db_seeder');
const savedRouter = require('./routes/savedRoutes');
const { default: mongoose } = require('mongoose');

//database connection
dbConnection();
db = dbConnection();
mongoose.connection.once('open', async () => {
  let data = await fetcher();
  try {
    pictures.insertMany(data);
  } catch (error) {
    console.error('this is the error  ' + error.message);
  }
});

//middelwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

//routes
app.use('/api/register', registerRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/login', loginRouter);
app.use('/api/saved', savedRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
