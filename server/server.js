require('dotenv').config();
const express = require('express')
const app= express();
const cors= require('cors');
const db_connection = require("./database/database_auth")

//database connection
db_connection();

//middelwares
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listeninng on port ${port}`))