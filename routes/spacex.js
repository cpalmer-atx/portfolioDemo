const express = require('express');
const router = express.Router();
const { roadster, satellites } = require('../controllers/spacex/spacex');

router
  .route('/roadster')
  .get(roadster);

router
  .route('/starlink')
  .get(satellites)

module.exports = router;