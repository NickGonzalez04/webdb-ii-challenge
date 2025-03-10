const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');


const db = knex(knexConfig.development);


const router = express.Router();

router.post('/', (req,res) => {
    const CarData = req.body;
    db('cars').insert(CarData)
  .then(ids => {
    db('cars').where({ id: ids[0] })
    .then(newCarEntry => {
      res.status(201).json(newCarEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
})

router.get('/', (req,res) => {
  db('cars')
  .first()
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to retrieve Cars'});
    });
});




module.exports = router;