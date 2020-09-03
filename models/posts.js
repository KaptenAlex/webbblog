const {postsDatabase} = require('../database/DbEnviroment.js');

module.exports = {
    async createPost(blogPost) {
        await postsDatabase.insert(blogPost)
        .then(blogPost => {
            return blogPost;
        })
        .catch(error => {
            return error;
        })
    },
    async getAllPosts() {
        await postsDatabase.find({})
        .then(blogPosts => {
            return blogPosts;
        })
        .catch(error => {
            return error;
        })
    },
    async updatePost(blogPost, blogPostID) {
        await postsDatabase.update({_id: blogPostID}, {$set: blogPost})
        .then(blogPost => {
            return blogPost;
        })
        .catch(error => {
            return error;
        })
    },
    async deletePost(blogPostID) {
        await postsDatabase.remove({_id: blogPostID})
        .then(deletedPost => {
            return deletedPost;
        })
        .catch(error => {
            return error;
        })
    }
};