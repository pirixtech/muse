const express = require('express');
const router = express.Router();

// Set Route for Tasks
router.get('/tasks', function (req, res, next) {
    res.send('this is our tasks API');
});

module.exports = router;