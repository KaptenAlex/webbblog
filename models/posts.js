const {postsDatabase} = require('../database/DbEnviroment.js');

module.exports = {
    async createPost(blogPost) {
        let newBlogPost = await postsDatabase.insert(blogPost)
        .then(blogPost => {
            return blogPost;
        })
        .catch(error => {
            return error;
        });
        return newBlogPost;
    },
    async getAllPosts() {
        let blogPosts = await postsDatabase.find({})
        .then(blogPosts => {
            return blogPosts;
        })
        .catch(error => {
            return error;
        });
        return blogPosts;
    },
    async updatePost(blogPost, blogPostID) {
        let updatedBlogPost = await postsDatabase.update({_id: blogPostID}, {$set: blogPost})
        .then(blogPost => {
            return blogPost;
        })
        .catch(error => {
            return error;
        });
        return updatedBlogPost;
    },
    async deletePost(blogPostID) {
        let deletedBlogPost = await postsDatabase.remove({_id: blogPostID})
        .then(deletedPost => {
            return deletedPost;
        })
        .catch(error => {
            return error;
        });
        return deletedBlogPost;
    }
};