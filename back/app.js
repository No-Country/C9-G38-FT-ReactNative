const express = require('express');

const userRouter = require('./routes/user.routes');
const categoryRouter = require('./routes/categories.routes');
const subcategoryRouter = require('./routes/subcategories.routes');
const AuthRouter = require('./routes/auth.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/subcategories', subcategoryRouter);
app.use('/api/v1/auth', AuthRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exist in our server`,
  });
});

module.exports = app;
