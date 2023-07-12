const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/db");
const authRouter = require("./routers/authRouter.js");
const postRouter = require("./routers/postRouter.js");

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", authRouter);
app.use("/", postRouter);

const PORT = 5000;

db();

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
