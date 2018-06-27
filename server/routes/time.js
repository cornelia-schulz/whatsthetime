const express = require('express')
const db = require('../db')
const router = express.Router()
const request = require('superagent')

router.get('/', (req, res) => {
  request.get("https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=New+York")
  .set("X-Mashape-Key", "TjYvKbm3NBmshWuOWq6VFnH6oec6p1Hw9EJjsnT2RX7yajv2zz")
  .set("Accept", "application/json")
  .then(resp => {
    console.log(resp.body.Results)
    //const {name, tzs, lat, lon, c} = resp.body.Results[0]
    res.json(resp.body.Results)
  })
  .catch(err => {
    res.json({error: err.message})
  })
})

module.exports = router