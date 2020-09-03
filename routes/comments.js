const express = require('express');
const router = new express.Router();
const commentController = require('../controllers/comments.js');

router.post('/', commentController.createComment);
router.get('/', commentController.getAllComments);
router.patch('/comment/:commentID', commentController.updateComment);
router.delete('/comment/:commentID', commentController.deleteComment);

module.exports = router;