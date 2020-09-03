const postModel = require('../models/posts.js');

module.exports = {
    createPost: async(req, res) => {
        try {
            blogPost = {
                title: req.body.title,
                content: req.body.content,
                created: Date.now(),
                updated: Date.now(),
                blogPostOwnerID: req.body.userId
            };
            const newPost = await postModel.createPost(blogPost);
            res.json(newPost);
        } catch (error) {
            res.json(error);
        }
    },
    getAllPosts: async(req, res) => {
        try {
            const allPosts = await postModel.getAllPosts();
            res.json(allPosts);
        } catch (error) {
            res.json(error);
        }
    },
    updatePost: async(req, res) => {
        try {
            let blogPost = {
                title: req.body.title,
                content: req.body.content,
                updated: Date.now()
            };
            const updatedPost = await postModel.updatePost(blogPost, req.params.blogPostID);
            res.json(updatedPost);
        } catch (error) {
            res.json(error);
        }
    },
    deletePost: async(req, res) => {
        try {
            const deletedPost = await postModel.deletePost(req.params.blogPostID);
            res.json(deletedPost);
        } catch (error) {
            res.json(error);
        }
    },
    getPost: async(req, res) => {
        try {
            const blogPost = await postModel.getPost(req.params.blogPostID);
            res.json(blogPost);
        } catch (error) {
            res.json(error)
        }
    }
}