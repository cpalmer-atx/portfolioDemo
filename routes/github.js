const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/github/github');

router
  .route('/:username')
  .get(getProfile);

module.exports = router;