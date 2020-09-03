require('dotenv').config();
const Datastore = require('nedb-promises');

let postsDatabase, commentsDatabase, usersDatabase;
switch (process.env.ENVIROMENT) {
    case 'development':
        postsDatabase = new Datastore({ filename: './database/posts.db', autoload: true });
        commentsDatabase = new Datastore({ filename: './database/comments.db', autoload: true });
        usersDatabase = new Datastore({ filename: './database/users.db', autoload: true });
        break;
    case 'test':
        //postsDatabase = new Datastore({ filename: './database/posts.db', autoload: true });
        //commentsDatabase = new Datastore({ filename: './database/usersTest.db', autoload: true });
        //postsDatabase.remove({}, {multi: true});
        //commentsDatabase.remove({}, {multi: true});
        break;
}

module.exports = {
    postsDatabase,
    commentsDatabase,
    usersDatabase
};