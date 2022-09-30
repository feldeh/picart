require('dotenv').config();
const express = require('express')
const app= express();
const cors= require('cors');

const db_connection = require("./database/database_auth");
const registerRoutes = require ('./routes/register');
const authRoutes = require('./routes/auth');


//database connection
db_connection();

//middelwares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/register', registerRoutes);
app.use('/api/auth', authRoutes);



const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listeninng on port ${port}`))