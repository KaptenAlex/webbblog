const express = require('express');
const router = new express.Router();
const userController = require('../controllers/users.js');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/user/:userID', userController.getUser);
router.patch('/user/:userID', userController.updateUser);
router.delete('/user/:userID', userController.deleteUser);

module.exports = router;