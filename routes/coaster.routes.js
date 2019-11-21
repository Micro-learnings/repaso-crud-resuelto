const express = require('express')
const router = express.Router()

const Park = require('../models/park.model')
const Coaster = require('../models/coaster.model')


router.get('/new', (req, res) => {
  Park.find()
    .then(allTheParks => res.render('coasters/new-coaster', { parks: allTheParks }))
    .catch(err => console.log(err))
})


router.get('/', (req, res) => {
  Coaster.find()
    .populate('park')
    .then(allCoasters => res.render('coasters/coasters-index', { coasters: allCoasters }))
    .catch(err => console.log(err))
})


router.post('/new', (req, res) => {

  const { name, description, inversions, length, park } = req.body

  Coaster.create({ name, description, inversions, length, park })
    .then(newCoaster => res.redirect('/coasters'))
    .catch(err => console.log(err))
})

router.get('/delete', (req, res) => {
  Coaster.findByIdAndDelete(req.query.id)
    .then(() => res.redirect('/coasters'))
    .catch(err => console.log(err))
})

router.get('/edit', (req, res) => {

  const coasterPromise = Coaster.findById(req.query.id).populate('park')
  const parksPromise = Park.find()

  // Promise.all() recibe un array de promesas y retorna un array con la respuesta de cada promesa, una vez se han cumplido en su totalidad
  Promise.all([coasterPromise, parksPromise])
    .then(results => {
      res.render('coasters/edit-coaster', { coaster: results[0], parks: results[1] })
    })
    .catch(err => console.log(err))
})


router.post('/edit', (req, res) => {

  const { name, description, inversions, length, park } = req.body

  Coaster.findByIdAndUpdate(req.query.id, { name, description, inversions, length, park })
    .then(() => res.redirect(`/coasters/${req.query.id}`))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  Coaster.findById(req.params.id)
    .populate('park')
    .then(theCoaster => res.render('coasters/coaster-details', { coaster: theCoaster }))
    .catch(err => console.log(err))
})


module.exports = router