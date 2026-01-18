const router = require('express').Router();
const { auth } = require('../middleware/auth');
const { register, listUsers, approve } = require('../controllers/userController');

router.post('/register', register);
router.get('/', auth, listUsers);
router.patch('/:id/approve', auth, approve);

module.exports = router;
