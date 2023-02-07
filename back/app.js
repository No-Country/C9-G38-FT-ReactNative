const express = require('express');
// const UserRouter = require('./routes/user.routes');
// const CategoryRouter = require('./routes/categories.routes');
const AuthRouter = require('./routes/auth.routes');

const app = express();

express.json();
app.use(express.json());

// app.use('/api/v1/users', UserRouter);
// app.use('/api/v1/categories', CategoryRouter);
app.use('/api/v1/auth', AuthRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exist in our server`,
  });
});

module.exports = app;
