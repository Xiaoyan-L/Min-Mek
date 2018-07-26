const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const { connStr, port } = require("../config");
const logger = require("./utils/logger");

const unitRouter = require("./routers/Units");
const mechRouter = require("./routers/Mechs");
const pilotRouter = require("./routers/Pilots");

const app = express();


app.use(morgan('combined', { stream: logger }));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

mongoose.connect(connStr, { useNewUrlParser: true });

app.use("/units", unitRouter);
app.use("/mechs", mechRouter);
app.use("/pilots", pilotRouter);

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
})

