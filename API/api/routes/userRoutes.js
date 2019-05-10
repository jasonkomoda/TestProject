var express = require('express');
var router = express.Router();
var user = require('../controllers/userController');

router.get('/', user.all_users);
router.post('/', user.create_user);
router.get('/:userId', user.get_user);
router.put('/:userId', user.update_user);
router.delete('/:userId', user.delete_user);

module.exports = router;