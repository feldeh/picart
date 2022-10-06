require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const db_connection = require('./database/database_auth');
const registerRoutes = require('./routes/registerRoutes');
const authRoutes = require('./routes/authRoutes');

//database connection
db_connection();

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

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
