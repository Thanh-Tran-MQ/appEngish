const express = require('express');
const userController = require('../controllers/user')
const router = express.Router();

router.route('/')
.get(userController.index)
.post(userController.newUsers)
.put()
.delete()



module.exports = router