const express = require('express');
const router = express.Router();
const bitcoin = require('../bitcoin');

// Call API only every 10 seconds
setInterval(() => {

router.get('/', (req, res) => {

  // Call bitcoin.get() with its new callback format
  bitcoin.get((err, response) => {
      let data = '';

      if(err){
        data = 'ERROR';
      } else {
        data = response;
      }
        res.render('index', {number: data})
    });
  });
}, 10000)


module.exports = router;
