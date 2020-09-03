require('dotenv').config();
const Datastore = require('nedb-promises');

let postsDatabase /*, usersDatabase */;
switch (process.env.ENVIROMENT) {
    case 'development':
        postsDatabase = new Datastore({ filename: './database/posts.db', autoload: true });
        //usersDatabase = new nedb({ filename: './database/users.db', autoload: true });
        break;
    case 'test':
        //postsDatabase = new nedb({ filename: './database/posts.db', autoload: true });
        //usersDatabase = new nedb({ filename: './database/usersTest.db', autoload: true });
        //postsDatabase.remove({}, {multi: true});
        //usersDatabase.remove({}, {multi: true});
        break;
}

module.exports = {
    postsDatabase
    //usersDatabase
};