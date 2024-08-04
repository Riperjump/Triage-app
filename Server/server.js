const express = require('express');
const cors = require('cors');
const sequelize = require('./db/db');
const patientsRoute = require('./routes/router');

const app = express();

sequelize.authenticate()
    .then(() => console.log('Connection to PostgreSQL has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

app.use(cors());
app.use(express.json());

app.use('/api/patients', patientsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
