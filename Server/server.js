const express = require('express');
const cors =require('cors');
const sequelize = require('./db/db');  
const bodyParser = require('body-parser');
const app= express();
const router=require('./routes/router');

sequelize.authenticate()
    .then(() => console.log('Connection to PostgreSQL has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: 'http://example.com',
    Credential:true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));
app.use('/',router)

const port=5000;
const server=app.listen(port,() =>{
    console.log(`Server started on port ${port}`)
})
