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
        let findComment = await this.getComment(commentID);
        if (findComment.error) {
            return findComment;
        } else {
            let updatedComment = await commentsDatabase.update({_id: commentID}, {$set: comment})
            .then(comment => {
                return comment;
            })
            .catch(error => {
                return error;
            });   
            return updatedComment;
        }
    },
    async deleteComment(commentID) {
        let findComment = await this.getComment(commentID);
        if (findComment.error) {
            return findComment;
        } else {
            let removedComment = await commentsDatabase.remove({_id: commentID})
            .then(deletedComment => {
                return deletedComment;
            })
            .catch(error => {
                return error;
            });
            return removedComment;
        }
    },
    async getComment(commentID) {
        let comment = await commentsDatabase.findOne({_id: commentID})
        .then(comment => {
            if (comment === null) {
                return ({error: `Comment did not exist with id: ${commentID}`});
            } else {
                return comment;
            }
        })
        .catch(error => {
            return error;
        });
        return comment;
    }
};