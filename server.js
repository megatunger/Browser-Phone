const express = require('express');
const app = express();

//setting middleware
app.use(express.static( 'Phone'));


const server = app.listen(3000);
