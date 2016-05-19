const path    = require('path')
const express = require('express')

const router = new express.Router()

// Check if the client is the editor of the livebin
router.use((req, res, next) => {
  res.locals.isEditor = (req.ip === '::1')
  next()
})

router.get('/', (req, res) => {
  res.render('index', {isEditor:res.locals.isEditor} )
})

module.exports = router;