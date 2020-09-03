const express = require('express');
const router = new express.Router();
const postController = require('../controllers/posts.js');

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.patch('/post/:blogPostID', postController.updatePost);
router.delete('/post/:blogPostID', postController.deletePost);

module.exports = router;