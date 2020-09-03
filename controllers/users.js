const userModel = require('../models/users.js');

module.exports = {
   createUser: async(req, res) => {
       try {
            let user = {
                username: req.body.username,
                password: req.body.password
            };
            let createUser = await userModel.createUser(user);
            res.json(createUser);           
       } catch (error) {
           res.json(error);
       }
   },
   getAllUsers: async(req, res) => {
        try {
          let users = await userModel.getAllUsers();
          res.json(users);
        } catch (error) {
            res.json(error);
        }
   },
   getUser: async(req, res) => {
        try {
          let user = await userModel.getUser(req.params.userID);
          res.json(user);
        } catch (error) {
            res.json(error);
        }
    },
    updateUser: async(req, res) => {
        try {
          let user = {
              username: req.body.username,
              password: req.body.password
          };
          let updatedUser = await userModel.updateUser(user, req.params.userID);
          res.json(updatedUser);
        } catch (error) {
            res.json(error);
        }
    },
    deleteUser: async(req, res) => {
        try {
          let deletedUser = await userModel.deleteUser(req.params.userID);
          res.json(deletedUser);
        } catch (error) {
            res.json(error);
        }
    }
}