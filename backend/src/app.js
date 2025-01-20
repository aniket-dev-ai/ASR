const express = require('express');
const indexRouter = require("./routes/index.routes");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use("/get",indexRouter);


module.exports = app;

