const express = require('express');
const postRouter = require('./routes/posts.js');
const commentRouter = require('./routes/comments.js');
const usersRouter = require('./routes/users.js');

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});