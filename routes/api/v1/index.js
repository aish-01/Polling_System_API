const express = require('express');
const router = express.Router();

//questions routes
router.use('/questions',require('./questions'));

// options routes
router.use('/options',require('./options'));

module.exports = router;