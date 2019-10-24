const express = require('express');

const CarRouter = require('../cars/cars-router');


const server = express();


server.use(express.json());


server.use('/api/cars', CarRouter);

// Server test
server.get('/', (req,res)=>{
    res.status(200).json({ message: "In there like swim wear"});
});

module.exports = server;