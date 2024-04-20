const express = require("express");
const path = require("node:path");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController.controller");
const tourRouter = require("./routes/tourRoutes.route");
const userRouter = require("./routes/userRoutes.route");
const reviewRouter = require("./routes/reviewRoutes.route");
const bookingRouter = require("./routes/bookingRoutes.route");
const viewRouter = require("./routes/viewRouter.route");
const jsx = require('express-engine-jsx');

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', jsx);

app.set("views", path.join(__dirname, "views"));

// 1) GLOBAL MIDDLEWARE
app.use('*', (req, res, next) => {
  res.locals.title = 'title';
  res.locals.append_head = null;
  res.locals.user = null;


  next()
});
// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Set Security HTTP Headers
app.use(helmet({ contentSecurityPolicy: false }));

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit request from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/api", limiter);

// Body parser, reading data from body into req.body
app.use(
  express.json({
    limit: "10kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent Parameter Pollution
// HTTP Parameter Pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies)

  next();
});

// 2) ROUTE HANDLERS

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// 3) ROUTES

app.use("/", viewRouter);
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/bookings", bookingRouter);

app.all("*", (req, res, next) => {
  res.locals.title="title"
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
