const express = require('express')
const router = express.Router()

const Park = require('../models/park.model')


router.get('/new', (req, res) => res.render('parks/new-park'))
router.post('/new', (req, res) => {
  const { name, description } = req.body
  Park.create({ name, description, active: true })
    .then(newPark => console.log(newPark))
    .catch(err => console.log(err))
})

module.exports = router
