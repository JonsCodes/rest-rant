const express = require('express')
const router = express.Router()
const places = require("../models/places")
const comments = require("../models/comment")
const db = require('../models')

router.get('/', async (req, res, next) => {
  try {
    const places = await db.Place.find()
    res.render('places/index', { places })
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await db.Place.create(req.body)
    res.redirect('/places')
  } catch (err) {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (let field in err.errors) {
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
    } else {
      next(err)
    }
  }
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', async (req, res, next) => {
  try {
    const place = await db.Place.findById(req.params.id).populate('comments')
    res.render('places/show', { place })
  } catch (err) {
    next(err)
  }
})

router.post('/:id/comment', async (req, res, next) => {
  try {
    req.body.rant = req.body.rant ? true : false
    const place = await db.Place.findById(req.params.id)
    const comment = await db.Comment.create(req.body)
    place.comments.push(comment.id)
    await place.save()
    res.redirect(`/places/${req.params.id}`)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    await db.Place.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/places/${req.params.id}`)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await db.Place.findByIdAndDelete(req.params.id)
    res.redirect('/places')
  } catch (err) {
    next(err)
  }
})

router.get('/:id/edit', async (req, res, next) => {
  try {
    const place = await db.Place.findById(req.params.id)
    res.render('places/edit', { place })
  } catch (err) {
    next(err)
  }
})

router.delete('/:id/comment/:commentId', async (req, res, next) => {
  try {
    await db.Comment.findByIdAndDelete(req.params.commentId)
    res.redirect(`/places/${req.params.id}`)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).render('error404')
})

module.exports = router