const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

const indexRouter = require("./routes/index");
const { truncateSync } = require("fs");
const PORT = process.env.PORT || 3002;

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", require("./components/users/usersRoute"));
app.use("/getAllDataSubmitted", require("./components/admin/adminRoute"));
app.use(
  "/registration",
  require("./components/registration/retristrationRoute")
);

mongoose.connect(process.env.DB_CONNECTION, (error) => {
  if (error) console.log(error);
  else console.log("Connected to MongoDB");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

module.exports = app;
