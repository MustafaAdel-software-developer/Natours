const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// 1)MIDDLEWARES
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('hello from middleware');
  next();
});

//2)Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//3) START SERVER
app.listen(port, () => {
  console.log(`application running on port ${port}`);
});
