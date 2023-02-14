const express = require('express');

const userRouter = require('./routes/user.routes');
const AuthRouter = require('./routes/auth.routes');
const sportRouter = require('./routes/sport.routes');
const followRouter = require('./routes/follow.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/sports', sportRouter);
app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/follows', followRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exist in our server`,
  });
});

module.exports = app;
