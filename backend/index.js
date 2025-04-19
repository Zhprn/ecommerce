const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors')
require ('dotenv').config();
const path = require('path');

//routes


//midlewares
const app = express()
app.use(bodyParser.json());
app.use(cors())