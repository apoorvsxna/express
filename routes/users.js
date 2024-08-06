const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User List');
});

router.get('/new', (req, res) => {
    res.send('User new form');
});

router.post('/', (req, res) => {
    res.send('Create user');
});

// order of endpoints matters. so '/new' route is defined before this one
router.get('/:id', (req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
});

// for cleaner routing when there can be multiple types of requests for the same 

module.exports = router;