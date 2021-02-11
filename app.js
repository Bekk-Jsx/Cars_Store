const express = require("express");
const connectDB = require("./config/db");

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const userRouter = require('./Router/userRoutes');

require("dotenv").config()



const app = express();
connectDB();


//Limit Data Body
app.use(
    express.json({
        limit: "10kb"
    })
);

// Routes  

app.use('/api/v1/users', userRouter);






// error to no exist routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


// Error midleware 
app.use(globalErrorHandler);

module.exports = app;