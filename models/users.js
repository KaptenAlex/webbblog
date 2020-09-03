const {usersDatabase} = require('../database/DbEnviroment.js');
const bcryptjs = require('bcryptjs');

module.exports = {
    async createUser(user) {
        let checkDuplicateUsers = await this.checkIfUsernameAlreadyExists(user.username);

        if (checkDuplicateUsers.message) {
            user.password = bcryptjs.hashSync(user.password, 10);
            let newUser = await usersDatabase.insert(user)
            .then(user => {
                return user;
            })
            .catch(error => {
                return error;
            });
            return newUser;
            
        } else {
            return checkDuplicateUsers;
        }
    },
    async getAllUsers() {
        let users = await usersDatabase.find({})
        .then(users => {
            return users;
        })
        .catch(error => {
            return error;
        });
        return users;
    },
    async getUser(userID) {
        let user = await usersDatabase.findOne({_id: userID})
        .then(user => {
            if (user === null) {
                return ({error: `User did not exist with id: ${userID}`});
            }
            return user;
        })
        .catch(error => {
            return error;
        });
        return user;
    },
    async checkIfUsernameAlreadyExists(username) {
        let user = await usersDatabase.findOne({username: username})
        .then(user => {
            if (user === null) {
                return ({message: `User does not exist with username: ${username}`});
            }
            return user;
        })
        .catch(error => {
            return error;
        });
        return user;
    },
    async updateUser(user, userID) {
        let getUser = await this.getUser(userID);

        if (getUser.error) {
            return getUser;
        } else {
            let comparePasswords = bcryptjs.compareSync(user.password, getUser.password);
            console.log(comparePasswords);
            if (comparePasswords) {
                let updatedUser = await usersDatabase.update({_id: userID}, {$set: {username: user.username} })
                .then(user => {
                    return user;
                })
                .catch(error => {
                    return error;
                });
                return updatedUser;  
            } else {
                user.password = bcryptjs.hashSync(user.password, 10);
                let updatedUser = await usersDatabase.update({_id: userID}, {$set: user})
                .then(user => {
                    return user;
                })
                .catch(error => {
                    return error;
                });
                return updatedUser;  
            }
        }
    },
    async deleteUser(userID) {
        let getUser = await this.getUser(userID);
        if (getUser.error) {
            return getUser;
        } else {
            let deletedUser = await usersDatabase.remove({_id: userID})
            .then(user => {
                return user;
            })
            .catch(error => {
                return error;
            });
            return deletedUser;
        }
    }
}