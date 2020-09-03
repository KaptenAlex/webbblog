const {commentsDatabase} = require('../database/DbEnviroment.js');
const postsModel = require('./posts.js');

module.exports = {
    async createComment(comment) {
        let findPost = await postsModel.getPost(comment.postID);
        if (findPost.error) {
            return findPost;
        } else {
            let createComment = await commentsDatabase.insert(comment)
            .then(comment => {
                return comment;
            })
            .catch(error => {
                return error;
            });
            return createComment;   
        }
    },
    async getAllComments() {
        let comments = await commentsDatabase.find({})
        .then(comments => {
            return comments;
        })
        .catch(error => {
            return error;
        });
        return comments;
    },
    async updateComment(comment, commentID) {
        let updatedComment = await commentsDatabase.update({_id: commentID}, {$set: comment})
        .then(comment => {
            return comment;
        })
        .catch(error => {
            return error;
        });
        return updatedComment;
    },
    async deleteComment(commentID) {
        let removedComment = await commentsDatabase.remove({_id: commentID})
        .then(deletedComment => {
            return deletedComment;
        })
        .catch(error => {
            return error;
        });
        return removedComment;
    }
};