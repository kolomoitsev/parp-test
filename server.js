const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');

const testApi = require('./api/test.api')

require('dotenv').config()

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', testApi);

const PORT = process.env.PORT || 3001

server = app.listen(PORT, () => console.log(`server running on port ${PORT}`))
