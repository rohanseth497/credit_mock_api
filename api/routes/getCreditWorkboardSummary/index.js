const express = require('express');
const returnData = require('./index.json');

const router = express.Router();

router.post('/', (req, res) => {
  res.send(returnData);
});

module.exports = router;
