const commentModel = require('../models/comments.js');

module.exports = {
    createComment: async(req, res) => {
        try {
            comment = {
                comment: req.body.comment,
                created: Date.now(),
                updated: Date.now(),
                commentOwnerID: req.body.userId,
                postID: req.params.postID
            };
            const newComment = await commentModel.createComment(comment);
            res.json(newComment);
        } catch (error) {
            res.json(error);
        }
    },
    getAllComments: async(req, res) => {
        try {
            const allComments = await commentModel.getAllComments();
            res.json(allComments);
        } catch (error) {
            res.json(error);
        }
    },
    updateComment: async(req, res) => {
        try {
            let comment = {
                comment: req.body.comment,
                updated: Date.now()
            };
            const updatedComment = await commentModel.updateComment(comment, req.params.commentID);
            res.json(updatedComment);
        } catch (error) {
            res.json(error);
        }
    },
    deleteComment: async(req, res) => {
        try {
            const deletedComment = await commentModel.deleteComment(req.params.commentID);
            res.json(deletedComment);
        } catch (error) {
            res.json(error);
        }
    },
    getComment: async(req, res) => {
        try {
            const findComment = await commentModel.getComment(req.params.commentID);
            res.json(findComment);
        } catch (error) {
            res.json(error);
        }
    }
}