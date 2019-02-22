const express = require('express');

const router = express.Router();

// add handlebar render
router.get('/', (req, res) => {
  res.render('index', {
    title: 'this is a handlebar example. !!!'
  });
});

module.exports = router;
