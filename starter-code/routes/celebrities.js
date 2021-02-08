const express = require('express'); 
const router  = express.Router();

const celebrity = require("../models/celebrity") // celebrity en grise why??

router.get('/celebrities', (req, res, next) => {
    celebrity.find ()
    .then(celebs => {
        res.render ('celebrities/index', {celebs})
    })
    .catch(err => next(`error while showing celebrities ${err}`))
});

router.post('/new', (req, res, next) => {
    celebrity.create(req.body)
    .then(()=>{
      res.redirect("/celebrities")
    })
    .catch(()=>res.render("celebrities/new", {message:"Error: try again"}))
  })
  router.get('/new', (req, res, next) => {
    res.render('celebrities/new')
  })
  router.get('/:id', (req, res, next) => {
    celebrity.findById(req.params.id)
    .then(celeb=>{
      res.render('celebrities/show',celeb)
    })
    .catch(e=>next(e))
  })


module.exports = router;