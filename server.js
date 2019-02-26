const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const {Subscriber} = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

const PORT = process.env.PORT || 3001;

app.get('/', async (req, res) => {
    const allUser = await Subscriber.findAll();
    res.json( allUser );
})

app.listen(PORT, () => {
    console.log('The server is listening on port: ', PORT);
});