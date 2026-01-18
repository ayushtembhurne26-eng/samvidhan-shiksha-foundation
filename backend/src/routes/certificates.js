const router = require('express').Router();
const { generateForUser } = require('../controllers/certificateController');

// Public endpoint: allow users to download their own certificate link
router.get('/:userId/generate', generateForUser);

module.exports = router;
