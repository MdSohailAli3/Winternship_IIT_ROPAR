const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        'email: greensfield@gmail.com',
        'phone: 9009002626'

    ]);
});

module.exports = router;