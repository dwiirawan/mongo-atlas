const router = require('express').Router();
let loadModel = require('../models/test.model');

router.route('/').get((req, res) => {
    loadModel.find()
        .then(dataTes => res.json(dataTes))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;