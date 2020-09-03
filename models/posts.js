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
        let getPost = await this.getPost(blogPostID);
        if (getPost.error) {
            return getPost;
        } else {
            let updatedBlogPost = await postsDatabase.update({_id: blogPostID}, {$set: blogPost})
            .then(blogPost => {
                return blogPost;
            })
            .catch(error => {
                return error;
            });
            return updatedBlogPost;   
        }
    },
    async deletePost(blogPostID) {
        let getPost = await this.getPost(blogPostID);
        if (getPost.error) {
            return getPost;
        } else {
            let deletedBlogPost = await postsDatabase.remove({_id: blogPostID})
            .then(deletedPost => {
                return deletedPost;
            })
            .catch(error => {
                return error;
            });
            return deletedBlogPost;
        }
    },
    async getPost(blogPostID) {
        let findBlogPost = await postsDatabase.findOne({_id: blogPostID})
        .then(foundPost => {
            if(foundPost === null) {
                return ({error: `Post did not exist with id: ${blogPostID}`});
            }
            return foundPost;
        })
        .catch(error => {
            return error;
        });
        return findBlogPost;
    }
};