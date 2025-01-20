const express = require('express');
const indexRouter = require("./routes/index.routes");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/get",indexRouter);


module.exports = app;

