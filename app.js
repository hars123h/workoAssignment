const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/dbConfig');
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});