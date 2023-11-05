require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./src/connection/sequelizeConnection');
const route = require('./src/routes/router');

const app = express();

app.use(express.json());
app.use(cors());

app.use(route);

sequelize.sync();

app.listen(process.env.PORT, () => {
    console.log(`On port ${process.env.PORT}`);
});
