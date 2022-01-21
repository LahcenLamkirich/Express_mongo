const express = require('express');
const router = express.Router();

var moviesReduit = require('../public/movies_reduit.json')



router.get("/movies", (req, res)=>{
    console.log(moviesReduit)
    res.send(moviesReduit)
})

module.exports = router;