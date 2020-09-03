const {commentsDatabase} = require('../database/DbEnviroment.js');

module.exports = {
    async createComment(comment) {
        let newComment = await commentsDatabase.insert(comment)
        .then(comment => {
            return comment;
        })
        .catch(error => {
            return error;
        });
        return newComment;
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